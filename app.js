/* =====================================================================
   MILE HIGH SMOKE SHOP — APP LOGIC  (Bilingual EN / ES)
   Age gate · catalog · cart · delivery routing · rewards · motion · i18n
   (Front-end prototype — cart, checkout, signup are mock/demo only.)
   ===================================================================== */

const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const money = (n) => "$" + n.toFixed(2);

const state = { category: "all", search: "", cart: [], mode: "deliver" };

/* Bilingual ticker phrases */
const TICKER = {
  en: ["Same-day local delivery within 5 miles", "Order online — we ship nationwide on eligible items", "Free local delivery over $50", "Join the Mile High Club — earn points on every order", "Text to order: (407) 286-1740"],
  es: ["Entrega local el mismo día dentro de 5 millas", "Ordena en línea — enviamos a todo el país en productos elegibles", "Entrega local GRATIS en pedidos de más de $50", "Únete al Mile High Club — gana puntos en cada pedido", "Escribe para ordenar: (407) 286-1740"]
};

/* ---------------------------------------------------------------------
   AGE GATE
   --------------------------------------------------------------------- */
(function ageGate() {
  const gate = $("#age-gate");
  if (sessionStorage.getItem("mh_age_ok") === "1") gate.classList.add("hidden");
  $("#age-yes").addEventListener("click", () => { sessionStorage.setItem("mh_age_ok", "1"); gate.classList.add("hidden"); });
  $("#age-no").addEventListener("click", () => { $(".age-actions").style.display = "none"; $("#age-deny").style.display = "block"; });
  // language buttons inside the age gate
  $$(".al-btn").forEach(b => b.addEventListener("click", () => switchLang(b.dataset.setlang)));
})();

/* ---------------------------------------------------------------------
   CATEGORY SIDEBAR
   --------------------------------------------------------------------- */
function catName(c) { return currentLang() === "es" && c.name_es ? c.name_es : c.name; }
function catEmoji(slug) { const c = CATEGORIES.find(c => c.slug === slug); return c ? c.icon : "🛍️"; }
function prodDesc(p) { return currentLang() === "es" && p.desc_es ? p.desc_es : p.desc; }

function renderCategories() {
  const list = $("#cat-list");
  const all = [{ slug: "all", icon: "🛍️", _all: true }, ...CATEGORIES];
  list.innerHTML = all.map(c => `
    <button class="cat-btn ${c.slug === state.category ? "active" : ""}" data-cat="${c.slug}">${c._all ? t("shop.all") : catName(c)}</button>`).join("");
  $$(".cat-btn").forEach(btn => btn.addEventListener("click", () => {
    state.category = btn.dataset.cat; renderCategories(); renderProducts();
  }));
}

/* ---------------------------------------------------------------------
   PRODUCT GRID
   --------------------------------------------------------------------- */
function filteredProducts() {
  const q = state.search.trim().toLowerCase();
  return PRODUCTS.filter(p => {
    const catOk = state.category === "all" || p.category === state.category;
    const hay = (p.name + " " + (p.brand || "") + " " + p.desc + " " + (p.desc_es || "")).toLowerCase();
    return catOk && (!q || hay.includes(q));
  });
}
function badgeHTML(tags = []) {
  const map = { "New": "new", "Best Seller": "best", "Sale": "sale" };
  const lbl = { "New": "badge.new", "Best Seller": "badge.best", "Sale": "badge.sale" };
  return tags.filter(x => map[x]).map(x => `<span class="badge ${map[x]}">${t(lbl[x])}</span>`).join("");
}
function stockHTML(stock) { return `<span class="stock-dot ${stock}">${t("stock." + stock)}</span>`; }

function renderProducts() {
  const items = filteredProducts();
  const grid = $("#product-grid");
  const key = items.length === 1 ? "shop.results_one" : "shop.results_other";
  $("#result-count").textContent = t(key, { n: items.length });
  if (!items.length) { grid.innerHTML = `<div class="empty" style="grid-column:1/-1;">${t("shop.empty")}</div>`; return; }
  grid.innerHTML = items.map(p => `
    <div class="card">
      <div class="card-img">
        ${p.img ? `<img src="assets/${p.img}" alt="${p.name}" style="height:100%;width:100%;object-fit:cover;">` : iconSVG("cloud", "ph-ico")}
        <div class="card-badges">${badgeHTML(p.tags)}</div>
        ${stockHTML(p.stock)}
      </div>
      <div class="card-body">
        ${p.brand ? `<div class="card-brand">${p.brand}</div>` : ""}
        <div class="card-name">${p.name}</div>
        <div class="card-desc">${prodDesc(p)}</div>
        <div class="ship-tag ${p.ship ? "yes" : "no"}">${iconSVG(p.ship ? "package" : "pin")} ${t(p.ship ? "ship.yes" : "ship.no")}</div>
        <div class="card-foot">
          <div class="card-price">${money(p.price)}</div>
          <button class="add-btn" data-add="${p.id}" ${p.stock === "out" ? "disabled" : ""}>${p.stock === "out" ? t("btn.sold") : t("btn.add")}</button>
        </div>
      </div>
    </div>`).join("");
  $$("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(+btn.dataset.add)));
}

/* ---------------------------------------------------------------------
   CART
   --------------------------------------------------------------------- */
function addToCart(id) {
  const line = state.cart.find(l => l.id === id);
  if (line) line.qty++; else state.cart.push({ id, qty: 1 });
  updateCart();
  showToast(t("toast.added", { name: PRODUCTS.find(p => p.id === id).name }));
}
function changeQty(id, d) {
  const line = state.cart.find(l => l.id === id); if (!line) return;
  line.qty += d; if (line.qty <= 0) state.cart = state.cart.filter(l => l.id !== id);
  updateCart();
}
function removeLine(id) { state.cart = state.cart.filter(l => l.id !== id); updateCart(); }
function cartSubtotal() { return state.cart.reduce((s, l) => { const p = PRODUCTS.find(p => p.id === l.id); return s + (p ? p.price * l.qty : 0); }, 0); }
function deliveryFee(sub) {
  if (state.mode === "pickup" || sub === 0) return 0;
  if (state.mode === "ship") return sub >= 75 ? 0 : 6;   // flat shipping, free over $75
  return sub >= 50 ? 0 : 5;                               // local delivery, free over $50
}
function nonShippableInCart() {
  return state.cart.filter(l => { const p = PRODUCTS.find(p => p.id === l.id); return p && p.ship === false; }).length;
}

function renderCart() {
  const box = $("#cart-items");
  if (!state.cart.length) {
    box.innerHTML = `<div class="cart-empty">${iconSVG("bag", "empty-ico")}<br/><br/>${t("cart.empty")}</div>`;
    $("#drawer-foot").style.display = "none"; return;
  }
  $("#drawer-foot").style.display = "block";
  box.innerHTML = state.cart.map(l => {
    const p = PRODUCTS.find(p => p.id === l.id);
    return `<div class="cart-item">
      <div class="thumb">${iconSVG("cloud", "ph-ico")}</div>
      <div class="meta">
        <div class="nm">${p.name}</div>
        <div class="pr">${money(p.price)}</div>
        <div class="qty"><button data-dec="${p.id}">−</button><span>${l.qty}</span><button data-inc="${p.id}">+</button></div>
      </div>
      <button class="rm" data-rm="${p.id}">${t("cart.remove")}</button>
    </div>`;
  }).join("");
  $$("[data-inc]").forEach(b => b.addEventListener("click", () => changeQty(+b.dataset.inc, 1)));
  $$("[data-dec]").forEach(b => b.addEventListener("click", () => changeQty(+b.dataset.dec, -1)));
  $$("[data-rm]").forEach(b => b.addEventListener("click", () => removeLine(+b.dataset.rm)));

  const sub = cartSubtotal(), fee = deliveryFee(sub);
  $("#sub").textContent = money(sub);
  const feeLabelKey = state.mode === "pickup" ? "cart.pickuprow" : state.mode === "ship" ? "cart.shiprow" : "cart.delivery";
  $("#fee-label").textContent = t(feeLabelKey);
  $("#fee").textContent = fee === 0 ? t("cart.free") : money(fee);
  $("#points").textContent = Math.floor(sub);
  $("#total").textContent = money(sub + fee);

  // Free-threshold nudge
  const note = $("#deliver-note");
  if (state.mode === "deliver" && sub > 0 && sub < 50) { note.textContent = t("cart.freenote", { amt: money(50 - sub) }); note.classList.add("show"); }
  else if (state.mode === "ship" && sub > 0 && sub < 75) { note.textContent = t("cart.shipnote", { amt: money(75 - sub) }); note.classList.add("show"); }
  else note.classList.remove("show");

  // Non-shippable warning (PACT Act items in cart while shipping)
  const warn = $("#ship-warn");
  const bad = nonShippableInCart();
  if (state.mode === "ship" && bad > 0) { warn.textContent = t("cart.shipwarn", { n: bad }); warn.classList.add("show"); }
  else warn.classList.remove("show");
}
function updateCart() { $("#cart-count").textContent = state.cart.reduce((n, l) => n + l.qty, 0); renderCart(); }

$$(".fulfill button").forEach(b => b.addEventListener("click", () => {
  $$(".fulfill button").forEach(x => x.classList.remove("active"));
  b.classList.add("active"); state.mode = b.dataset.mode; renderCart();
}));
function openCart()  { $("#drawer").classList.add("show"); $("#overlay").classList.add("show"); }
function closeCart() { $("#drawer").classList.remove("show"); $("#overlay").classList.remove("show"); }
$("#open-cart").addEventListener("click", openCart);
$("#close-cart").addEventListener("click", closeCart);
$("#overlay").addEventListener("click", closeCart);
$("#checkout").addEventListener("click", () => {
  if (!state.cart.length) return;
  showToast(t("checkout.demo", { total: $("#total").textContent }));
  closeCart();
});

/* ---------------------------------------------------------------------
   DELIVERY ZONE CHECKER
   --------------------------------------------------------------------- */
function checkZip() {
  const zip = $("#zip-input").value.trim(), box = $("#zip-result");
  box.className = "zip-result";
  if (!/^\d{5}$/.test(zip)) { box.classList.add("bad"); box.textContent = t("zip.bad"); return; }
  if (DELIVERY_ZONE_ZIPS.includes(zip)) { box.classList.add("ok"); box.innerHTML = iconSVG("truck", "zip-ico") + " " + t("zip.ok"); }
  else { box.classList.add("uber"); box.innerHTML = iconSVG("package", "zip-ico") + " " + t("zip.out"); }
}
$("#zip-check").addEventListener("click", checkZip);
$("#zip-input").addEventListener("keydown", e => { if (e.key === "Enter") checkZip(); });

/* ---------------------------------------------------------------------
   SEARCH
   --------------------------------------------------------------------- */
$("#search").addEventListener("input", e => { state.search = e.target.value; renderProducts(); });

/* ---------------------------------------------------------------------
   TOAST
   --------------------------------------------------------------------- */
let toastTimer;
function showToast(msg) {
  $("#toast-msg").textContent = msg;
  const el = $("#toast"); el.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ---------------------------------------------------------------------
   MOBILE NAV
   --------------------------------------------------------------------- */
(function mobileMenu() {
  const toggle = $("#nav-toggle"), menu = $("#mobile-menu");
  if (!toggle || !menu) return;
  const close = () => { menu.classList.remove("open"); toggle.innerHTML = iconSVG("menu"); };
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle("open");
    toggle.innerHTML = iconSVG(open ? "x" : "menu");
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("open") && !menu.contains(e.target) && !toggle.contains(e.target)) close();
  });
})();

/* =====================================================================
   LANGUAGE TOGGLE
   ===================================================================== */
function buildTicker() {
  const track = $("#ticker-track");
  const items = TICKER[currentLang()] || TICKER.en;
  const one = items.map(s => `<span>${s}</span><span class="dot">•</span>`).join("");
  track.innerHTML = one + one;   // duplicate for seamless loop
}
function setStatsFinal() {
  $$(".num[data-count]").forEach(el => {
    const target = +el.dataset.count;
    let suffix = el.dataset.suffix || (el.dataset.suffixKey ? t(el.dataset.suffixKey) : "");
    if (!suffix && target >= 500) suffix = "+";
    el.textContent = target + (suffix && el.dataset.suffix === undefined && !el.dataset.suffixKey ? suffix : (suffix ? (el.dataset.suffix || el.dataset.suffixKey ? " " + suffix : suffix) : ""));
  });
}
function switchLang(lang) {
  LANG = lang;
  localStorage.setItem("mh_lang", lang);
  applyStaticTranslations();
  buildTicker();
  renderCategories();
  renderProducts();
  renderCart();
  setStatsFinal();
}
$("#lang-toggle").addEventListener("click", () => switchLang(currentLang() === "en" ? "es" : "en"));

/* =====================================================================
   POP / MOTION LAYER
   ===================================================================== */

/* ---- Scroll reveal ---- */
(function reveal() {
  const els = $$(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
})();

/* ---- Stat count-up ---- */
(function countUp() {
  const nums = $$(".num[data-count]");
  const run = (el) => {
    const target = +el.dataset.count, dur = 1400;
    const suffix = () => el.dataset.suffix || (el.dataset.suffixKey ? " " + t(el.dataset.suffixKey) : (target >= 500 ? "+" : ""));
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + (p === 1 ? suffix() : "");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  nums.forEach(n => io.observe(n));
})();

/* ---- Deal-of-the-day countdown (resets at local midnight) ---- */
(function countdown() {
  const h = $("#cd-h"), m = $("#cd-m"), s = $("#cd-s"); if (!h) return;
  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    const now = new Date(); const end = new Date(now); end.setHours(23, 59, 59, 999);
    let diff = Math.max(0, Math.floor((end - now) / 1000));
    h.textContent = pad(Math.floor(diff / 3600));
    m.textContent = pad(Math.floor((diff % 3600) / 60));
    s.textContent = pad(diff % 60);
  };
  tick(); setInterval(tick, 1000);
})();

/* ---- Smoke / haze canvas in hero ---- */
(function smoke() {
  const canvas = $("#smoke"); if (!canvas) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  let w, h, puffs = [];
  const COLORS = ["217,178,95", "111,208,140", "230,235,240"];
  function resize() { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; }
  function make() {
    return { x: Math.random() * w, y: h + Math.random() * 120, r: 60 + Math.random() * 120,
      vy: -(0.25 + Math.random() * 0.5), vx: (Math.random() - 0.5) * 0.3,
      a: 0, amax: 0.06 + Math.random() * 0.06, life: 0, c: COLORS[Math.floor(Math.random() * COLORS.length)] };
  }
  function init() { resize(); puffs = Array.from({ length: 18 }, () => { const p = make(); p.y = Math.random() * h; return p; }); }
  function frame() {
    ctx.clearRect(0, 0, w, h);
    puffs.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy; p.life++;
      p.a = p.y > h * 0.5 ? Math.min(p.a + 0.002, p.amax) : Math.max(p.a - 0.0016, 0);
      if (p.y + p.r < 0 || (p.a <= 0 && p.life > 60)) puffs[i] = make();
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      g.addColorStop(0, `rgba(${p.c},${p.a})`); g.addColorStop(1, `rgba(${p.c},0)`);
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    });
    requestAnimationFrame(frame);
  }
  init(); frame(); window.addEventListener("resize", resize);
})();

/* ---- FAQ accordion ---- */
$$(".faq-q").forEach(q => q.addEventListener("click", () => q.parentElement.classList.toggle("open")));

/* ---- Referral copy ---- */
$("#copy-ref")?.addEventListener("click", () => {
  const code = $("#ref-code").textContent;
  navigator.clipboard?.writeText(code).then(() => showToast(t("club.copied", { code }))).catch(() => showToast(code));
});

/* ---- Email capture ---- */
$("#capture-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!$("#capture-email").value.trim()) return;
  $("#capture-form").style.display = "none";
  const done = $("#capture-done"); done.textContent = t("cap.done"); done.classList.add("show");
});

/* ---- Newsletter slide-in ---- */
(function slideIn() {
  const box = $("#slidein"); if (!box) return;
  if (sessionStorage.getItem("mh_slidein") === "1") return;
  const hide = () => { box.classList.remove("show"); sessionStorage.setItem("mh_slidein", "1"); };
  setTimeout(() => box.classList.add("show"), 14000);
  $("#slidein-x").addEventListener("click", hide);
  $("#slidein-cta").addEventListener("click", hide);
})();

/* ---------------------------------------------------------------------
   INIT
   --------------------------------------------------------------------- */
LANG = detectLang();
applyStaticTranslations();
hydrateIcons();
buildTicker();
$("#year").textContent = new Date().getFullYear();
renderCategories();
renderProducts();
updateCart();
