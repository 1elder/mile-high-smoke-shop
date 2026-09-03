/* =====================================================================
   MILE HIGH SMOKE SHOP — APP LOGIC  (Bilingual EN / ES)
   Age gate · catalog · cart · delivery routing · rewards · motion · i18n
   (Front-end prototype — cart, checkout, signup are mock/demo only.)
   ===================================================================== */

const $  = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const money = (n) => "$" + n.toFixed(2);

const state = { category: "all", search: "", cart: [], mode: "deliver", limit: 48, shipFilter: "all" };

/* Bilingual ticker phrases */
const TICKER = {
  en: ["Same-day local delivery within 5 miles", "Order online — we ship nationwide on eligible items", "Free local delivery over $50", "Join the Mile High Club — earn points on every order", "Text to order: (689) 233-8293"],
  es: ["Entrega local el mismo día dentro de 5 millas", "Ordena en línea — enviamos a todo el país en productos elegibles", "Entrega local GRATIS en pedidos de más de $50", "Únete al Mile High Club — gana puntos en cada pedido", "Escribe para ordenar: (689) 233-8293"]
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
function prodDesc(p) { return (currentLang() === "es" && p.desc_es ? p.desc_es : p.desc) || ""; }

function renderCategories() {
  const list = $("#cat-list");
  const all = [{ slug: "all", _all: true }, { slug: "sale", _sale: true }, ...CATEGORIES];
  list.innerHTML = all.map(c => `
    <button class="cat-btn ${c.slug === state.category ? "active" : ""}" data-cat="${c.slug}">${c._all ? t("shop.all") : c._sale ? t("cat.sale") : catName(c)}</button>`).join("");
  $$(".cat-btn").forEach(btn => btn.addEventListener("click", () => {
    state.category = btn.dataset.cat; renderCategories(); resetGrid();
  }));
}

/* ---------------------------------------------------------------------
   PRODUCT GRID
   --------------------------------------------------------------------- */
function filteredProducts() {
  const q = state.search.trim().toLowerCase();
  return PRODUCTS.filter(p => {
    const catOk = state.category === "all" ? true
      : state.category === "sale" ? (p.tags || []).includes("Sale")
      : p.category === state.category;
    const shipOk = state.shipFilter === "ship" ? p.ship === true
      : state.shipFilter === "local" ? p.ship === false : true;
    const hay = (p.name + " " + (p.brand || "") + " " + (p.desc || "") + " " + (p.desc_es || "")).toLowerCase();
    return catOk && shipOk && (!q || hay.includes(q));
  }).sort((a, b) => (b.img ? 1 : 0) - (a.img ? 1 : 0));   // items with photos first
}
function badgeHTML(tags = []) {
  const map = { "New": "new", "Best Seller": "best", "Sale": "sale" };
  const lbl = { "New": "badge.new", "Best Seller": "badge.best", "Sale": "badge.sale" };
  return tags.filter(x => map[x]).map(x => `<span class="badge ${map[x]}">${t(lbl[x])}</span>`).join("");
}
function stockHTML(stock) { return `<span class="stock-dot ${stock}">${t("stock." + stock)}</span>`; }

const PAGE_SIZE = 48;
function renderProducts() {
  const items = filteredProducts();
  const grid = $("#product-grid");
  const key = items.length === 1 ? "shop.results_one" : "shop.results_other";
  $("#result-count").textContent = t(key, { n: items.length });
  if (!items.length) { grid.innerHTML = `<div class="empty" style="grid-column:1/-1;">${t("shop.empty")}</div>`; return; }
  const shown = items.slice(0, state.limit);
  grid.innerHTML = shown.map(p => {
    const stock = p.stock || "in";
    const desc = prodDesc(p);
    return `
    <div class="card">
      <div class="card-img">
        ${p.img ? `<img src="assets/${p.img}" alt="${p.name}" class="pimg" loading="lazy">` : iconSVG("cloud", "ph-ico")}
        <div class="card-badges">${badgeHTML(p.tags)}</div>
        ${stockHTML(stock)}
      </div>
      <div class="card-body">
        ${p.brand ? `<div class="card-brand">${p.brand}</div>` : ""}
        <div class="card-name">${p.name}</div>
        ${desc ? `<div class="card-desc">${desc}</div>` : ""}
        <div class="ship-tag ${p.ship ? "yes" : "no"}">${iconSVG(p.ship ? "package" : "pin")} ${t(p.ship ? "ship.yes" : "ship.no")}</div>
        <div class="card-foot">
          <div class="card-price">${money(p.price)}</div>
          <button class="add-btn" data-add="${p.id}" ${stock === "out" ? "disabled" : ""}>${stock === "out" ? t("btn.sold") : t("btn.add")}</button>
        </div>
      </div>
    </div>`;
  }).join("");
  $$("[data-add]").forEach(btn => btn.addEventListener("click", () => addToCart(+btn.dataset.add)));
  const more = document.getElementById("load-more");
  if (more) more.remove();
  if (items.length > state.limit) {
    const btn = document.createElement("button");
    btn.id = "load-more"; btn.className = "btn btn-ghost load-more";
    btn.textContent = t("shop.loadmore", { n: items.length - state.limit });
    btn.addEventListener("click", () => { state.limit += PAGE_SIZE; renderProducts(); });
    grid.parentElement.appendChild(btn);
  }
}
function resetGrid() { state.limit = PAGE_SIZE; renderProducts(); }

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

  // Free-threshold nudge + visual progress bar
  const note = $("#deliver-note"), freebar = $("#freebar"), fill = $("#freebar-fill");
  const threshold = state.mode === "ship" ? 75 : 50;
  if (state.mode !== "pickup" && sub > 0) {
    freebar.classList.add("show");
    const pct = Math.min(100, (sub / threshold) * 100);
    fill.style.width = pct + "%";
    const done = sub >= threshold;
    fill.classList.toggle("done", done);
    note.classList.add("show");
    note.classList.toggle("note-done", done);
    if (done) note.textContent = t(state.mode === "ship" ? "cart.frees" : "cart.freed");
    else note.textContent = t(state.mode === "ship" ? "cart.shipnote" : "cart.freenote", { amt: money(threshold - sub) });
  } else {
    freebar.classList.remove("show");
    note.classList.remove("show", "note-done");
  }

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
$("#search").addEventListener("input", e => { state.search = e.target.value; resetGrid(); });
$$("#ship-filter button").forEach(b => b.addEventListener("click", () => {
  $$("#ship-filter button").forEach(x => x.classList.remove("active"));
  b.classList.add("active"); state.shipFilter = b.dataset.ship; resetGrid();
}));

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

/* ---- Live tracker demo (auto-advances to feel live) ---- */
(function tracker() {
  const stages = $$(".trk-stage"), fill = $("#trk-fill");
  if (!stages.length || !fill) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stages.forEach(s => s.classList.add("done")); fill.style.width = "100%"; return;
  }
  let cur = 0;
  const render = () => {
    stages.forEach((s, i) => { s.classList.toggle("done", i < cur); s.classList.toggle("active", i === cur); });
    fill.style.width = (cur / (stages.length - 1)) * 100 + "%";
  };
  render();
  setInterval(() => { cur = (cur + 1) % stages.length; render(); }, 2600);
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

/* ---- Reveal safety net: never leave content hidden (IO edge cases / instant scrolls) ---- */
window.addEventListener("load", () => {
  setTimeout(() => { document.querySelectorAll(".reveal:not(.in)").forEach(e => e.classList.add("in")); }, 4000);
});
