/* =====================================================================
   MILE HIGH SMOKE SHOP — PRODUCT DATA  (Bilingual EN / ES)
   ---------------------------------------------------------------------
   THIS IS THE ONLY FILE YOU NEED TO EDIT WHEN THE REAL INVENTORY ARRIVES.
   Each product is one object. Copy the pattern, fill in real values.

   Fields:
     id       : unique number (just increment)
     name     : product name shown to customer
     category : must match one of the CATEGORIES slugs below
     price    : number, dollars (e.g. 24.99)
     brand    : optional brand name
     desc     : short description (English)
     desc_es  : Spanish description (optional — falls back to English)
     tags     : optional array ("New", "Best Seller", "Sale")
     stock    : "in" | "low" | "out"
     img      : optional image filename in /assets, else a placeholder shows
   ===================================================================== */

const CATEGORIES = [
  { slug: "vapes",       name: "Vapes & E-Liquids",   name_es: "Vapes y E-Líquidos",     icon: "💨" },
  { slug: "glass",       name: "Glass & Water Pipes",  name_es: "Pipas de Vidrio y Agua", icon: "🌿" },
  { slug: "hookah",      name: "Hookah & Shisha",      name_es: "Hookah y Shisha",        icon: "🪔" },
  { slug: "cbd",         name: "CBD & Delta",          name_es: "CBD y Delta",            icon: "🍃" },
  { slug: "kratom",      name: "Kratom & Botanicals",  name_es: "Kratom y Botánicos",     icon: "🌱" },
  { slug: "rolling",     name: "Rolling & Wraps",      name_es: "Papel y Envolturas",     icon: "📜" },
  { slug: "accessories", name: "Accessories",          name_es: "Accesorios",             icon: "⚙️" },
  { slug: "detox",       name: "Detox & Wellness",     name_es: "Detox y Bienestar",      icon: "🧪" },
];

const PRODUCTS = [
  // ---------- VAPES ----------
  { id: 1,  name: "Cloud Chaser Pod Kit",        category: "vapes",  price: 34.99, brand: "AltoVapor", desc: "Rechargeable pod system with adjustable airflow.", desc_es: "Sistema de pods recargable con flujo de aire ajustable.", tags: ["Best Seller"], stock: "in" },
  { id: 2,  name: "Frost Menthol E-Liquid 60ml", category: "vapes",  price: 21.99, brand: "IceLab",    desc: "Cool menthol blend, 3mg / 6mg nicotine options.", desc_es: "Mezcla de mentol fresco, opciones de 3mg / 6mg de nicotina.", tags: [], stock: "in" },
  { id: 3,  name: "Disposable 5000 Puff — Mango", category: "vapes", price: 14.99, brand: "PuffMax",   desc: "5000 puffs, mesh coil, mango ice flavor.", desc_es: "5000 caladas, resistencia de malla, sabor mango con hielo.", tags: ["New"], stock: "low" },
  { id: 4,  name: "Sub-Ohm Tank Mod Kit",        category: "vapes",  price: 59.99, brand: "VoltCore",  desc: "80W box mod with sub-ohm tank, full starter kit.", desc_es: "Mod de 80W con tanque sub-ohm, kit completo para empezar.", tags: [], stock: "in" },

  // ---------- GLASS ----------
  { id: 5,  name: "14\" Beaker Water Pipe",       category: "glass",  price: 79.99, brand: "HeavyGlass", desc: "5mm thick borosilicate beaker with ice catcher.", desc_es: "Pipa de agua de borosilicato de 5mm con atrapahielo.", tags: ["Best Seller"], stock: "in" },
  { id: 6,  name: "Mini Bubbler — Fumed",        category: "glass",  price: 29.99, brand: "HeavyGlass", desc: "Hand-blown color-changing fumed glass bubbler.", desc_es: "Bubbler de vidrio soplado a mano que cambia de color.", tags: [], stock: "in" },
  { id: 7,  name: "Silicone Unbreakable Rig",    category: "glass",  price: 24.99, brand: "FlexPipe",   desc: "Drop-proof silicone rig with glass bowl.", desc_es: "Rig de silicona a prueba de caídas con bowl de vidrio.", tags: ["Sale"], stock: "in" },
  { id: 8,  name: "Spoon Pipe — Color Swirl",    category: "glass",  price: 12.99, brand: "HeavyGlass", desc: "Classic hand pipe, assorted swirl colors.", desc_es: "Pipa de mano clásica, colores surtidos.", tags: [], stock: "low" },

  // ---------- HOOKAH ----------
  { id: 9,  name: "28\" 2-Hose Hookah Set",       category: "hookah", price: 64.99, brand: "Nile",      desc: "Full stainless setup with bowl, hoses, and tongs.", desc_es: "Set completo de acero inoxidable con bowl, mangueras y pinzas.", tags: [], stock: "in" },
  { id: 10, name: "Shisha 250g — Double Apple",  category: "hookah", price: 16.99, brand: "AlFakher",  desc: "Premium double apple molasses shisha.", desc_es: "Shisha premium sabor doble manzana.", tags: ["Best Seller"], stock: "in" },
  { id: 11, name: "Natural Coconut Coals",       category: "hookah", price: 11.99, brand: "CocoNara",   desc: "Long-burning natural coconut hookah coals, 1kg.", desc_es: "Carbones naturales de coco de larga duración, 1kg.", tags: [], stock: "in" },

  // ---------- CBD & DELTA ----------
  { id: 12, name: "CBD Tincture 1000mg",         category: "cbd",    price: 44.99, brand: "GreenPath", desc: "Full-spectrum hemp CBD oil, 30ml dropper.", desc_es: "Aceite de CBD de espectro completo, gotero de 30ml.", tags: [], stock: "in" },
  { id: 13, name: "Delta-8 Gummies 25ct",        category: "cbd",    price: 27.99, brand: "GreenPath", desc: "Assorted fruit, 25mg per piece. Lab tested.", desc_es: "Frutas surtidas, 25mg cada una. Probado en laboratorio.", tags: ["New"], stock: "in" },
  { id: 14, name: "CBD Relief Balm",             category: "cbd",    price: 22.99, brand: "GreenPath", desc: "Topical muscle & joint balm, 500mg.", desc_es: "Bálsamo tópico para músculos y articulaciones, 500mg.", tags: [], stock: "low" },

  // ---------- KRATOM ----------
  { id: 15, name: "Green Maeng Da Capsules",     category: "kratom", price: 24.99, brand: "BotaniLeaf", desc: "60 count, lab-tested green vein kratom.", desc_es: "60 cápsulas, kratom de vena verde probado en laboratorio.", tags: [], stock: "in" },
  { id: 16, name: "Red Bali Powder 250g",        category: "kratom", price: 29.99, brand: "BotaniLeaf", desc: "Finely milled red vein kratom powder.", desc_es: "Polvo de kratom de vena roja finamente molido.", tags: ["Best Seller"], stock: "in" },

  // ---------- ROLLING ----------
  { id: 17, name: "King Size Organic Papers",    category: "rolling", price: 3.99,  brand: "PureLeaf",  desc: "Unbleached organic hemp rolling papers.", desc_es: "Papel para liar de cáñamo orgánico sin blanquear.", tags: [], stock: "in" },
  { id: 18, name: "Pre-Rolled Cones 50pk",       category: "rolling", price: 9.99,  brand: "PureLeaf",  desc: "Ready-to-fill king size cones, 50 pack.", desc_es: "Conos king size listos para llenar, paquete de 50.", tags: [], stock: "in" },
  { id: 19, name: "Blunt Wraps — Variety 10pk",  category: "rolling", price: 7.99,  brand: "RollUp",    desc: "Assorted flavored wraps, 10 pack.", desc_es: "Envolturas de sabores surtidos, paquete de 10.", tags: ["Sale"], stock: "in" },

  // ---------- ACCESSORIES ----------
  { id: 20, name: "4-Piece Metal Grinder",       category: "accessories", price: 18.99, brand: "GrindPro", desc: "Aircraft aluminum, kief catcher included.", desc_es: "Aluminio de grado aeronáutico, con recolector de kief.", tags: ["Best Seller"], stock: "in" },
  { id: 21, name: "Torch Lighter — Windproof",   category: "accessories", price: 13.99, brand: "BlazeCo",  desc: "Refillable single-jet butane torch.", desc_es: "Encendedor de butano recargable a prueba de viento.", tags: [], stock: "in" },
  { id: 22, name: "Odor-Proof Storage Jar",      category: "accessories", price: 15.99, brand: "SealTight", desc: "UV-blocking airtight glass jar with lock lid.", desc_es: "Frasco de vidrio hermético con tapa de cierre y bloqueo UV.", tags: [], stock: "low" },
  { id: 23, name: "Rolling Tray — Large",        category: "accessories", price: 10.99, brand: "GrindPro", desc: "Metal tray with magnetic lid, large size.", desc_es: "Bandeja de metal con tapa magnética, tamaño grande.", tags: [], stock: "in" },

  // ---------- DETOX ----------
  { id: 24, name: "Same-Day Detox Drink",        category: "detox",  price: 29.99, brand: "CleanseNow", desc: "Fast-acting cleanse drink, tropical flavor.", desc_es: "Bebida desintoxicante de acción rápida, sabor tropical.", tags: [], stock: "in" },
  { id: 25, name: "7-Day Detox Program",         category: "detox",  price: 49.99, brand: "CleanseNow", desc: "Complete week-long herbal cleanse kit.", desc_es: "Kit completo de limpieza herbal para una semana.", tags: ["New"], stock: "in" },
];

/* Delivery zone: ZIP codes within the ~5-mile own-driver radius of the
   Southland Blvd store. Everything else routes to Uber delivery.
   >>> Replace with the owner's real delivery ZIPs when confirmed. <<< */
const DELIVERY_ZONE_ZIPS = [
  "32809", "32839", "32806", "32805", "32811",
  "32819", "32837", "32827", "32812", "32824",
];
