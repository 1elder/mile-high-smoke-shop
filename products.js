/* =====================================================================
   MILE HIGH SMOKE SHOP & CONVENIENCE — PRODUCT DATA
   Loaded from the shop's inventory (starter list — will be corrected with
   their final counts/prices). Names lightly cleaned; auto-categorized.
   Each product: id, name, category, price, ship (PACT: vapes/tobacco = false).
   ===================================================================== */

const CATEGORIES = [
  { slug: "vapes", name: "Vapes & E-Liquids", name_es: "Vapes y E-L\u00edquidos", icon: "", blurb: "Top brands, a huge range of flavors.", blurb_es: "Las mejores marcas, gran variedad de sabores." },
  { slug: "glass", name: "Glass & Pipes", name_es: "Vidrio y Pipas", icon: "", blurb: "Hand pipes to heady collector glass.", blurb_es: "Desde pipas hasta vidrio de colecci\u00f3n." },
  { slug: "rolling", name: "Rolling & Wraps", name_es: "Papel y Envolturas", icon: "", blurb: "Papers, wraps, cones and tips.", blurb_es: "Papel, blunts, conos y filtros." },
  { slug: "hookah", name: "Hookah & Shisha", name_es: "Hookah y Shisha", icon: "", blurb: "Hookahs, bowls, coals and shisha.", blurb_es: "Hookahs, cazoletas, carb\u00f3n y shisha." },
  { slug: "kratom", name: "Kratom & Botanicals", name_es: "Kratom y Bot\u00e1nicos", icon: "", blurb: "Botanicals and herbal blends.", blurb_es: "Bot\u00e1nicos y mezclas herbales." },
  { slug: "detox", name: "Detox & Cleanse", name_es: "Detox y Limpieza", icon: "", blurb: "Reset, cleanse and refresh.", blurb_es: "Reinicia, limpia y refresca." },
  { slug: "accessories", name: "Accessories", name_es: "Accesorios", icon: "", blurb: "Grinders, trays, torches and more.", blurb_es: "Grinders, bandejas, encendedores y m\u00e1s." },
  { slug: "convenience", name: "Convenience", name_es: "Conveniencia", icon: "", blurb: "The everyday essentials.", blurb_es: "Lo esencial del d\u00eda a d\u00eda." },
];

const PRODUCTS = [
  {id:1, name:"Banana Perc Dab Rig — Yellow", name_es:"Rig de Banana 7″ — Amarillo", category:"glass", price:25, ship:true, img:"products/g1.jpg", desc:"7\" · #3353", desc_es:"7\" · #3353", code:"3353"},
  {id:2, name:"Banana Perc Dab Rig — Teal", name_es:"Rig de Banana 7″ — Verde Azulado", category:"glass", price:25, ship:true, img:"products/g2.jpg", desc:"7\" · #3353", desc_es:"7\" · #3353", code:"3353"},
  {id:3, name:"Banana Perc Dab Rig — Orange", name_es:"Rig de Banana 7″ — Naranja", category:"glass", price:25, ship:true, img:"products/g3.jpg", desc:"7\" · #3353", desc_es:"7\" · #3353", code:"3353"},
  {id:4, name:"Christmas Snow Globe Rig", name_es:"Rig Bola de Nieve Navideño", category:"glass", price:40, ship:true, img:"products/g4.jpg", desc:"7\" · #9983", desc_es:"7\" · #9983", code:"9983"},
  {id:5, name:"Coil Perc Beaker Bong", name_es:"Bong Beaker con Perc Espiral", category:"glass", price:170, ship:true, img:"products/g5.jpg", desc:"16\" · #5692", desc_es:"16\" · #5692", code:"5692"},
  {id:6, name:"Green Beaker Bong", name_es:"Bong Beaker Verde", category:"glass", price:130, ship:true, img:"products/g6.jpg", desc:"17\" · #2279", desc_es:"17\" · #2279", code:"2279"},
  {id:7, name:"Green Recycler Rig", name_es:"Rig Reciclador Verde", category:"glass", price:130, ship:true, img:"products/g7.jpg", desc:"13\"", desc_es:"13\""},
  {id:8, name:"Blue Accent Beaker Bong", name_es:"Bong Beaker Azul", category:"glass", price:110, ship:true, img:"products/g8.jpg", desc:"18\" · #5662", desc_es:"18\" · #5662", code:"5662"},
  {id:9, name:"Blue Perc Straight Bong", name_es:"Bong Recto con Perc Azul", category:"glass", price:120, ship:true, img:"products/g9.jpg", desc:"16\" · #6408", desc_es:"16\" · #6408", code:"6408"},
  {id:10, name:"Llama Character Bong", name_es:"Bong Personaje Llama", category:"glass", price:80, ship:true, img:"products/g10.jpg", desc:"12\"", desc_es:"12\""},
  {id:11, name:"Glass Ash Catcher", name_es:"Atrapa-cenizas de Vidrio", category:"glass", price:35, ship:true, img:"products/g11.jpg", desc:"#1680", desc_es:"#1680", code:"1680"},
  {id:12, name:"Purple Base Art Bong", name_es:"Bong Artístico Base Púrpura", category:"glass", price:130, ship:true, img:"products/g12.jpg", desc:"12\" · #6926", desc_es:"12\" · #6926", code:"6926"},
  {id:13, name:"Ash Catcher", name_es:"Atrapa-cenizas", category:"glass", price:27, ship:true, img:"products/g13.jpg", brand:"Glass House"},
  {id:14, name:"Monster Mouth Bong — Red", name_es:"Bong Monstruo — Rojo", category:"glass", price:75, ship:true, img:"products/g14.jpg", desc:"10\" · #100272", desc_es:"10\" · #100272", code:"100272"},
  {id:15, name:"Monster Mouth Bong — Orange", name_es:"Bong Monstruo — Naranja", category:"glass", price:75, ship:true, img:"products/g15.jpg", desc:"10\" · #100272", desc_es:"10\" · #100272", code:"100272"},
  {id:16, name:"Green Accent Straight Bong", name_es:"Bong Recto Verde", category:"glass", price:110, ship:true, img:"products/g16.jpg", desc:"#10693", desc_es:"#10693", code:"10693"},
  {id:17, name:"Tall Straight Tube Bong 22″", name_es:"Bong Recto Alto 22″", category:"glass", price:200, ship:true, img:"products/g17.jpg", desc:"22\" · #5661", desc_es:"22\" · #5661", code:"5661"},
  {id:18, name:"Purple Accent Straight Bong", name_es:"Bong Recto Púrpura", category:"glass", price:135, ship:true, img:"products/g18.jpg", desc:"17\" · #6928", desc_es:"17\" · #6928", code:"6928"},
  {id:19, name:"Frosted Etched Recycler", name_es:"Reciclador Esmerilado", category:"glass", price:100, ship:true, img:"products/g19.jpg", desc:"12\" · #5664", desc_es:"12\" · #5664", code:"5664"},
  {id:20, name:"Frosted Etched Bong", name_es:"Bong Esmerilado", category:"glass", price:100, ship:true, img:"products/g20.jpg", desc:"10\" · #5663", desc_es:"10\" · #5663", code:"5663"},
  {id:21, name:"Space Design Hand Pipe", name_es:"Pipa de Mano Espacial", category:"glass", price:89, ship:true, img:"products/g21.jpg", desc:"6\" · #100406", desc_es:"6\" · #100406", code:"100406"},
  {id:22, name:"Monster Design Hand Pipe", name_es:"Pipa de Mano Monstruo", category:"glass", price:79, ship:true, img:"products/g22.jpg", desc:"6\" · #100403", desc_es:"6\" · #100403", code:"100403"},
  {id:23, name:"Amber Recycler Rig", name_es:"Rig Reciclador Ámbar", category:"glass", price:120, ship:true, img:"products/g23.jpg", desc:"13\" · #10700", desc_es:"13\" · #10700", code:"10700"},
  {id:24, name:"Tree Perc Straight Bong", name_es:"Bong Recto con Perc", category:"glass", price:125, ship:true, img:"products/g24.jpg", desc:"17\" · #2279", desc_es:"17\" · #2279", code:"2279"},
  {id:25, name:"Amber Accent Recycler", name_es:"Reciclador Ámbar", category:"glass", price:110, ship:true, img:"products/g25.jpg", desc:"13\" · #6930", desc_es:"13\" · #6930", code:"6930"},
  {id:26, name:"Tall Straight Tube Bong 20″", name_es:"Bong Recto Alto 20″", category:"glass", price:103, ship:true, img:"products/g26.jpg", desc:"20\" · #10696", desc_es:"20\" · #10696", code:"10696"},
  {id:27, name:"Clear Straight Bong", name_es:"Bong Recto", category:"glass", price:119, ship:true, img:"products/g27.jpg", desc:"17\" · #7787", desc_es:"17\" · #7787", code:"7787"},
  {id:28, name:"Green Recycler Rig", name_es:"Rig Reciclador Verde", category:"glass", price:120, ship:true, img:"products/g28.jpg", desc:"12\" · #6951", desc_es:"12\" · #6951", code:"6951"},
  {id:29, name:"Blue Perc Recycler", name_es:"Reciclador con Perc Azul", category:"glass", price:100, ship:true, img:"products/g29.jpg", desc:"13\" · #9808", desc_es:"13\" · #9808", code:"9808"},
  {id:30, name:"Bent Neck Bubbler", name_es:"Bong Cuello Curvo", category:"glass", price:100, ship:true, img:"products/g30.jpg", desc:"11\" · #5660", desc_es:"11\" · #5660", code:"5660"},
  {id:31, name:"Blue Base Beaker Bong", name_es:"Bong Beaker Base Azul", category:"glass", price:115, ship:true, img:"products/g31.jpg", desc:"#6934", desc_es:"#6934", code:"6934"},
  {id:32, name:"Blue Tree Perc Bong", name_es:"Bong con Perc Azul", category:"glass", price:124, ship:true, img:"products/g32.jpg", desc:"12\" · #7896", desc_es:"12\" · #7896", code:"7896"},
  {id:33, name:"Clear Perc Straight Bong", name_es:"Bong Recto con Perc", category:"glass", price:130, ship:true, img:"products/g33.jpg", desc:"17\" · #8974", desc_es:"17\" · #8974", code:"8974"},
  {id:34, name:"Green Straight Tube Bong", name_es:"Bong Recto Verde", category:"glass", price:129, ship:true, img:"products/g34.jpg", desc:"16\" · #6413", desc_es:"16\" · #6413", code:"6413"},
  {id:35, name:"Rainbow Recycler Rig", name_es:"Rig Reciclador Arcoíris", category:"glass", price:140, ship:true, img:"products/g35.jpg", desc:"14\" · #6937", desc_es:"14\" · #6937", code:"6937"},
  {id:36, name:"Green Dove Perc Bong", name_es:"Bong con Perc Verde", category:"glass", price:null, ship:true, img:"products/g36.jpg", desc:"#7896", desc_es:"#7896", code:"7896"},
  {id:37, name:"Green Straight Tube Bong", name_es:"Bong Recto Verde", category:"glass", price:115, ship:true, img:"products/g37.jpg", desc:"18\" · #7870", desc_es:"18\" · #7870", code:"7870"},
  {id:38, name:"Acrylic Straight Tube — Purple", name_es:"Tubo Acrílico — Púrpura", category:"glass", price:10, ship:true, img:"products/g38.jpg"},
  {id:39, name:"Acrylic Straight Tube — Rasta", name_es:"Tubo Acrílico — Rasta", category:"glass", price:10, ship:true, img:"products/g39.jpg"},
  {id:40, name:"Acrylic Straight Tube — Green", name_es:"Tubo Acrílico — Verde", category:"glass", price:10, ship:true, img:"products/g40.jpg"},
  {id:41, name:"Acrylic Beaker — Smoke", name_es:"Beaker Acrílico — Humo", category:"glass", price:8, ship:true, img:"products/g41.jpg"},
  {id:42, name:"Acrylic Beaker — Orange", name_es:"Beaker Acrílico — Naranja", category:"glass", price:8, ship:true, img:"products/g42.jpg"},
  {id:43, name:"Acrylic Beaker — White / Rasta", name_es:"Beaker Acrílico — Blanco / Rasta", category:"glass", price:12, ship:true, img:"products/g43.jpg"}
];

/* ~5-mile own-driver delivery zone ZIPs (placeholder — confirm with owner). */
const DELIVERY_ZONE_ZIPS = ["32809","32839","32806","32805","32811","32819","32837","32827","32812","32824"];
