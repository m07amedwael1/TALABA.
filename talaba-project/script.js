

/* ════════════════════════════════════════
   TALABA — MAIN APP
════════════════════════════════════════ */

/* ── ICONS
   SVG helpers للقلب والـ chat المستخدمة في الكروت
────────────────── */
const heartSVG = (on) => on
  ? '<i class="ph-fill ph-heart" style="font-size:14px;color:#fff"></i>'
  : '<i class="ph ph-heart" style="font-size:14px"></i>';

/* ── MOCK DATA
   بيانات المنتجات التجريبية — 60 منتج (used + new)
   كل منتج: id, condition, uni, college, seller, price, imgs, description
────────────────── */
var PRODUCTS = [
  /* ── USED ── */
  { id:'1',  condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'ahmed_k', phone:'201558891251',   price:180,  title:'Engineering Drawing Set — Full Kit',       img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80', imgs:['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80','https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=700&q=80'], description:'Complete drawing set including T-square, set squares, compass, and mechanical pencils. Used for 2 years, all pieces intact.' },
  { id:'2',  condition:'used', uni:'Mansoura University', college:'Medicine',        seller:'sara_m', phone:'201016155168',    price:350,  title:"Gray's Anatomy 41st Edition",               img:'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&q=80', imgs:['https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=700&q=80','https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80'], description:'41st edition, excellent condition. Light highlighting in chapters 1-5 only. Perfect for 1st and 2nd year students.' },
  { id:'3',  condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'omar_h', phone:'201558891251',    price:220,  title:'Scientific Calculator FX-991EX',            img:'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=400&q=80', imgs:['https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=700&q=80'], description:'Casio FX-991EX ClassWiz, 552 functions. Perfect working condition with original cover.' },
  { id:'4',  condition:'used', uni:'Mansoura University', college:'Dentistry',       seller:'nour_d', phone:'201558891251',    price:600,  title:'Dental Simulation Kit — 1st Year',          img:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80', imgs:['https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80','https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=700&q=80'], description:'Full simulation kit with typodont model and carving instruments. Sterilized and in great shape.' },
  { id:'5',  condition:'used', uni:'Mansoura University', college:'Pharmacy',    seller:'layla_k', phone:'201558891251',   price:130,  title:'Architecture Scale Model Kit',              img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80', imgs:['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80'], description:'Foam boards, balsa wood, acrylic paint, and basic tools. Enough for 2-3 projects.' },
  { id:'6',  condition:'used', uni:'Mansoura University', college:'Pharmacy',        seller:'mona_f', phone:'201098002037',    price:280,  title:'Pharmacy Reference Books Set (3 books)',    img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', imgs:['https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80'], description:'Clinical Pharmacology, Pharmacognosy, and Drug Interactions handbook. Lightly annotated.' },
  { id:'7',  condition:'used', uni:'Mansoura National University', college:'Computer Science',seller:'youssef_a', phone:'201021703468', price:160,  title:'CS Laptop Stand + Accessories Bundle',     img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', imgs:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80'], description:'Ergonomic laptop stand, USB hub, and wireless mouse. All items work perfectly.' },
  { id:'8',  condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'karim_s', phone:'201558891251',   price:90,   title:'Micro USB Oscilloscope Kit',               img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80', imgs:['https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80'], description:'DSO138 mini oscilloscope, assembled and calibrated. Comes with probes and USB cable.' },
  { id:'9',  condition:'used', uni:'Delta University', college:'Medicine',        seller:'hana_r', phone:'201016155168',    price:420,  title:"Netter's Atlas of Human Anatomy 7th Ed.",  img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80'], description:'Barely used, like new. No writing or highlights. A must-have for med students.' },
  { id:'10', condition:'used', uni:'Mansoura University', college:'Architecture',    seller:'dina_w', phone:'201558891251',    price:200,  title:'Rotring Isograph Technical Pen Set',       img:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80', imgs:['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80'], description:'Complete Rotring pen set with 3 nibs. Cleaned and working perfectly.' },
  { id:'11', condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'ali_m', phone:'201558891251',     price:150,  title:'Fluid Mechanics Textbook — Munson 8th Ed.', img:'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&q=80', imgs:['https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=700&q=80'], description:'Good condition with solved problems in margins. Great for Fluid Mechanics course.' },
  { id:'12', condition:'used', uni:'New Mansoura University', college:'Computer Science',seller:'reem_t', phone:'201021703468',    price:250,  title:'Algorithms Textbook — CLRS 4th Edition',   img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', imgs:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80'], description:'The bible of algorithms. Some highlighted sections. Excellent reference.' },
  { id:'13', condition:'used', uni:'Horus University', college:'Medicine',        seller:'amr_g', phone:'201016155168',     price:180,  title:'Robbins Pathology 10th Edition',           img:'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&q=80', imgs:['https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=700&q=80'], description:'Good condition. Essential pathology reference for 3rd year.' },
  { id:'14', condition:'used', uni:'Mansoura University', college:'Pharmacy',        seller:'salma_q', phone:'201098002037',   price:320,  title:'Stethoscope — Littmann Classic II',        img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', imgs:['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80'], description:'Used for one clinical year. In perfect working condition.' },
  { id:'15', condition:'used', uni:'Mansoura University', college:'Architecture',    seller:'tamer_b', phone:'201558891251',   price:95,   title:'Architectural Graphics by Ching',          img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80', imgs:['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80'], description:'The classic guide to architectural drawing. Clean copy.' },
  { id:'16', condition:'used', uni:'Delta University', college:'Engineering',     seller:'hesham_n', phone:'201558891251',  price:400,  title:'AutoCAD 2024 License — Student Edition',  img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80', imgs:['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80'], description:'1-year student license, 6 months remaining. Transferable.' },
  { id:'17', condition:'used', uni:'Mansoura University', college:'Dentistry',       seller:'nadia_l', phone:'201558891251',   price:550,  title:'Dental X-Ray Viewer Lightbox',             img:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80', imgs:['https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80'], description:'Slim LED lightbox for viewing X-rays. Works perfectly.' },
  { id:'18', condition:'used', uni:'Mansoura National University', college:'Computer Science',seller:'omar_f', phone:'201021703468',    price:300,  title:'Raspberry Pi 4 Model B — 4GB',            img:'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&q=80', imgs:['https://images.unsplash.com/photo-1553406830-ef2513450d76?w=700&q=80'], description:'With case, heat sinks, and power adapter. Used for one project.' },
  { id:'19', condition:'used', uni:'Mansoura University', college:'Medicine',        seller:'aya_k', phone:'201016155168',     price:200,  title:'Clinical Medicine Textbook — Kumar & Clark', img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80'], description:'9th edition. Good condition with some highlights.' },
  { id:'20', condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'tarek_z', phone:'201558891251',   price:75,   title:'Mechanics of Materials — Hibbeler 10th',   img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80', imgs:['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80'], description:'Very good condition. A few pencil marks, easily erased.' },
  /* ── NEW ── */
  { id:'21', condition:'new',  college:'Engineering',     seller:'Mansoura Bookshop',    price:272,  originalPrice:320, title:'Rotring 0.7mm Mechanical Pencil (2B, Pink)', img:'https://i.ibb.co/Y7S18t2N/617-Du6-WXx-AS-AC-SX679.jpg', imgs:['https://images.unsplash.com/photo-1568219656418-15c329312bf1?w=700&q=80','https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80'], description:'Brand new Staedtler professional set. Compass, ruling pen, set squares, scale ruler, carrying case.' },
  { id:'22', condition:'new',  college:'Medicine',        seller:'Medical Campus Store', price:890,  title:'Arduino Uno R3 Board', img:'https://i.ibb.co/Kp5DQ7cQ/61qz-Ld-Na-MPL-AC-UL480-FMwebp-QL65.webp', imgs:['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80'], description:'Faculty of Medicine recommended. 3-year warranty included.' },
  { id:'23', condition:'new',  college:'Engineering',     seller:'Mansoura Bookshop',    price:323,  originalPrice:380, title:'Rahala 22L Waterproof Laptop Backpack (USB Charging, 15.6”) – Black',         img:'https://i.ibb.co/S4XxGxsp/51gq-Omk-Cb-SL-AC-SX679.jpg', imgs:['https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=700&q=80'], description:'Sealed in box with 3-year warranty. Best calculator for exams.' },
  { id:'24', condition:'new',  college:'Architecture',    seller:'Art & Design Hub',     price:450,  title:'T-Square Ruler 120cm (ATS&A T511-KT1000)',           img:'https://i.ibb.co/0VZrNygd/51-Ai2y-Bs-R6-L-AC-SL1500.jpg', imgs:['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80'], description:'Professional alcohol-based markers. Dual tips, color chart, storage wallet.' },
  { id:'25', condition:'new',  college:'Pharmacy',        seller:'Medical Campus Store', price:520,  title:'Pharmacology Core Curriculum Pack',        img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80'], description:'Official curriculum pack. Textbook, clinical manual, MCQ practice book.' },
  { id:'26', condition:'new',  college:'Computer Science',seller:'Tech Campus Lab',      price:280,  title:'Arduino + Sensors Starter Kit',            img:'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&q=80', imgs:['https://images.unsplash.com/photo-1553406830-ef2513450d76?w=700&q=80'], description:'Arduino UNO with 30+ sensors, breadboard, jumper wires, and project manual.' },
  { id:'27', condition:'new',  college:'Dentistry',       seller:'Medical Campus Store', price:637,  originalPrice:750, title:'Dental Instruments Kit — Student Pack',   img:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80', imgs:['https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=700&q=80'], description:'Faculty approved kit for 1st year. Forceps, mirror, explorer, probe, scalers.' },
  { id:'28', condition:'new',  college:'Medicine',        seller:'Mansoura Bookshop',    price:195,  title:'Lab Coat + Accessories Bundle',            img:'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80', imgs:['https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=700&q=80'], description:'Official university lab coat with name badge holder, pen set, notebook.' },
  { id:'29', condition:'new',  college:'Engineering',     seller:'Tech Campus Lab',      price:480,  title:'Raspberry Pi 4 Starter Kit — Official',   img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80', imgs:['https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80'], description:'Official Raspberry Pi 4 4GB kit with case, power supply, and SD card.' },
  { id:'30', condition:'new',  college:'Architecture',    seller:'Art & Design Hub',     price:350,  title:'Architecture Model Building Kit',          img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80', imgs:['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80'], description:'Premium balsa wood, foam, acrylic sheets, glue, and tools for model building.' },
  { id:'31', condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'bassem_r', phone:'201558891251',  price:110,  title:'Thermodynamics — Cengel & Boles 8th Ed.',  img:'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=400&q=80', imgs:['https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=700&q=80'], description:'Good condition. Solved examples highlighted for quick reference.' },
  { id:'32', condition:'used', uni:'Mansoura University', college:'Computer Science',seller:'lina_s', phone:'201558891251',    price:190,  title:'Python Crash Course — 3rd Edition',        img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', imgs:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80'], description:'Clean copy. Perfect for beginners and intermediate programmers.' },
  { id:'33', condition:'used', uni:'Mansoura University', college:'Medicine',        seller:'fady_m', phone:'201558891251',    price:290,  title:'Pharmacology — Katzung 15th Edition',      img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80'], description:'Comprehensive pharmacology reference. Latest edition.' },
  { id:'34', condition:'used', uni:'Mansoura University', college:'Architecture',    seller:'rania_h', phone:'201558891251',   price:170,  title:'D.K. Ching — Form Space and Order',        img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80', imgs:['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80'], description:'Essential architecture theory book. Very clean condition.' },
  { id:'35', condition:'used', uni:'Mansoura University', college:'Pharmacy',        seller:'maha_e', phone:'201558891251',    price:240,  title:'Medicinal Chemistry Textbook',             img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', imgs:['https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80'], description:'Latest edition. Some pencil notes in margins.' },
  { id:'36', condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'khaled_f', phone:'201558891251',  price:340,  title:'Multimeter — Fluke 117 Digital',           img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80', imgs:['https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80'], description:'Professional grade multimeter. Barely used, excellent accuracy.' },
  { id:'37', condition:'used', uni:'Mansoura University', college:'Dentistry',       seller:'ola_s', phone:'201558891251',     price:480,  title:'Dental Phantom Head — Complete Setup',     img:'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80', imgs:['https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=700&q=80'], description:'Full phantom head with mount. Used for 1 year, great condition.' },
  { id:'38', condition:'used', uni:'Mansoura University', college:'Computer Science',seller:'ibrahim_a', phone:'201558891251', price:220,  title:'Clean Code — Robert C. Martin',           img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', imgs:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80'], description:'Lightly read copy. Essential for every CS student.' },
  { id:'39', condition:'used', uni:'Mansoura University', college:'Medicine',        seller:'nermeen_k', phone:'201558891251', price:310,  title:"Davidson's Principles of Medicine 24th",  img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80'], description:'Key clinical reference. Good condition, minimal markings.' },
  { id:'40', condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'sameh_t', phone:'201558891251',   price:260,  title:'Strength of Materials — Timoshenko',       img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80', imgs:['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80'], description:'Classic textbook. Well maintained with some pencil marks.' },
  { id:'41', condition:'new',  college:'Computer Science',seller:'Tech Campus Lab',      price:650,  title:'Arduino Mega 2560 Pro Bundle',             img:'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&q=80', imgs:['https://images.unsplash.com/photo-1553406830-ef2513450d76?w=700&q=80'], description:'Mega 2560, WiFi module, Bluetooth, 40+ sensors, full project manual.' },
  { id:'42', condition:'new',  college:'Engineering',     seller:'Mansoura Bookshop',    price:180,  title:'Engineering Graph Paper Pads (10 pcs)',    img:'https://images.unsplash.com/photo-1568219656418-15c329312bf1?w=400&q=80', imgs:['https://images.unsplash.com/photo-1568219656418-15c329312bf1?w=700&q=80'], description:'A3 & A4 grid, isometric, and cross-section pads. Official supply.' },
  { id:'43', condition:'new',  college:'Medicine',        seller:'Medical Campus Store', price:340,  title:'Clinical Examination Pocket Guide',        img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', imgs:['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80'], description:'Pocket guide for clinical examination techniques. Latest edition.' },
  { id:'44', condition:'new',  college:'Pharmacy',        seller:'Medical Campus Store', price:290,  title:'Clinical Pharmacy Practice Guide',         img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80'], description:'Official pharmacy practice textbook. Updated for current curriculum.' },
  { id:'45', condition:'new',  college:'Architecture',    seller:'Art & Design Hub',     price:520,  originalPrice:620, title:'Architectural Drawing Tools Pro Set',    img:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80', imgs:['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80'], description:'Professional-grade drawing instruments. Parallel ruler, templates, triangles, compass.' },
  { id:'46', condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'wael_d', phone:'201558891251',    price:130,  title:'Signal Processing Textbook — Oppenheim',  img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80', imgs:['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80'], description:'Standard DSP reference. Some highlighted sections.' },
  { id:'47', condition:'used', uni:'Mansoura University', college:'Computer Science',seller:'yasmine_n', phone:'201558891251', price:175,  title:'Operating Systems — Tanenbaum 4th Ed.',   img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', imgs:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80'], description:'Good condition OS textbook. Key concepts highlighted.' },
  { id:'48', condition:'used', uni:'Mansoura University', college:'Medicine',        seller:'mazen_a', phone:'201558891251',   price:260,  title:'Guyton Medical Physiology 14th Edition',   img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80'], description:'The definitive physiology reference. Clean condition with minimal marking.' },
  { id:'49', condition:'used', uni:'Mansoura University', college:'Pharmacy',        seller:'dalia_r', phone:'201558891251',   price:195,  title:'Organic Chemistry — Morrison & Boyd',      img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', imgs:['https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700&q=80'], description:'Classic organic chemistry reference. Well maintained.' },
  { id:'50', condition:'used', uni:'Mansoura University', college:'Architecture',    seller:'sherif_m', phone:'201558891251',  price:220,  title:'AutoCAD Architecture Drawing Bundle',      img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80', imgs:['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80'], description:'AutoCAD student license + architecture templates package.' },
  { id:'51', condition:'new',  college:'Engineering',     seller:'Tech Campus Lab',      price:750,  title:'Oscilloscope — Digital 2-Channel 50MHz',  img:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80', imgs:['https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80'], description:'New digital oscilloscope. 50MHz bandwidth, USB storage, ideal for labs.' },
  { id:'52', condition:'new',  college:'Medicine',        seller:'Medical Campus Store', price:450,  title:'Diagnostic Equipment Starter Pack',       img:'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&q=80', imgs:['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80'], description:'Otoscope, ophthalmoscope, blood pressure monitor. Faculty approved.' },
  { id:'53', condition:'new',  college:'Computer Science',seller:'Tech Campus Lab',      price:320,  title:'Wireless Mouse + Mechanical Keyboard Set', img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', imgs:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80'], description:'Logitech wireless mouse with mechanical TKL keyboard. Productivity bundle.' },
  { id:'54', condition:'new',  college:'Dentistry',       seller:'Medical Campus Store', price:280,  title:'Dental Wax Carving Kit — Professional',   img:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80', imgs:['https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=700&q=80'], description:'Full wax carving instrument set. Faculty of Dentistry approved.' },
  { id:'55', condition:'new',  college:'Architecture',    seller:'Art & Design Hub',     price:190,  title:'Letraset Pantone Marker Set — 24 Colors', img:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80', imgs:['https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=700&q=80'], description:'Professional Pantone markers for architectural rendering.' },
  { id:'56', condition:'used', uni:'Mansoura University', college:'Engineering',     seller:'hazem_k', phone:'201558891251',   price:85,   title:'Engineering Mathematics — Kreyszig 10th', img:'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80', imgs:['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80'], description:'Advanced engineering mathematics reference. Some pencil notes.' },
  { id:'57', condition:'used', uni:'Mansoura University', college:'Computer Science',seller:'nada_b', phone:'201558891251',    price:140,  title:'Database Design — Elmasri & Navathe 7th', img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80', imgs:['https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=700&q=80'], description:'Fundamentals of database systems. Key chapters highlighted.' },
  { id:'58', condition:'used', uni:'Mansoura University', college:'Medicine',        seller:'ghada_s', phone:'201558891251',   price:380,  title:'Harrison\'s Internal Medicine Vol. 1',     img:'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=700&q=80'], description:'The gold standard of internal medicine. Good condition.' },
  { id:'59', condition:'new',  college:'Engineering',     seller:'Mansoura Bookshop',    price:560,  title:'MATLAB Student License — 1 Year',         img:'https://images.unsplash.com/photo-1568219656418-15c329312bf1?w=400&q=80', imgs:['https://images.unsplash.com/photo-1568219656418-15c329312bf1?w=700&q=80'], description:'Official MathWorks student license with Simulink toolbox included.' },
  { id:'60', condition:'new',  college:'Pharmacy',        seller:'Medical Campus Store', price:410,  originalPrice:490, title:'Pharmaceutical Chemistry Lab Kit',       img:'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80', imgs:['https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80'], description:'Complete lab kit for pharmaceutical chemistry. Glassware, reagents, safety gear.' },
];

/* ── FILTER STATE
   كائن F — يحتفظ بحالة الفلاتر الحالية (condition, college, uni, sort, search)
────────────────── */
const F = {
  nav:        'all',     // 'all' | 'used' | 'new'
  condition:  '',        // '' | 'Used' | 'New'
  college:    '',
  uni:        '',        // '' = all universities
  sort:       'Recently added',
  search:     '',
};
const soldOut = new Set(['4', '17', '37']); // IDs marked as sold out

/* ── SORT
   وظائف الترتيب — toggleSort, setSort
────────────────── */
function toggleSort() { document.getElementById('sortSel').classList.toggle('open'); }
function setSort(label, el) {
  F.sort = label;
  var lbl = document.getElementById('sortLabel');
  if (lbl) lbl.textContent = label;
  document.querySelectorAll('#menuSort .simple-drop-opt').forEach(o => o.classList.remove('on'));
  if (el) el.classList.add('on');
  closeDrop('sortWrap');
  applyFilters();
}


/* Condition */
function setCond(val) {
  // toggle: click active one again to deselect
  F.condition = (F.condition === val) ? '' : val;
  document.getElementById('btnUsed').classList.toggle('active', F.condition === 'Used');
  document.getElementById('btnNew').classList.toggle('active',  F.condition === 'New' || F.condition === '');
  // show uni filter only when Used is selected
  var uniWrap = document.getElementById('uniWrap');
  if (uniWrap) uniWrap.style.display = (F.condition === 'Used') ? '' : 'none';
  applyFilters();
}

/* College */
function setCollege(val, el) {
  F.college = (val === 'All Colleges') ? '' : val;
  document.getElementById('valCollege').textContent = val;
  document.querySelectorAll('#menuCollege .simple-drop-opt').forEach(o => o.classList.remove('on'));
  if (el) el.classList.add('on');
  closeDrop('collegeWrap');
  applyFilters();
}

function setUni(val, el) {
  F.uni = (val === 'All Universities') ? '' : val;
  document.getElementById('valUni').textContent = val;
  document.querySelectorAll('#menuUni .simple-drop-opt').forEach(o => o.classList.remove('on'));
  if (el) el.classList.add('on');
  closeDrop('uniWrap');
  applyFilters();
}


/* Chips */
function renderChips(filtered) {
  document.getElementById('exploreCount').textContent = filtered.length;
}

/* ── FILTER LOGIC
   getFiltered() — يطبق كل الفلاتر على PRODUCTS ويرجع القائمة المفلترة
   applyFilters() — بيبني الكروت ويحدث الـ pagination
────────────────── */
function getFiltered() {
  // exclude sold-out products (stock === 0)
  let list = PRODUCTS.filter(p => { if (p.condition === 'new' && typeof p.stock !== 'undefined' && p.stock === 0) return false;
    const isSold = soldOut.has(p.id);
    if (F.nav === 'used' && p.condition !== 'used') return false;
    if (F.nav === 'new'  && p.condition !== 'new')  return false;
    if (F.condition && p.condition !== F.condition.toLowerCase()) return false;
    if (F.college  && p.college !== F.college) return false;
    // uni filter: used for explicit filter OR auto-filter by user's uni
    if (p.condition === 'used' && p.uni) {
      if (F.uni) {
        // user manually picked a uni
        if (p.uni !== F.uni) return false;
      } else {
        // auto: use user's uni if logged in
        var _u = window._authGetUser ? window._authGetUser() : null;
        var _userUni = _u ? (_u.uni || '') : '';
        if (_userUni && p.uni !== _userUni) return false;
      }
    }
    if (F.search && !p.title.toLowerCase().includes(F.search) && !p.college.toLowerCase().includes(F.search)) return false;
    return true;
  });

  if (F.sort === 'Price: Low to High')  list.sort((a,b) => a.price - b.price);
  if (F.sort === 'Price: High to Low')  list.sort((a,b) => b.price - a.price);
  return list;
}

/* ── PAGINATION
   عرض المنتجات على دفعات — buildSkeleton, renderCards, loadMore
────────────────── */
const PAGE_SIZE = 20;
let currentPage = 0;
let currentList = [];
var productMap = {};
PRODUCTS.forEach(p => productMap[p.id] = p);

const favs = new Set();

/* ── Persist favs to localStorage ── */
function _saveFavs() {
  try { localStorage.setItem('talaba_favs', JSON.stringify([...favs])); } catch(e) {}
}
function _restoreFavs() {
  try {
    var u = window._authGetUser ? window._authGetUser() : null;
    if (!u) return;
    var saved = JSON.parse(localStorage.getItem('talaba_favs') || '[]');
    saved.forEach(function(id) { favs.add(id); });
    updateHdrPips();
    // sync fav buttons on cards if visible
    saved.forEach(function(id) {
      var btn = document.getElementById('fav-' + id);
      if (btn) { btn.classList.add('saved'); btn.innerHTML = heartSVG(true); }
    });
  } catch(e) {}
}

function toggleFav(id, btn) {
  if (favs.has(id)) { favs.delete(id); btn.classList.remove('saved'); }
  else              { favs.add(id);    btn.classList.add('saved'); }
  btn.innerHTML = heartSVG(favs.has(id));
  updateHdrPips();
  _saveFavs();
}

function updateHdrPips() {
  const wc = favs.size;
  const wb = document.getElementById('wishBtn');
  const cb = document.getElementById('cartBtn');
  if (!wb) return;
  document.getElementById('wishPip').textContent = wc;
  wb.classList.toggle('has-items', wc > 0);
}

function applyFilters() {
  currentList = getFiltered();
  currentPage = 0;
  document.getElementById('cardsGrid').innerHTML = '';
  renderChips(currentList);

  // reset load more
  const lmBtn = document.getElementById('lmBtn');
  lmBtn.style.display = '';
  document.querySelectorAll('.all-loaded').forEach(el => el.remove());

  loadMore();
}

function buildSkeleton() {
  return '<div class="skel-card">'
    + '<div class="skel-img skeleton"></div>'
    + '<div class="skel-body">'
      + '<div class="skel-row">'
        + '<div class="skel-av skeleton"></div>'
        + '<div class="skel-line skeleton" style="width:55%"></div>'
        + '<div class="skel-line skeleton" style="width:18%;margin-left:auto"></div>'
      + '</div>'
      + '<div class="skel-title skeleton"></div>'
      + '<div class="skel-price skeleton"></div>'
      + '<div class="skel-btn skeleton"></div>'
    + '</div>'
  + '</div>';
}

function loadMore() {
  const btn   = document.getElementById('lmBtn');
  const grid  = document.getElementById('cardsGrid');
  const start = currentPage * PAGE_SIZE;
  const end   = Math.min(start + PAGE_SIZE, currentList.length);

  if (start >= currentList.length) {
    btn.style.display = 'none';
    return;
  }

  btn.classList.add('loading');
  const count = end - start;

  // Step 1 — show skeletons instantly
  const skelIds = [];
  for (let i = 0; i < count; i++) {
    const div = document.createElement('div');
    div.innerHTML = buildSkeleton();
    const skelEl = div.firstChild;
    const uid = 'skel-' + Date.now() + '-' + i;
    skelEl.dataset.skelId = uid;
    skelIds.push(uid);
    grid.appendChild(skelEl);
  }

  // Step 2 — replace each skeleton with real card after delay
  setTimeout(() => {
    const skelEls = Array.from(grid.querySelectorAll('[data-skel-id]'));
    currentList.slice(start, end).forEach((p, i) => {
      const skel = skelEls[i];
      if (!skel) return;
      const div = document.createElement('div');
      div.innerHTML = buildCard(p);
      const card = div.firstChild;
      card.style.opacity = '0';
      card.style.transform = 'translateY(6px)';
      card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
      grid.replaceChild(card, skel);
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });

    currentPage++;
    const shown = Math.min(currentPage * PAGE_SIZE, currentList.length);
    document.getElementById('lmShown').textContent  = shown;
    document.getElementById('lmTotal').textContent  = currentList.length;
    document.getElementById('lmBarFill').style.width = (shown / currentList.length * 100) + '%';
    btn.classList.remove('loading');

    if (shown >= currentList.length) {
      btn.style.display = 'none';
      const done = document.createElement('div');
      done.className = 'all-loaded';
      done.textContent = 'All items loaded';
      document.getElementById('loadmoreWrap').appendChild(done);
    }
  }, 600);
}

/* ── PRODUCT CARD
   buildCard(p) — يبني HTML كارت منتج واحد بالصورة والسعر والأكشن
────────────────── */
function buildCard(p) {
  const isNew  = p.condition === 'new';
  const isSold = p.condition === 'new' && soldOut.has(p.id);
  const discPct = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  const action = isSold ? ''
    : isNew
      ? '<button class="pcard-action pcard-action-buy" onclick="event.stopPropagation();addToCart(' + "'" + p.id + "'" + ')">Add to Cart</button>'
      : '<button class="pcard-action pcard-action-chat" onclick="event.stopPropagation();openWA(' + "'" + p.id + "'" + ')"><i class="ph ph-whatsapp-logo" style="font-size:14px"></i> Chat</button>';

  return '<div class="pcard" onclick="openPD(' + "'" + p.id + "'" + ')">'
    + '<div class="pcard-img">'
      + '<img src="' + p.img + '" alt="" loading="lazy"/>'
      + (discPct > 0 ? '<span class="pcard-disc-pill">-' + discPct + '%</span>' : '')
      + '<button class="pcard-fav' + (favs.has(p.id) ? ' saved' : '') + '" onclick="event.stopPropagation();toggleFav(' + "'" + p.id + "'" + ',this)">' + heartSVG(favs.has(p.id)) + '</button>'
    + '</div>'
    + '<div class="pcard-body">'

      + '<p class="pcard-name">' + p.title + '</p>'
      + '<div class="pcard-price-line">'
        + '<span class="pcard-price-val">' + p.price.toLocaleString() + '</span>'
        + '<span class="pcard-price-cur">EGP</span>'
        + (p.originalPrice ? '<span class="pcard-orig">' + p.originalPrice.toLocaleString() + ' EGP</span>' : '')
      + '</div>'
      + action
    + '</div>'
  + '</div>';
}

/* ── PRODUCT DETAIL PAGE
   openPD, closePD, fillPD — صفحة تفاصيل المنتج
   renderPDActions — أزرار الشراء أو التواصل حسب نوع المنتج
────────────────── */
function openPD(id) {
  const p = productMap[id];
  if (!p) return;
  document.querySelectorAll('.explore-wrap,.filter-section,.cards-wrap,.loadmore-wrap')
    .forEach(el => el.style.display = 'none');
  document.getElementById('pdPage').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
  fillPD(p);
}

function closePD() {
  document.getElementById('pdPage').style.display = 'none';
  document.querySelectorAll('.explore-wrap,.filter-section,.cards-wrap,.loadmore-wrap')
    .forEach(el => el.style.display = '');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

let pdFaved = false;
function fillPD(p) {
  const isNew = p.condition === 'new';
  const imgs  = p.imgs && p.imgs.length > 1 ? p.imgs : [p.img, p.img];

  // Gallery
  document.getElementById('pdMainImg').src = imgs[0];
  document.getElementById('pdMainImg').alt = p.title;
  document.getElementById('pdThumbs').innerHTML = imgs.map((src, i) =>
    '<div class="pd-thumb' + (i===0?' active':'') + '" onclick="switchThumb(this,\'' + src + '\')">'
    + '<img src="' + src + '" loading="lazy"/></div>'
  ).join('');

  // Seller
  document.getElementById('pdSellerAv').textContent   = p.seller[0].toUpperCase();
  document.getElementById('pdSellerName').textContent = isNew ? p.seller : '@' + p.seller;
  document.getElementById('pdBadge').textContent      = isNew ? 'New' : 'Used';

  // Title + description
  document.getElementById('pdTitle').textContent = p.title;
  document.getElementById('pdDesc').textContent  = p.description || 'No description provided.';

  // Price
  let priceHTML = '<span class="pd-price-label">Price</span>'
    + '<span class="pd-price-val">' + p.price.toLocaleString() + ' EGP</span>';
  if (p.originalPrice) {
    const pct = Math.round((1 - p.price / p.originalPrice) * 100);
    priceHTML += '<span class="pd-price-original">' + p.originalPrice.toLocaleString() + ' EGP</span>'
               + '<span class="pd-discount-badge">-' + pct + '%</span>';
  }
  document.getElementById('pdPriceBlock').innerHTML = priceHTML;

  // Actions
  renderPDActions(p, isNew);
}

function renderPDActions(p, isNew) {
  const saved = favs.has(p.id);
  const waClass = isNew ? '' : ' wa-save';
  const fillColor = saved ? (isNew ? '#334fef' : '#25D366') : 'none';
  const strokeColor = saved ? (isNew ? '#334fef' : '#25D366') : 'currentColor';
  const saveBtn = '<button class="pd-btn pd-btn-secondary' + (saved ? ' pd-btn-saved' : '') + waClass + '" id="pdFavBtn" onclick="togglePDFav(' + "'" + p.id + "'" + ')">'
    + '<i class="' + (saved ? 'ph-fill' : 'ph') + ' ph-heart" style="font-size:14px;color:' + strokeColor + '"></i>'
    + (saved ? ' Saved' : ' Save to wishlist') + '</button>';
  document.getElementById('pdActions').innerHTML = isNew
    ? '<button class="pd-btn pd-btn-primary" onclick="addToCart(' + "'" + p.id + "'" + ')"><i class="ph ph-shopping-cart" style="font-size:16px"></i> Buy Now</button>' + saveBtn
    : '<button class="pd-btn pd-btn-primary wa-btn" onclick="openWA(' + "'" + p.id + "'" + ')"><i class="ph ph-whatsapp-logo" style="font-size:16px"></i> Chat on WhatsApp</button>' + saveBtn;
}

function switchThumb(el, src) {
  document.querySelectorAll('.pd-thumb').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('pdMainImg').src = src;
}

function togglePDFav(id) {
  const p = productMap[id];
  if (!p) return;
  if (favs.has(id)) { favs.delete(id); }
  else              { favs.add(id); }
  // re-render save button
  const isNew = p.condition === 'new';
  renderPDActions(p, isNew);
  // sync card on grid if visible
  const cardFavBtn = document.getElementById('fav-' + id);
  if (cardFavBtn) {
    cardFavBtn.innerHTML = heartSVG(favs.has(id));
    cardFavBtn.classList.toggle('saved', favs.has(id));
  }
  updateHdrPips();
  _saveFavs();
}

/* ── HEADER PROFILE BUTTON
   hdrProfileClick — لو signed in يفتح Profile، لو لأ يفتح Auth
   updateHdrProfile — يحدث الأيقون والاسم في الهيدر بعد login/logout
────────────────── */
function hdrProfileClick() {
  var u = window._authGetUser ? window._authGetUser() : null;
  if (u) {
    openProfile();
  } else {
    openAuthModal();
  }
}

function updateHdrProfile() {
  var u = window._authGetUser ? window._authGetUser() : null;
  var ico   = document.getElementById('hdrProfileIco');
  var label = document.getElementById('hdrProfileLabel');
  if (!ico || !label) return;
  if (u) {
    if (u.avatar) {
      ico.style.display = 'none';
      var existing = document.getElementById('hdrProfileAvImg');
      if (!existing) {
        var img = document.createElement('img');
        img.id = 'hdrProfileAvImg';
        img.style.cssText = 'width:26px;height:26px;border-radius:50%;object-fit:cover;flex-shrink:0';
        ico.parentNode.insertBefore(img, ico);
      }
      document.getElementById('hdrProfileAvImg').src = u.avatar;
    } else {
      var old = document.getElementById('hdrProfileAvImg');
      if (old) old.remove();
      ico.style.display = '';
      ico.className = 'ph-fill ph-user-circle';
      ico.style.fontSize = '22px';
    }
    label.textContent = u.name.split(' ')[0];
    // auto-select user's university in filter
    if (u.uni && !F.uni) {
      F.uni = u.uni;
      var uniLabel = document.getElementById('valUni');
      if (uniLabel) uniLabel.textContent = u.uni;
      document.querySelectorAll('#menuUni .simple-drop-opt').forEach(function(o) {
        o.classList.toggle('on', o.textContent.trim() === u.uni ||
          (u.uni === 'Mansoura National University' && o.textContent.trim() === 'Mansoura National'));
      });
      applyFilters();
    }
  } else {
    var old2 = document.getElementById('hdrProfileAvImg');
    if (old2) old2.remove();
    ico.style.display = '';
    ico.className = 'ph ph-user';
    ico.style.fontSize = '18px';
    label.textContent = 'Sign In';
    // reset uni filter on logout
    F.uni = '';
    var uniLabel2 = document.getElementById('valUni');
    if (uniLabel2) uniLabel2.textContent = 'All Universities';
    document.querySelectorAll('#menuUni .simple-drop-opt').forEach(function(o) {
      o.classList.toggle('on', o.textContent.trim() === 'All Universities');
    });
    applyFilters();
  }
}


function toggleDrop(id) {
  const wrap = document.getElementById(id);
  if (!wrap) return;
  const isOpen = wrap.classList.contains('open');
  // close all first
  document.querySelectorAll('.simple-drop-wrap').forEach(w => w.classList.remove('open'));
  if (!isOpen) wrap.classList.add('open');
}
function closeDrop(id) {
  var el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
/* ── DROPDOWN CLOSE
   يغلق أي dropdown مفتوح لما تضغط برا
────────────────── */
document.addEventListener('click', function(e) {
  document.querySelectorAll('.simple-drop-wrap').forEach(w => {
    if (!e.target.closest('#' + w.id)) w.classList.remove('open');
  });
});


/* ── INIT
   تهيئة الصفحة — يحدد New كـ default ويعمل applyFilters
────────────────── */
F.condition = 'new'; // default New selected
applyFilters();

// Hide uni filter initially (only shown for Used)
(function() {
  var uniWrap = document.getElementById('uniWrap');
  if (uniWrap) uniWrap.style.display = 'none';
})();

// Pre-select user's university in uni filter
(function initUniFilter() {
  var u = window._authGetUser ? window._authGetUser() : null;
  if (!u || !u.uni) return;
  F.uni = u.uni;
  var label = document.getElementById('valUni');
  if (label) label.textContent = u.uni;
  // mark correct option as on
  document.querySelectorAll('#menuUni .simple-drop-opt').forEach(function(o) {
    o.classList.toggle('on', o.textContent.trim() === u.uni ||
      (u.uni === 'Mansoura National University' && o.textContent.trim() === 'Mansoura National'));
  });
})();

/* ════════════════════════════════════════════
   WISHLIST
   إدارة قائمة المحفوظات — favs Set، toggleFav، renderWL
════════════════════════════════════════════ */
function openWL() {
  document.querySelectorAll('.explore-wrap,.filter-section,.cards-wrap,.loadmore-wrap')
    .forEach(el => el.style.display = 'none');
  document.getElementById('pdPage').style.display  = 'none';
  document.getElementById('wlPage').style.display  = 'block';
  window.scrollTo({ top:0, behavior:'smooth' });
  renderWL();
}

function closeWL() {
  document.getElementById('wlPage').style.display = 'none';
  document.querySelectorAll('.explore-wrap,.filter-section,.cards-wrap,.loadmore-wrap')
    .forEach(el => el.style.display = '');
  window.scrollTo({ top:0, behavior:'smooth' });
}

function renderWL() {
  const grid  = document.getElementById('wlGrid');
  const empty = document.getElementById('wlEmpty');
  const items = PRODUCTS.filter(p => favs.has(p.id));
  document.getElementById('wlCount').textContent = items.length + ' item' + (items.length !== 1 ? 's' : '');
  if (!items.length) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  grid.innerHTML = items.map(p => buildCard(p)).join('');
}

/* Wire wishlist button in header */


/* ═══════════════════════════════════
   CART & CHECKOUT
═══════════════════════════════════ */
const cart = [];   // [{product, qty}]

/* ── Persist cart to localStorage ── */
function _saveCart() {
  try {
    var data = cart.map(function(x) { return { id: x.product.id, qty: x.qty }; });
    localStorage.setItem('talaba_cart', JSON.stringify(data));
  } catch(e) {}
}
function _restoreCart() {
  try {
    var u = window._authGetUser ? window._authGetUser() : null;
    if (!u) return;
    var saved = JSON.parse(localStorage.getItem('talaba_cart') || '[]');
    saved.forEach(function(item) {
      var p = productMap[item.id];
      if (!p) return;
      var existing = cart.find(function(x) { return x.product.id === item.id; });
      if (existing) { existing.qty = item.qty; }
      else          { cart.push({ product: p, qty: item.qty }); }
    });
    updateCartPip();
  } catch(e) {}
}

function cartTotal() {
  return cart.reduce((s, x) => s + x.product.price * x.qty, 0);
}

function addToCart(id) {
  const p = productMap[id];
  if (!p) return;
  const existing = cart.find(x => x.product.id === id);
  if (existing) { existing.qty++; }
  else          { cart.push({ product: p, qty: 1 }); }
  updateCartPip();
  showCartToast(p.title);
  _saveCart();
}

function removeFromCart(id) {
  const idx = cart.findIndex(x => x.product.id === id);
  if (idx !== -1) cart.splice(idx, 1);
  updateCartPip();
  renderCartBody();
  _saveCart();
}

function changeQty(id, delta) {
  const item = cart.find(x => x.product.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCartBody();
  _saveCart();
}

function updateCartPip() {
  const count = cart.reduce((s, x) => s + x.qty, 0);
  const btn   = document.getElementById('cartBtn');
  const pip   = document.getElementById('cartPip');
  if (pip) pip.textContent = count;
  if (btn) btn.classList.toggle('has-items', count > 0);
}

function showCartToast(title) {
  const t = document.createElement('div');
  t.style.cssText = 'position:fixed;bottom:28px;right:28px;background:var(--surface);border:1px solid var(--border2);color:var(--text);padding:14px 22px;border-radius:14px;font-size:14px;font-weight:500;z-index:9999;animation:toastUp 0.25s ease;white-space:nowrap;box-shadow:0 8px 32px rgba(0,0,0,0.12)';
  t.innerHTML = '<i class="ph-fill ph-check-circle" style="font-size:14px;color:#334fef;margin-right:7px;vertical-align:middle"></i> Added to cart';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2200);
}

/* pages */
const HOME_SELS = '.explore-wrap,.filter-section,.cards-wrap,.loadmore-wrap';

function hideAll() {
  document.querySelectorAll(HOME_SELS).forEach(el => el.style.display = 'none');
  document.getElementById('pdPage').style.display    = 'none';
  document.getElementById('wlPage').style.display    = 'none';
  document.getElementById('cartPage').style.display  = 'none';
  document.getElementById('checkoutPage').style.display = 'none';
  document.getElementById('profilePage').style.display  = 'none';
  var dp = document.getElementById('dashPage'); if(dp) dp.style.display = 'none';
}
function showHome() {
  hideAll();
  document.querySelectorAll(HOME_SELS).forEach(el => el.style.display = '');
  window.scrollTo({ top:0, behavior:'smooth' });
}

function openCart() {
  hideAll();
  document.getElementById('cartPage').style.display = 'block';
  window.scrollTo({ top:0, behavior:'smooth' });
  renderCartBody();
}

function closeCart() { showHome(); }

function renderCartBody() {
  const el = document.getElementById('cartBody');

  if (!cart.length) {
    el.innerHTML = '<div class="cart-empty">'
      + '<i class="ph ph-shopping-cart" style="font-size:56px;margin-bottom:16px;display:block"></i>'
      + '<h3>Your cart is empty</h3>'
      + '<p>Add new products from vendors to get started</p>'
      + '<button class="co-btn-main" style="width:auto;padding:0 28px;margin:28px auto 0" onclick="showHome()">Browse Products</button>'
      + '</div>';
    return;
  }

  const total    = cartTotal();
  const shipping = 50;

  const items = cart.map(x => `
    <div class="cart-item">
      <img class="cart-item-img" src="${x.product.img}" alt="${x.product.title}"/>
      <div class="cart-item-info">
        <div class="cart-item-title">${x.product.title}</div>
        <div class="cart-item-seller">${x.product.seller}</div>
        <div class="cart-item-price">${(x.product.price * x.qty).toLocaleString()} EGP</div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="changeQty('${x.product.id}',-1)">−</button>
          <span class="qty-num">${x.qty}</span>
          <button class="qty-btn" onclick="changeQty('${x.product.id}',1)">+</button>
          <button class="cart-rm" onclick="removeFromCart('${x.product.id}')" title="Remove" style="margin-left:auto">
            <i class="ph ph-trash" style="font-size:15px"></i>
          </button>
        </div>
      </div>
    </div>`).join('');

  const summary = `
    <div class="order-summary">
      <h3>Order Summary</h3>
      <div class="sum-row"><span>Subtotal (${cart.reduce((s,x)=>s+x.qty,0)} items)</span><span>${total.toLocaleString()} EGP</span></div>
      <div class="sum-row"><span>Shipping</span><span>${shipping} EGP</span></div>
      <div class="sum-divider"></div>
      <div class="sum-total"><span>Total</span><span>${(total + shipping).toLocaleString()} EGP</span></div>
      <button class="co-btn-main" onclick="openCheckout()"><i class="ph ph-arrow-right" style="margin-left:6px"></i> Proceed to Checkout</button>
      <button class="co-btn-ghost" onclick="showHome()">Continue Shopping</button>
    </div>`;

  el.innerHTML = `<div class="cart-layout"><div>${items}</div>${summary}</div>`;
}

/* ════════════════════════════════════════════
   CART & CHECKOUT
   cart array، إضافة/حذف منتجات، صفحة الدفع، تأكيد الأوردر
════════════════════════════════════════════ */
let payMethod = 'cod';

function openCheckout() {
  if (!cart.length) { showHome(); return; }
  hideAll();
  document.getElementById('checkoutPage').style.display = 'block';
  window.scrollTo({ top:0, behavior:'smooth' });
  renderCheckout();
}

function closeOrderSuccess() {
  document.getElementById('orderSuccessOverlay').classList.remove('open');
  document.body.style.overflow = '';
  cart.length = 0;
  updateCartPip();
  try { localStorage.removeItem('talaba_cart'); } catch(e) {}
  showHome();
}

function renderCheckout() {
  const el = document.getElementById('checkoutBody');
  const u  = window._authGetUser ? window._authGetUser() : null;
  const total    = cartTotal();
  const shipping = 50;

  const nameParts = u ? u.name.trim().split(' ') : ['', ''];
  const firstName = nameParts[0] || '';
  const lastName  = nameParts.slice(1).join(' ') || '';
  const phone     = u ? (u.phone || '') : '';

  const orderItems = cart.map(x => `
    <div class="co-order-item">
      <img src="${x.product.img}" alt="${x.product.title}"/>
      <span class="co-order-nm">${x.product.title} × ${x.qty}</span>
      <span class="co-order-pr">${(x.product.price * x.qty).toLocaleString()} EGP</span>
    </div>`).join('');

  const codSel = payMethod === 'cod' ? 'selected' : '';

  el.innerHTML = `<div class="checkout-layout">
    <div>
      <div class="co-block">
        <div class="co-block-title"><span class="co-step">1</span> Delivery Info</div>
        <div class="co-form-row">
          <div class="co-field"><label>First Name</label><input id="coFirstName" value="${firstName}"/></div>
          <div class="co-field"><label>Last Name</label><input id="coLastName" value="${lastName}"/></div>
        </div>
        <div class="co-field"><label>Phone</label><input id="coPhone" value="${phone}"/></div>
        <div class="co-field"><label>Address</label><input id="coAddress" value=""/></div>
      </div>
      <div class="co-block">
        <div class="co-block-title"><span class="co-step">2</span> Payment Method</div>
        <div class="pay-opts">
          <div class="pay-opt ${codSel}" onclick="payMethod='cod';renderCheckout()">
            <div class="pay-opt-ico">
              <i class="ph ph-money" style="font-size:18px"></i>
            </div>
            <div class="pay-opt-info"><strong>Cash on Delivery</strong><span>Pay when you receive</span></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="order-summary" style="position:sticky;top:90px">
        <h3>Order Summary</h3>
        ${orderItems}
        <div class="sum-divider"></div>
        <div class="sum-row"><span>Subtotal</span><span>${total.toLocaleString()} EGP</span></div>
        <div class="sum-row"><span>Shipping</span><span>${shipping} EGP</span></div>
        <div class="sum-divider"></div>
        <div class="sum-total"><span>Total</span><span>${(total+shipping).toLocaleString()} EGP</span></div>
        <button class="co-btn-main" onclick="confirmPlaceOrder()">Place Order</button>
      </div>
    </div>
  </div>`;
}

function confirmPlaceOrder() {
  // validate required fields
  var fields = [
    { id: 'coFirstName', label: 'First Name' },
    { id: 'coLastName',  label: 'Last Name' },
    { id: 'coPhone',     label: 'Phone' },
    { id: 'coAddress',   label: 'Address' },
  ];
  var missing = false;
  fields.forEach(function(f) {
    var el = document.getElementById(f.id);
    if (!el) return;
    if (!el.value.trim()) {
      el.style.borderColor = '#e94560';
      missing = true;
      setTimeout(function() { el.style.borderColor = ''; }, 2000);
    }
  });
  if (missing) return;

  vdConfirm(
    'Confirm Order',
    'Are you sure you want to place this order?',
    'Place Order',
    '#334fef',
    function() { placeOrder(); }
  );
}

function placeOrder() {
  var firstName = (document.getElementById('coFirstName')||{value:''}).value.trim();
  var lastName  = (document.getElementById('coLastName') ||{value:''}).value.trim();
  var phone     = (document.getElementById('coPhone')    ||{value:''}).value.trim();
  var address   = (document.getElementById('coAddress')  ||{value:''}).value.trim();
  var buyerName = [firstName, lastName].filter(Boolean).join(' ') || 'Guest';

  cart.forEach(function(x) {
    var order = {
      id:      '#' + (1000 + Math.floor(Math.random()*9000)),
      item:    x.product.title,
      qty:     x.qty,
      price:   x.product.price * x.qty,
      buyer:   buyerName,
      phone:   phone || '—',
      address: [firstName, lastName, address].filter(Boolean).join(', ') || '—',
      seller:  x.product.seller || x.product.sellerName || '',
      status:  'pending',
      date:    new Date().toLocaleString('en-EG',{hour:'2-digit',minute:'2-digit',hour12:true}) || 'Just now',
    };
    _vdOrders.unshift(order);
  });

  document.getElementById('orderSuccessOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* wire cart header button */

/* add @keyframes for toast */
const toastStyle = document.createElement('style');
toastStyle.textContent = '@keyframes toastUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }';
document.head.appendChild(toastStyle);


/* ════════════════════════════════════════════
   AUTH MODAL
   IIFE معزولة — تسجيل الدخول، إنشاء حساب، استعادة الـ session
   تعرض 3 steps: اختيار الدور ← اختيار الجامعة ← بيانات الحساب
════════════════════════════════════════════ */
(function() {
  let _step = 1;      // 1 = role, 2 = form
  let _role = '';     // 'student' | 'vendor'
  let _mode = 'register'; // 'register' | 'signin'
  let _uni  = '';   // university
  let _user = null;

  /* public open */
  window.openAuthModal = function() {
    _step = 1; _role = ''; _uni = ''; _mode = 'register';
    document.getElementById('authOverlay').classList.add('open');
    _render();
  };

  window.closeAuthModal = function() {
    document.getElementById('authOverlay').classList.remove('open');
  };

  /* close on overlay click — deferred so DOM is ready */
  window.addEventListener('load', function() {
    var ov = document.getElementById('authOverlay');
    if (ov) ov.addEventListener('click', function(e) {
      if (e.target === ov) window.closeAuthModal();
    });
  });

  function _render() {
    const body = document.getElementById('authModalBody');
    if      (_step === 1)  { body.innerHTML = _step1(); }
    else if (_step === 1.5){ body.innerHTML = _step1b(); }
    else if (_step === 3)  { body.innerHTML = _step3(); }
    else                   { body.innerHTML = _step2(); }
  }

  const UNIS = [
    'Mansoura University',
    'Mansoura National University',
    'New Mansoura University',
    'Horus University',
    'Delta University',
    'Salab Institute',
  ];

  function _step1() {
    const s   = _role === 'student' ? ' selected' : '';
    const v   = _role === 'vendor'  ? ' selected' : '';
    const dis = _role ? '' : ' disabled';
    return `
      <div class="auth-progress">
        <div class="auth-progress-dot active"></div>
        <div class="auth-progress-dot"></div>
        <div class="auth-progress-dot"></div>
      </div>
      <div class="auth-modal-title">Who are you?</div>
      <div class="auth-modal-sub">Choose your role to get started</div>
      <div class="auth-role-grid">
        <div class="auth-role-card${s}" onclick="_authPickRole('student')">
          <div class="auth-role-card-ico"><i class="ph ph-graduation-cap" style="font-size:28px"></i></div>
          <div class="auth-role-card-title">Student / Graduate</div>
          <div class="auth-role-card-sub">Buy &amp; sell used tools</div>
        </div>
        <div class="auth-role-card${v}" onclick="_authPickRole('vendor')">
          <div class="auth-role-card-ico"><i class="ph ph-storefront" style="font-size:28px"></i></div>
          <div class="auth-role-card-title">Vendor</div>
          <div class="auth-role-card-sub">Sell new products</div>
        </div>
      </div>
      <button class="auth-main-btn"${dis} onclick="_authNext()">Continue</button>
    `;
  }

  function _step1b() {
    const dis = _uni ? '' : ' disabled';
    return `
      <div class="auth-progress">
        <div class="auth-progress-dot active"></div>
        <div class="auth-progress-dot active"></div>
        <div class="auth-progress-dot"></div>
      </div>
      <div class="auth-modal-title">Your university</div>
      <div class="auth-modal-sub">Select your university so we can show relevant listings</div>
      <div class="auth-uni-list">
        ${UNIS.map(u => `<div class="auth-uni-opt${_uni===u?' selected':''}" onclick="_authPickUni('${u}')">${u}</div>`).join('')}
      </div>
      <button class="auth-main-btn"${dis} style="margin-top:16px" onclick="_authNext2()">Continue</button>
    `;
  }

  function _step2() {
    const isSI = _mode === 'signin';
    const extraField = isSI ? '' : `
      <div class="auth-field">
        <label>Full Name</label>
        <input id="_authName" value="${_role === 'vendor' ? 'Tech Campus Lab' : 'Ahmed Mohamed'}" placeholder="Full name"/>
      </div>
      <div class="auth-field">
        <label>Phone / WhatsApp</label>
        <input id="_authPhone" type="tel" value="201001234567" placeholder="201XXXXXXXXX"/>
      </div>`;
    const switchTxt = isSI
      ? `No account? <a onclick="_authSwitchMode()">Register</a>`
      : `Already registered? <a onclick="_authSwitchMode()">Sign in</a>`;
    return `
      <div class="auth-progress">
        <div class="auth-progress-dot active"></div>
        <div class="auth-progress-dot active"></div>
      </div>
      <div class="auth-modal-title">${isSI ? 'Welcome back' : 'Create account'}</div>
      <div class="auth-modal-sub">${isSI ? 'Sign in to your Talaba account' : 'Join as a ' + _role}</div>
      <button class="auth-google-btn" onclick="_authGoogle()">
        <svg width="17" height="17" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 7 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.6z"/>
          <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 12 24 12c3.1 0 5.8 1.1 8 2.9l5.7-5.7C34.5 7 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
          <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2 14-5.3l-6.5-5.5C29.6 35 26.9 36 24 36c-5.2 0-9.6-3.4-11.2-8l-6.5 5c3.3 6.5 10.1 11 17.7 11z"/>
          <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.5l6.5 5.5C37.2 37.4 44 32 44 24c0-1.3-.1-2.6-.4-4z"/>
        </svg>
        Continue with Google
      </button>
      <div class="auth-divider">or</div>
      ${extraField}
      <div class="auth-field"><label>Email</label><input id="_authEmail" type="email" value="${isSI ? 'ahmed@mansoura.edu.eg' : (_role === 'vendor' ? 'store@gmail.com' : 'ahmed@mansoura.edu.eg')}" placeholder="you@university.edu"/></div>
      <div class="auth-field"><label>Password</label><input id="_authPass" type="password" value="Test1234!" placeholder="••••••••"/></div>
      <button class="auth-main-btn" onclick="_authSubmit()">${isSI ? 'Sign In' : 'Create Account'}</button>
      <div class="auth-footer-txt">${switchTxt}</div>
    `;
  }

  function _step3() {
    return `
      <div class="auth-progress">
        <div class="auth-progress-dot active"></div>
        <div class="auth-progress-dot active"></div>
        <div class="auth-progress-dot active"></div>
      </div>
      <div class="auth-modal-title">Almost there!</div>
      <div class="auth-modal-sub">Add your WhatsApp number so buyers can contact you</div>
      <div class="auth-field">
        <label>Phone / WhatsApp</label>
        <input id="_authGooglePhone" type="tel" value="201001234567" placeholder="201XXXXXXXXX"/>
      </div>
      <button class="auth-main-btn" onclick="_authFinishGoogle()">Complete Registration</button>
    `;
  }

  window._authPickRole = function(role) {
    _role = role; _render();
  };
  window._authNext  = function() { _step = (_role === 'vendor') ? 2 : 1.5; _render(); };
  window._authNext2 = function() { _step = 2;   _render(); };
  window._authPickUni = function(uni) { _uni = uni; _render(); };
  window._authSwitchMode = function() {
    _mode = _mode === 'signin' ? 'register' : 'signin'; _render();
  };
  window._authGoogle = function() {
    _step = 3; _render();
  };
  window._authFinishGoogle = function() {
    const phoneEl = document.getElementById('_authGooglePhone');
    const phone   = phoneEl ? phoneEl.value.trim() : '';
    if (!phone) {
      if (phoneEl) { phoneEl.style.borderColor = '#e94560'; setTimeout(function(){ phoneEl.style.borderColor = ''; }, 2000); }
      return;
    }
    _finish({ name: _role === 'vendor' ? 'My Store' : 'Ahmed Mohamed', role: _role, uni: _uni, phone: phone, email: '' });
  };
  window._authSubmit = function() {
    var ok = true;
    function _err(id) { var el=document.getElementById(id); if(el){el.style.borderColor='#e94560';setTimeout(function(){el.style.borderColor='';},2000);} ok=false; }

    const emailEl = document.getElementById('_authEmail');
    const passEl  = document.getElementById('_authPass');
    const email   = emailEl ? emailEl.value.trim() : '';
    const pass    = passEl  ? passEl.value.trim()  : '';

    if (!email) _err('_authEmail');
    if (!pass)  _err('_authPass');

    if (_mode === 'register') {
      const nameEl  = document.getElementById('_authName');
      const phoneEl = document.getElementById('_authPhone');
      const name    = nameEl  ? nameEl.value.trim()  : '';
      const phone   = phoneEl ? phoneEl.value.trim() : '';
      if (!name)  _err('_authName');
      if (!phone) _err('_authPhone');
      if (!ok) return;
      _finish({ name, role: _role, uni: _uni, phone, email });
    } else {
      if (!ok) return;
      _finish({ name: 'Ahmed Mohamed', role: _role || 'student', uni: _uni || 'Mansoura University', phone: '201001234567', email });
    }
  };

  function _finish(user) {
    _user = user;
    window._authGetUser    = function() { return _user; };
    window._authUpdateName = function(name) { if (_user) _user.name = name; };
    window._authLogout = function() {
      _user = null;
      window._authGetUser = function() { return null; };
      try {
        localStorage.removeItem('talaba_session');
        localStorage.removeItem('talaba_cart');
        localStorage.removeItem('talaba_favs');
      } catch(e) {}
      // clear in-memory cart and favs
      cart.length = 0;
      favs.clear();
      updateCartPip();
      updateHdrPips();
      if (typeof closeDash === 'function') closeDash();
      if (typeof closeProfile === 'function') closeProfile();
      if (typeof showHome === 'function') showHome();
      if (typeof updateHdrProfile === 'function') updateHdrProfile();
    };
    // persist session
    try { localStorage.setItem('talaba_session', JSON.stringify(_user)); } catch(e) {}
    window.closeAuthModal();
    _updateHeader();
  }

  // Restore session on page load
  (function _restoreSession() {
    try {
      var saved = localStorage.getItem('talaba_session');
      if (!saved) return;
      var u = JSON.parse(saved);
      if (!u || !u.name) return;
      _user = u;
      window._authGetUser    = function() { return _user; };
      window._authUpdateName = function(name) { if (_user) _user.name = name; };
      window._authLogout = function() {
        _user = null;
        window._authGetUser = function() { return null; };
        try {
          localStorage.removeItem('talaba_session');
          localStorage.removeItem('talaba_cart');
          localStorage.removeItem('talaba_favs');
        } catch(e) {}
        cart.length = 0;
        favs.clear();
        updateCartPip();
        updateHdrPips();
        if (typeof closeDash === 'function') closeDash();
        if (typeof closeProfile === 'function') closeProfile();
        if (typeof showHome === 'function') showHome();
        if (typeof updateHdrProfile === 'function') updateHdrProfile();
      };
      // update header after DOM ready
      if (document.readyState === 'loading') {
        window.addEventListener('load', function() {
          if (typeof updateHdrProfile === 'function') updateHdrProfile();
          if (typeof _restoreCart    === 'function') _restoreCart();
          if (typeof _restoreFavs   === 'function') _restoreFavs();
        });
      } else {
        if (typeof updateHdrProfile === 'function') updateHdrProfile();
        if (typeof _restoreCart    === 'function') _restoreCart();
        if (typeof _restoreFavs   === 'function') _restoreFavs();
      }
    } catch(e) {}
  })();

  function _updateHeader() {
    if (typeof updateHdrProfile === 'function') updateHdrProfile();
    // restore cart & wishlist from localStorage after login
    if (typeof _restoreCart === 'function') _restoreCart();
    if (typeof _restoreFavs === 'function') _restoreFavs();
  }


})();


/* ════════════════════════════════════════════
   PROFILE PAGE
   عرض وتعديل بيانات المستخدم — اسم، تليفون، إيميل
   تغيير الباسورد، رفع صورة، حذف الحساب
════════════════════════════════════════════ */
function openProfile() {
  var u = window._authGetUser ? window._authGetUser() : null;
  if (!u) { openAuthModal(); return; }
  hideAll();
  document.getElementById('profilePage').style.display = 'block';
  window.scrollTo({ top:0, behavior:'smooth' });
  renderProfileData();
}

function closeProfile() {
  document.getElementById('profilePage').style.display = 'none';
  showHome();
}

function renderProfileData() {
  var u    = window._authGetUser ? window._authGetUser() : null;
  var name = u ? u.name : 'Ahmed Mohamed';
  var email= u ? (u.email || 'ahmed@mansoura.edu.eg') : 'ahmed@mansoura.edu.eg';
  var uni  = u ? (u.uni || 'Mansoura University') : 'Mansoura University';
  var role = u ? u.role : 'student';
  var parts = name.trim().split(' ');
  var initials = ((parts[0]||'')[0]||'') + ((parts[1]||'')[0]||'');

  // Update left card
  document.getElementById('profileAvInitials').textContent  = initials.toUpperCase();
  document.getElementById('profileDisplayName').textContent = name;
  var uniEl = document.getElementById('profileUniDisplay');
  if (uniEl) uniEl.innerHTML = '<i class="ph ph-buildings" style="font-size:12px"></i> ' + uni;

  var badge = document.getElementById('profileRoleBadge');
  if (badge) badge.innerHTML = (role === 'vendor'
    ? '<i class="ph ph-storefront" style="font-size:12px"></i> Vendor'
    : '<i class="ph ph-graduation-cap" style="font-size:12px"></i> Student');

  document.getElementById('profileListingsCount').textContent = role === 'vendor' ? _vdOrders ? _vdOrders.length : '0' : _myListings ? _myListings.length : '0';
  document.getElementById('profileSavedCount').textContent    = window.favs ? window.favs.size : '0';

  // Render form area based on role
  var area = document.getElementById('profileFormArea');
  if (!area) return;

  if (role === 'vendor') {
    area.innerHTML = renderVendorProfileForm(name, email, uni);
    buildVdLogoZone();
  } else {
    area.innerHTML = renderStudentProfileForm(name, email, uni);
  }
}

function pField(label, id, type, value, placeholder, full) {
  var cls = 'profile-field' + (full ? ' profile-field-full' : '');
  var inp = type === 'select'
    ? '<select id="' + id + '">'
      + ['Mansoura University','Mansoura National University','New Mansoura University','Horus University','Delta University','Salab Institute'].map(function(o){
          return '<option' + (o===value?' selected':'') + '>' + o + '</option>';
        }).join('')
      + '</select>'
    : type === 'college-select'
    ? '<select id="' + id + '">'
      + ['Engineering','Medicine','Dentistry','Architecture','Pharmacy','Computer Science','Others'].map(function(o){
          return '<option' + (o===value?' selected':'') + '>' + o + '</option>';
        }).join('')
      + '</select>'
    : '<input id="' + id + '" type="' + (type||'text') + '" value="' + (value||'') + '" placeholder="' + (placeholder||'') + '"/>';
  return '<div class="' + cls + '"><label>' + label + '</label>' + inp + '</div>';
}

function pfSaveToast() {
  return '<div style="display:flex;align-items:center;margin-top:18px">'
    + '<button class="profile-save-btn" onclick="saveProfileInfo()">Save Changes</button>'
    + '<span class="profile-toast" id="infoToast"><i class="ph-fill ph-check-circle" style="font-size:13px"></i> Saved!</span>'
    + '</div>';
}

function pfSection(iconPath, title, body) {
  return '<div class="profile-section">'
    + '<div class="profile-section-title">'
    + '<i class="ph ' + iconPath + '" style="font-size:15px"></i>'
    + title + '</div>' + body + '</div>';
}

function pfPasswordSection() {
  return pfSection(
    'ph-lock',
    'Change Password',
    '<div class="profile-form-row">'
    + pField('Current Password','pfOldPass','password','','••••••••',true)
    + pField('New Password','pfNewPass','password','','••••••••')
    + pField('Confirm Password','pfConfPass','password','','••••••••')
    + '</div>'
    + '<div id="pfNewPassWrap" style="grid-column:1/-1"><div class="pw-strength" style="margin-top:-8px;margin-bottom:12px"><div class="pw-strength-fill" id="pwFill"></div></div></div>'
    + '<div style="display:flex;align-items:center;margin-top:4px">'
    + '<button class="profile-save-btn" onclick="savePassword()">Update Password</button>'
    + '<span class="profile-toast" id="passToast"><i class="ph-fill ph-check-circle" style="font-size:13px"></i> Updated!</span>'
    + '</div>'
  );
}

function pfDangerSection() {
  return '<div class="profile-section" style="border-color:rgba(233,69,96,0.12)">'
    + '<div class="profile-section-title" style="color:#e94560">'
    + '<i class="ph ph-warning" style="font-size:15px"></i>'
    + 'Danger Zone</div>'
    + '<p style="font-size:13px;color:#555;margin-bottom:16px;line-height:1.6">Deleting your account is permanent. All your data will be removed.</p>'
    + '<button class="profile-danger-btn" onclick="deleteAccount()">Delete Account</button>'
    + '</div>';
}

/* ── STUDENT form ── */
function renderStudentProfileForm(name, email, uni) {
  var parts = name.trim().split(' ');
  return pfSection(
    'ph-user',
    'Personal Information',
    '<div class="profile-form-row">'
    + pField('First Name', 'pfFirstName', 'text', parts[0]||'', 'First name')
    + pField('Last Name',  'pfLastName',  'text', parts.slice(1).join(' ')||'', 'Last name')
    + pField('Email (Gmail)', 'pfEmail', 'email', email, 'your@gmail.com', false)
    + pField('Phone', 'pfPhone', 'text', '+20 100 123 4567', '+20 1XX XXX XXXX')
    + pField('College / Faculty', 'pfCollege', 'college-select', 'Engineering')
    + '</div>'
    + pfSaveToast()
  )
  + pfPasswordSection()
  + pfDangerSection();
}

/* ── VENDOR form ── */
function renderVendorProfileForm(name, email, uni) {
  return pfSection(
    'ph-storefront',
    'Store Information',
    '<div class="profile-form-row">'
    + '<div class="profile-field profile-field-full" id="vdLogoFieldWrap"><label>Store Logo</label></div>'
    + pField('Store Name',  'pfStoreName', 'text', name, 'e.g. MedKit Store', true)
    + pField('Email (Gmail)', 'pfEmail', 'email', email, 'store@gmail.com')
    + pField('Phone / WhatsApp', 'pfPhone', 'text', '+20 100 123 4567', '+20 1XX XXX XXXX')
    + pField('Store Address', 'pfAddress', 'text', '', 'Street, City', true)
    + pField('Specialization', 'pfSpec', 'college-select', 'Engineering')
    + '</div>'
    + pfSaveToast()
  )
  + pfPasswordSection()
  + pfDangerSection();
}


/* Build logo upload zone for vendor after form renders */
function buildVdLogoZone() {
  var wrap = document.getElementById('vdLogoFieldWrap');
  if (!wrap) return;

  var zone = document.createElement('div');
  zone.id = 'vdLogoZone';
  zone.style.cssText = 'border:1.5px dashed var(--border2);border-radius:12px;padding:16px;cursor:pointer;display:flex;align-items:center;gap:14px;transition:border-color 0.15s';
  zone.onmouseover = function(){ this.style.borderColor='#334fef'; };
  zone.onmouseout  = function(){ this.style.borderColor='var(--border2)'; };

  var preview = document.createElement('div');
  preview.id = 'vdLogoPreview';
  preview.style.cssText = 'width:48px;height:48px;border-radius:10px;background:var(--surface2);display:flex;align-items:center;justify-content:center;flex-shrink:0';
  preview.innerHTML = '<i class="ph ph-camera" style="font-size:20px;color:#444"></i>';

  var txt = document.createElement('div');
  txt.innerHTML = '<div style="font-size:13px;color:#334fef;font-weight:600">Upload store logo</div><div style="font-size:11px;color:#444;margin-top:3px">PNG, JPG — shown on your listings</div>';

  var fileInp = document.createElement('input');
  fileInp.type = 'file'; fileInp.id = 'vdLogoFile'; fileInp.accept = 'image/*'; fileInp.style.display = 'none';
  fileInp.onchange = function() { handleVdLogo(this); };

  zone.onclick = function(){ fileInp.click(); };
  zone.appendChild(preview); zone.appendChild(txt);
  wrap.appendChild(zone); wrap.appendChild(fileInp);
}

function handleVdLogo(input) {
  if (!input.files||!input.files[0]) return;
  var r = new FileReader();
  r.onload = function(e) {
    var src = e.target.result;
    // update logo preview in form
    var preview = document.getElementById('vdLogoPreview');
    if (preview) preview.innerHTML = '<img src="'+src+'" style="width:48px;height:48px;object-fit:cover;border-radius:10px"/>';
    // update profile avatar (left card)
    var av = document.getElementById('profileAv');
    if (av) {
      av.style.background = 'none';
      var existing = av.querySelector('img.av-logo');
      if (!existing) { existing = document.createElement('img'); existing.className = 'av-logo'; av.insertBefore(existing, av.firstChild); }
      existing.src = src;
      existing.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;position:absolute;inset:0';
    }
  };
  r.readAsDataURL(input.files[0]);
}

/* also wire pw strength to dynamic input */
document.addEventListener('input', function(e) {
  if (e.target && e.target.id === 'pfNewPass') checkPwStrength(e.target.value);
});


function saveProfileInfo() {
  var u    = window._authGetUser ? window._authGetUser() : null;
  var role = u ? u.role : 'student';

  // collect values
  var name, phone, email;
  if (role === 'vendor') {
    name  = (document.getElementById('pfStoreName')||{}).value || '';
    phone = (document.getElementById('pfPhone')||{}).value || '';
    email = (document.getElementById('pfEmail')||{}).value || '';
  } else {
    var first = (document.getElementById('pfFirstName')||{}).value || '';
    var last  = (document.getElementById('pfLastName') ||{}).value || '';
    name  = (first + ' ' + last).trim();
    phone = (document.getElementById('pfPhone')||{}).value || '';
    email = (document.getElementById('pfEmail')||{}).value || '';
  }
  if (!name) return;

  vdConfirm(
    'Save changes?',
    'Are you sure you want to update your profile information?',
    'Save',
    '#334fef',
    function() {
      // update display name
      document.getElementById('profileDisplayName').textContent = name;
      var parts    = name.trim().split(' ');
      var initials = ((parts[0]||'')[0]||'') + ((parts[1]||'')[0]||'');
      document.getElementById('profileAvInitials').textContent = initials.toUpperCase();


      // update auth user object
      if (u) {
        u.name  = name;
        u.phone = phone;
        u.email = email;
        // persist updated session
        try { localStorage.setItem('talaba_session', JSON.stringify(u)); } catch(e) {}
      }
      if (window._authUpdateName) window._authUpdateName(name);

      // update vendor product listings in PRODUCTS array (in memory)
      if (role === 'vendor' && u) {
        var sellerKey = u.id || u.name;
        PRODUCTS.forEach(function(p) {
          if (p.seller === sellerKey || p.sellerName === sellerKey) {
            p.sellerName = name;
            p.phone = phone;
          }
        });
      }

      showProfileToast('infoToast');
    }
  );
}

function savePassword() {
  var np = document.getElementById('pfNewPass').value;
  var cp = document.getElementById('pfConfPass').value;
  if (!np) return;
  if (np !== cp) {
    document.getElementById('pfConfPass').style.borderColor = '#e94560';
    setTimeout(() => document.getElementById('pfConfPass').style.borderColor = '', 2000);
    return;
  }
  document.getElementById('pfOldPass').value = '';
  document.getElementById('pfNewPass').value = '';
  document.getElementById('pfConfPass').value = '';
  document.getElementById('pwFill').style.width = '0%';
  showProfileToast('passToast');
}

function showProfileToast(id) {
  var t = document.getElementById(id);
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

function checkPwStrength(pw) {
  var fill = document.getElementById('pwFill');
  var score = 0;
  if (pw.length >= 8)  score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  var pct   = [0, 25, 50, 75, 100][score];
  var color = ['', '#e94560', '#f59e0b', '#3772ff', '#22c55e'][score];
  fill.style.width      = pct + '%';
  fill.style.background = color;
}

function handleProfileImg(input) {
  if (!input.files || !input.files[0]) return;
  var reader = new FileReader();
  reader.onload = function(e) {
    var src = e.target.result;

    // 1. Update profile avatar (left card)
    var av = document.getElementById('profileAv');
    if (av) {
      av.style.background = 'none';
      var img = av.querySelector('img') || document.createElement('img');
      img.src = src;
      img.style.cssText = 'width:100%;height:100%;object-fit:cover;border-radius:50%;position:absolute;inset:0';
      av.insertBefore(img, av.firstChild);
      // hide initials span
      var initSpan = document.getElementById('profileAvInitials');
      if (initSpan) initSpan.style.display = 'none';
    }

    // 2. Update header avatar button

    // 3. Save to session so it persists
    var u = window._authGetUser ? window._authGetUser() : null;
    if (u) {
      u.avatar = src;
      try { localStorage.setItem('talaba_session', JSON.stringify(u)); } catch(e) {}
    }
  };
  reader.readAsDataURL(input.files[0]);
}

// _authGetUser is set inside the IIFE after login


/* ════════════════════════════════════════════
   STUDENT DASHBOARD
   داشبورد الطالب — رفع أداة مستعملة، عرض وحذف المنشورات
════════════════════════════════════════════ */
var _myListings = [];


function closeDash() {
  document.getElementById('dashPage').style.display = 'none';
  showHome();
}

function renderDashForm() {
  var form = document.getElementById('dashForm');
  form.innerHTML = '';

  // Upload zone
  var zone = document.createElement('div');
  zone.className = 'dash-upload-zone';
  zone.id = '_dzoneEl';
  zone.innerHTML = '<i class="ph ph-camera" style="font-size:28px"></i><div class="upl-label">Upload product photo</div><div class="upl-sub">JPG, PNG up to 10MB</div>';
  form.appendChild(zone);

  // Hidden file input
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.id   = '_dimg';
  fileInput.accept = 'image/*';
  fileInput.style.display = 'none';
  form.appendChild(fileInput);

  // Click zone → trigger file input
  zone.addEventListener('click', function() { fileInput.click(); });

  // On file selected → show preview in zone
  fileInput.addEventListener('change', function() {
    var file = this.files && this.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(e) {
      zone.innerHTML = '<img src="' + e.target.result + '" style="width:100%;height:100%;object-fit:cover;border-radius:10px"/>'
        + '<div class="upl-sub" style="margin-top:6px">' + file.name + '</div>';
      // store data URL for later use
      zone.dataset.imgData = e.target.result;
    };
    reader.readAsDataURL(file);
  });

  // Title
  var titleWrap = document.createElement('div');
  titleWrap.className = 'dash-sf-field';
  titleWrap.innerHTML = '<label>Tool Title *</label><input id="_dtitle" placeholder="e.g. Engineering Drawing Set"/>';
  form.appendChild(titleWrap);

  // Description
  var descWrap = document.createElement('div');
  descWrap.className = 'dash-sf-field';
  descWrap.innerHTML = '<label>Description</label><textarea id="_ddesc" placeholder="Describe the condition, what is included..."></textarea>';
  form.appendChild(descWrap);

  // Price
  var priceWrap = document.createElement('div');
  priceWrap.className = 'dash-sf-field';
  priceWrap.innerHTML = '<label>Price (EGP) *</label><input id="_dprice" type="number" placeholder="0"/>';
  form.appendChild(priceWrap);

  // College
  var colWrap = document.createElement('div');
  colWrap.className = 'dash-sf-field';
  colWrap.innerHTML = '<label>College Category</label><select id="_dcollege"><option>Engineering</option><option>Medicine</option><option>Dentistry</option><option>Architecture</option><option>Pharmacy</option><option>Computer Science</option></select>';
  form.appendChild(colWrap);

  // Submit btn
  var btn = document.createElement('button');
  btn.className = 'dash-list-btn';
  btn.textContent = 'List Product';
  btn.addEventListener('click', dashSubmitListing);
  form.appendChild(btn);
}

function dashSubmitListing() {
  var title  = (document.getElementById('_dtitle')  || {}).value || '';
  var price  = parseInt((document.getElementById('_dprice')  || {}).value) || 0;
  var desc   = (document.getElementById('_ddesc')   || {}).value || '';
  var col    = (document.getElementById('_dcollege')|| {}).value || 'Engineering';
  var zone = document.getElementById('_dzoneEl');
  var imgurl = (zone && zone.dataset.imgData) || '';

  title = title.trim();
  if (!title || !price) {
    if (!title) document.getElementById('_dtitle').style.borderColor = '#e94560';
    if (!price) document.getElementById('_dprice').style.borderColor = '#e94560';
    setTimeout(function() {
      document.getElementById('_dtitle').style.borderColor = '';
      document.getElementById('_dprice').style.borderColor = '';
    }, 1800);
    return;
  }

  var user = window._authGetUser ? window._authGetUser() : null;
  var sellerKey  = user ? (user.id || user.name) : 'anonymous';
  var sellerName = user ? user.name : 'Anonymous';
  var phone      = user ? (user.phone || '') : '';

  var newProd = {
    condition:   'used',
    uni:         user ? (user.uni || '') : '',
    seller:      sellerKey,
    sellerName:  sellerName,
    phone:       phone,
    title:       title,
    description: desc,
    price:       price,
    college:     col,
    img:         imgurl || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
    imgs:        imgurl ? [imgurl] : [],
    status:      'active',
    id:          'u_' + Date.now(),
  };
  PRODUCTS.unshift(newProd);
  productMap[newProd.id] = newProd;
  _myListings.unshift(newProd);

  // reset form fields
  ['_dtitle','_dprice','_ddesc'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });

  // reset file input
  var fileInput = document.getElementById('_dimg');
  if (fileInput) fileInput.value = '';

  // reset upload zone back to original state
  var zone = document.getElementById('_dzoneEl');
  if (zone) {
    zone.dataset.imgData = '';
    zone.innerHTML = '<i class="ph ph-camera" style="font-size:28px"></i><div class="upl-label">Upload product photo</div><div class="upl-sub">JPG, PNG up to 10MB</div>';
  }

  applyFilters();
  renderDashProducts();
}

function renderDashProducts() {
  var user = window._authGetUser ? window._authGetUser() : null;
  var sellerKey = user ? (user.id || user.name) : '';
  var list = PRODUCTS.filter(function(p){ return p.condition === 'used' && (p.seller === sellerKey || p.sellerName === sellerKey); });
  _myListings = list;
  document.getElementById('dashProdTitle').textContent = 'Your Listed Products (' + list.length + ')';
  var el = document.getElementById('dashProdList');

  if (!list.length) {
    el.innerHTML = '<div class="dash-prod-empty">'
      + '<i class="ph ph-package" style="font-size:52px;margin:0 auto 14px;display:block;text-align:center"></i>'
      + '<p>No products listed yet. Add your first tool!</p></div>';
    return;
  }

  var table = document.createElement('table');
  table.className = 'dash-prod-table';
  table.innerHTML = '<thead><tr><th>Item</th><th>Price</th><th>College</th><th>Status</th><th></th></tr></thead>';
  var tbody = document.createElement('tbody');

  list.forEach(function(p) {
    var tr = document.createElement('tr');

    // image cell
    var tdItem = document.createElement('td');
    var wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;gap:9px';
    if (p.img) {
      var img = document.createElement('img');
      img.src = p.img;
      img.style.cssText = 'width:36px;height:36px;border-radius:8px;object-fit:cover;flex-shrink:0';
      img.onerror = function() { this.style.display = 'none'; };
      wrap.appendChild(img);
    }
    var titleSpan = document.createElement('span');
    titleSpan.className = 'dprod-title';
    titleSpan.textContent = p.title;
    wrap.appendChild(titleSpan);
    tdItem.appendChild(wrap);

    var tdPrice = document.createElement('td');
    tdPrice.className = 'dprod-price';
    tdPrice.textContent = p.price.toLocaleString() + ' EGP';

    var tdCol = document.createElement('td');
    tdCol.textContent = p.college;

    var tdStatus = document.createElement('td');
    var badge = document.createElement('span');
    badge.className = 'dprod-status ' + (p.status === 'active' ? 'dprod-active' : 'dprod-pending');
    badge.textContent = p.status === 'active' ? 'Active' : 'Pending';
    tdStatus.appendChild(badge);

    var tdAction = document.createElement('td');
    var delBtn = document.createElement('button');
    delBtn.className = 'dprod-del';
    delBtn.title = 'Delete';
    delBtn.innerHTML = '<i class="ph ph-trash" style="font-size:14px"></i>';
    delBtn.onclick = (function(id) { return function() { dashDeleteListing(id); }; })(p.id);
    tdAction.appendChild(delBtn);

    tr.appendChild(tdItem);
    tr.appendChild(tdPrice);
    tr.appendChild(tdCol);
    tr.appendChild(tdStatus);
    tr.appendChild(tdAction);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  el.innerHTML = '';
  el.appendChild(table);
}


function dashDeleteListing(id) {
  var p = productMap[id];
  var title = p ? p.title : 'this product';
  vdConfirm('Delete product?', 'Are you sure you want to remove "' + title + '"?', 'Delete', '#e94560', function() {
    // Remove from PRODUCTS array
    var idx = PRODUCTS.findIndex(function(x) { return x.id === id; });
    if (idx > -1) PRODUCTS.splice(idx, 1);
    // Remove from productMap
    delete productMap[id];
    // Remove from _myListings
    _myListings = _myListings.filter(function(x) { return x.id !== id; });
    // Re-render
    renderDashProducts();
    applyFilters();
  });
}


/* ════════════════════════════════════════
   VENDOR DASHBOARD JS
════════════════════════════════════════ */

/* ── VENDOR PRODUCTS SYNC
   _vdOrders — قائمة أوردرات البائع (بتتملي من placeOrder)
   _myListings — منتجات البائع الحالي فقط
────────────────── */
/* New products added by vendor are pushed into PRODUCTS so they appear on home */
var _vdOrders = [
  { id:'#1047', item:'Casio FX-991EX ClassWiz', buyer:'Ahmed Khaled',   phone:'+20 100 123 4567', address:'Faculty of Engineering, Room 204', qty:1, price:380, status:'pending', date:'Today, 11:02 AM' },
  { id:'#1046', item:'Pro Drawing Set — Staedtler', buyer:'Sara Mahmoud', phone:'+20 101 234 5678', address:'Architecture Faculty, Block B',   qty:1, price:272, status:'pending', date:'Today, 10:44 AM' },
  { id:'#1045', item:'Arduino Starter Kit',    buyer:'Karim Ashraf',   phone:'+20 102 345 6789', address:'CS Lab, Building 3, Floor 2',      qty:2, price:560, status:'pending', date:'Today, 9:15 AM'  },
  { id:'#1044', item:'Medical Stethoscope 3M', buyer:'Omar Hassan',    phone:'+20 103 456 7890', address:'Medicine Faculty, Clinic Wing',    qty:1, price:890, status:'pending', date:'Yesterday, 6:30 PM' },
  { id:'#1043', item:'Lab Coat + Accessories', buyer:'Nour Dalia',     phone:'+20 104 567 8901', address:'Pharmacy Building, Block C',       qty:2, price:390, status:'done',    date:'Yesterday, 2:10 PM' },
  { id:'#1042', item:'Casio FX-991EX ClassWiz', buyer:'Layla Hassan',  phone:'+20 105 678 9012', address:'Faculty of Engineering, Gate 1',   qty:1, price:380, status:'done',    date:'Apr 11'          },
  { id:'#1041', item:'Sketch Markers — 60 Colors', buyer:'Reem Tarek', phone:'+20 106 789 0123', address:'Architecture Studio, 3rd Floor',  qty:1, price:450, status:'done',    date:'Apr 10'          },
  { id:'#1040', item:'Raspberry Pi 4 Kit',    buyer:'Hassan Zaki',    phone:'+20 107 890 1234', address:'CS Department, Server Room',       qty:1, price:480, status:'done',    date:'Apr 9'           },
  { id:'#1039', item:'Lab Coat Bundle',       buyer:'Maya Sami',      phone:'+20 108 901 2345', address:'Pharmacy Building, Lab 2',         qty:3, price:585, status:'done',    date:'Apr 7'           },
  { id:'#1038', item:'Dental Instruments Kit', buyer:'Fares Hamdi',   phone:'+20 109 012 3456', address:'Dentistry Faculty, Sim Lab',       qty:1, price:637, status:'done',    date:'Apr 5'           },
];
var _vdSection = 'overview';
var _vdEditId  = null;
var _vdSearch  = '';

/* Get vendor's own products from the main PRODUCTS list */
function vdMyProducts() {
  var u = window._authGetUser ? window._authGetUser() : null;
  var sellerName = u ? u.name : '';
  return PRODUCTS.filter(function(p) {
    return p.condition === 'new' && p.seller === sellerName;
  });
}

/* ── VENDOR SIDEBAR NAV ICONS
   vdSVG + VD_ICO — أيقونات قائمة البائع الجانبية
────────────────── */
var VD_ICO = {
  overview:  'ph-squares-four',
  products:  'ph-package',
  orders:    'ph-bag',
  exit:      'ph-sign-out',
  home:      'ph-house',
};
function vdSVG(path, size) {
  return '<i class="ph ' + path + '" style="font-size:'+(size||15)+'px"></i>';
}

/* ── VENDOR SIDEBAR
   vdRenderSidebar — يبني الـ sidebar بالأقسام والـ profile info
   vdGo — التنقل بين أقسام الداشبورد
────────────────── */
function vdRenderSidebar() {
  var u    = window._authGetUser ? window._authGetUser() : null;
  var name = u ? u.name : 'Vendor';
  var uni  = u ? (u.uni  || '') : '';
  var init = name.split(' ').map(function(w){return w[0]||'';}).join('').slice(0,2).toUpperCase();
  var pending = _vdOrders.filter(function(o){return o.status==='pending';}).length;

  var html = '<div class="vd-sb-profile">'
    + '<div class="vd-sb-av">'+init+'</div>'
    + '<div><div class="vd-sb-name">'+name+'</div><div class="vd-sb-role">Vendor'+(uni?' · '+uni:'')+'</div></div>'
    + '</div>';

  var navs = [
    { id:'overview', label:'Overview'  },
    { id:'products', label:'Products'  },
    { id:'orders',   label:'Orders', badge: pending },
  ];
  navs.forEach(function(n) {
    var on = _vdSection === n.id ? ' on' : '';
    html += '<button class="vd-nav'+on+'" onclick="vdGo(\''+n.id+'\')">'
      + vdSVG(VD_ICO[n.id])
      + n.label
      + (n.badge ? '<span class="vd-nav-pip">'+n.badge+'</span>' : '')
      + '</button>';
  });

  html += '<div class="vd-nav-sep"></div>'
    + '<button class="vd-nav" onclick="closeDash();applyFilters()">'+vdSVG(VD_ICO.home)+' Back to Home</button>'
    + '<button class="vd-nav danger" onclick="window._authLogout&&window._authLogout();closeDash()">'+vdSVG(VD_ICO.exit)+' Logout</button>';

  document.getElementById('vdSidebar').innerHTML = html;
}

function vdGo(section) {
  vdCloseSidebar();
  _vdSection = section;
  vdRenderSidebar();
  var content = document.getElementById('vdContent');
  content.innerHTML = '';
  /* Sync tabs */
  document.querySelectorAll('.vd-tab').forEach(function(t) {
    t.classList.toggle('on', t.getAttribute('data-section') === section);
  });
  if      (section === 'overview') vdRenderOverview(content);
  else if (section === 'products') vdRenderProducts(content);
  else if (section === 'orders')   vdRenderOrders(content);
}

function vdTabClick(section, btn) {
  document.querySelectorAll('.vd-tab').forEach(function(t) { t.classList.remove('on'); });
  btn.classList.add('on');
  vdGo(section);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── VENDOR OVERVIEW
   vdRenderOverview — يعرض analytics cards والأوردرات الأخيرة
────────────────── */
function vdRenderOverview(el) {
  el.innerHTML = '';
  var u = window._authGetUser ? window._authGetUser() : null;
  var sk = u ? (u.id || u.name) : '';

  /* My products */
  var myProds = PRODUCTS.filter(function(p){
    return p.condition==='new' && (p.seller===sk || p.sellerName===sk);
  });

  /* Orders stats */
  var pending   = _vdOrders.filter(function(o){ return o.status==='pending'; });
  var delivered = _vdOrders.filter(function(o){ return o.status==='done'; });
  var revenue   = delivered.reduce(function(s,o){ return s + (o.price||0); }, 0);
  var totalStock = myProds.reduce(function(s,p){ return s + (p.stock||0); }, 0);

  /* ── Stat cards ── */
  var statsData = [
    { num: myProds.length,              lbl:'Products',  sub:'Listed',           color:'#334fef', ico:'ph-package' },
    { num: _vdOrders.length,            lbl:'Orders',    sub:pending.length+' pending', color:'#f59e0b', ico:'ph-clipboard-text' },
    { num: revenue.toLocaleString()+' EGP', lbl:'Revenue', sub:delivered.length+' delivered', color:'#22c55e', ico:'ph-chart-bar' },
    { num: totalStock,                  lbl:'Total Stock', sub:'units available',  color:'#a78bfa', ico:'ph-cube' },
  ];

  var statsGrid = document.createElement('div');
  statsGrid.className = 'vd-analytics';
  statsGrid.style.marginBottom = '24px';
  statsData.forEach(function(s) {
    var card = document.createElement('div');
    card.className = 'vd-an-card';
    card.innerHTML = '<div style="width:32px;height:32px;border-radius:9px;background:'+s.color+'1a;display:flex;align-items:center;justify-content:center;margin-bottom:12px">'
      + '<i class="ph '+s.ico+'" style="font-size:16px;color:'+s.color+'"></i></div>'
      + '<div style="font-size:22px;font-weight:800;color:var(--text);letter-spacing:-0.3px">'+s.num+'</div>'
      + '<div style="font-size:12px;color:var(--text2);margin-top:3px">'+s.lbl+'</div>'
      + '<div style="font-size:11px;color:'+s.color+';margin-top:2px">'+s.sub+'</div>';
    statsGrid.appendChild(card);
  });
  el.appendChild(statsGrid);

  /* ── Recent Orders ── */
  var secTitle = document.createElement('div'); secTitle.className='vd-sec-title'; secTitle.textContent='Recent Orders';
  el.appendChild(secTitle);

  var card = document.createElement('div'); card.className='vd-section-card'; el.appendChild(card);

  var topBar = document.createElement('div'); topBar.className='vd-section-top';
  var allBtn = document.createElement('button'); allBtn.className='vd-btn-small'; allBtn.textContent='View all orders';
  allBtn.onclick = function(){ vdGo('orders'); };
  topBar.appendChild(allBtn); card.appendChild(topBar);

  var recent = _vdOrders.slice(0,5);
  if (!recent.length) {
    card.innerHTML += '<div class="vd-empty-row">No orders yet</div>';
  } else {
    var list = document.createElement('div'); list.className='vd-order-list';
    recent.forEach(function(o){ list.appendChild(vdOrderCard(o)); });
    card.appendChild(list);
  }

  /* ── Products low on stock ── */
  var lowStock = myProds.filter(function(p){ return (p.stock||0) <= 3 && (p.stock||0) > 0; });
  if (lowStock.length) {
    var warnTitle = document.createElement('div'); warnTitle.className='vd-sec-title';
    warnTitle.style.marginTop='24px';
    warnTitle.innerHTML='<span style="color:#f59e0b">⚠ Low Stock</span>';
    el.appendChild(warnTitle);
    var warnCard = document.createElement('div'); warnCard.className='vd-section-card'; el.appendChild(warnCard);
    var warnList = document.createElement('div'); warnList.style.cssText='padding:4px 0';
    lowStock.forEach(function(p){
      var row = document.createElement('div');
      row.style.cssText='display:flex;align-items:center;justify-content:space-between;padding:10px 18px;border-bottom:1px solid var(--border)';
      row.innerHTML='<span style="font-size:13px;color:var(--text)">'+p.title+'</span>'
        +'<span style="font-size:12px;font-weight:700;color:#f59e0b">'+p.stock+' left</span>';
      warnList.appendChild(row);
    });
    warnCard.appendChild(warnList);
  }
}

function vdRenderProducts(el) {
  el.innerHTML = '';
  var title=document.createElement('div');title.className='vd-sec-title';
  title.textContent=_vdEditId!==null?'Edit Product':'Create Product';
  el.appendChild(title);

  var formCard=document.createElement('div');formCard.className='vd-form-card';
  el.appendChild(formCard);

  /* Multi-image upload */
  var imgData = []; // array of base64 strings
  var imgWrap = document.createElement('div');
  imgWrap.style.cssText='display:flex;flex-direction:column;gap:10px;margin-bottom:14px';

  /* Upload button */
  var addImgBtn = document.createElement('button');
  addImgBtn.type='button';
  addImgBtn.style.cssText='display:flex;align-items:center;gap:8px;padding:10px 16px;background:var(--input-bg);border:1.5px dashed var(--border2);border-radius:10px;color:#334fef;font-family:var(--font);font-size:13px;font-weight:600;cursor:pointer;transition:border-color 0.15s';
  addImgBtn.innerHTML=vdSVG('ph-camera',16)+' Add photo <span style="font-size:11px;color:#555;font-weight:400">(up to 4)</span>';
  addImgBtn.onmouseenter=function(){this.style.borderColor='#334fef';};
  addImgBtn.onmouseleave=function(){this.style.borderColor='var(--border2)';};

  var fi=document.createElement('input');fi.type='file';fi.id='_vdImgFile';fi.accept='image/*';fi.multiple=true;fi.style.display='none';

  /* Thumbnails grid */
  var thumbGrid=document.createElement('div');
  thumbGrid.id='_vdThumbGrid';
  thumbGrid.style.cssText='display:flex;flex-wrap:wrap;gap:8px';

  function renderThumbs(){
    thumbGrid.innerHTML='';
    imgData.forEach(function(src,i){
      var wrap=document.createElement('div');
      wrap.style.cssText='position:relative;width:72px;height:72px;border-radius:8px;overflow:hidden;flex-shrink:0;border:2px solid '+(i===0?'#334fef':'var(--border2)');
      var img=document.createElement('img');img.src=src;img.style.cssText='width:100%;height:100%;object-fit:cover';
      var del=document.createElement('button');
      del.innerHTML='&times;';
      del.style.cssText='position:absolute;top:2px;right:2px;width:18px;height:18px;border-radius:50%;background:rgba(0,0,0,0.7);border:none;color:#fff;font-size:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1';
      del.onclick=(function(idx){return function(e){e.stopPropagation();imgData.splice(idx,1);renderThumbs();};})(i);
      wrap.appendChild(img);wrap.appendChild(del);
      if(i===0){var lbl=document.createElement('div');lbl.textContent='Main';lbl.style.cssText='position:absolute;bottom:0;left:0;right:0;background:rgba(51,79,239,0.8);color:#fff;font-size:9px;font-weight:700;text-align:center;padding:2px';wrap.appendChild(lbl);}
      thumbGrid.appendChild(wrap);
    });
    if(imgData.length<4){thumbGrid.appendChild(addImgBtn);}
  }

  fi.onchange=function(){
    var files=Array.from(this.files||[]);
    var remaining=4-imgData.length;
    files.slice(0,remaining).forEach(function(file){
      var r=new FileReader();
      r.onload=function(e){imgData.push(e.target.result);renderThumbs();};
      r.readAsDataURL(file);
    });
    fi.value='';
  };
  addImgBtn.onclick=function(){fi.click();};

  imgWrap.appendChild(thumbGrid);
  imgWrap.appendChild(fi);
  renderThumbs(); // show add button initially

  formCard.appendChild(imgWrap);

  // For compatibility: _vdZone is used in prefill - we store main img in imgData[0]
  var zone={dataset:{src:''},id:'_vdZone'};

  var fg=document.createElement('div');fg.className='vd-form-grid';
  function ff(lbl,id,type,ph,full,opts){
    var w=document.createElement('div');w.className='vd-ff'+(full?' full':'');
    var l=document.createElement('label');l.textContent=lbl;
    var inp;
    if(type==='select'){inp=document.createElement('select');inp.id=id;(opts||[]).forEach(function(v){var o=document.createElement('option');o.value=v;o.textContent=v;inp.appendChild(o);});}
    else if(type==='textarea'){inp=document.createElement('textarea');inp.id=id;inp.placeholder=ph||'';inp.rows=3;}
    else{inp=document.createElement('input');inp.type=type||'text';inp.id=id;inp.placeholder=ph||'';}
    w.appendChild(l);w.appendChild(inp);return w;
  }
  fg.appendChild(ff('Product Name','_vdn','text','e.g. Casio FX-991EX',true));
  fg.appendChild(ff('Description','_vdesc','textarea','Condition, what is included...',true));
  fg.appendChild(ff('Price (EGP)','_vdp','number','0'));
  fg.appendChild(ff('Discount %','_vddisc_pct','number','0'));
  var fr=document.createElement('div');fr.className='vd-ff';
  fr.innerHTML='<label>Final Price (EGP)</label><div id="_vdFinalPrice" style="padding:10px 14px;background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.25);border-radius:10px;font-size:14px;font-weight:700;color:#22c55e;min-height:42px;display:flex;align-items:center;box-sizing:border-box;max-width:100%">—</div>';
  fg.appendChild(fr);
  fg.appendChild(ff('Stock (units)','_vds','number','1'));
  fg.appendChild(ff('Category','_vdc','select',null,false,['Engineering','Medicine','Dentistry','Architecture','Pharmacy','Computer Science','Other']));
  formCard.appendChild(fg);

  function calcFinal(){
    var p=parseFloat(document.getElementById('_vdp').value)||0;
    var pct=parseFloat(document.getElementById('_vddisc_pct').value)||0;
    var final=pct>0?Math.round(p*(1-pct/100)):p;
    var fp=document.getElementById('_vdFinalPrice');if(!fp)return;
    if(!p){fp.textContent='—';return;}
    fp.innerHTML=final.toLocaleString()+' EGP'+(pct>0?' <span style="font-size:11px;color:#888;text-decoration:line-through;margin-left:8px">'+p.toLocaleString()+'</span>':'');
  }
  setTimeout(function(){
    var pi=document.getElementById('_vdp');var di=document.getElementById('_vddisc_pct');
    if(pi)pi.addEventListener('input',calcFinal);
    if(di)di.addEventListener('input',calcFinal);
  },0);

  var btn=document.createElement('button');btn.className='vd-submit-btn';
  btn.textContent=_vdEditId!==null?'Update Product':'Create Product';
  btn.style.marginTop='16px';btn.onclick=vdSubmitProduct;
  formCard.appendChild(btn);

  if(_vdEditId!==null){
    var ep=PRODUCTS.find(function(x){return x.id===_vdEditId;});
    if(ep){setTimeout(function(){
      var n=document.getElementById('_vdn');if(n)n.value=ep.title||'';
      var d=document.getElementById('_vdesc');if(d)d.value=ep.description||'';
      var p=document.getElementById('_vdp');if(p)p.value=ep.price||0;
      var pct=ep.originalPrice&&ep.originalPrice>ep.price?Math.round((1-ep.price/ep.originalPrice)*100):0;
      var di=document.getElementById('_vddisc_pct');if(di)di.value=pct;
      var s=document.getElementById('_vds');if(s)s.value=ep.stock||0;
      var c=document.getElementById('_vdc');if(c)for(var i=0;i<c.options.length;i++){if(c.options[i].value===ep.college){c.selectedIndex=i;break;}}
      // Prefill images
      var tg=document.getElementById('_vdThumbGrid');
      if(tg&&ep.imgs&&ep.imgs.length){
        // We need to access imgData from parent scope — rebuild thumbs manually
        tg.innerHTML='';
        ep.imgs.forEach(function(src,i){
          var w=document.createElement('div');w.style.cssText='position:relative;width:72px;height:72px;border-radius:8px;overflow:hidden;flex-shrink:0;border:2px solid '+(i===0?'#334fef':'var(--border2)');
          var im=document.createElement('img');im.src=src;im.style.cssText='width:100%;height:100%;object-fit:cover';
          w.appendChild(im);
          if(i===0){var lbl=document.createElement('div');lbl.textContent='Main';lbl.style.cssText='position:absolute;bottom:0;left:0;right:0;background:rgba(51,79,239,0.8);color:#fff;font-size:9px;font-weight:700;text-align:center;padding:2px';w.appendChild(lbl);}
          tg.appendChild(w);
        });
      }
      calcFinal();
    },50);}
  }

  var tTitle=document.createElement('div');tTitle.className='vd-sec-title';tTitle.style.marginTop='28px';tTitle.textContent='My Products';
  el.appendChild(tTitle);
  var tCard=document.createElement('div');tCard.className='vd-section-card';el.appendChild(tCard);
  var topBar=document.createElement('div');topBar.className='vd-section-top';
  var countEl=document.createElement('span');countEl.style.cssText='font-size:13px;font-weight:700;color:var(--text)';
  topBar.appendChild(countEl);
  var sw=document.createElement('div');sw.className='vd-search-wrap';
  sw.innerHTML='<i class="ph ph-magnifying-glass" style="font-size:14px"></i>';
  var si=document.createElement('input');si.placeholder='Search by name...';
  si.oninput=function(){_vdSearch=this.value.toLowerCase();vdRefreshTable(tbody,countEl);};
  sw.appendChild(si);topBar.appendChild(sw);tCard.appendChild(topBar);
  var tbl=document.createElement('table');tbl.className='vd-tbl';
  tbl.innerHTML='<thead><tr><th>Product</th><th>Price</th><th>Disc%</th><th>Final</th><th>Stock</th><th>Category</th><th></th></tr></thead>';
  var tbody=document.createElement('tbody');tbl.appendChild(tbody);tCard.appendChild(tbl);
  vdRefreshTable(tbody,countEl);
}
function vdRefreshTable(tbody, countEl) {
  var u=window._authGetUser?window._authGetUser():null;
  var sk=u?(u.id||u.name):'';
  var list=PRODUCTS.filter(function(p){
    if(p.condition!=='new')return false;
    if(sk&&p.seller!==sk&&p.sellerName!==sk)return false;
    if(_vdSearch)return(p.title||'').toLowerCase().includes(_vdSearch);
    return true;
  });
  if(countEl)countEl.textContent=list.length+' product'+(list.length!==1?'s':'');
  tbody.innerHTML='';
  if(!list.length){var em=document.createElement('tr');em.innerHTML='<td colspan="7" style="text-align:center;padding:24px;color:var(--text2)">No products yet — create one above</td>';tbody.appendChild(em);return;}
  list.forEach(function(p){
    var discPct=(p.originalPrice&&p.originalPrice>p.price)?Math.round((1-p.price/p.originalPrice)*100):0;
    var tr=document.createElement('tr');
    var tdN=document.createElement('td');
    var nw=document.createElement('div');nw.style.cssText='display:flex;align-items:center;gap:9px';
    if(p.img){var im=document.createElement('img');im.src=p.img;im.style.cssText='width:34px;height:34px;border-radius:6px;object-fit:cover;flex-shrink:0';im.onerror=function(){this.style.display='none';};nw.appendChild(im);}
    var ns=document.createElement('span');ns.className='c-name';ns.textContent=p.title;nw.appendChild(ns);tdN.appendChild(nw);
    function mkTd(v,cls){var t=document.createElement('td');if(cls)t.className=cls;t.textContent=v;return t;}
    var tdA=document.createElement('td');tdA.style.whiteSpace='nowrap';
    var eb=document.createElement('button');eb.className='vd-btn-edit';eb.textContent='Edit';
    eb.onclick=(function(id){return function(){_vdEditId=id;var vc=document.getElementById('vdContent');if(vc){vc.innerHTML='';vdRenderProducts(vc);}window.scrollTo({top:0,behavior:'smooth'});};})(p.id);
    var db=document.createElement('button');db.className='vd-btn-del';db.textContent='Delete';
    db.onclick=(function(id,name){return function(){vdConfirm('Delete product?','Remove "'+name+'"?','Delete','#e94560',function(){
      var i=PRODUCTS.findIndex(function(x){return x.id===id;});if(i>-1){PRODUCTS.splice(i,1);delete productMap[id];}
      applyFilters();var vc=document.getElementById('vdContent');if(vc){vc.innerHTML='';vdRenderProducts(vc);}
    });};})(p.id,p.title);
    tdA.appendChild(eb);tdA.appendChild(db);
    tr.appendChild(tdN);
    tr.appendChild(mkTd((p.originalPrice||p.price).toLocaleString()+' EGP'));
    tr.appendChild(mkTd(discPct>0?discPct+'%':'—'));
    tr.appendChild(mkTd(p.price.toLocaleString()+' EGP','c-price'));
    tr.appendChild(mkTd((p.stock||0)+' units',(p.stock||0)===0?'c-sold':''));
    tr.appendChild(mkTd(p.college||'—'));
    tr.appendChild(tdA);
    tbody.appendChild(tr);
    if((p.stock||0)===0){var i=PRODUCTS.findIndex(function(x){return x.id===p.id;});if(i>-1){PRODUCTS.splice(i,1);delete productMap[p.id];}applyFilters();}
  });
}

function vdSubmitProduct() {
  var u          = window._authGetUser ? window._authGetUser() : null;
  var sellerKey  = u ? (u.id || u.name) : 'vendor';
  var sellerName = u ? u.name : 'My Store';
  var phone      = u ? (u.phone || '') : '';

  var name  = (document.getElementById('_vdn')       ||{value:''}).value.trim();
  var desc  = (document.getElementById('_vdesc')     ||{value:''}).value.trim();
  var price = parseFloat((document.getElementById('_vdp')       ||{value:'0'}).value)||0;
  var discPct = parseFloat((document.getElementById('_vddisc_pct')||{value:'0'}).value)||0;
  var disc  = discPct > 0 ? Math.round(price * discPct / 100) : 0;
  var stock = parseInt((document.getElementById('_vds')        ||{value:'0'}).value)||0;
  var col   = (document.getElementById('_vdc')       ||{value:'Engineering'}).value || 'Engineering';
  var imgDataEl = document.getElementById('_vdThumbGrid');
  var imgData2  = [];
  if(imgDataEl){ imgDataEl.querySelectorAll('img').forEach(function(im){ if(im.src) imgData2.push(im.src); }); }
  var img = imgData2[0] || '';

  /* Validation — all required except discount */
  var ok = true;
  function _vdErr(id) {
    var el = document.getElementById(id);
    if (el) { el.style.borderColor = '#e94560'; setTimeout(function(){ el.style.borderColor = ''; }, 2000); }
    ok = false;
  }
  if (!name)  _vdErr('_vdn');
  if (!desc)  _vdErr('_vdesc');
  if (!price) _vdErr('_vdp');
  if (!stock) _vdErr('_vds');
  if (!img && _vdEditId===null) {
    var tg=document.getElementById('_vdThumbGrid');
    if(tg){tg.style.outline='2px solid #e94560';tg.style.borderRadius='10px';setTimeout(function(){tg.style.outline='';},2000);}
    ok=false;
  }
  if (!ok) return;

  var finalPrice = disc > 0 ? price - disc : price;
  var origPrice  = disc > 0 ? price : undefined;

  if (_vdEditId !== null) {
    /* Edit in-place */
    var ep = PRODUCTS.find(function(p){ return p.id === _vdEditId; });
    if (ep) {
      ep.title = name; ep.description = desc;
      ep.price = finalPrice; ep.originalPrice = origPrice;
      ep.stock = stock; ep.college = col;
      if (img) ep.img = img;
      productMap[ep.id] = ep;
    }
  } else {
    /* Add new product */
    var newP = {
      id:            'v_' + Date.now(),
      condition:     'new',
      seller:        sellerKey,
      sellerName:    sellerName,
      phone:         phone,
      title:         name,
      description:   desc,
      price:         finalPrice,
      originalPrice: origPrice,
      stock:         stock,
      college:       col,
      img:           img || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      imgs:          imgData2.length>0 ? imgData2 : ['https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=80'],
    };
    PRODUCTS.unshift(newP);
    productMap[newP.id] = newP;
  }

  _vdEditId = null;
  applyFilters();
  var vc = document.getElementById('vdContent');
  if (vc) { vc.innerHTML=''; vdRenderProducts(vc); }
}

/* ── VENDOR ORDERS
   vdRenderOrders — جدول كل الأوردرات مع حالتها وتأكيد التوصيل
────────────────── */
function vdRenderOrders(el) {
  el.innerHTML = '';
  var u2 = window._authGetUser ? window._authGetUser() : null;
  var sk = u2 ? (u2.id || u2.name) : '';
  // _vdOrders is in-memory array — no DB needed
  var pending=_vdOrders.filter(function(o){return o.status==='pending';}).length;
  var title=document.createElement('div');title.className='vd-sec-title';
  title.textContent='Orders'+(pending?' · '+pending+' pending':'');
  el.appendChild(title);
  var card=document.createElement('div');card.className='vd-section-card';
  var list=document.createElement('div');list.className='vd-order-list';
  if(!_vdOrders.length){var e=document.createElement('div');e.className='vd-empty-row';e.textContent='No orders yet';list.appendChild(e);}
  else _vdOrders.forEach(function(o){list.appendChild(vdOrderCard(o));});
  card.appendChild(list);el.appendChild(card);
}

function vdOrderCard(order) {
  var item=document.createElement('div');
  item.className='vd-order-card'+(order.status==='done'?' vd-order-done':'');

  var num=document.createElement('div');num.className='vd-order-num';num.textContent=order.id;

  var info=document.createElement('div');info.className='vd-order-info';
  var iname=document.createElement('div');iname.className='vd-order-item';
  iname.textContent=order.item+(order.qty>1?' ×'+order.qty:'');
  var meta=document.createElement('div');meta.className='vd-order-meta';
  [['Buyer',order.buyer],['Phone',order.phone],['Address',order.address],['Date',order.date]].forEach(function(f){
    var s=document.createElement('span');s.innerHTML=f[0]+': <strong>'+f[1]+'</strong>';meta.appendChild(s);
  });
  info.appendChild(iname);info.appendChild(meta);

  var right=document.createElement('div');right.className='vd-order-right';
  var pr=document.createElement('div');pr.className='vd-order-price';pr.textContent=order.price.toLocaleString()+' EGP';
  var btn=document.createElement('button');
  btn.className='vd-action-btn '+(order.status==='done'?'vd-action-done':'vd-action-pending');
  btn.innerHTML=order.status==='done'?'<i class="ph-fill ph-check-circle"></i> Delivered':'Mark as Delivered';

  if(order.status!=='done'){
    btn.addEventListener('click',(function(o,el2,b){return function(){
      vdConfirm('Confirm delivery?','Mark order '+o.id+' from '+o.buyer+' as delivered?','Confirm','#334fef',function(){
        o.status='done';
        el2.className='vd-order-card vd-order-done';
        b.className='vd-action-btn vd-action-done';b.innerHTML='<i class="ph-fill ph-check-circle"></i> Delivered';
        /* update sidebar badge */
        vdRenderSidebar();
      });
    };})(order,item,btn));
  }

  right.appendChild(pr);right.appendChild(btn);
  item.appendChild(num);item.appendChild(info);item.appendChild(right);
  return item;
}

function openDashboard() {
  var u=window._authGetUser?window._authGetUser():null;
  if (!u) { openAuthModal(); return; }
  var role=u.role;
  hideAll();
  document.getElementById('profilePage').style.display='none';
  document.getElementById('dashPage').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
  
  if(role==='vendor'){
    document.getElementById('dashStudent').style.display='none';
    document.getElementById('dashVendor').style.display='block';
    _vdEditId=null; _vdSection='overview';
    vdRenderSidebar();
    vdGo('overview');
  } else {
    document.getElementById('dashStudent').style.display='block';
    document.getElementById('dashVendor').style.display='none';
    renderDashForm();renderDashProducts();
  }
}

/* ── CONFIRM MODAL
   vdConfirm(title, msg, okLabel, color, callback)
   popup تأكيد عام يستخدمه الـ logout والحذف والتوصيل
────────────────── */
function vdConfirm(title, msg, okLabel, okColor, onOk) {
  var overlay = document.createElement('div');
  overlay.className = 'vd-confirm-overlay';

  var box = document.createElement('div');
  box.className = 'vd-confirm-box';

  var titleEl = document.createElement('div');
  titleEl.className = 'vd-confirm-title';
  titleEl.textContent = title;

  var msgEl = document.createElement('div');
  msgEl.className = 'vd-confirm-msg';
  msgEl.textContent = msg;

  var btns = document.createElement('div');
  btns.className = 'vd-confirm-btns';

  var cancelBtn = document.createElement('button');
  cancelBtn.className = 'vd-confirm-cancel';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.onclick = function() { document.body.removeChild(overlay); };

  var okBtn = document.createElement('button');
  okBtn.className = 'vd-confirm-ok';
  okBtn.style.background = okColor;
  okBtn.textContent = okLabel;
  okBtn.onclick = function() {
    document.body.removeChild(overlay);
    onOk();
  };

  btns.appendChild(cancelBtn);
  btns.appendChild(okBtn);
  box.appendChild(titleEl);
  box.appendChild(msgEl);
  box.appendChild(btns);
  overlay.appendChild(box);

  // close on overlay click
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) document.body.removeChild(overlay);
  });

  document.body.appendChild(overlay);
}


/* ── WHATSAPP CHAT
   openWA(id) — يفتح WhatsApp مع البائع مع رسالة جاهزة عن المنتج
────────────────── */
function openWA(id) {
  var p = productMap[id];
  if (!p) return;
  var phone = p.phone || '';
  if (!phone) { alert('No WhatsApp number available for this seller.'); return; }
  var msg = encodeURIComponent('مرحبا! رأيت منتجك على منصة طلبة: "' + p.title + '" بسعر ' + p.price.toLocaleString() + ' جنيه. هل لا يزال متاحاً؟');
  window.open('https://wa.me/' + phone + '?text=' + msg, '_blank');
}


/* ════════════════════════════════════════
   ROUTER — browser back / forward support
════════════════════════════════════════ */
function routerPush(page, data) {
  try { history.pushState({ page: page, data: data || null }, '', '#' + page); } catch(e) {}
}

function routerReplace(page, data) {
  try { history.replaceState({ page: page, data: data || null }, '', '#' + page); } catch(e) {}
}

// Handle browser back / forward
window.addEventListener('popstate', function(e) {
  var state = e.state;
  if (!state) { _showHome(); return; }
  switch(state.page) {
    case 'home':        _showHome();            break;
    case 'product':     _showPD(state.data);    break;
    case 'wishlist':    _showWL();              break;
    case 'cart':        _showCart();            break;
    case 'checkout':    _showCheckout();        break;
    case 'profile':     _showProfile();         break;
    case 'dashboard':   _showDashboard();       break;
    default:            _showHome();            break;
  }
});

/* ── ROUTER — INTERNAL FUNCTIONS
   _showHome, _showPD, _showWL, _showCart, _showCheckout, _showProfile, _showDashboard
   وظائف تنقل داخلية بدون إضافة للـ history
────────────────── */
function _showHome() {
  var dp = document.getElementById('dashPage'); if(dp) dp.style.display='none';
  var pp = document.getElementById('profilePage'); if(pp) pp.style.display='none';
  document.getElementById('pdPage').style.display      = 'none';
  document.getElementById('wlPage').style.display      = 'none';
  document.getElementById('cartPage').style.display    = 'none';
  document.querySelectorAll(HOME_SELS).forEach(function(el){ el.style.display=''; });
  window.scrollTo({top:0,behavior:'smooth'});
}
function _showPD(id) {
  if (!id) return _showHome();
  var p = productMap[id];
  if (!p) return _showHome();
  document.querySelectorAll(HOME_SELS).forEach(function(el){ el.style.display='none'; });
  document.getElementById('wlPage').style.display      = 'none';
  document.getElementById('pdPage').style.display      = 'block';
  window.scrollTo({top:0,behavior:'smooth'});
  fillPD(p);
}
function _showWL()       { document.querySelectorAll(HOME_SELS).forEach(function(el){el.style.display='none';}); document.getElementById('wlPage').style.display='block'; renderWL(); window.scrollTo({top:0,behavior:'smooth'}); }
function _showCart()     { hideAll(); document.getElementById('cartPage').style.display='block'; renderCartBody(); window.scrollTo({top:0,behavior:'smooth'}); }
function _showCheckout() { hideAll(); document.getElementById('checkoutPage').style.display='block'; renderCheckout(); window.scrollTo({top:0,behavior:'smooth'}); }
function _showProfile()  { hideAll(); document.getElementById('profilePage').style.display='block'; renderProfileData(); window.scrollTo({top:0,behavior:'smooth'}); }
function _showDashboard(){ openDashboard(); }

/* ── ROUTER — HISTORY PUSH
   يعمل wrap للـ public navigation functions عشان تضيف للـ browser history
   يدعم Back button بشكل طبيعي
────────────────── */
var _origShowHome = showHome;
showHome = function() { _origShowHome(); routerReplace('home'); };

var _origOpenPD = openPD;
openPD = function(id) { _origOpenPD(id); routerPush('product', id); };

var _origOpenWL = openWL;
openWL = function() { _origOpenWL(); routerPush('wishlist'); };

var _origOpenCart = openCart;
openCart = function() { _origOpenCart(); routerPush('cart'); };

var _origOpenCheckout = openCheckout;
openCheckout = function() { _origOpenCheckout(); routerPush('checkout'); };

var _origOpenProfile = openProfile;
openProfile = function() { _origOpenProfile(); routerPush('profile'); };

var _origOpenDashboard = openDashboard;
openDashboard = function() { _origOpenDashboard(); routerPush('dashboard'); };

/* ── Init: set initial state so back works from first page ── */
routerReplace('home');


/* ── NUMBER SPINNERS
   wrapNumberInputs() — يحول كل input[type=number] لـ +/- spinner
────────────────── */
function wrapNumberInputs(root) {
  root = root || document;
  root.querySelectorAll('input[type="number"]:not(.num-wrapped)').forEach(function(inp) {
    inp.classList.add('num-wrapped');
    var wrap = document.createElement('div');
    wrap.className = 'num-wrap';
    inp.parentNode.insertBefore(wrap, inp);
    wrap.appendChild(inp);

    var spinners = document.createElement('div');
    spinners.className = 'num-spinners';

    var up = document.createElement('button');
    up.type = 'button';
    up.className = 'num-spin-btn';
    up.innerHTML = '<i class="ph ph-caret-up" style="font-size:10px"></i>';
    up.addEventListener('mousedown', function(e) {
      e.preventDefault();
      var step = parseFloat(inp.step) || 1;
      var max  = inp.max !== '' ? parseFloat(inp.max) : Infinity;
      var cur  = parseFloat(inp.value) || 0;
      inp.value = Math.min(max, cur + step);
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    });

    var dn = document.createElement('button');
    dn.type = 'button';
    dn.className = 'num-spin-btn';
    dn.innerHTML = '<i class="ph ph-caret-down" style="font-size:10px"></i>';
    dn.addEventListener('mousedown', function(e) {
      e.preventDefault();
      var step = parseFloat(inp.step) || 1;
      var min  = inp.min !== '' ? parseFloat(inp.min) : 0;
      var cur  = parseFloat(inp.value) || 0;
      inp.value = Math.max(min, cur - step);
      inp.dispatchEvent(new Event('input', { bubbles: true }));
    });

    spinners.appendChild(up);
    spinners.appendChild(dn);
    wrap.appendChild(spinners);
  });
}

/* Run on load and after any dynamic content change */
document.addEventListener('DOMContentLoaded', function() { wrapNumberInputs(); });

/* Patch MutationObserver to catch dynamically added inputs */
var _numObserver = new MutationObserver(function(mutations) {
  mutations.forEach(function(m) {
    if (m.addedNodes.length) wrapNumberInputs(document);
  });
});
_numObserver.observe(document.body, { childList: true, subtree: true });


function deleteAccount() {
  vdConfirm(
    'Delete account?',
    'This will permanently delete your account and all your listings. This cannot be undone.',
    'Delete',
    '#F44336',
    function() {
      if (window._authLogout) window._authLogout();
    }
  );
}


/* ── MOBILE SEARCH
   openMobSearch, closeMobSearch — overlay بحث على الموبايل
────────────────── */
function openMobSearch() {
  var ov = document.getElementById('mobSearchOverlay');
  if (!ov) return;
  ov.style.cssText = ov.style.cssText.replace('display:none',''); ov.style.display = 'flex';
  setTimeout(function() {
    var i = document.getElementById('mobSearchInput');
    if (i) { i.focus(); i.value = ''; }
  }, 50);
}
function closeMobSearch() {
  var ov = document.getElementById('mobSearchOverlay');
  if (ov) ov.style.display = 'none';
  F.search = '';
  applyFilters();
}


/* ── FAB BUTTON
   mobPlusAction() — زرار + الدائري:
   logged in → يفتح Dashboard | logged out → يفتح Auth
────────────────── */
function mobPlusAction() {
  var u = window._authGetUser ? window._authGetUser() : null;
  if (u) {
    openDashboard();
  } else {
    openAuthModal();
  }
}


/* ── VENDOR SIDEBAR DRAWER (MOBILE)
   vdToggleSidebar, vdCloseSidebar — drawer على الموبايل
────────────────── */
function vdToggleSidebar() {
  var sb = document.getElementById('vdSidebar');
  var ov = document.getElementById('vdOverlay');
  if (!sb) return;
  var isOpen = sb.classList.contains('open');
  if (isOpen) { sb.classList.remove('open'); ov.classList.remove('open'); }
  else         { sb.classList.add('open');    ov.classList.add('open'); }
}
function vdCloseSidebar() {
  var sb = document.getElementById('vdSidebar');
  var ov = document.getElementById('vdOverlay');
  if (sb) sb.classList.remove('open');
  if (ov) ov.classList.remove('open');
}
