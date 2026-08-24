/* =====================================================================
   MILE HIGH SMOKE SHOP — BILINGUAL ENGINE (English / Español)
   ---------------------------------------------------------------------
   How it works:
   - Every piece of text on the page has a data-i18n="key" attribute.
   - This file holds the English + Spanish for each key.
   - Toggle in the header (or the age gate) switches the whole site and
     remembers the choice. New Spanish speakers are auto-detected.
   To edit copy: change the string here. To add a language: add a block
   under I18N with the same keys.
   ===================================================================== */

const I18N = {
  en: {
    "age.q": "Are you 21 or older?",
    "age.p": "You must be of legal age to enter this site. Products are intended for adults only.",
    "age.yes": "Yes, I'm 21+", "age.no": "No",
    "age.deny": "Sorry — you must be 21 or older to enter.",
    "age.fine": "By entering you agree to our Terms & confirm you are of legal age in your jurisdiction.",

    "nav.shop": "Shop", "nav.delivery": "Delivery", "nav.rewards": "Rewards",
    "nav.store": "Visit Store", "nav.faq": "FAQ", "nav.cart": "Cart",

    "hero.badge": "Same-day local delivery · pickup · we ship nationwide",
    "hero.h1": "Orlando's smoke shop that comes <em>to you.</em>",
    "hero.sub": "Vapes, glass, hookah and more. Order online for same-day local delivery within 5 miles, in-store pickup, or nationwide shipping on eligible items.",
    "hero.cta1": "Start your order →", "hero.cta2": "How delivery works",
    "proof.reviews": "208 reviews on Google",
    "nav.reviews": "Reviews",
    "rev.h": "Loved by Orlando", "rev.p": "Here's what customers are saying.",
    "rev.count": "208 reviews on Google", "rev.src": "Google review",
    "rev.readall": "Read all reviews on Google", "rev.leave": "Leave a review",
    "trk.h": "Watch your order, every step", "trk.p": "Once it's out for delivery, you'll see exactly where it is, like tracking a pizza.",
    "trk.s1": "Order confirmed", "trk.s2": "Packing your order", "trk.s3": "Out for delivery", "trk.s4": "Delivered",
    "trk.driver": "Your driver", "trk.eta": "Arriving in", "trk.live": "LIVE",
    "trk.note": "Preview — this is how live tracking will look for local deliveries.",
    "rip.flag": "Broke your glass?", "rip.h": "Rest in Piece",
    "rip.p": "Send us a photo of your broken piece and we'll set you up with a discount on a replacement, delivered the same day. Good glass deserves a proper sendoff.",
    "rip.cta": "Text us a photo →",
    "hero.stat1": "Products in stock", "hero.stat2": "Avg. delivery time", "hero.stat3": "Open every week",

    "zip.title": "Do we deliver to you?",
    "zip.sub": "Enter your ZIP to see your delivery option — instant.",
    "zip.btn": "Check",
    "zip.bad": "Please enter a valid 5-digit ZIP code.",
    "zip.ok": "<strong>You're in our 5-mile delivery zone!</strong> Same-day local delivery available.",
    "zip.out": "<strong>Outside our 5-mile delivery zone.</strong> You can still order online for nationwide shipping on eligible items, or pick up in store.",

    "diff.1t": "Same-day delivery", "diff.1d": "Local, often under an hour",
    "diff.2t": "Returns in-store", "diff.2d": "Anytime, no hassle",
    "diff.3t": "Mile High Club", "diff.3d": "Earn on every order",
    "diff.4t": "5.0 on Google", "diff.4d": "208 real reviews",

    "deal.flag": "Deal of the Day", "deal.h": "20% off all disposables",
    "deal.p": "Every disposable vape in the store, today only. Delivered to your door or ready for pickup.",
    "deal.cta": "Shop the deal →", "deal.ends": "Ends in",
    "unit.hrs": "hrs", "unit.min": "min", "unit.sec": "sec", "unit.days": "days",

    "del.eyebrow": "Delivery", "del.h": "Two ways to get it fast",
    "del.p": "Order online in minutes. How it reaches you depends on how close you are to the shop.",
    "del.1tag": "0–5 MILES", "del.1h": "Our own driver", "del.1p": "Within 5 miles of the store? Our driver hand-delivers your order the same day, often within the hour. Free over $50.",
    "del.2tag": "NATIONWIDE", "del.2h": "Ship to your door", "del.2p": "Order online and we ship eligible items (glass, accessories and more) anywhere in the U.S. Vapes and tobacco stay local, by federal law.",
    "del.3tag": "IN STORE", "del.3h": "Pickup & browse", "del.3p": "Order ahead for pickup, or come explore the full selection on Southland Blvd by the Florida Mall.",

    "shop.eyebrow": "Shop", "shop.h": "Browse the store",
    "shop.p": "Placeholder inventory shown here — the shop's real products drop straight in.",
    "shop.categories": "Categories", "shop.search": "Search products…",
    "shop.all": "All Products",
    "shop.results_one": "{n} product", "shop.results_other": "{n} products",
    "shop.loadmore": "Load more ({n} more)",
    "filter.all": "All", "filter.ship": "Ships nationwide", "filter.local": "Local / in-store",
    "shop.empty": "No products match your search.",
    "badge.new": "New", "badge.best": "Best Seller", "badge.sale": "Sale",
    "stock.in": "In stock", "stock.low": "Low stock", "stock.out": "Sold out",
    "btn.add": "+ Add", "btn.sold": "Sold out",

    "club.eyebrow": "Rewards", "club.h": "Join the Mile High Club",
    "club.p": "The loyalty program that pays you back for shopping the way you already do.",
    "club.1h": "Earn on every order", "club.1p": "Get 1 point for every $1 spent, online or in store. 100 points = $10 off. It stacks up fast.",
    "club.2h": "Give $5, Get $5", "club.2p": "Share your referral code. Your friend gets $5 off their first order — you get $5 in store credit when they buy.",
    "club.3h": "Perks that grow", "club.3p": "Birthday rewards, early access to new drops, and members-only flash deals texted straight to your phone.",
    "club.copy": "Copy code", "club.copied": "✓ Copied {code}",

    "sub.eyebrow": "Never run out", "sub.h": "Subscribe & Save 15%",
    "sub.p": "Put your regulars — juice, coils, papers, whatever you go through — on auto-delivery. Pick your schedule, save 15% every time, skip or cancel anytime. We show up before you're empty.",
    "sub.l1": "15% off every recurring order", "sub.l2": "Free local delivery, always", "sub.l3": "Pause, skip, or cancel in one tap",
    "sub.cta": "Set up a subscription →", "sub.b1": "Every 2 weeks", "sub.b2": "Your juice", "sub.b3": "Your coils",

    "store.eyebrow": "Visit us", "store.h": "Come see the whole collection",
    "store.p": "The full Mile High experience lives in our store by the Florida Mall — knowledgeable staff, exclusive glass, and the newest drops before they hit the site.",
    "store.addr": "Orlando, FL 32809 — by the Florida Mall",
    "store.hoursk": "Open every day", "store.callk": "Call or text to order", "store.followk": "Follow the drops",
    "store.cta": "Get directions →",

    "faq.eyebrow": "FAQ", "faq.h": "Good to know",
    "faq.q1": "Do you deliver, and how fast?", "faq.a1": "Yes! Within about 5 miles of our Southland Blvd store, our own driver brings it same-day, often in under an hour. Outside that range you can order online for nationwide shipping on eligible items, or pick up in store.",
    "faq.q2": "How much is delivery or shipping?", "faq.a2": "Local delivery is free on orders over $50, and a small flat fee under that. Shipping is a flat rate, free on eligible orders over $75.",
    "faq.q6": "Can you ship vapes to me?", "faq.a6": "No. By federal law (the PACT Act), vapes, e-liquids, and tobacco cannot be shipped to customers, and no carrier will handle them. Those items are available for local delivery within 5 miles or in store. Accessories, glass, and more can ship nationwide.",
    "faq.q3": "Where are you located?", "faq.a3": "7400 Southland Blvd #113, Orlando, FL 32809 — right by the Florida Mall, just off Orange Blossom Trail.",
    "faq.q4": "What are your hours?", "faq.a4": "We're open every single day, 10:00 AM to 11:00 PM.",
    "faq.q5": "Do I need to be 21?", "faq.a5": "Yes. You must be 21 or older. We verify ID on delivery and in store — no exceptions.",

    "cap.h": "Get 10% off your first order",
    "cap.p": "Join our list for members-only deals, new-drop alerts, and same-day delivery perks. No spam — just the good stuff.",
    "cap.email": "you@email.com", "cap.phone": "Phone (optional, for text deals)", "cap.btn": "Send my code",
    "cap.fine": "By joining you confirm you're 21+ and agree to receive marketing messages. Reply STOP to opt out.",
    "cap.done": "🎉 You're in! Check your inbox — your 10% code is on the way. (Demo: no email actually sent.)",

    "foot.blurb": "Orlando's premium smoke & vape shop by the Florida Mall. Shop online, get it delivered same-day, or visit us in store.",
    "foot.all": "All products", "foot.company": "Company", "foot.contact": "Contact",
    "foot.hours": "Open daily 10am–11pm", "foot.rights": "All rights reserved.",
    "foot.warn": "⚠ You must be 21+ to purchase. Not for sale to minors.",
    "cat.vapes": "Vapes", "cat.glass": "Glass", "cat.sale": "Sale",

    "mb.call": "Call",
    "slide.h": "First order? Take 10% off.", "slide.p": "Join the list and we'll text you a code.", "slide.cta": "Get my code",

    "cart.title": "Your Cart", "cart.deliver": "Delivery", "cart.ship": "Ship", "cart.pickup": "Pickup",
    "cart.subtotal": "Subtotal", "cart.delivery": "Delivery", "cart.shiprow": "Shipping", "cart.pickuprow": "Pickup",
    "cart.points": "Points you'll earn", "cart.total": "Total", "cart.checkout": "Checkout",
    "cart.empty": "Your cart is empty.<br/>Add something from the shop.",
    "cart.remove": "Remove", "cart.free": "Free",
    "cart.freenote": "Add {amt} more for free local delivery.",
    "cart.shipnote": "Add {amt} more for free shipping.",
    "cart.freed": "You unlocked free local delivery!",
    "cart.frees": "You unlocked free shipping!",
    "cart.shipwarn": "⚠ {n} item(s) in your cart can't be shipped (vape/tobacco). They're available for local delivery or in-store pickup.",
    "ship.yes": "Ships nationwide", "ship.no": "Local / in-store only",
    "toast.added": "Added {name}",
    "checkout.demo": "✓ Demo checkout — {total}. Payment wiring comes next.",
  },

  es: {
    "age.q": "¿Tienes 21 años o más?",
    "age.p": "Debes ser mayor de edad para entrar a este sitio. Los productos son solo para adultos.",
    "age.yes": "Sí, tengo 21+", "age.no": "No",
    "age.deny": "Lo sentimos — debes tener 21 años o más para entrar.",
    "age.fine": "Al entrar aceptas nuestros Términos y confirmas que tienes la edad legal en tu jurisdicción.",

    "nav.shop": "Tienda", "nav.delivery": "Entrega", "nav.rewards": "Recompensas",
    "nav.store": "Visítanos", "nav.faq": "Preguntas", "nav.cart": "Carrito",

    "hero.badge": "Entrega local el mismo día · recoger · envío nacional",
    "hero.h1": "La smoke shop de Orlando que llega <em>hasta ti.</em>",
    "hero.sub": "Vapes, vidrio, hookah y más. Ordena en línea para entrega local el mismo día dentro de 5 millas, recoger en tienda, o envío a todo el país en productos elegibles.",
    "hero.cta1": "Empieza tu pedido →", "hero.cta2": "Cómo funciona la entrega",
    "proof.reviews": "208 reseñas en Google",
    "nav.reviews": "Reseñas",
    "rev.h": "Los favoritos de Orlando", "rev.p": "Esto es lo que dicen los clientes.",
    "rev.count": "208 reseñas en Google", "rev.src": "Reseña de Google",
    "rev.readall": "Ver todas las reseñas en Google", "rev.leave": "Deja una reseña",
    "trk.h": "Sigue tu pedido, paso a paso", "trk.p": "En cuanto salga a entrega, verás exactamente dónde está, como cuando rastreas una pizza.",
    "trk.s1": "Pedido confirmado", "trk.s2": "Preparando tu pedido", "trk.s3": "En camino", "trk.s4": "Entregado",
    "trk.driver": "Tu chofer", "trk.eta": "Llega en", "trk.live": "EN VIVO",
    "trk.note": "Vista previa — así se verá el rastreo en vivo para entregas locales.",
    "rip.flag": "¿Se te rompió el vidrio?", "rip.h": "Descansa en Pedazos",
    "rip.p": "Mándanos una foto de tu pieza rota y te damos un descuento en el reemplazo, entregado el mismo día. El buen vidrio merece una buena despedida.",
    "rip.cta": "Envíanos una foto →",
    "hero.stat1": "Productos en stock", "hero.stat2": "Tiempo de entrega prom.", "hero.stat3": "Abierto toda la semana",

    "zip.title": "¿Entregamos en tu zona?",
    "zip.sub": "Ingresa tu código postal para ver tu opción de entrega — al instante.",
    "zip.btn": "Verificar",
    "zip.bad": "Por favor ingresa un código postal válido de 5 dígitos.",
    "zip.ok": "<strong>¡Estás en nuestra zona de entrega de 5 millas!</strong> Entrega local el mismo día disponible.",
    "zip.out": "<strong>Estás fuera de nuestra zona de entrega de 5 millas.</strong> Aún puedes ordenar en línea con envío a todo el país en productos elegibles, o recoger en tienda.",

    "diff.1t": "Entrega el mismo día", "diff.1d": "Local, muchas veces en menos de una hora",
    "diff.2t": "Devoluciones en tienda", "diff.2d": "Cuando quieras, sin complicaciones",
    "diff.3t": "Mile High Club", "diff.3d": "Gana en cada pedido",
    "diff.4t": "5.0 en Google", "diff.4d": "208 reseñas reales",

    "deal.flag": "Oferta del Día", "deal.h": "20% de descuento en todos los desechables",
    "deal.p": "Todos los vapes desechables de la tienda, solo hoy. Entregado a tu puerta o listo para recoger.",
    "deal.cta": "Ver la oferta →", "deal.ends": "Termina en",
    "unit.hrs": "hrs", "unit.min": "min", "unit.sec": "seg", "unit.days": "días",

    "del.eyebrow": "Entrega", "del.h": "Dos maneras de recibirlo rápido",
    "del.p": "Ordena en línea en minutos. Cómo te llega depende de qué tan cerca estés de la tienda.",
    "del.1tag": "0–5 MILLAS", "del.1h": "Nuestro propio chofer", "del.1p": "¿A menos de 5 millas de la tienda? Nuestro chofer te lo entrega en mano el mismo día, muchas veces en menos de una hora. Gratis en pedidos de más de $50.",
    "del.2tag": "TODO EL PAÍS", "del.2h": "Envío a tu puerta", "del.2p": "Ordena en línea y enviamos productos elegibles (vidrio, accesorios y más) a cualquier parte de EE. UU. Los vapes y el tabaco solo se entregan localmente, por ley federal.",
    "del.3tag": "EN TIENDA", "del.3h": "Recoge y explora", "del.3p": "Ordena con anticipación para recoger, o ven a explorar toda la selección en Southland Blvd, junto al Florida Mall.",

    "shop.eyebrow": "Tienda", "shop.h": "Explora la tienda",
    "shop.p": "Aquí se muestra inventario de ejemplo — los productos reales de la tienda entran directo aquí.",
    "shop.categories": "Categorías", "shop.search": "Buscar productos…",
    "shop.all": "Todos los Productos",
    "shop.results_one": "{n} producto", "shop.results_other": "{n} productos",
    "shop.loadmore": "Ver más ({n} más)",
    "filter.all": "Todos", "filter.ship": "Envío nacional", "filter.local": "Local / en tienda",
    "shop.empty": "Ningún producto coincide con tu búsqueda.",
    "badge.new": "Nuevo", "badge.best": "Más Vendido", "badge.sale": "Oferta",
    "stock.in": "Disponible", "stock.low": "Pocas unidades", "stock.out": "Agotado",
    "btn.add": "+ Agregar", "btn.sold": "Agotado",

    "club.eyebrow": "Recompensas", "club.h": "Únete al Mile High Club",
    "club.p": "El programa de lealtad que te recompensa por comprar como ya lo haces.",
    "club.1h": "Gana en cada pedido", "club.1p": "Gana 1 punto por cada $1 gastado, en línea o en tienda. 100 puntos = $10 de descuento. Se acumula rápido.",
    "club.2h": "Da $5, Recibe $5", "club.2p": "Comparte tu código de referido. Tu amigo recibe $5 de descuento en su primer pedido — tú recibes $5 de crédito en tienda cuando compra.",
    "club.3h": "Beneficios que crecen", "club.3p": "Recompensas de cumpleaños, acceso anticipado a nuevos productos y ofertas exclusivas para miembros enviadas directo a tu teléfono.",
    "club.copy": "Copiar código", "club.copied": "✓ Copiado {code}",

    "sub.eyebrow": "Nunca te quedes sin", "sub.h": "Suscríbete y Ahorra 15%",
    "sub.p": "Pon tus productos de siempre — líquido, resistencias, papel, lo que uses — en entrega automática. Elige tu horario, ahorra 15% cada vez, salta o cancela cuando quieras. Llegamos antes de que se te acabe.",
    "sub.l1": "15% de descuento en cada pedido recurrente", "sub.l2": "Entrega local gratis, siempre", "sub.l3": "Pausa, salta o cancela con un toque",
    "sub.cta": "Crear una suscripción →", "sub.b1": "Cada 2 semanas", "sub.b2": "Tu líquido", "sub.b3": "Tus resistencias",

    "store.eyebrow": "Visítanos", "store.h": "Ven a ver toda la colección",
    "store.p": "La experiencia completa de Mile High está en nuestra tienda junto al Florida Mall — personal con experiencia, vidrio exclusivo y los nuevos productos antes de que lleguen al sitio.",
    "store.addr": "Orlando, FL 32809 — junto al Florida Mall",
    "store.hoursk": "Abierto todos los días", "store.callk": "Llama o escribe para ordenar", "store.followk": "Sigue los nuevos productos",
    "store.cta": "Cómo llegar →",

    "faq.eyebrow": "Preguntas", "faq.h": "Bueno saber",
    "faq.q1": "¿Hacen entregas, y qué tan rápido?", "faq.a1": "¡Sí! Dentro de unas 5 millas de nuestra tienda en Southland Blvd, nuestro propio chofer lo lleva el mismo día, muchas veces en menos de una hora. Fuera de ese rango, puedes ordenar en línea con envío a todo el país en productos elegibles, o recoger en tienda.",
    "faq.q2": "¿Cuánto cuesta la entrega o el envío?", "faq.a2": "La entrega local es gratis en pedidos de más de $50, y una pequeña tarifa fija por debajo de eso. El envío es una tarifa fija, gratis en pedidos elegibles de más de $75.",
    "faq.q6": "¿Pueden enviarme vapes?", "faq.a6": "No. Por ley federal (la Ley PACT), los vapes, e-líquidos y el tabaco no se pueden enviar a los clientes, y ninguna paquetería los transporta. Esos productos están disponibles para entrega local dentro de 5 millas o en tienda. Accesorios, vidrio y más sí se pueden enviar a todo el país.",
    "faq.q3": "¿Dónde están ubicados?", "faq.a3": "7400 Southland Blvd #113, Orlando, FL 32809 — justo al lado del Florida Mall, cerca de Orange Blossom Trail.",
    "faq.q4": "¿Cuál es su horario?", "faq.a4": "Abrimos todos los días, de 10:00 AM a 11:00 PM.",
    "faq.q5": "¿Necesito tener 21 años?", "faq.a5": "Sí. Debes tener 21 años o más. Verificamos identificación en la entrega y en tienda — sin excepciones.",

    "cap.h": "Obtén 10% de descuento en tu primer pedido",
    "cap.p": "Únete a nuestra lista para ofertas exclusivas de miembros, alertas de nuevos productos y beneficios de entrega el mismo día. Sin spam — solo lo bueno.",
    "cap.email": "tu@correo.com", "cap.phone": "Teléfono (opcional, para ofertas por texto)", "cap.btn": "Envíame mi código",
    "cap.fine": "Al unirte confirmas que tienes 21+ y aceptas recibir mensajes de marketing. Responde STOP para cancelar.",
    "cap.done": "🎉 ¡Estás dentro! Revisa tu correo — tu código de 10% viene en camino. (Demo: no se envió ningún correo.)",

    "foot.blurb": "La smoke shop y tienda de vape premium de Orlando, junto al Florida Mall. Compra en línea, recíbelo el mismo día o visítanos en tienda.",
    "foot.all": "Todos los productos", "foot.company": "Compañía", "foot.contact": "Contacto",
    "foot.hours": "Abierto todos los días 10am–11pm", "foot.rights": "Todos los derechos reservados.",
    "foot.warn": "⚠ Debes tener 21+ para comprar. No se vende a menores.",
    "cat.vapes": "Vapes", "cat.glass": "Vidrio", "cat.sale": "Ofertas",

    "mb.call": "Llamar",
    "slide.h": "¿Primer pedido? Toma 10% de descuento.", "slide.p": "Únete a la lista y te enviamos un código por texto.", "slide.cta": "Obtener mi código",

    "cart.title": "Tu Carrito", "cart.deliver": "Entrega", "cart.ship": "Envío", "cart.pickup": "Recoger",
    "cart.subtotal": "Subtotal", "cart.delivery": "Entrega", "cart.shiprow": "Envío", "cart.pickuprow": "Recoger",
    "cart.points": "Puntos que ganarás", "cart.total": "Total", "cart.checkout": "Pagar",
    "cart.empty": "Tu carrito está vacío.<br/>Agrega algo de la tienda.",
    "cart.remove": "Quitar", "cart.free": "Gratis",
    "cart.freenote": "Agrega {amt} más para entrega local gratis.",
    "cart.shipnote": "Agrega {amt} más para envío gratis.",
    "cart.freed": "¡Desbloqueaste entrega local gratis!",
    "cart.frees": "¡Desbloqueaste envío gratis!",
    "cart.shipwarn": "⚠ {n} producto(s) en tu carrito no se pueden enviar (vape/tabaco). Están disponibles para entrega local o para recoger en tienda.",
    "ship.yes": "Envío a todo el país", "ship.no": "Solo local / en tienda",
    "toast.added": "Agregado: {name}",
    "checkout.demo": "✓ Pago de demostración — {total}. La integración de pago viene después.",
  }
};

/* ---- Engine ---- */
let LANG = "en";
function currentLang() { return LANG; }
function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]) || I18N.en[key] || key;
  if (vars) for (const k in vars) s = s.replace("{" + k + "}", vars[k]);
  return s;
}
function detectLang() {
  const stored = localStorage.getItem("mh_lang");
  if (stored === "en" || stored === "es") return stored;
  return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
}
function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
  document.querySelectorAll("[data-i18n-html]").forEach(el => { el.innerHTML = t(el.getAttribute("data-i18n-html")); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
  document.documentElement.lang = LANG;
  const label = document.getElementById("lang-label");
  if (label) label.textContent = LANG === "en" ? "ES" : "EN";
}
