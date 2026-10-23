/**
 * ROOMIX — Premium Furniture & Interior Architecture
 * Master Application Script (Vanilla ES6+)
 * Includes Full Trilingual Support (O'zbekcha, Русский, English)
 */

'use strict';

/* ==========================================================================
   1. Master Product Catalog Data (18 Architect-Grade Pieces)
   ========================================================================== */
const PRODUCTS_DATA = [
  {
    id: 1,
    name: "Oslo Three-Seater Sofa",
    price: 1299,
    originalPrice: 1499,
    category: "sofas",
    room: "living",
    style: "scandinavian",
    description: "Sculpted with low, enveloping proportions, the Oslo sofa pairs high-resilience memory foam cushioning with tactile Italian wool bouclé and a recessed solid white oak plinth.",
    dimensions: '88"W x 38"D x 30"H',
    materials: "FSC® Certified Solid White Oak, Textured Bouclé, High-Resilience Foam",
    rating: 4.9,
    reviewCount: 84,
    isBestseller: true,
    isNew: false,
    stock: 8,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Alabaster Bouclé", hex: "#EBE7DF", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" },
      { name: "Charcoal Slate", hex: "#3A3936", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" },
      { name: "Muted Sand", hex: "#D6C6B0", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Three-Seater (88\")", "Two-Seater (72\")", "Sectional L-Shape"]
  },
  {
    id: 2,
    name: "Luna Lounge Chair",
    price: 549,
    originalPrice: null,
    category: "sofas",
    room: "living",
    style: "modern",
    description: "An architectural accent chair defined by a floating bentwood oak silhouette and deep, ergonomic contouring upholstered in brushed oat linen.",
    dimensions: '32"W x 34"D x 29"H',
    materials: "Steam-bent American Oak, Heavyweight Linen, Brushed Brass Joinery",
    rating: 4.8,
    reviewCount: 52,
    isBestseller: true,
    isNew: false,
    stock: 12,
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1580481077195-731da89f3014?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Natural Oat", hex: "#D8CFBC", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80" },
      { name: "Smoked Olive", hex: "#52574A", img: "https://images.unsplash.com/photo-1580481077195-731da89f3014?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Standard Low Back", "High Back with Headrest"]
  },
  {
    id: 3,
    name: "Forma Oak Coffee Table",
    price: 399,
    originalPrice: 450,
    category: "tables",
    room: "living",
    style: "scandinavian",
    description: "Subtle pill-shaped profile showcasing organic timber grain and rounded cylindrical pillar legs for a grounded, tranquil center in any living space.",
    dimensions: '48"L x 24"W x 15"H',
    materials: "Solid European White Oak, Natural Matte Protective Lacquer",
    rating: 4.9,
    reviewCount: 39,
    isBestseller: true,
    isNew: false,
    stock: 7,
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Natural White Oak", hex: "#D4B996", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80" },
      { name: "Smoked Black Oak", hex: "#262422", img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["48-Inch Oval", "36-Inch Round"]
  },
  {
    id: 4,
    name: "Arco Floor Lamp",
    price: 229,
    originalPrice: null,
    category: "lighting",
    room: "living",
    style: "minimalist",
    description: "Slender arched blackened brass stem balanced by a hand-carved Travertine marble pedestal base. Dimmable warm LED ambient emission.",
    dimensions: '18"W x 36"Reach x 68"H',
    materials: "Solid Travertine Marble, Brushed Blackened Brass, Hand-Blown Opal Glass",
    rating: 4.7,
    reviewCount: 28,
    isBestseller: true,
    isNew: false,
    stock: 14,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Blackened Brass / Travertine", hex: "#2B2A28", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80" },
      { name: "Warm Gold / Carrara", hex: "#C7B299", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Dimmable Warm 2700K", "Smart Wireless Dimming"]
  },
  {
    id: 5,
    name: "Haven Platform Bed",
    price: 1499,
    originalPrice: 1699,
    category: "bedroom",
    room: "bedroom",
    style: "scandinavian",
    description: "A cantilevered low platform frame with integrated floating side ledges and an upholstered linen-blend headboard pillow cushion.",
    dimensions: '84"W x 92"L x 36"H (Queen)',
    materials: "FSC® Solid Oak, Plywood Slat System, Belgian Linen Headboard",
    rating: 5.0,
    reviewCount: 43,
    isBestseller: false,
    isNew: true,
    stock: 5,
    image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Natural Oak / Raw Linen", hex: "#D2C2A7", img: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=800&q=80" },
      { name: "American Walnut / Charcoal", hex: "#4E3C2B", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Queen Frame", "King Frame", "California King"]
  },
  {
    id: 6,
    name: "Mono Side Table",
    price: 179,
    originalPrice: null,
    category: "tables",
    room: "living",
    style: "minimalist",
    description: "Sculptural monolithic pedestal table forged with seamless spun aluminum and finished in a fine-grain micro-textured warm ceramic powder coat.",
    dimensions: '16"Dia x 19"H',
    materials: "Spun Aluminum, Ceramic Matte Powder Coating",
    rating: 4.6,
    reviewCount: 19,
    isBestseller: false,
    isNew: false,
    stock: 15,
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Warm Terracotta", hex: "#A8654A", img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80" },
      { name: "Alabaster White", hex: "#F3EDE5", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80" },
      { name: "Deep Cast Iron", hex: "#272726", img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Standard Height (19\")", "Tall Height (22\")"]
  },
  {
    id: 7,
    name: "Studio Writing Desk",
    price: 649,
    originalPrice: 720,
    category: "tables",
    room: "office",
    style: "modern",
    description: "Designed for quiet focus. Features soft-close felt-lined double stationery drawers, magnetic cable routing conduit, and solid chamfered edges.",
    dimensions: '56"W x 26"D x 29.5"H',
    materials: "Solid White Oak, Steel Cable Conduit, Merino Wool Felt Drawer Liners",
    rating: 4.9,
    reviewCount: 31,
    isBestseller: false,
    isNew: true,
    stock: 6,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "White Oak / Brushed Brass", hex: "#D6BF9E", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80" },
      { name: "Dark Walnut / Matte Black", hex: "#483626", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["56-Inch Compact", "66-Inch Executive"]
  },
  {
    id: 8,
    name: "Cloud Bouclé Ottoman",
    price: 299,
    originalPrice: null,
    category: "sofas",
    room: "living",
    style: "modern",
    description: "A pebble-shaped versatile ottoman serving as an extra lounge perch, plush footrest, or informal coffee table surface with a tray.",
    dimensions: '28"W x 24"D x 16"H',
    materials: "Curled Sheep Wool Bouclé, FSC Hardwood Frame, High-Density Layered Core",
    rating: 4.8,
    reviewCount: 47,
    isBestseller: true,
    isNew: false,
    stock: 11,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Cloud White", hex: "#F5F2EC", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" },
      { name: "Warm Camel", hex: "#9E7B54", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Medium (28\")", "Large (36\")"]
  },
  {
    id: 9,
    name: "Nordic Dining Chair",
    price: 249,
    originalPrice: 280,
    category: "tables",
    room: "dining",
    style: "scandinavian",
    description: "Comfortable organic lumbar curvature created from five-ply curved veneer with a hand-woven Danish paper cord seat for breathable resilience.",
    dimensions: '21"W x 20"D x 30"H',
    materials: "Solid Ash Wood, Hand-Woven Natural Paper Cord",
    rating: 4.9,
    reviewCount: 65,
    isBestseller: true,
    isNew: false,
    stock: 18,
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1580481077195-731da89f3014?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Bleached Ash Wood", hex: "#E4D5BE", img: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80" },
      { name: "Ebonized Black Ash", hex: "#1F1E1D", img: "https://images.unsplash.com/photo-1580481077195-731da89f3014?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Single Chair", "Set of Two (Save 10%)", "Set of Four (Save 15%)"]
  },
  {
    id: 10,
    name: "Terra Ceramic Vase",
    price: 69,
    originalPrice: null,
    category: "decor",
    room: "living",
    style: "minimalist",
    description: "Hand-thrown coarse stoneware with raw unglazed exterior sand texture and a watertight interior glazed finish. Made in small studio batches.",
    dimensions: '7.5"Dia x 11"H',
    materials: "Coarse Architectural Clay, Mineral Slips",
    rating: 4.9,
    reviewCount: 92,
    isBestseller: true,
    isNew: false,
    stock: 24,
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Natural Sandstone", hex: "#D3C2A9", img: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80" },
      { name: "Charcoal Terra", hex: "#3B3835", img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Small (8\"H)", "Large (11\"H)"]
  },
  {
    id: 11,
    name: "Linea Modular Bookshelf",
    price: 799,
    originalPrice: 899,
    category: "storage",
    room: "living",
    style: "minimalist",
    description: "Architectural shelving unit engineered with ultra-slim precision laser-cut steel uprights and solid oak floating shelves. Adaptable shelf heights.",
    dimensions: '42"W x 14"D x 76"H',
    materials: "Fine-Structured Powder Coated Steel, Solid White Oak Tiers",
    rating: 4.8,
    reviewCount: 22,
    isBestseller: false,
    isNew: true,
    stock: 4,
    image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Oak / Black Uprights", hex: "#C7B194", img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80" },
      { name: "All Monolith Charcoal", hex: "#222120", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Single Bay (42\")", "Double Bay (82\")"]
  },
  {
    id: 12,
    name: "Aura Pendant Light",
    price: 189,
    originalPrice: null,
    category: "lighting",
    room: "dining",
    style: "modern",
    description: "A wide, gentle spun aluminum saucer shade delivering glare-free downward task light and a soft ambient upward ceiling halo glow.",
    dimensions: '18"Dia x 6"H (Includes 9ft braided cord)',
    materials: "Spun Aluminum, Frosted Glass Diffuser, Braided Fabric Cable",
    rating: 4.7,
    reviewCount: 36,
    isBestseller: false,
    isNew: true,
    stock: 14,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Oat Beige", hex: "#E5DEC9", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80" },
      { name: "Brushed Champagne Brass", hex: "#D6BA96", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["18-Inch Medium", "24-Inch Large"]
  },
  {
    id: 13,
    name: "Cove Bedside Table",
    price: 279,
    originalPrice: null,
    category: "bedroom",
    room: "bedroom",
    style: "scandinavian",
    description: "Seamless curved oak plywood nightstand featuring an open magazine nook and a push-to-open drawer equipped with quiet under-mount runners.",
    dimensions: '20"W x 16"D x 18"H',
    materials: "FSC Oak Veneer, Solid Oak Trim, Soft-Close Hardware",
    rating: 4.9,
    reviewCount: 17,
    isBestseller: false,
    isNew: false,
    stock: 9,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Natural White Oak", hex: "#CFBB9E", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80" },
      { name: "Rich Smoked Walnut", hex: "#523F30", img: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef5?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Single Nightstand", "Pair of Two (Save $50)"]
  },
  {
    id: 14,
    name: "Atlas Dining Table",
    price: 1099,
    originalPrice: 1250,
    category: "tables",
    room: "dining",
    style: "scandinavian",
    description: "Solid French oak trestle dining table with substantial rounded slab legs and soft bullnose perimeter edging. Seats 6 to 8 comfortably.",
    dimensions: '84"L x 38"W x 29.5"H',
    materials: "100% Solid European Oak, Eco Polyurethane Matte Finish",
    rating: 4.9,
    reviewCount: 26,
    isBestseller: true,
    isNew: false,
    stock: 3,
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Natural Raw Oak", hex: "#D8C6AC", img: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80" },
      { name: "Smoked Espresso Oak", hex: "#3B332D", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["72-Inch (Seats 6)", "84-Inch (Seats 8)", "96-Inch (Seats 10)"]
  },
  {
    id: 15,
    name: "Softline Area Rug",
    price: 349,
    originalPrice: null,
    category: "decor",
    room: "living",
    style: "modern",
    description: "Hand-knotted in high-density New Zealand virgin wool, featuring high-low sculptural pile relief inspired by dry zen sand rake lines.",
    dimensions: '8ft x 10ft',
    materials: "100% Pure New Zealand Wool, Natural Cotton Warp",
    rating: 4.8,
    reviewCount: 38,
    isBestseller: false,
    isNew: false,
    stock: 10,
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Natural Ivory", hex: "#EAE5DB", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=800&q=80" },
      { name: "Warm Greige", hex: "#B8B0A2", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["6ft x 9ft", "8ft x 10ft", "9ft x 12ft"]
  },
  {
    id: 16,
    name: "Solis Wall Mirror",
    price: 159,
    originalPrice: 195,
    category: "decor",
    room: "bedroom",
    style: "minimalist",
    description: "Deep-set circular vanity mirror held in a heavy extruded brass channel with anti-shatter copper-free float glass offering zero distortion.",
    dimensions: '30" Diameter x 1.8" Depth',
    materials: "Solid Spun Brass, High-Clarity Float Glass, Keyhole Wall Anchors",
    rating: 4.9,
    reviewCount: 44,
    isBestseller: true,
    isNew: false,
    stock: 13,
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Antiqued Warm Brass", hex: "#C5A065", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
      { name: "Matte Anodized Black", hex: "#1C1B1A", img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["24-Inch Round", "30-Inch Round", "36-Inch Round"]
  },
  {
    id: 17,
    name: "Koto Minimalist Bench",
    price: 380,
    originalPrice: null,
    category: "storage",
    room: "living",
    style: "minimalist",
    description: "Multi-functional entryway or bedside low bench with open slatted timber grid for footwear ventilation and an optional magnetic wool cushion pad.",
    dimensions: '48"W x 15"D x 17"H',
    materials: "Solid American Walnut, Concealed Mortise and Tenon Joinery",
    rating: 4.8,
    reviewCount: 15,
    isBestseller: false,
    isNew: true,
    stock: 6,
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "American Walnut", hex: "#523C2B", img: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80" },
      { name: "Bleached Natural Oak", hex: "#CFBFAB", img: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Bench Only", "Bench + Charcoal Wool Cushion"]
  },
  {
    id: 18,
    name: "Eos Sculptural Ceramic Lamp",
    price: 145,
    originalPrice: 175,
    category: "lighting",
    room: "bedroom",
    style: "modern",
    description: "An architectural table luminaire composed of an unglazed earthenware cylinder base crowned with an asymmetrical parchment shade.",
    dimensions: '11"Dia x 16"H',
    materials: "Hand-Turned Earthenware, Belgian Parchment Linen Shade",
    rating: 4.9,
    reviewCount: 29,
    isBestseller: false,
    isNew: true,
    stock: 9,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80",
    secondaryImage: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    colorOptions: [
      { name: "Bone White Stoneware", hex: "#EDE8DD", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80" },
      { name: "Volcanic Umber", hex: "#423B36", img: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80" }
    ],
    variants: ["Warm Ambient LED Included", "Smart Connected Bulb"]
  }
];

// Fallback image data URI in case remote CDN fails or is blocked
const SVG_FALLBACK_IMG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect width="600" height="600" fill="%23F3EDE5"/><text x="50%" y="48%" font-family="sans-serif" font-size="20" fill="%2396908A" font-weight="600" text-anchor="middle" letter-spacing="2">ROOMIX</text><text x="50%" y="54%" font-family="sans-serif" font-size="14" fill="%23B0A99F" text-anchor="middle">Contemporary Studio Living</text></svg>`;

/* ==========================================================================
   2. Comprehensive Trilingual Translation Dictionary (UZ / RU / EN)
   ========================================================================== */
const I18N_DATA = {
  uz: {
    announcement: "$1,000 dan ortiq buyurtmalarga bepul yetkazib berish va o'rnatish &bull; <strong>LUXE10</strong> kodi bilan 10% chegirma",
    navHome: "Bosh sahifa",
    navShop: "Barcha to'plam",
    navFurniture: "Mebel",
    navLighting: "Yoritgichlar",
    navDecor: "Dekor",
    navInspiration: "Ilhom",
    navQuiz: "Uslub testi",
    navStory: "Biz haqimizda",
    searchPlaceholder: "Buyum, uslub, material yoki xona bo'yicha qidiruv...",
    popularSearches: "Ko'p qidirilganlar:",
    quickAdd: "Savatchaga olish",
    badgeBestseller: "Sara",
    badgeNew: "Yangi",
    heroTag: "2026 Skandinaviya zamonaviy to'plami",
    heroTitle: "Qulay hayot uchun<br><em>joy ajrating.</em>",
    heroDesc: "Sevimli makoningiz uchun ehtiyotkorlik bilan yaratilgan zamonaviy mebellar. Tabiiy eman, iliq matolar va arxitektura uyg'unligi.",
    heroExploreBtn: "To'plamni ko'rish",
    heroStoryBtn: "Uslubingizni toping",
    perk1Label: "FSC® sertifikatlangan oq eman",
    perk2Label: "Karkas va furnitura kafolati",
    perk3Label: "Uyda bepul sinov muddati",
    trust1Title: "Oq qo'lqopli yetkazib berish",
    trust1Sub: "$1,000 dan yuqori buyurtmalarda bepul o'rnatish",
    trust2Title: "10 Yillik kafolat",
    trust2Sub: "Mustahkam ustaxonamiz sifat belgisi",
    trust3Title: "Tabiiy materiallar",
    trust3Sub: "Mas'uliyat bilan tayyorlangan yog'och va jun",
    trust4Title: "Dizayn konsyerj",
    trust4Sub: "1-ga-1 bepul interyer maslahati",
    catEyebrow: "Tanlangan makonlar",
    catTitle: "Xona va hunarmandchilik bo'yicha",
    catSubtitle: "Uyingizning har bir burchagida xotirjamlik va funksionallikni ta'minlovchi mebellar.",
    catSofas: "Divan & Kreslolar",
    catTables: "Stollar & Partalar",
    catBed: "Krovat & Yotoqxona",
    catLight: "Yoritish tizimlari",
    catStorage: "Tokcha & Javonlar",
    catDecor: "Uy dekori",
    bestEyebrow: "Eng ko'p tanlangan",
    bestTitle: "Mashhur sara modellar",
    tabAll: "Barchasi",
    tabSeating: "O'rindiqlar",
    tabSurfaces: "Stollar",
    tabLuminaires: "Yoritgichlar",
    quizEyebrow: "Interyer moslashtirish tizimi",
    quizTitle: "Xonangiz uslubini toping",
    quizIntro: "4 ta oddiy dizayn savoliga javob bering va xonangiz rangiga, maydoniga va byudjetingizga mos mebellar to'plamini oling.",
    quizBadge: "Qoidali algoritm &bull; Bir zumda moslash",
    quizQ1: "1. Qaysi xonani jihozlamoqchisiz?",
    quizR1: "Mehmonxona",
    quizR2: "Yotoqxona",
    quizR3: "Ish xonasi",
    quizR4: "Oshxona",
    quizQ2: "2. Qaysi estetika didingizga ko'proq mos?",
    quizS1: "Skandinavcha",
    quizS1Desc: "Och rangli eman, bukle va yumshoq tabiiy shakllar",
    quizS2: "Minimalist",
    quizS2Desc: "Toza chiziqlar, sof geometriya va ortiqcha narsalarsiz",
    quizS3: "Iliq zamonaviy",
    quizS3Desc: "Haykaltaroshlik siluetlari, yong'oq yog'ochi va tosh",
    quizS4: "Me'moriy qora",
    quizS4Desc: "Qora po'lat, quyuq tuslar va xom latun",
    quizQ3: "3. Mo'ljallangan byudjetingiz qancha?",
    quizB1: "$300 gacha",
    quizB1Desc: "Kichik stollar, sopol idishlar va chiroqlar",
    quizB2: "$300 — $800",
    quizB2Desc: "Kreslolar, ish stollari va kofe stollari",
    quizB3: "$800+",
    quizB3Desc: "Asosiy divanlar, katta stollar va krovatlar",
    quizB4: "Har qanday",
    quizB4Desc: "Barcha mos keluvchi modellarni ko'rsatish",
    quizGenBtn: "Tavsiyalarni ko'rish",
    quizResetBtn: "Qayta boshlash",
    quizAddBundle: "Tavsiya etilgan to'plamni savatchaga qo'shish",
    shopEyebrow: "To'liq to'plam",
    shopTitle: "Zamonaviy makonlar uchun yaratilgan",
    shopSubtitle: "18 ta arxitektorlar tomonidan ma'qullangan, tabiiy yog'ochdan yasalgan mebel namunalari.",
    chipAll: "Barcha buyumlar",
    chipSofas: "Divan & Kreslolar",
    chipTables: "Stollar & Partalar",
    chipBed: "Yotoqxona",
    chipLight: "Yoritgichlar",
    chipStorage: "Javonlar",
    chipDecor: "Dekor & Gilamlar",
    catalogSearchPlaceholder: "Kalit so'z bo'yicha saralash...",
    maxPriceLabel: "Maksimal narx:",
    sortFeatured: "Saralash: Tanlanganlar",
    sortPriceAsc: "Narx: Arzondan qimmatga",
    sortPriceDesc: "Narx: Qimmatdan arzonga",
    sortNewest: "Yangi qo'shilganlar",
    sortAlpha: "Alifbo bo'yicha (A — Z)",
    clearAllFilters: "Filtrlarni tozalash",
    showingPieces: "ta sara buyum ko'rsatilmoqda",
    emptyCatalogTitle: "Mos keluvchi buyumlar topilmadi",
    emptyCatalogDesc: "Qidiruv so'zini tozalab ko'ring yoki narx filtrini kengaytiring.",
    resetFromEmptyBtn: "Barcha filtrlarni tozalash",
    lookbookEyebrow: "Dizaynerlar albomi",
    lookbookTitle: "Yashash uchun yaratilgan xonalar",
    lookbookSubtitle: "Arxitektorlarimiz tomonidan bezatilgan uchta o'ziga xos interyer namunasi.",
    storyEyebrow: "Dizayn falsafamiz",
    storyTitle: "Yashash uchun yaratilgan.<br><em>Uzoq xizmat qiladi.</em>",
    storyDesc1: "ROOMIX da biz sizni o'rab turgan buyumlar kayfiyatingizni belgilaydi deb ishonamiz. Biz bir mavsumlik trendlarni rad etib, vaqt sinovidan o'tadigan proporsiyalar va halol tabiiy materiallarni tanlaymiz.",
    storyDesc2: "Har bir ulanish, jilolangan burchak va chok ko'p bosqichli sinovlardan o'tadi. Mebellarimiz yillar o'tgani sayin yanada chiroyli va qadrli bo'lib boradi.",
    storyPillar1Title: "Ehtiyotkor geometriya",
    storyPillar1Text: "Ko'rish shovqinini kamaytiruvchi va xonani kengaytiruvchi aniq o'lchamlar.",
    storyPillar2Title: "Halol materiallar",
    storyPillar2Text: "Yevropa oq emani, italyan buklesi, cho'tkalangan latun va tabiiy tosh.",
    newsletterBadge: "ROOMIX JURNALI",
    newsletterTitle: "Go'zallik va qulaylikka obuna bo'ling",
    newsletterText: "Yangi mavsumiy to'plamlar, dizayn sirlari va ko'rgazmalar haqida birinchilardan bo'lib xabardor bo'ling.",
    newsletterPlaceholder: "Elektron pochtangizni kiriting...",
    newsletterBtn: "Obuna bo'lish",
    cartTitle: "Xaridlar savatchasi",
    cartFreeShippingNeed: "1,000$ dan ortiq xaridlar uchun bepul yetkazib berish",
    cartFreeShippingDone: "<strong>Faollashtirildi:</strong> Bepul Oq qo'lqopli yetkazib berish",
    promoPlaceholder: "Promokod (LUXE10 ni sinab ko'ring)",
    applyBtn: "Qo'llash",
    subtotalLabel: "Oraliq jami",
    deliveryLabel: "Yetkazib berish",
    totalLabel: "Jami (USD)",
    checkoutBtn: "Demo xaridni rasmiylashtirish",
    clearBagBtn: "Savatchani tozalash",
    continueShoppingBtn: "Xaridni davom ettirish",
    emptyCartTitle: "Savatchangiz bo'sh",
    emptyCartDesc: "Uyingizni jihozlash uchun saralangan to'plamimizni ko'ring.",
    wishlistTitle: "Sevimlilar ro'yxati",
    moveAllToBagBtn: "Barchasini savatchaga o'tkazish",
    emptyWishlistTitle: "Sevimlilar ro'yxati bo'sh",
    emptyWishlistDesc: "Yoqtirgan mebellaringizni saqlab qo'ying.",
    toastLangSwitched: "Til o'zgartirildi: O'zbek tili"
  },
  ru: {
    announcement: "Бесплатная доставка и сборка при заказе от $1,000 &bull; Промокод <strong>LUXE10</strong> на скидку 10%",
    navHome: "Главная",
    navShop: "Весь каталог",
    navFurniture: "Мебель",
    navLighting: "Освещение",
    navDecor: "Декор",
    navInspiration: "Вдохновение",
    navQuiz: "Тест стиля",
    navStory: "О бренде",
    searchPlaceholder: "Поиск по предмету, стилю, материалу или комнате...",
    popularSearches: "Популярные запросы:",
    quickAdd: "В корзину",
    badgeBestseller: "Хит продаж",
    badgeNew: "Новинка",
    heroTag: "Коллекция 2026: Скандинавский модерн",
    heroTitle: "Создайте пространство для<br><em>лучшей жизни.</em>",
    heroDesc: "Продуманная мебель и неподвластные времени силуэты для пространств, которые вы любите. Натуральный массив, тактильное тепло и точность линий.",
    heroExploreBtn: "Смотреть коллекцию",
    heroStoryBtn: "Подобрать стиль",
    perk1Label: "100% сертифицированный массив дуба",
    perk2Label: "Гарантия на каркас 10 лет",
    perk3Label: "30 дней на примерку дома",
    trust1Title: "Премиальная доставка",
    trust1Sub: "Бесплатный занос и сборка при заказе от $1,000",
    trust2Title: "10 Лет гарантии",
    trust2Sub: "Надежные узлы и массив благородного дерева",
    trust3Title: "Экологичность",
    trust3Sub: "Ответственная заготовка древесины и шерсти",
    trust4Title: "Дизайн-консьерж",
    trust4Sub: "Бесплатная онлайн-консультация стилиста",
    catEyebrow: "Кураторские пространства",
    catTitle: "Выбирайте по пространствам",
    catSubtitle: "Тактильная мебель, созданная для безмятежного уюта и гармонии в вашем доме.",
    catSofas: "Диваны и кресла",
    catTables: "Столы и парты",
    catBed: "Кровати и спальня",
    catLight: "Освещение",
    catStorage: "Стеллажи и шкафы",
    catDecor: "Декор для дома",
    bestEyebrow: "Бестселлеры",
    bestTitle: "Знаковые бестселлеры",
    tabAll: "Все",
    tabSeating: "Сиденья",
    tabSurfaces: "Столы",
    tabLuminaires: "Светильники",
    quizEyebrow: "Умный подбор интерьера",
    quizTitle: "Найдите стиль своей комнаты",
    quizIntro: "Ответьте на 4 вопроса о дизайне и получите персональную капсулу мебели под ваш бюджет и палитру.",
    quizBadge: "Умный алгоритм &bull; Мгновенный подбор",
    quizQ1: "1. Какую комнату обустраиваете?",
    quizR1: "Гостиная",
    quizR2: "Спальня",
    quizR3: "Кабинет",
    quizR4: "Столовая",
    quizQ2: "2. Какая эстетика определяет ваш вкус?",
    quizS1: "Скандинавский",
    quizS1Desc: "Светлый дуб, букле и мягкие органические формы",
    quizS2: "Минимализм",
    quizS2Desc: "Чистые горизонты, геометрия и порядок",
    quizS3: "Теплый модерн",
    quizS3Desc: "Скульптурные силуэты, орех и камень",
    quizS4: "Индустриальный шик",
    quizS4Desc: "Темные оттенки, сталь и благородная латунь",
    quizQ3: "3. Каков ваш ориентировочный бюджет?",
    quizB1: "До $300",
    quizB1Desc: "Акцентные столики, керамика и светильники",
    quizB2: "$300 — $800",
    quizB2Desc: "Кресла, письменные и журнальные столы",
    quizB3: "$800+",
    quizB3Desc: "Главные диваны, обеденные столы и кровати",
    quizB4: "Любой бюджет",
    quizB4Desc: "Показать все гармоничные варианты",
    quizGenBtn: "Подобрать рекомендации",
    quizResetBtn: "Сбросить анкету",
    quizAddBundle: "Добавить весь комплект в корзину",
    shopEyebrow: "Полная коллекция",
    shopTitle: "Создано для современных интерьеров",
    shopSubtitle: "18 предметов авторской мебели из экологичного массива и натурального текстиля.",
    chipAll: "Все предметы",
    chipSofas: "Диваны и кресла",
    chipTables: "Столы и парты",
    chipBed: "Спальня",
    chipLight: "Освещение",
    chipStorage: "Хранение",
    chipDecor: "Декор и ковры",
    catalogSearchPlaceholder: "Поиск по ключевому слову...",
    maxPriceLabel: "Макс. цена:",
    sortFeatured: "Сортировка: Рекомендуемые",
    sortPriceAsc: "Цена: по возрастанию",
    sortPriceDesc: "Цена: по убыванию",
    sortNewest: "Новинки коллекции",
    sortAlpha: "По алфавиту (А — Я)",
    clearAllFilters: "Сбросить фильтры",
    showingPieces: "предметов мебели показано",
    emptyCatalogTitle: "Ничего не найдено",
    emptyCatalogDesc: "Попробуйте изменить поисковый запрос или диапазон цен.",
    resetFromEmptyBtn: "Сбросить все фильтры",
    lookbookEyebrow: "Лукбук интерьеров",
    lookbookTitle: "Комнаты для жизни",
    lookbookSubtitle: "Три авторских интерьера, вдохновленных эстетикой спокойствия.",
    storyEyebrow: "Наша философия",
    storyTitle: "Создано для жизни.<br><em>Сделано навека.</em>",
    storyDesc1: "В ROOMIX мы убеждены, что окружающие предметы влияют на наше самочувствие. Мы избегаем одноразовых трендов в пользу чистых линий и честных материалов.",
    storyDesc2: "Каждое соединение и шов доведены до совершенства в нашей мастерской, чтобы служить вашей семье поколениями.",
    storyPillar1Title: "Осознанная геометрия",
    storyPillar1Text: "Пропорции, снижающие визуальный шум и наполняющие комнату воздухом.",
    storyPillar2Title: "Честные материалы",
    storyPillar2Text: "Массив европейского дуба, букле, шлифованная латунь и керамика.",
    newsletterBadge: "ЖУРНАЛ ROOMIX",
    newsletterTitle: "Подпишитесь на эстетику уюта",
    newsletterText: "Получайте приглашения на закрытые презентации и сезонные капсулы прямо на почту.",
    newsletterPlaceholder: "Введите ваш email адрес...",
    newsletterBtn: "Подписаться",
    cartTitle: "Корзина покупок",
    cartFreeShippingNeed: "Добавьте до $1,000 для бесплатной премиальной доставки",
    cartFreeShippingDone: "<strong>Достигнуто:</strong> Бесплатная доставка и сборка",
    promoPlaceholder: "Промокод (попробуйте LUXE10)",
    applyBtn: "Применить",
    subtotalLabel: "Подытог",
    deliveryLabel: "Доставка",
    totalLabel: "Итого (USD)",
    checkoutBtn: "Перейти к оформлению",
    clearBagBtn: "Очистить корзину",
    continueShoppingBtn: "Продолжить покупки",
    emptyCartTitle: "Корзина пуста",
    emptyCartDesc: "Выберите мебель из нашего каталога для обустройства дома.",
    wishlistTitle: "Избранное",
    moveAllToBagBtn: "Переместить всё в корзину",
    emptyWishlistTitle: "В избранном пока пусто",
    emptyWishlistDesc: "Сохраняйте понравившиеся предметы во время просмотра каталога.",
    toastLangSwitched: "Язык переключен: Русский"
  },
  en: {
    announcement: "Complimentary White-Glove delivery on orders over $1,000 &bull; Use code <strong>LUXE10</strong> for 10% off",
    navHome: "Home",
    navShop: "Shop All",
    navFurniture: "Furniture",
    navLighting: "Lighting",
    navDecor: "Décor",
    navInspiration: "Inspiration",
    navQuiz: "Style Quiz",
    navStory: "Our Story",
    searchPlaceholder: "Search by piece, style, material, or room...",
    popularSearches: "Popular Searches:",
    quickAdd: "Quick Add",
    badgeBestseller: "Bestseller",
    badgeNew: "New",
    heroTag: "2026 Nordic Contemporary Collection",
    heroTitle: "Make Room for<br><em>Better Living.</em>",
    heroDesc: "Thoughtfully engineered furniture and timeless silhouettes designed for the spaces you love. Balancing tactile warmth, honest natural timber, and architectural precision.",
    heroExploreBtn: "Explore Collection",
    heroStoryBtn: "Find Your Style",
    perk1Label: "FSC® Certified Solid Oak",
    perk2Label: "Architectural Structural Warranty",
    perk3Label: "In-Home Comfort Trial",
    trust1Title: "White Glove Delivery",
    trust1Sub: "Room placement & assembly included over $1,000",
    trust2Title: "10-Year Warranty",
    trust2Sub: "Heirloom structural joinery & frames",
    trust3Title: "Sustainable Sourcing",
    trust3Sub: "Responsibly harvested timber & recycled wool",
    trust4Title: "Design Concierge",
    trust4Sub: "Free 1-on-1 virtual interior consultation",
    catEyebrow: "Curated Environments",
    catTitle: "Explore by Space & Craft",
    catSubtitle: "Tactile furnishings sculpted for calm, functional serenity in every corner of your residence.",
    catSofas: "Sofas & Armchairs",
    catTables: "Tables & Desks",
    catBed: "Beds & Bedroom",
    catLight: "Lighting",
    catStorage: "Storage & Shelving",
    catDecor: "Home Décor",
    bestEyebrow: "Most Cherished",
    bestTitle: "Iconic Bestsellers",
    tabAll: "All",
    tabSeating: "Seating",
    tabSurfaces: "Surfaces",
    tabLuminaires: "Luminaires",
    quizEyebrow: "Smart Interior Matchmaker",
    quizTitle: "Find Your Room Style",
    quizIntro: "Answer 4 simple design questions to receive a tailored capsule of complementary furniture suited to your palette, footprint, and budget.",
    quizBadge: "Demo Rule Engine &bull; Instant Matching",
    quizQ1: "1. Which room are you designing?",
    quizR1: "Living Room",
    quizR2: "Bedroom",
    quizR3: "Home Workspace",
    quizR4: "Dining Space",
    quizQ2: "2. Which aesthetic defines your taste?",
    quizS1: "Scandinavian",
    quizS1Desc: "Light oak, bouclé & gentle organic forms",
    quizS2: "Minimalist",
    quizS2Desc: "Clean horizons, pure geometry & no clutter",
    quizS3: "Warm Modern",
    quizS3Desc: "Sculptural silhouettes, rich walnut & stone",
    quizS4: "Architectural Dark",
    quizS4Desc: "Smoked finishes, black steel & raw brass",
    quizQ3: "3. What is your approximate investment target?",
    quizB1: "Under $300",
    quizB1Desc: "Accent tables, ceramics & luminaires",
    quizB2: "$300 — $800",
    quizB2Desc: "Lounge chairs, desks & coffee tables",
    quizB3: "$800+",
    quizB3Desc: "Signature sofas, dining centerpieces & beds",
    quizB4: "Any Budget",
    quizB4Desc: "Show all harmonized recommendations",
    quizGenBtn: "Generate Recommendations",
    quizResetBtn: "Reset Questionnaire",
    quizAddBundle: "Add Recommended Capsule to Bag",
    shopEyebrow: "The Complete Collection",
    shopTitle: "Designed for Modern Sanctuaries",
    shopSubtitle: "Explore 18 architect-approved furniture pieces, handcrafted with sustainably sourced hardwoods and natural upholstery.",
    chipAll: "All Pieces",
    chipSofas: "Sofas & Lounge",
    chipTables: "Tables & Desks",
    chipBed: "Bedroom",
    chipLight: "Lighting",
    chipStorage: "Storage",
    chipDecor: "Décor & Rugs",
    catalogSearchPlaceholder: "Filter by keyword...",
    maxPriceLabel: "Max Price:",
    sortFeatured: "Sort: Curated / Featured",
    sortPriceAsc: "Price: Low to High",
    sortPriceDesc: "Price: High to Low",
    sortNewest: "Sort: Newest Additions",
    sortAlpha: "Alphabetical (A — Z)",
    clearAllFilters: "Clear All Filters",
    showingPieces: "handcrafted pieces",
    emptyCatalogTitle: "No matching pieces found",
    emptyCatalogDesc: "Try clearing your search term, expanding the price slider, or choosing another category.",
    resetFromEmptyBtn: "Reset All Filters",
    lookbookEyebrow: "Editorial Lookbook",
    lookbookTitle: "Rooms Designed for Living",
    lookbookSubtitle: "Take inspiration from three distinctive interior sanctuaries styled by our architects.",
    storyEyebrow: "Our Design Ethos",
    storyTitle: "Designed for Living.<br><em>Made to Last.</em>",
    storyDesc1: "At ROOMIX, we believe the objects surrounding you shape your state of mind. We reject disposable trends in favor of timeless Nordic proportion, honest tactile materiality, and silent functional beauty.",
    storyDesc2: "Every joint, bevel, and upholstery stitch is developed through rigorous prototyping. We partner with heritage woodturners and ethical textile mills to ensure each table, sofa, and sconce survives generations of daily life with increasing grace.",
    storyPillar1Title: "Mindful Geometry",
    storyPillar1Text: "Proportions engineered to soothe visual noise and expand physical room feel.",
    storyPillar2Title: "Honest Materials",
    storyPillar2Text: "Solid European oak, Italian bouclé, brushed solid brass, and unglazed stoneware.",
    newsletterBadge: "ROOMIX JOURNAL",
    newsletterTitle: "Subscribe to Tactile Living",
    newsletterText: "Receive private exhibition invitations, seasonal interior capsules, and complimentary design notes straight to your inbox.",
    newsletterPlaceholder: "Enter your email address (e.g. name@domain.com)",
    newsletterBtn: "Join Journal",
    cartTitle: "Shopping Bag",
    cartFreeShippingNeed: "Add $1,000 for complimentary White-Glove delivery",
    cartFreeShippingDone: "<strong>Unlocked:</strong> Complimentary White-Glove Delivery",
    promoPlaceholder: "Promo code (Try LUXE10)",
    applyBtn: "Apply",
    subtotalLabel: "Subtotal",
    deliveryLabel: "Estimated Delivery",
    totalLabel: "Total (USD)",
    checkoutBtn: "Proceed to Demo Checkout",
    clearBagBtn: "Clear Bag",
    continueShoppingBtn: "Continue Exploring",
    emptyCartTitle: "Your Bag is Empty",
    emptyCartDesc: "Discover our architect-grade furniture collections to curate your living space.",
    wishlistTitle: "Saved Wishlist",
    moveAllToBagBtn: "Move All In-Stock to Bag",
    emptyWishlistTitle: "Your Wishlist is Empty",
    emptyWishlistDesc: "Save your favorite furniture pieces while exploring the collection for later consideration.",
    toastLangSwitched: "Language switched: English"
  }
};

/* ==========================================================================
   3. State Management & LocalStorage Persistence
   ========================================================================== */
const STORAGE_KEYS = {
  CART: 'roomix_cart_v1',
  WISHLIST: 'roomix_wishlist_v1',
  PROMO: 'roomix_promo_v1',
  LANG: 'roomix_lang_v1'
};

const state = {
  lang: safeLoad(STORAGE_KEYS.LANG, 'uz'), // Defaults to UZ per user request, persistent
  cart: safeLoad(STORAGE_KEYS.CART, []),
  wishlist: safeLoad(STORAGE_KEYS.WISHLIST, [1, 4]), // Pre-seed with 2 favorites for demo warmth
  appliedPromo: safeLoad(STORAGE_KEYS.PROMO, null),
  filters: {
    category: 'all',
    search: '',
    maxPrice: 1600,
    sort: 'featured'
  },
  quiz: {
    room: 'living',
    style: 'scandinavian',
    budget: 'mid'
  },
  modalProduct: null,
  modalSelectedVariant: null,
  modalSelectedColor: null,
  modalQuantity: 1
};

function safeLoad(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn(`[ROOMIX] Failed parsing localStorage key "${key}":`, err);
    return fallback;
  }
}

function safeSave(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.warn(`[ROOMIX] Failed saving localStorage key "${key}":`, err);
  }
}

/* ==========================================================================
   4. Language Switcher & Dynamic Translation Engine
   ========================================================================== */
function initLanguageSwitcher() {
  const switchers = [
    document.getElementById('langSwitcher'),
    document.getElementById('langSwitcherMobile')
  ];

  switchers.forEach(switcher => {
    if (!switcher) return;
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang && selectedLang !== state.lang) {
          setLanguage(selectedLang, true);
        }
      });
    });
  });

  // Apply initially stored language
  setLanguage(state.lang, false);
}

function setLanguage(lang, showNotification = true) {
  if (!I18N_DATA[lang]) lang = 'en';
  state.lang = lang;
  safeSave(STORAGE_KEYS.LANG, lang);

  // Synchronize active states across desktop & mobile switchers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    btn.classList.toggle('active', btnLang === lang);
  });

  // Apply textual translations across document
  applyTranslations(lang);

  // Re-render dynamic sections that embed text
  const bestsellersGrid = document.getElementById('bestsellersGrid');
  if (bestsellersGrid) {
    const activeTab = document.querySelector('#bestsellerTabs .tab-btn.active');
    const filter = activeTab ? activeTab.getAttribute('data-bestseller-filter') : 'all';
    renderBestsellers(filter);
  }

  const catalogGrid = document.getElementById('catalogGrid');
  if (catalogGrid) {
    updateCatalog();
  }

  // Update Cart and Wishlist if opened
  if (document.getElementById('cartDrawer').classList.contains('open')) {
    renderCart();
  }
  if (document.getElementById('wishlistDrawer').classList.contains('open')) {
    renderWishlist();
  }

  if (showNotification) {
    showToast(I18N_DATA[lang].toastLangSwitched, 'success');
  }
}

function applyTranslations(lang) {
  const t = I18N_DATA[lang];
  if (!t) return;

  // Announcement bar
  const announcement = document.querySelector('#announcementBar .announcement-content span');
  if (announcement) announcement.innerHTML = t.announcement;

  // Navigation Links
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-list .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    const cat = link.getAttribute('data-filter-category');
    if (href === '#hero') link.textContent = t.navHome;
    else if (href === '#shop' && !cat) link.textContent = t.navShop;
    else if (cat === 'sofas') link.textContent = t.navFurniture;
    else if (cat === 'lighting') link.textContent = t.navLighting;
    else if (cat === 'decor') link.textContent = t.navDecor;
    else if (href === '#inspiration') link.textContent = t.navInspiration;
    else if (href === '#style-finder') link.textContent = t.navQuiz;
    else if (href === '#story') link.textContent = t.navStory;
  });

  // Hero Section
  const heroTag = document.querySelector('.hero-tag span:last-child');
  if (heroTag) heroTag.textContent = t.heroTag;

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) heroTitle.innerHTML = t.heroTitle;

  const heroDesc = document.querySelector('.hero-description');
  if (heroDesc) heroDesc.textContent = t.heroDesc;

  const heroShopBtn = document.querySelector('#heroShopBtn span');
  if (heroShopBtn) heroShopBtn.textContent = t.heroExploreBtn;

  const heroStoryBtn = document.querySelector('.hero-cta-group a[href="#style-finder"]');
  if (heroStoryBtn) heroStoryBtn.textContent = t.heroStoryBtn;

  // Hero Perks
  const perkLabels = document.querySelectorAll('.hero-perks .perk-label');
  if (perkLabels.length >= 3) {
    perkLabels[0].textContent = t.perk1Label;
    perkLabels[1].textContent = t.perk2Label;
    perkLabels[2].textContent = t.perk3Label;
  }

  // Trust Strip
  const trustItems = document.querySelectorAll('.trust-strip .trust-item');
  if (trustItems.length >= 4) {
    trustItems[0].querySelector('strong').textContent = t.trust1Title;
    trustItems[0].querySelector('span').textContent = t.trust1Sub;
    trustItems[1].querySelector('strong').textContent = t.trust2Title;
    trustItems[1].querySelector('span').textContent = t.trust2Sub;
    trustItems[2].querySelector('strong').textContent = t.trust3Title;
    trustItems[2].querySelector('span').textContent = t.trust3Sub;
    trustItems[3].querySelector('strong').textContent = t.trust4Title;
    trustItems[3].querySelector('span').textContent = t.trust4Sub;
  }

  // Featured Categories Section
  const catSection = document.getElementById('categories');
  if (catSection) {
    const eyebrow = catSection.querySelector('.section-eyebrow');
    const title = catSection.querySelector('.section-title');
    const sub = catSection.querySelector('.section-subtitle');
    if (eyebrow) eyebrow.textContent = t.catEyebrow;
    if (title) title.textContent = t.catTitle;
    if (sub) sub.textContent = t.catSubtitle;

    const cards = catSection.querySelectorAll('.category-card');
    const catNames = [t.catSofas, t.catTables, t.catBed, t.catLight, t.catStorage, t.catDecor];
    cards.forEach((card, i) => {
      if (catNames[i]) {
        const nameElem = card.querySelector('.category-name');
        if (nameElem) nameElem.textContent = catNames[i];
      }
    });
  }

  // Bestsellers Section
  const bestSection = document.getElementById('bestsellers');
  if (bestSection) {
    const eyebrow = bestSection.querySelector('.section-eyebrow');
    const title = bestSection.querySelector('.section-title');
    if (eyebrow) eyebrow.textContent = t.bestEyebrow;
    if (title) title.textContent = t.bestTitle;

    const tabs = bestSection.querySelectorAll('#bestsellerTabs .tab-btn');
    if (tabs.length >= 4) {
      tabs[0].textContent = t.tabAll;
      tabs[1].textContent = t.tabSeating;
      tabs[2].textContent = t.tabSurfaces;
      tabs[3].textContent = t.tabLuminaires;
    }
  }

  // Quiz Section
  const quizSection = document.getElementById('style-finder');
  if (quizSection) {
    const eyebrow = quizSection.querySelector('.finder-header .section-eyebrow');
    const title = quizSection.querySelector('.finder-title');
    const intro = quizSection.querySelector('.finder-intro');
    const badge = quizSection.querySelector('.demo-pill-badge');
    if (eyebrow) eyebrow.textContent = t.quizEyebrow;
    if (title) title.textContent = t.quizTitle;
    if (intro) intro.textContent = t.quizIntro;
    if (badge) badge.innerHTML = t.quizBadge;

    const questions = quizSection.querySelectorAll('.quiz-question-label');
    if (questions.length >= 3) {
      questions[0].textContent = t.quizQ1;
      questions[1].textContent = t.quizQ2;
      questions[2].textContent = t.quizQ3;
    }

    // Room Choices
    const roomChoices = quizSection.querySelectorAll('[data-quiz-field="room"] .choice-text');
    if (roomChoices.length >= 4) {
      roomChoices[0].textContent = t.quizR1;
      roomChoices[1].textContent = t.quizR2;
      roomChoices[2].textContent = t.quizR3;
      roomChoices[3].textContent = t.quizR4;
    }

    // Style Choices
    const styleChoices = quizSection.querySelectorAll('[data-quiz-field="style"] .quiz-choice');
    if (styleChoices.length >= 4) {
      styleChoices[0].querySelector('.choice-title').textContent = t.quizS1;
      styleChoices[0].querySelector('.choice-desc').textContent = t.quizS1Desc;
      styleChoices[1].querySelector('.choice-title').textContent = t.quizS2;
      styleChoices[1].querySelector('.choice-desc').textContent = t.quizS2Desc;
      styleChoices[2].querySelector('.choice-title').textContent = t.quizS3;
      styleChoices[2].querySelector('.choice-desc').textContent = t.quizS3Desc;
      styleChoices[3].querySelector('.choice-title').textContent = t.quizS4;
      styleChoices[3].querySelector('.choice-desc').textContent = t.quizS4Desc;
    }

    // Budget Choices
    const budgetChoices = quizSection.querySelectorAll('[data-quiz-field="budget"] .quiz-choice');
    if (budgetChoices.length >= 4) {
      budgetChoices[0].querySelector('.choice-title').textContent = t.quizB1;
      budgetChoices[0].querySelector('.choice-desc').textContent = t.quizB1Desc;
      budgetChoices[1].querySelector('.choice-title').textContent = t.quizB2;
      budgetChoices[1].querySelector('.choice-desc').textContent = t.quizB2Desc;
      budgetChoices[2].querySelector('.choice-title').textContent = t.quizB3;
      budgetChoices[2].querySelector('.choice-desc').textContent = t.quizB3Desc;
      budgetChoices[3].querySelector('.choice-title').textContent = t.quizB4;
      budgetChoices[3].querySelector('.choice-desc').textContent = t.quizB4Desc;
    }

    const calcBtnSpan = document.querySelector('#calculateMatchBtn span');
    if (calcBtnSpan) calcBtnSpan.textContent = t.quizGenBtn;

    const resetBtn = document.getElementById('resetQuizBtn');
    if (resetBtn) resetBtn.textContent = t.quizResetBtn;

    const addBundleBtn = document.getElementById('addAllQuizItemsBtn');
    if (addBundleBtn) addBundleBtn.textContent = t.quizAddBundle;
  }

  // Complete Shop Section
  const shopSection = document.getElementById('shop');
  if (shopSection) {
    const eyebrow = shopSection.querySelector('.section-eyebrow');
    const title = shopSection.querySelector('.section-title');
    const sub = shopSection.querySelector('.section-subtitle');
    if (eyebrow) eyebrow.textContent = t.shopEyebrow;
    if (title) title.textContent = t.shopTitle;
    if (sub) sub.textContent = t.shopSubtitle;

    const chips = shopSection.querySelectorAll('#categoryChips .chip');
    const chipLabels = [t.chipAll, t.chipSofas, t.chipTables, t.chipBed, t.chipLight, t.chipStorage, t.chipDecor];
    chips.forEach((c, i) => {
      if (chipLabels[i]) c.textContent = chipLabels[i];
    });

    const searchInput = document.getElementById('catalogSearchInput');
    if (searchInput) searchInput.placeholder = t.catalogSearchPlaceholder;

    const priceLabel = document.querySelector('.price-slider-label');
    if (priceLabel) {
      const displaySpan = document.getElementById('priceDisplay');
      priceLabel.innerHTML = `${t.maxPriceLabel} <span id="priceDisplay">${displaySpan ? displaySpan.textContent : '$1,600'}</span>`;
    }

    const sortSelect = document.getElementById('catalogSortSelect');
    if (sortSelect && sortSelect.options.length >= 5) {
      sortSelect.options[0].text = t.sortFeatured;
      sortSelect.options[1].text = t.sortPriceAsc;
      sortSelect.options[2].text = t.sortPriceDesc;
      sortSelect.options[3].text = t.sortNewest;
      sortSelect.options[4].text = t.sortAlpha;
    }

    const resetCatalogBtn = document.getElementById('resetCatalogFiltersBtn');
    if (resetCatalogBtn) resetCatalogBtn.textContent = t.clearAllFilters;

    const emptyTitle = document.querySelector('#emptyCatalogState .empty-state-title');
    const emptyDesc = document.querySelector('#emptyCatalogState .empty-state-desc');
    const resetEmptyBtn = document.getElementById('resetFromEmptyBtn');
    if (emptyTitle) emptyTitle.textContent = t.emptyCatalogTitle;
    if (emptyDesc) emptyDesc.textContent = t.emptyCatalogDesc;
    if (resetEmptyBtn) resetEmptyBtn.textContent = t.resetFromEmptyBtn;
  }

  // Lookbook Inspiration Section
  const inspSection = document.getElementById('inspiration');
  if (inspSection) {
    const eyebrow = inspSection.querySelector('.section-eyebrow');
    const title = inspSection.querySelector('.section-title');
    const sub = inspSection.querySelector('.section-subtitle');
    if (eyebrow) eyebrow.textContent = t.lookbookEyebrow;
    if (title) title.textContent = t.lookbookTitle;
    if (sub) sub.textContent = t.lookbookSubtitle;
  }

  // Story Section
  const storySection = document.getElementById('story');
  if (storySection) {
    const eyebrow = storySection.querySelector('.section-eyebrow');
    const title = storySection.querySelector('.story-title');
    if (eyebrow) eyebrow.textContent = t.storyEyebrow;
    if (title) title.innerHTML = t.storyTitle;

    const paragraphs = storySection.querySelectorAll('.story-body p');
    if (paragraphs.length >= 2) {
      paragraphs[0].textContent = t.storyDesc1;
      paragraphs[1].textContent = t.storyDesc2;
    }

    const pillars = storySection.querySelectorAll('.pillar');
    if (pillars.length >= 2) {
      pillars[0].querySelector('.pillar-title').textContent = t.storyPillar1Title;
      pillars[0].querySelector('.pillar-text').textContent = t.storyPillar1Text;
      pillars[1].querySelector('.pillar-title').textContent = t.storyPillar2Title;
      pillars[1].querySelector('.pillar-text').textContent = t.storyPillar2Text;
    }
  }

  // Newsletter Section
  const newsletterBadge = document.querySelector('.newsletter-badge');
  const newsletterTitle = document.querySelector('.newsletter-title');
  const newsletterText = document.querySelector('.newsletter-text');
  const newsletterEmail = document.getElementById('newsletterEmail');
  const newsletterSubmitSpan = document.querySelector('#newsletterSubmitBtn span');
  if (newsletterBadge) newsletterBadge.textContent = t.newsletterBadge;
  if (newsletterTitle) newsletterTitle.textContent = t.newsletterTitle;
  if (newsletterText) newsletterText.textContent = t.newsletterText;
  if (newsletterEmail) newsletterEmail.placeholder = t.newsletterPlaceholder;
  if (newsletterSubmitSpan) newsletterSubmitSpan.textContent = t.newsletterBtn;

  // Search Modal
  const quickSearchInput = document.getElementById('quickSearchInput');
  if (quickSearchInput) quickSearchInput.placeholder = t.searchPlaceholder;
  const popularSearchesLabel = document.querySelector('.quick-tag-label');
  if (popularSearchesLabel) popularSearchesLabel.textContent = t.popularSearches;

  // Cart & Wishlist Drawer Titles
  const cartDrawerTitle = document.querySelector('#cartDrawer .drawer-title');
  if (cartDrawerTitle) cartDrawerTitle.textContent = t.cartTitle;
  const promoInput = document.getElementById('promoCodeInput');
  if (promoInput) promoInput.placeholder = t.promoPlaceholder;
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  if (applyPromoBtn) applyPromoBtn.textContent = t.applyBtn;
  const checkoutBtnSpan = document.querySelector('#checkoutBtn span');
  if (checkoutBtnSpan) checkoutBtnSpan.textContent = t.checkoutBtn;
  const clearCartBtn = document.getElementById('clearCartBtn');
  if (clearCartBtn) clearCartBtn.textContent = t.clearBagBtn;
  const continueShoppingBtn = document.getElementById('continueShoppingFromCart');
  if (continueShoppingBtn) continueShoppingBtn.textContent = t.continueShoppingBtn;

  const wishlistDrawerTitle = document.querySelector('#wishlistDrawer .drawer-title');
  if (wishlistDrawerTitle) wishlistDrawerTitle.textContent = t.wishlistTitle;
  const moveAllWishlistBtn = document.getElementById('moveAllWishlistToCartBtn');
  if (moveAllWishlistBtn) moveAllWishlistBtn.textContent = t.moveAllToBagBtn;
}

function getLocalizedCategory(category, lang) {
  const t = I18N_DATA[lang] || I18N_DATA.en;
  switch (category) {
    case 'sofas': return t.catSofas;
    case 'tables': return t.catTables;
    case 'bedroom': return t.catBed;
    case 'lighting': return t.catLight;
    case 'storage': return t.catStorage;
    case 'decor': return t.catDecor;
    default: return capitalize(category);
  }
}

/* ==========================================================================
   5. Initialization & DOM Hooking
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initHeaderAndNav();
  initBestsellersSection();
  initCatalogSection();
  initSmartStyleFinder();
  initProductDetailModal();
  initCartAndDrawers();
  initWishlistDrawer();
  initDemoCheckout();
  initNewsletter();
  initDemoLinksAndTooltips();
  updateHeaderBadges();
  renderActiveFilters();

  // Dynamic Copyright Year
  const yearElem = document.getElementById('currentYear');
  if (yearElem) yearElem.textContent = new Date().getFullYear();
});

/* ==========================================================================
   6. Header, Scroll, and Navigation
   ========================================================================== */
function initHeaderAndNav() {
  const header = document.getElementById('siteHeader');
  const announcementBar = document.getElementById('announcementBar');
  const closeAnnouncementBtn = document.getElementById('closeAnnouncement');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileNavBtn = document.getElementById('closeMobileNav');
  const mobileNav = document.getElementById('mobileNav');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  // Sticky header class toggle on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Announcement dismissal
  if (closeAnnouncementBtn && announcementBar) {
    closeAnnouncementBtn.addEventListener('click', () => {
      announcementBar.classList.add('hidden');
    });
  }

  // Mobile navigation drawer toggle
  function openMobileNav() {
    mobileNav.classList.add('open');
    drawerBackdrop.classList.add('active');
    document.body.classList.add('modal-open');
    mobileNav.setAttribute('aria-hidden', 'false');
  }

  function closeMobileNav() {
    mobileNav.classList.remove('open');
    if (!document.querySelector('.cart-drawer.open') && !document.querySelector('.wishlist-drawer.open')) {
      drawerBackdrop.classList.remove('active');
      document.body.classList.remove('modal-open');
    }
    mobileNav.setAttribute('aria-hidden', 'true');
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileNav);
  if (closeMobileNavBtn) closeMobileNavBtn.addEventListener('click', closeMobileNav);

  // Close mobile drawer on any navigation link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileNav();
      const filterCategory = link.getAttribute('data-filter-category');
      if (filterCategory) {
        setCategoryFilter(filterCategory);
      }
    });
  });

  // Desktop navigation links with direct category filter triggers
  document.querySelectorAll('.nav-link[data-filter-category]').forEach(link => {
    link.addEventListener('click', (e) => {
      const category = link.getAttribute('data-filter-category');
      setCategoryFilter(category);
    });
  });

  // Category card clicks throughout the page
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      setCategoryFilter(category);
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Room inspiration lookbook buttons
  document.querySelectorAll('.explore-room-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const room = btn.getAttribute('data-room-filter');
      filterCatalogByRoom(room);
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Global drawer backdrop click closes all drawers
  drawerBackdrop.addEventListener('click', () => {
    closeMobileNav();
    closeCart();
    closeWishlist();
  });

  // Keyboard accessibility: ESC key closes open modals or drawers
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeWishlist();
      closeMobileNav();
      closeProductModal();
      closeSearchOverlay();
      closeCheckoutModal();
    }
  });

  initSearchModal();
}

function updateHeaderBadges() {
  const cartBadge = document.getElementById('cartBadge');
  const wishlistBadge = document.getElementById('wishlistBadge');
  const mobileWishlistCount = document.querySelector('.mobile-wishlist-count');

  const totalCartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalWishlistCount = state.wishlist.length;

  if (cartBadge) {
    cartBadge.textContent = totalCartCount;
    cartBadge.classList.add('pulse');
    setTimeout(() => cartBadge.classList.remove('pulse'), 250);
  }

  if (wishlistBadge) {
    wishlistBadge.textContent = totalWishlistCount;
    wishlistBadge.classList.add('pulse');
    setTimeout(() => wishlistBadge.classList.remove('pulse'), 250);
  }

  if (mobileWishlistCount) {
    mobileWishlistCount.textContent = totalWishlistCount;
  }
}

/* ==========================================================================
   7. Search Overlay Modal
   ========================================================================== */
function initSearchModal() {
  const triggerBtn = document.getElementById('searchTriggerBtn');
  const searchModal = document.getElementById('searchModal');
  const closeBtn = document.getElementById('closeSearchModal');
  const searchInput = document.getElementById('quickSearchInput');
  const clearBtn = document.getElementById('quickSearchClear');
  const resultsContainer = document.getElementById('searchResultsContainer');
  const quickTags = document.querySelectorAll('.tag-chip');

  function openSearchOverlay() {
    searchModal.classList.add('open');
    searchModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    setTimeout(() => searchInput.focus(), 150);
  }

  window.closeSearchOverlay = function() {
    searchModal.classList.remove('open');
    searchModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    searchInput.value = '';
    renderSearchResults('');
  };

  if (triggerBtn) triggerBtn.addEventListener('click', openSearchOverlay);
  if (closeBtn) closeBtn.addEventListener('click', closeSearchOverlay);

  // Click outside box closes modal
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) closeSearchOverlay();
  });

  // Live input handler
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    renderSearchResults(val);
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchInput.focus();
      renderSearchResults('');
    });
  }

  // Quick tag chips
  quickTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const query = tag.getAttribute('data-search-tag');
      searchInput.value = query;
      renderSearchResults(query);
    });
  });

  function renderSearchResults(query) {
    if (!query || query.length < 2) {
      resultsContainer.innerHTML = `<p class="search-prompt">Type 2 or more characters to discover curated pieces.</p>`;
      return;
    }

    const matches = PRODUCTS_DATA.filter(p => {
      const fullText = `${p.name} ${p.category} ${p.materials} ${p.description} ${p.style}`.toLowerCase();
      return fullText.includes(query.toLowerCase());
    });

    if (matches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-state" style="padding: 24px 0;">
          <p class="empty-state-title" style="font-size: 1.2rem;">No matching furniture found</p>
          <p class="empty-state-desc">Try searching for "Oak", "Sofa", "Lighting", or "Bouclé".</p>
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = matches.map(p => `
      <div class="search-result-item" data-product-id="${p.id}">
        <div class="search-result-thumb">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='${SVG_FALLBACK_IMG}'">
        </div>
        <div class="search-result-info">
          <h4 class="search-result-name">${p.name}</h4>
          <span class="search-result-meta">${getLocalizedCategory(p.category, state.lang)} &bull; $${p.price.toLocaleString()}</span>
        </div>
        <button class="btn btn-outline btn-xs" data-product-id="${p.id}">View Piece &rarr;</button>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('[data-product-id]').forEach(item => {
      item.addEventListener('click', () => {
        const id = parseInt(item.getAttribute('data-product-id'), 10);
        closeSearchOverlay();
        openProductModal(id);
      });
    });
  }
}

/* ==========================================================================
   8. Bestsellers Section
   ========================================================================== */
function initBestsellersSection() {
  const tabs = document.querySelectorAll('#bestsellerTabs .tab-btn');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-bestseller-filter');
      renderBestsellers(filter);
    });
  });

  // Initial render
  renderBestsellers('all');
}

function renderBestsellers(filter = 'all') {
  const container = document.getElementById('bestsellersGrid');
  if (!container) return;

  let items = PRODUCTS_DATA.filter(p => p.isBestseller);
  if (filter !== 'all') {
    items = items.filter(p => p.category === filter);
  }

  container.innerHTML = items.map(product => buildProductCardHTML(product)).join('');
  bindProductCardEvents(container);
}

/* ==========================================================================
   9. Product Catalog Section (The Shop)
   ========================================================================== */
function initCatalogSection() {
  const categoryChips = document.querySelectorAll('#categoryChips .chip');
  const searchInput = document.getElementById('catalogSearchInput');
  const clearSearchBtn = document.getElementById('clearCatalogSearch');
  const priceSlider = document.getElementById('priceMaxSlider');
  const priceDisplay = document.getElementById('priceDisplay');
  const sortSelect = document.getElementById('catalogSortSelect');
  const resetFiltersBtn = document.getElementById('resetCatalogFiltersBtn');
  const resetFromEmptyBtn = document.getElementById('resetFromEmptyBtn');

  // Bind Category Chips
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.filters.category = chip.getAttribute('data-category');
      updateCatalog();
    });
  });

  // Bind Search Input
  searchInput.addEventListener('input', (e) => {
    state.filters.search = e.target.value;
    updateCatalog();
  });

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.filters.search = '';
      updateCatalog();
    });
  }

  // Bind Price Slider
  priceSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    state.filters.maxPrice = val;
    priceDisplay.textContent = `$${val.toLocaleString()}`;
    updateCatalog();
  });

  // Bind Sort Select
  sortSelect.addEventListener('change', (e) => {
    state.filters.sort = e.target.value;
    updateCatalog();
  });

  // Reset Filters Handlers
  function resetAllFilters() {
    state.filters.category = 'all';
    state.filters.search = '';
    state.filters.maxPrice = 1600;
    state.filters.sort = 'featured';

    categoryChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-category') === 'all'));
    searchInput.value = '';
    priceSlider.value = 1600;
    priceDisplay.textContent = '$1,600';
    sortSelect.value = 'featured';

    updateCatalog();
  }

  if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetAllFilters);
  if (resetFromEmptyBtn) resetFromEmptyBtn.addEventListener('click', resetAllFilters);

  window.setCategoryFilter = function(category) {
    state.filters.category = category;
    categoryChips.forEach(c => c.classList.toggle('active', c.getAttribute('data-category') === category));
    updateCatalog();
  };

  window.filterCatalogByRoom = function(room) {
    resetAllFilters();
    state.filters.search = room;
    searchInput.value = room;
    updateCatalog();
  };

  // Initial catalog draw
  updateCatalog();
}

function updateCatalog() {
  const catalogGrid = document.getElementById('catalogGrid');
  const emptyState = document.getElementById('emptyCatalogState');
  if (!catalogGrid) return;

  let list = [...PRODUCTS_DATA];

  // 1. Category Filter
  if (state.filters.category !== 'all') {
    list = list.filter(p => p.category === state.filters.category);
  }

  // 2. Search Query Filter
  if (state.filters.search.trim()) {
    const q = state.filters.search.toLowerCase().trim();
    list = list.filter(p => {
      const haystack = `${p.name} ${p.category} ${p.description} ${p.materials} ${p.style}`.toLowerCase();
      return haystack.includes(q);
    });
  }

  // 3. Price Filter
  list = list.filter(p => p.price <= state.filters.maxPrice);

  // 4. Sorting
  switch (state.filters.sort) {
    case 'price-asc':
      list.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      list.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    case 'name-asc':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'featured':
    default:
      list.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
      break;
  }

  // Render Count
  const countElem = document.getElementById('catalogCountText');
  const t = I18N_DATA[state.lang] || I18N_DATA.en;
  if (countElem) {
    countElem.textContent = state.lang === 'uz'
      ? `${list.length} / ${PRODUCTS_DATA.length} ${t.showingPieces}`
      : `${list.length} ${t.showingPieces}`;
  }

  // Render Grid or Empty State
  if (list.length === 0) {
    catalogGrid.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    catalogGrid.innerHTML = list.map(p => buildProductCardHTML(p)).join('');
    bindProductCardEvents(catalogGrid);
  }

  renderActiveFilters();
}

function renderActiveFilters() {
  const container = document.getElementById('activeFilterTags');
  if (!container) return;

  const tags = [];
  const t = I18N_DATA[state.lang] || I18N_DATA.en;

  if (state.filters.category !== 'all') {
    tags.push({
      label: `${getLocalizedCategory(state.filters.category, state.lang)}`,
      clear: () => setCategoryFilter('all')
    });
  }

  if (state.filters.search.trim()) {
    tags.push({
      label: `"${state.filters.search}"`,
      clear: () => {
        document.getElementById('catalogSearchInput').value = '';
        state.filters.search = '';
        document.getElementById('catalogSearchInput').dispatchEvent(new Event('input'));
      }
    });
  }

  if (state.filters.maxPrice < 1600) {
    tags.push({
      label: `≤ $${state.filters.maxPrice}`,
      clear: () => {
        const slider = document.getElementById('priceMaxSlider');
        slider.value = 1600;
        slider.dispatchEvent(new Event('input'));
      }
    });
  }

  container.innerHTML = tags.map((t, idx) => `
    <span class="filter-tag-pill">
      ${t.label}
      <button type="button" data-tag-idx="${idx}" aria-label="Remove filter">&times;</button>
    </span>
  `).join('');

  container.querySelectorAll('button[data-tag-idx]').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-tag-idx'), 10);
      if (tags[idx]) tags[idx].clear();
    });
  });
}

/* ==========================================================================
   10. Product Card Template & Card Event Delegation
   ========================================================================== */
function buildProductCardHTML(p) {
  const isSaved = state.wishlist.includes(p.id);
  const t = I18N_DATA[state.lang] || I18N_DATA.en;

  const discountLabel = p.originalPrice
    ? `<span class="badge badge-discount">-${Math.round((1 - p.price / p.originalPrice) * 100)}%</span>`
    : '';
  const bestsellerBadge = p.isBestseller ? `<span class="badge badge-bestseller">${t.badgeBestseller}</span>` : '';
  const newBadge = p.isNew ? `<span class="badge badge-new">${t.badgeNew}</span>` : '';

  return `
    <article class="product-card" data-product-id="${p.id}">
      
      <!-- Top Image Area -->
      <div class="product-image-container" data-action="open-detail">
        <div class="product-badge-group">
          ${bestsellerBadge}
          ${newBadge}
          ${discountLabel}
        </div>

        <button class="card-wishlist-btn ${isSaved ? 'active' : ''}" data-action="toggle-wishlist" aria-label="Toggle wishlist for ${p.name}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <img src="${p.image}" alt="${p.name}" class="product-main-img" onerror="this.src='${SVG_FALLBACK_IMG}'" loading="lazy">
        <img src="${p.secondaryImage || p.image}" alt="${p.name} alternate styled view" class="product-secondary-img" onerror="this.src='${SVG_FALLBACK_IMG}'" loading="lazy">

        <!-- Hover Quick Actions -->
        <div class="product-card-hover-actions">
          <button class="quick-add-btn" data-action="quick-add">
            ${t.quickAdd} &bull; $${p.price.toLocaleString()}
          </button>
          <button class="quick-view-btn" data-action="open-detail" aria-label="Quick inspect">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
      </div>

      <!-- Card Information -->
      <div class="product-card-body">
        <div class="product-card-meta">
          <span class="product-category-name">${getLocalizedCategory(p.category, state.lang)}</span>
          <span class="product-rating">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            ${p.rating} (${p.reviewCount})
          </span>
        </div>

        <h3 class="product-title" data-action="open-detail">${p.name}</h3>

        <div class="product-price-row">
          <span class="current-price">$${p.price.toLocaleString()}</span>
          ${p.originalPrice ? `<span class="original-price">$${p.originalPrice.toLocaleString()}</span>` : ''}
        </div>

        <!-- Color Swatches Preview -->
        <div class="product-swatches" aria-label="Color preview swatches">
          ${p.colorOptions.map((c, i) => `
            <span class="swatch-dot ${i === 0 ? 'active' : ''}" style="background-color: ${c.hex};" title="${c.name}" data-swatch-img="${c.img}"></span>
          `).join('')}
        </div>
      </div>

    </article>
  `;
}

function bindProductCardEvents(container) {
  // Wishlist toggle button
  container.querySelectorAll('[data-action="toggle-wishlist"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const id = parseInt(card.getAttribute('data-product-id'), 10);
      toggleWishlist(id);
    });
  });

  // Quick Add button
  container.querySelectorAll('[data-action="quick-add"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.product-card');
      const id = parseInt(card.getAttribute('data-product-id'), 10);
      const product = PRODUCTS_DATA.find(p => p.id === id);
      if (product) {
        addToCart(product.id, product.variants[0], product.colorOptions[0].name, 1);
        openCart();
      }
    });
  });

  // Open Product Detail Modal
  container.querySelectorAll('[data-action="open-detail"]').forEach(elem => {
    elem.addEventListener('click', () => {
      const card = elem.closest('.product-card');
      const id = parseInt(card.getAttribute('data-product-id'), 10);
      openProductModal(id);
    });
  });

  // Interactive Swatches on cards
  container.querySelectorAll('.swatch-dot').forEach(swatch => {
    swatch.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = swatch.closest('.product-card');
      card.querySelectorAll('.swatch-dot').forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');

      const newImg = swatch.getAttribute('data-swatch-img');
      const mainImg = card.querySelector('.product-main-img');
      if (newImg && mainImg) {
        mainImg.src = newImg;
      }
    });
  });

  // Connect floating card on hero
  const heroCardAction = document.querySelector('.floating-action-btn');
  if (heroCardAction) {
    heroCardAction.addEventListener('click', () => openProductModal(1));
  }
}

/* ==========================================================================
   11. Product Detail Modal
   ========================================================================== */
function initProductDetailModal() {
  const modal = document.getElementById('productDetailModal');
  const closeBtn = document.getElementById('closeDetailModal');

  window.openProductModal = function(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    state.modalProduct = product;
    state.modalSelectedVariant = product.variants[0];
    state.modalSelectedColor = product.colorOptions[0];
    state.modalQuantity = 1;

    renderProductModalContent();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  window.closeProductModal = function() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    state.modalProduct = null;
  };

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProductModal();
  });
}

function renderProductModalContent() {
  const container = document.getElementById('modalProductContent');
  const p = state.modalProduct;
  if (!container || !p) return;

  const isSaved = state.wishlist.includes(p.id);
  const t = I18N_DATA[state.lang] || I18N_DATA.en;

  container.innerHTML = `
    <!-- Left: Gallery -->
    <div class="modal-gallery">
      <div class="modal-main-img-box">
        <img src="${state.modalSelectedColor.img || p.image}" alt="${p.name}" id="modalActiveImage" onerror="this.src='${SVG_FALLBACK_IMG}'">
      </div>
      <div class="modal-thumbnails">
        <div class="modal-thumb active" data-img="${p.image}">
          <img src="${p.image}" alt="${p.name} thumb 1" onerror="this.src='${SVG_FALLBACK_IMG}'">
        </div>
        ${p.secondaryImage ? `
          <div class="modal-thumb" data-img="${p.secondaryImage}">
            <img src="${p.secondaryImage}" alt="${p.name} thumb 2" onerror="this.src='${SVG_FALLBACK_IMG}'">
          </div>
        ` : ''}
        ${p.colorOptions.length > 1 ? `
          <div class="modal-thumb" data-img="${p.colorOptions[1].img}">
            <img src="${p.colorOptions[1].img}" alt="${p.name} thumb 3" onerror="this.src='${SVG_FALLBACK_IMG}'">
          </div>
        ` : ''}
      </div>
    </div>

    <!-- Right: Detailed Configuration Panel -->
    <div class="modal-details">
      <span class="modal-category">${getLocalizedCategory(p.category, state.lang)} &bull; ROOMIX Living</span>
      <h2 class="modal-title">${p.name}</h2>

      <div class="modal-rating-row">
        <span class="modal-stars">★★★★★</span>
        <span class="modal-rating-val">${p.rating}</span>
        <span class="modal-reviews-count">(${p.reviewCount} Reviews)</span>
      </div>

      <div class="modal-price-row">
        <span class="modal-current-price">$${p.price.toLocaleString()}</span>
        ${p.originalPrice ? `<span class="modal-original-price">$${p.originalPrice.toLocaleString()}</span>` : ''}
        ${p.originalPrice ? `<span class="badge badge-discount">Save $${p.originalPrice - p.price}</span>` : ''}
      </div>

      <p class="modal-description">${p.description}</p>

      <!-- Color Swatch Selector -->
      <div class="modal-selector-group">
        <div class="modal-label">Finish: <span id="modalColorLabel">${state.modalSelectedColor.name}</span></div>
        <div class="modal-swatches-list">
          ${p.colorOptions.map((c, i) => `
            <button 
              type="button" 
              class="modal-swatch-btn ${c.name === state.modalSelectedColor.name ? 'active' : ''}" 
              style="background-color: ${c.hex};" 
              title="${c.name}"
              data-color-index="${i}"
              aria-label="Select color finish ${c.name}"
            ></button>
          `).join('')}
        </div>
      </div>

      <!-- Variant Selector -->
      <div class="modal-selector-group">
        <div class="modal-label">Configuration &amp; Sizing:</div>
        <div class="modal-variants-list">
          ${p.variants.map(v => `
            <button 
              type="button" 
              class="modal-variant-btn ${v === state.modalSelectedVariant ? 'active' : ''}" 
              data-variant="${v}"
            >${v}</button>
          `).join('')}
        </div>
      </div>

      <!-- Stock Status -->
      <div class="stock-pill ${p.stock <= 4 ? 'low-stock' : 'in-stock'}">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8"></circle>
        </svg>
        <span>${p.stock <= 4 ? `Only ${p.stock} left in stock` : `In Stock &bull; Ready for White-Glove dispatch`}</span>
      </div>

      <!-- Quantity + Add to Bag Row -->
      <div class="modal-actions-row">
        <div class="quantity-stepper">
          <button class="stepper-btn" id="modalQtyMinus" aria-label="Decrease quantity">&minus;</button>
          <span class="stepper-val" id="modalQtyVal">${state.modalQuantity}</span>
          <button class="stepper-btn" id="modalQtyPlus" aria-label="Increase quantity">&plus;</button>
        </div>

        <button class="btn btn-primary modal-add-cart-btn" id="modalAddToCartBtn">
          <span>${t.quickAdd} &bull; $${(p.price * state.modalQuantity).toLocaleString()}</span>
        </button>

        <button class="modal-wishlist-toggle ${isSaved ? 'active' : ''}" id="modalWishlistToggle" aria-label="Save to wishlist">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      <!-- Specifications Accordion -->
      <div class="modal-specs-accordion">
        <div class="spec-line">
          <span>Dimensions:</span>
          <strong>${p.dimensions}</strong>
        </div>
        <div class="spec-line">
          <span>Materials:</span>
          <strong>${p.materials}</strong>
        </div>
        <div class="spec-line">
          <span>Delivery:</span>
          <strong>White Glove Placement Included</strong>
        </div>
      </div>

    </div>
  `;

  // Bind Thumbnail Clicks
  container.querySelectorAll('.modal-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      container.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const imgUrl = thumb.getAttribute('data-img');
      const mainImg = document.getElementById('modalActiveImage');
      if (mainImg) mainImg.src = imgUrl;
    });
  });

  // Bind Color Swatch Clicks
  container.querySelectorAll('.modal-swatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-color-index'), 10);
      const chosenColor = p.colorOptions[idx];
      state.modalSelectedColor = chosenColor;

      container.querySelectorAll('.modal-swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      document.getElementById('modalColorLabel').textContent = chosenColor.name;
      const mainImg = document.getElementById('modalActiveImage');
      if (mainImg && chosenColor.img) mainImg.src = chosenColor.img;
    });
  });

  // Bind Variant Clicks
  container.querySelectorAll('.modal-variant-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.modal-variant-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.modalSelectedVariant = btn.getAttribute('data-variant');
    });
  });

  // Bind Quantity Stepper
  const qtyVal = document.getElementById('modalQtyVal');
  const addCartBtn = document.getElementById('modalAddToCartBtn');

  document.getElementById('modalQtyMinus').addEventListener('click', () => {
    if (state.modalQuantity > 1) {
      state.modalQuantity--;
      qtyVal.textContent = state.modalQuantity;
      addCartBtn.querySelector('span').textContent = `${t.quickAdd} • $${(p.price * state.modalQuantity).toLocaleString()}`;
    }
  });

  document.getElementById('modalQtyPlus').addEventListener('click', () => {
    if (state.modalQuantity < p.stock) {
      state.modalQuantity++;
      qtyVal.textContent = state.modalQuantity;
      addCartBtn.querySelector('span').textContent = `${t.quickAdd} • $${(p.price * state.modalQuantity).toLocaleString()}`;
    } else {
      showToast(`Maximum available stock (${p.stock}) reached for this piece`, 'warning');
    }
  });

  // Add to Bag action
  addCartBtn.addEventListener('click', () => {
    addToCart(p.id, state.modalSelectedVariant, state.modalSelectedColor.name, state.modalQuantity);
    closeProductModal();
    openCart();
  });

  // Wishlist toggle inside modal
  document.getElementById('modalWishlistToggle').addEventListener('click', () => {
    toggleWishlist(p.id);
    const updatedState = state.wishlist.includes(p.id);
    const wishlistBtn = document.getElementById('modalWishlistToggle');
    wishlistBtn.classList.toggle('active', updatedState);
    const svg = wishlistBtn.querySelector('svg');
    svg.setAttribute('fill', updatedState ? 'currentColor' : 'none');
  });
}

/* ==========================================================================
   12. Shopping Cart System & Cart Drawer
   ========================================================================== */
function initCartAndDrawers() {
  const triggerBtn = document.getElementById('cartTriggerBtn');
  const closeBtn = document.getElementById('closeCartDrawer');
  const cartDrawer = document.getElementById('cartDrawer');
  const continueShoppingBtn = document.getElementById('continueShoppingFromCart');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const applyPromoBtn = document.getElementById('applyPromoBtn');
  const promoInput = document.getElementById('promoCodeInput');
  const checkoutBtn = document.getElementById('checkoutBtn');

  window.openCart = function() {
    renderCart();
    cartDrawer.classList.add('open');
    document.getElementById('drawerBackdrop').classList.add('active');
    document.body.classList.add('modal-open');
    cartDrawer.setAttribute('aria-hidden', 'false');
  };

  window.closeCart = function() {
    cartDrawer.classList.remove('open');
    if (!document.getElementById('wishlistDrawer').classList.contains('open') &&
        !document.getElementById('mobileNav').classList.contains('open')) {
      document.getElementById('drawerBackdrop').classList.remove('active');
      document.body.classList.remove('modal-open');
    }
    cartDrawer.setAttribute('aria-hidden', 'true');
  };

  if (triggerBtn) triggerBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (continueShoppingBtn) continueShoppingBtn.addEventListener('click', closeCart);

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      if (confirm('Clear all items from your shopping bag?')) {
        state.cart = [];
        safeSave(STORAGE_KEYS.CART, state.cart);
        updateHeaderBadges();
        renderCart();
        showToast(I18N_DATA[state.lang].clearBagBtn, 'info');
      }
    });
  }

  // Promo code verification
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      const msg = document.getElementById('promoMessage');

      if (code === 'LUXE10') {
        state.appliedPromo = { code: 'LUXE10', discountPercent: 10 };
        safeSave(STORAGE_KEYS.PROMO, state.appliedPromo);
        msg.className = 'promo-message success';
        msg.textContent = 'Promo LUXE10 applied: 10% privilege discount unlocked.';
        showToast('10% discount applied to your order!', 'success');
        renderCart();
      } else if (!code) {
        msg.className = 'promo-message error';
        msg.textContent = 'Please enter a valid promotion code.';
      } else {
        msg.className = 'promo-message error';
        msg.textContent = 'Invalid promo code. Try LUXE10 for 10% off.';
      }
    });
  }

  // Checkout trigger
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your shopping bag is empty', 'warning');
        return;
      }
      closeCart();
      openCheckoutModal();
    });
  }
}

function addToCart(productId, variantName, colorName, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const existingLineIndex = state.cart.findIndex(
    item => item.productId === productId && item.variant === variantName && item.color === colorName
  );

  if (existingLineIndex > -1) {
    const newQty = state.cart[existingLineIndex].quantity + quantity;
    if (newQty > product.stock) {
      state.cart[existingLineIndex].quantity = product.stock;
      showToast(`Set to maximum available stock (${product.stock})`, 'warning');
    } else {
      state.cart[existingLineIndex].quantity = newQty;
      showToast(`Updated "${product.name}" quantity to ${newQty}`, 'success');
    }
  } else {
    state.cart.push({
      productId,
      variant: variantName,
      color: colorName,
      quantity: Math.min(quantity, product.stock)
    });
    showToast(`Added "${product.name}" to bag`, 'success');
  }

  safeSave(STORAGE_KEYS.CART, state.cart);
  updateHeaderBadges();
  renderCart();
}

function renderCart() {
  const container = document.getElementById('cartItemsList');
  const countBadge = document.getElementById('cartDrawerCount');
  const subtotalElem = document.getElementById('cartSubtotalAmount');
  const discountElem = document.getElementById('cartDiscountAmount');
  const discountRow = document.getElementById('discountLine');
  const shippingElem = document.getElementById('cartShippingAmount');
  const grandTotalElem = document.getElementById('cartGrandTotalAmount');
  const shippingProgressText = document.getElementById('shippingProgressText');
  const shippingProgressBar = document.getElementById('shippingProgressBar');
  const footerArea = document.getElementById('cartFooter');
  const t = I18N_DATA[state.lang] || I18N_DATA.en;

  if (!container) return;

  const totalCount = state.cart.reduce((sum, i) => sum + i.quantity, 0);
  if (countBadge) countBadge.textContent = `${totalCount} ${totalCount === 1 ? 'Piece' : 'Pieces'}`;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <h4 class="drawer-empty-title">${t.emptyCartTitle}</h4>
        <p class="drawer-empty-desc">${t.emptyCartDesc}</p>
        <button class="btn btn-primary" onclick="closeCart(); document.getElementById('shop').scrollIntoView({behavior:'smooth'});">
          ${t.heroExploreBtn}
        </button>
      </div>
    `;

    if (shippingProgressText) shippingProgressText.textContent = t.cartFreeShippingNeed;
    if (shippingProgressBar) shippingProgressBar.style.width = '0%';
    if (footerArea) footerArea.style.opacity = '0.5';
    if (subtotalElem) subtotalElem.textContent = '$0.00';
    if (grandTotalElem) grandTotalElem.textContent = '$0.00';
    return;
  }

  if (footerArea) footerArea.style.opacity = '1';

  // Calculate pricing breakdown
  let subtotal = 0;
  const renderedItems = state.cart.map((cartItem, idx) => {
    const product = PRODUCTS_DATA.find(p => p.id === cartItem.productId);
    if (!product) return '';

    const itemTotal = product.price * cartItem.quantity;
    subtotal += itemTotal;

    return `
      <div class="drawer-item" data-cart-index="${idx}">
        <div class="drawer-item-thumb" onclick="closeCart(); openProductModal(${product.id});">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='${SVG_FALLBACK_IMG}'">
        </div>
        <div class="drawer-item-content">
          <h4 class="drawer-item-title" onclick="closeCart(); openProductModal(${product.id});">${product.name}</h4>
          <span class="drawer-item-variant">${cartItem.variant} &bull; ${cartItem.color}</span>
          <span class="drawer-item-price">$${itemTotal.toLocaleString()}</span>

          <div class="drawer-item-controls">
            <div class="quantity-stepper">
              <button class="stepper-btn" data-cart-action="dec" data-index="${idx}" aria-label="Decrease">&minus;</button>
              <span class="stepper-val">${cartItem.quantity}</span>
              <button class="stepper-btn" data-cart-action="inc" data-index="${idx}" aria-label="Increase">&plus;</button>
            </div>
            <button class="remove-item-btn" data-cart-action="remove" data-index="${idx}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = renderedItems;

  // Free shipping progress calculation (Free over $1000)
  const freeShippingThreshold = 1000;
  if (subtotal >= freeShippingThreshold) {
    if (shippingProgressText) shippingProgressText.innerHTML = t.cartFreeShippingDone;
    if (shippingProgressBar) shippingProgressBar.style.width = '100%';
    if (shippingElem) shippingElem.textContent = 'Free';
  } else {
    const diff = freeShippingThreshold - subtotal;
    const pct = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
    if (shippingProgressText) shippingProgressText.textContent = `Add $${diff.toLocaleString()} more for complimentary White-Glove delivery`;
    if (shippingProgressBar) shippingProgressBar.style.width = `${pct}%`;
    if (shippingElem) shippingElem.textContent = '$49.00';
  }

  // Discount calculation
  let discountAmount = 0;
  if (state.appliedPromo && state.appliedPromo.discountPercent) {
    discountAmount = Math.round(subtotal * (state.appliedPromo.discountPercent / 100));
    if (discountRow) discountRow.style.display = 'flex';
    if (discountElem) discountElem.textContent = `-$${discountAmount.toLocaleString()}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const shippingCost = subtotal >= freeShippingThreshold ? 0 : 49;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  if (subtotalElem) subtotalElem.textContent = `$${subtotal.toLocaleString()}`;
  if (grandTotalElem) grandTotalElem.textContent = `$${grandTotal.toLocaleString()}`;

  // Bind cart item buttons
  container.querySelectorAll('[data-cart-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-cart-action');
      const idx = parseInt(btn.getAttribute('data-index'), 10);
      const cartItem = state.cart[idx];
      if (!cartItem) return;

      const product = PRODUCTS_DATA.find(p => p.id === cartItem.productId);

      if (action === 'dec') {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
        } else {
          state.cart.splice(idx, 1);
        }
      } else if (action === 'inc') {
        if (product && cartItem.quantity < product.stock) {
          cartItem.quantity++;
        } else {
          showToast(`Max stock reached for this piece`, 'warning');
        }
      } else if (action === 'remove') {
        state.cart.splice(idx, 1);
        showToast('Item removed from bag', 'info');
      }

      safeSave(STORAGE_KEYS.CART, state.cart);
      updateHeaderBadges();
      renderCart();
    });
  });
}

/* ==========================================================================
   13. Wishlist System & Wishlist Drawer
   ========================================================================== */
function initWishlistDrawer() {
  const triggerBtn = document.getElementById('wishlistTriggerBtn');
  const mobileWishlistBtn = document.getElementById('mobileWishlistBtn');
  const closeBtn = document.getElementById('closeWishlistDrawer');
  const wishlistDrawer = document.getElementById('wishlistDrawer');
  const moveAllBtn = document.getElementById('moveAllWishlistToCartBtn');

  window.openWishlist = function() {
    renderWishlist();
    wishlistDrawer.classList.add('open');
    document.getElementById('drawerBackdrop').classList.add('active');
    document.body.classList.add('modal-open');
    wishlistDrawer.setAttribute('aria-hidden', 'false');
  };

  window.closeWishlist = function() {
    wishlistDrawer.classList.remove('open');
    if (!document.getElementById('cartDrawer').classList.contains('open') &&
        !document.getElementById('mobileNav').classList.contains('open')) {
      document.getElementById('drawerBackdrop').classList.remove('active');
      document.body.classList.remove('modal-open');
    }
    wishlistDrawer.setAttribute('aria-hidden', 'true');
  };

  if (triggerBtn) triggerBtn.addEventListener('click', openWishlist);
  if (mobileWishlistBtn) mobileWishlistBtn.addEventListener('click', () => {
    document.getElementById('closeMobileNav').click();
    openWishlist();
  });
  if (closeBtn) closeBtn.addEventListener('click', closeWishlist);

  if (moveAllBtn) {
    moveAllBtn.addEventListener('click', () => {
      if (state.wishlist.length === 0) return;
      state.wishlist.forEach(id => {
        const prod = PRODUCTS_DATA.find(p => p.id === id);
        if (prod) {
          addToCart(prod.id, prod.variants[0], prod.colorOptions[0].name, 1);
        }
      });
      state.wishlist = [];
      safeSave(STORAGE_KEYS.WISHLIST, state.wishlist);
      updateHeaderBadges();
      renderWishlist();
      syncAllWishlistButtonsOnScreen();
      closeWishlist();
      openCart();
      showToast('All saved pieces moved to your bag', 'success');
    });
  }
}

function toggleWishlist(productId) {
  const idx = state.wishlist.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);

  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast(`Removed "${product ? product.name : 'Piece'}" from wishlist`, 'info');
  } else {
    state.wishlist.push(productId);
    showToast(`Saved "${product ? product.name : 'Piece'}" to wishlist`, 'success');
  }

  safeSave(STORAGE_KEYS.WISHLIST, state.wishlist);
  updateHeaderBadges();
  syncAllWishlistButtonsOnScreen();
}

function syncAllWishlistButtonsOnScreen() {
  document.querySelectorAll('.card-wishlist-btn').forEach(btn => {
    const card = btn.closest('.product-card');
    if (!card) return;
    const id = parseInt(card.getAttribute('data-product-id'), 10);
    const isSaved = state.wishlist.includes(id);

    btn.classList.toggle('active', isSaved);
    const svg = btn.querySelector('svg');
    if (svg) svg.setAttribute('fill', isSaved ? 'currentColor' : 'none');
  });
}

function renderWishlist() {
  const container = document.getElementById('wishlistItemsList');
  const countBadge = document.getElementById('wishlistDrawerCount');
  const t = I18N_DATA[state.lang] || I18N_DATA.en;
  if (!container) return;

  const total = state.wishlist.length;
  if (countBadge) countBadge.textContent = `${total} ${total === 1 ? 'Saved Piece' : 'Saved Pieces'}`;

  if (total === 0) {
    container.innerHTML = `
      <div class="drawer-empty-state">
        <div class="drawer-empty-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
        <h4 class="drawer-empty-title">${t.emptyWishlistTitle}</h4>
        <p class="drawer-empty-desc">${t.emptyWishlistDesc}</p>
        <button class="btn btn-primary" onclick="closeWishlist(); document.getElementById('shop').scrollIntoView({behavior:'smooth'});">
          ${t.heroExploreBtn}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = state.wishlist.map(id => {
    const p = PRODUCTS_DATA.find(prod => prod.id === id);
    if (!p) return '';

    return `
      <div class="drawer-item" data-wishlist-id="${p.id}">
        <div class="drawer-item-thumb" onclick="closeWishlist(); openProductModal(${p.id});">
          <img src="${p.image}" alt="${p.name}" onerror="this.src='${SVG_FALLBACK_IMG}'">
        </div>
        <div class="drawer-item-content">
          <h4 class="drawer-item-title" onclick="closeWishlist(); openProductModal(${p.id});">${p.name}</h4>
          <span class="drawer-item-variant">${getLocalizedCategory(p.category, state.lang)} &bull; ${p.materials.split(',')[0]}</span>
          <span class="drawer-item-price">$${p.price.toLocaleString()}</span>

          <div class="drawer-item-controls">
            <button class="btn btn-outline btn-xs" data-wishlist-action="to-cart" data-id="${p.id}">
              Move to Bag
            </button>
            <button class="remove-item-btn" data-wishlist-action="remove" data-id="${p.id}">
              Remove
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.querySelectorAll('[data-wishlist-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-wishlist-action');
      const id = parseInt(btn.getAttribute('data-id'), 10);
      const prod = PRODUCTS_DATA.find(p => p.id === id);

      if (action === 'to-cart' && prod) {
        addToCart(prod.id, prod.variants[0], prod.colorOptions[0].name, 1);
        toggleWishlist(id);
        renderWishlist();
        closeWishlist();
        openCart();
      } else if (action === 'remove') {
        toggleWishlist(id);
        renderWishlist();
      }
    });
  });
}

/* ==========================================================================
   14. Smart Interior Finder Quiz ("Find Your Room Style")
   ========================================================================== */
function initSmartStyleFinder() {
  const quizForm = document.getElementById('styleFinderForm');
  const calculateBtn = document.getElementById('calculateMatchBtn');
  const resetBtn = document.getElementById('resetQuizBtn');
  const resultsArea = document.getElementById('finderResultsArea');
  const productsGrid = document.getElementById('finderProductsGrid');
  const matchScoreText = document.getElementById('matchScoreText');
  const addAllBtn = document.getElementById('addAllQuizItemsBtn');

  if (!quizForm) return;

  // Option selection handler
  quizForm.querySelectorAll('.quiz-options-grid').forEach(grid => {
    const field = grid.getAttribute('data-quiz-field');
    grid.querySelectorAll('.quiz-choice').forEach(choice => {
      choice.addEventListener('click', () => {
        grid.querySelectorAll('.quiz-choice').forEach(c => c.classList.remove('active'));
        choice.classList.add('active');
        state.quiz[field] = choice.getAttribute('data-value');
      });
    });
  });

  // Calculate Matching Capsule based on rules
  function calculateRecommendations() {
    const { room, style, budget } = state.quiz;

    // Rule scoring engine
    const scored = PRODUCTS_DATA.map(product => {
      let score = 0;

      // Room affinity match (+40)
      if (product.room === room) score += 40;
      else if (product.category === 'lighting' || product.category === 'decor') score += 20;

      // Style affinity match (+35)
      if (product.style === style) score += 35;

      // Budget target match (+25)
      if (budget === 'under300' && product.price <= 300) score += 25;
      else if (budget === 'mid' && product.price > 300 && product.price <= 800) score += 25;
      else if (budget === 'luxury' && product.price > 800) score += 25;
      else if (budget === 'any') score += 20;

      return { product, score };
    });

    // Sort by compatibility score
    scored.sort((a, b) => b.score - a.score);

    // Pick top 3-4 diverse pieces (avoid duplicates of same category)
    const capsule = [];
    const usedCats = new Set();

    for (const item of scored) {
      if (!usedCats.has(item.product.category)) {
        capsule.push(item.product);
        usedCats.add(item.product.category);
      }
      if (capsule.length >= 3) break;
    }

    // Render results
    resultsArea.style.display = 'block';
    const computedScore = 94 + Math.floor(Math.random() * 5); // 94% - 98%
    matchScoreText.textContent = `${computedScore}% Compatibility &bull; ${capitalize(style)} Capsule`;

    productsGrid.innerHTML = capsule.map(p => buildProductCardHTML(p)).join('');
    bindProductCardEvents(productsGrid);

    // Smooth scroll down to results
    resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Store for "Add bundle" action
    addAllBtn.onclick = () => {
      capsule.forEach(p => {
        addToCart(p.id, p.variants[0], p.colorOptions[0].name, 1);
      });
      openCart();
      showToast('All 3 recommended pieces added to your bag', 'success');
    };
  }

  if (calculateBtn) calculateBtn.addEventListener('click', calculateRecommendations);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.quiz = { room: 'living', style: 'scandinavian', budget: 'mid' };
      quizForm.querySelectorAll('.quiz-options-grid').forEach(grid => {
        const field = grid.getAttribute('data-quiz-field');
        grid.querySelectorAll('.quiz-choice').forEach(choice => {
          choice.classList.toggle('active', choice.getAttribute('data-value') === state.quiz[field]);
        });
      });
      resultsArea.style.display = 'none';
    });
  }
}

/* ==========================================================================
   15. Demo Checkout Workflow & Validation
   ========================================================================== */
function initDemoCheckout() {
  const modal = document.getElementById('checkoutModal');
  const closeBtn = document.getElementById('closeCheckoutModal');
  const form = document.getElementById('checkoutForm');
  const checkoutBody = document.getElementById('checkoutBody');
  const confirmationScreen = document.getElementById('checkoutConfirmation');
  const returnBtn = document.getElementById('confirmationReturnBtn');

  window.openCheckoutModal = function() {
    renderCheckoutSummary();
    checkoutBody.style.display = 'grid';
    confirmationScreen.style.display = 'none';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  window.closeCheckoutModal = function() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeCheckoutModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCheckoutModal();
  });

  if (returnBtn) {
    returnBtn.addEventListener('click', () => {
      closeCheckoutModal();
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Form Submission Validation
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('checkoutName');
      const emailInput = document.getElementById('checkoutEmail');
      const phoneInput = document.getElementById('checkoutPhone');
      const addressInput = document.getElementById('checkoutAddress');
      const cityInput = document.getElementById('checkoutCity');
      const zipInput = document.getElementById('checkoutZip');

      // Clear previous error styles
      form.querySelectorAll('.field-error').forEach(err => err.textContent = '');
      form.querySelectorAll('input').forEach(inp => inp.classList.remove('invalid'));

      // Validate Name
      if (!nameInput.value.trim()) {
        document.getElementById('nameError').textContent = 'Please enter your full name';
        nameInput.classList.add('invalid');
        isValid = false;
      }

      // Validate Email (Regex)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        emailInput.classList.add('invalid');
        isValid = false;
      }

      // Validate Phone
      if (phoneInput.value.trim().length < 7) {
        document.getElementById('phoneError').textContent = 'Please enter a valid contact phone number';
        phoneInput.classList.add('invalid');
        isValid = false;
      }

      // Validate Address
      if (!addressInput.value.trim()) {
        document.getElementById('addressError').textContent = 'Please provide your street delivery address';
        addressInput.classList.add('invalid');
        isValid = false;
      }

      // Validate City
      if (!cityInput.value.trim()) {
        document.getElementById('cityError').textContent = 'Please enter your city';
        cityInput.classList.add('invalid');
        isValid = false;
      }

      // Validate Zip
      if (!zipInput.value.trim()) {
        document.getElementById('zipError').textContent = 'Postal code required';
        zipInput.classList.add('invalid');
        isValid = false;
      }

      if (!isValid) return;

      // Process Simulated Order Placement
      const randomOrderNum = Math.floor(100000 + Math.random() * 900000);
      const orderRef = `#RMX-${randomOrderNum}`;
      const customerEmail = emailInput.value.trim();

      // Populate confirmation view
      document.getElementById('confirmedOrderRef').textContent = orderRef;
      document.getElementById('confirmedEmail').textContent = customerEmail;

      const summaryDetails = document.getElementById('confirmedOrderDetails');
      summaryDetails.innerHTML = `
        <p><strong>Shipping To:</strong> ${escapeHtml(nameInput.value.trim())}, ${escapeHtml(addressInput.value.trim())}, ${escapeHtml(cityInput.value.trim())}</p>
        <p><strong>Items:</strong> ${state.cart.length} unique furniture configuration(s)</p>
        <p><strong>Estimated Delivery:</strong> White-Glove placement scheduled within 5–7 business days</p>
      `;

      // Clear Cart after successful checkout
      state.cart = [];
      safeSave(STORAGE_KEYS.CART, state.cart);
      updateHeaderBadges();
      renderCart();

      // Show confirmation screen
      checkoutBody.style.display = 'none';
      confirmationScreen.style.display = 'flex';
      showToast(`Order ${orderRef} simulated successfully!`, 'success');
    });
  }
}

function renderCheckoutSummary() {
  const container = document.getElementById('checkoutItemsReview');
  const subtotalElem = document.getElementById('checkoutSubtotal');
  const discountRow = document.getElementById('checkoutDiscountRow');
  const discountElem = document.getElementById('checkoutDiscount');
  const shippingElem = document.getElementById('checkoutShipping');
  const taxElem = document.getElementById('checkoutTax');
  const totalElem = document.getElementById('checkoutTotal');

  if (!container) return;

  let subtotal = 0;
  container.innerHTML = state.cart.map(item => {
    const product = PRODUCTS_DATA.find(p => p.id === item.productId);
    if (!product) return '';

    const lineTotal = product.price * item.quantity;
    subtotal += lineTotal;

    return `
      <div class="checkout-summary-item">
        <div class="summary-thumb">
          <img src="${product.image}" alt="${product.name}" onerror="this.src='${SVG_FALLBACK_IMG}'">
        </div>
        <div class="summary-details">
          <div class="summary-name">${product.name} (x${item.quantity})</div>
          <div class="summary-variant">${item.variant} &bull; ${item.color}</div>
        </div>
        <div class="summary-price">$${lineTotal.toLocaleString()}</div>
      </div>
    `;
  }).join('');

  const freeShipping = subtotal >= 1000;
  const shippingCost = freeShipping ? 0 : 49;

  let discount = 0;
  if (state.appliedPromo && state.appliedPromo.discountPercent) {
    discount = Math.round(subtotal * (state.appliedPromo.discountPercent / 100));
    if (discountRow) discountRow.style.display = 'flex';
    if (discountElem) discountElem.textContent = `-$${discount.toLocaleString()}`;
  } else {
    if (discountRow) discountRow.style.display = 'none';
  }

  const taxableAmount = Math.max(0, subtotal - discount);
  const tax = Math.round(taxableAmount * 0.08875);
  const finalTotal = taxableAmount + shippingCost + tax;

  if (subtotalElem) subtotalElem.textContent = `$${subtotal.toLocaleString()}`;
  if (shippingElem) shippingElem.textContent = freeShipping ? 'Free (Complimentary)' : '$49.00';
  if (taxElem) taxElem.textContent = `$${tax.toLocaleString()}`;
  if (totalElem) totalElem.textContent = `$${finalTotal.toLocaleString()}`;
}

/* ==========================================================================
   16. Newsletter Validation & Demo Notices
   ========================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const feedback = document.getElementById('newsletterFeedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!val) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Please enter your email address.';
      return;
    }

    if (!emailRegex.test(val)) {
      feedback.className = 'form-feedback error';
      feedback.textContent = 'Please provide a valid email format (e.g. name@domain.com).';
      return;
    }

    feedback.className = 'form-feedback success';
    feedback.textContent = 'Welcome to ROOMIX Journal. You are now subscribed to our seasonal dispatches.';
    emailInput.value = '';
    showToast('Subscribed to ROOMIX Journal', 'success');
  });
}

function initDemoLinksAndTooltips() {
  document.querySelectorAll('.demo-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const info = link.getAttribute('data-info') || 'Demonstration link for ROOMIX luxury interior portfolio.';
      showToast(info, 'info');
    });
  });
}

/* ==========================================================================
   17. Toast Notification System
   ========================================================================== */
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let iconSVG = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;

  if (type === 'warning') {
    iconSVG = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
    `;
  }

  toast.innerHTML = `
    <div class="toast-icon">${iconSVG}</div>
    <div class="toast-message">${escapeHtml(message)}</div>
  `;

  container.appendChild(toast);

  // Auto dismiss after 3.6s
  setTimeout(() => {
    toast.classList.add('toast-leave');
    setTimeout(() => toast.remove(), 320);
  }, 3600);
}

/* ==========================================================================
   18. Utility Helpers
   ========================================================================== */
function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}
