export type Product = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
  href: string;
  products: string[];
  gallery: string[];
  specification: string;
};

export const contact = {
  email: "info@zorineexports.com",
  secondaryEmail: "contact@zorineexports.com",
  phone: "+91-9417745884",
  address: "Village Rasulpur, Rupnagar, Punjab, India",
};

export const products: Product[] = [
  { slug: "indian-spices", title: "Indian Spices", eyebrow: "Aroma-grade essentials", description: "Whole and ground spices selected for color, purity, aroma, and export-grade consistency.", image: "/img/product/indianspices/spices11.jpg", accent: "Turmeric, chili, cumin, coriander, cardamom, cloves", href: "/products/indian-spices", products: ["Turmeric", "Red Chili", "Cumin", "Coriander", "Cardamom", "Cloves", "Black Pepper", "Mustard Seeds"], gallery: ["/img/product/indianspices/spices11.jpg", "/img/product/indianspices/spices15.jpg", "/img/product/indianspices/spices8.jpg", "/img/product/indianspices/spices12.jpg", "/img/product/indianspices/spices7.jpg", "/img/product/indianspices/spices4.jpg"], specification: "Sorted spice lots, whole or processed formats, export packing discussion, buyer-specific documentation support." },
  { slug: "fresh-fruits", title: "Fresh Fruits", eyebrow: "Seasonal freshness", description: "Indian fruits sourced, graded, and packed for international buyers who care about shelf life and presentation.", image: "/img/product/fruits/fruit9.jpg", accent: "Mango, pomegranate, citrus, grapes, banana, guava", href: "/products/fresh-fruits", products: ["Mango", "Pomegranate", "Grapes", "Citrus", "Apple", "Banana", "Guava", "Papaya"], gallery: ["/img/product/fruits/fruit9.jpg", "/img/product/fruits/fruit8.jpg", "/img/product/fruits/fruit7.jpg", "/img/product/fruits/fruit5.jpg", "/img/product/fruits/fruit3.jpg", "/img/product/fruits/fruit1.jpg"], specification: "Seasonal availability, grading, buyer-led packing formats, dispatch planning for freshness-sensitive routes." },
  { slug: "fresh-vegetables", title: "Fresh Vegetables", eyebrow: "Farm-to-container discipline", description: "Vegetables handled for clean grading, freshness, visual quality, and dependable export movement.", image: "/img/product/vegetables/vege16.jpg", accent: "Onion, potato, tomato, okra, cucumber, green chili", href: "/products/fresh-vegetables", products: ["Onion", "Potato", "Tomato", "Okra", "Cucumber", "Carrot", "Green Chili", "Leafy Greens"], gallery: ["/img/product/vegetables/vege16.jpg", "/img/product/vegetables/vege21.jpg", "/img/product/vegetables/vege13.jpg", "/img/product/vegetables/vege12.jpg", "/img/product/vegetables/vege10.jpg", "/img/product/vegetables/vege4.jpg"], specification: "Fresh lot coordination, sorting, shelf-life aware packaging, market-specific procurement support." },
  { slug: "dry-fruits", title: "Dry Fruits", eyebrow: "Premium dried selections", description: "Dried fruits and figs prepared for clean, dependable bulk export supply and premium retail programs.", image: "/img/product/dry_fruits/dry1.jpg", accent: "Figs, dates, raisins, apricots, prunes", href: "/products/dry-fruits", products: ["Figs", "Dates", "Raisins", "Apricots", "Prunes", "Dry Berries"], gallery: ["/img/product/dry_fruits/dry1.jpg", "/img/product/dry_fruits/dry2.jpg", "/img/product/dry_fruits/dry3.jpg", "/img/product/dry_fruits/dry4.jpg", "/img/product/dry_fruits/dry5.jpg", "/img/product/dry_fruits/dry6.jpg"], specification: "Clean packaging, bulk and retail formats, lot consistency, custom buyer requirements." },
  { slug: "nuts-products", title: "Nuts & Nut Products", eyebrow: "Refined snacking supply", description: "Carefully packed nuts and value-added nut products for premium trade channels and food brands.", image: "/img/product/nuts/nuts5.jpg", accent: "Almonds, cashews, walnuts, pistachios, kernels", href: "/products/nuts-products", products: ["Almonds", "Cashews", "Walnuts", "Pistachios", "Kernels", "Nut Mixes"], gallery: ["/img/product/nuts/nuts5.jpg", "/img/product/nuts/nuts6.jpg", "/img/product/nuts/nuts7.jpg", "/img/product/nuts/nuts4.jpg", "/img/product/nuts/nuts3.jpg", "/img/product/nuts/nuts1.jpg"], specification: "Ingredient and snack-grade supply, protective packaging, buyer-specific sizing and packing discussions." },
  { slug: "indian-herbs", title: "Indian Herbs", eyebrow: "Clean botanical character", description: "Herbal products selected for freshness, natural profile, and export-ready handling.", image: "/img/product/herbs/herbs3.jpg", accent: "Mint, basil, moringa, fenugreek, curry leaves", href: "/products/indian-herbs", products: ["Mint", "Basil", "Moringa", "Fenugreek", "Curry Leaves", "Herbal Blends"], gallery: ["/img/product/herbs/herbs3.jpg", "/img/product/herbs/herbs4.jpg", "/img/product/herbs/herbs1.jpg", "/img/product/herbs/herbs2.jpg"], specification: "Fresh or processed herb conversations, clean handling, packing support, supply planning by product type." },
  { slug: "healthy-millets", title: "Healthy Millets", eyebrow: "Ancient grains, modern demand", description: "Nutrient-rich millet varieties for health-conscious global food markets and ingredient programs.", image: "/img/product/millets/millets1.jpg", accent: "Foxtail, pearl, finger, barnyard, little millet", href: "/products/healthy-millets", products: ["Foxtail Millet", "Pearl Millet", "Finger Millet", "Barnyard Millet", "Little Millet", "Sorghum"], gallery: ["/img/product/millets/millets1.jpg", "/img/product/millets/millets5.jpg", "/img/product/millets/millets8.jpg", "/img/product/millets/millets2.jpg", "/img/product/millets/millets4.jpg", "/img/product/millets/millets7.jpg"], specification: "Bulk grain supply, health-food positioning, buyer-led packing, documentation-ready procurement conversations." },
  { slug: "natural-honey", title: "Natural Honey", eyebrow: "Golden natural supply", description: "Natural honey handled for purity, taste, presentation, and buyer confidence.", image: "/img/product/honey/honey1.jpg", accent: "Natural honey, floral honey, bulk and retail-ready packs", href: "/products/natural-honey", products: ["Natural Honey", "Floral Honey", "Raw Honey", "Bulk Honey", "Retail Packs"], gallery: ["/img/product/honey/honey1.jpg", "/img/product/honey/honey3.jpg", "/img/product/honey/honey2.jpg", "/img/product/honey/honey4.jpg"], specification: "Bulk and packed formats, purity-led positioning, market-specific packing conversations." },
  { slug: "handicrafts", title: "Handicrafts", eyebrow: "Indian craft culture", description: "Handmade decor and craft products carrying Indian material culture into global retail and gifting channels.", image: "/img/product/handicrafts/craft18.jpg", accent: "Decor, wood craft, gifting, artisan-made home accents", href: "/products/handicrafts", products: ["Decor Pieces", "Wood Craft", "Gift Articles", "Artisan Products", "Home Accents", "Custom Sourcing"], gallery: ["/img/product/handicrafts/craft18.jpg", "/img/product/handicrafts/craft20.jpg", "/img/product/handicrafts/craft21.jpg", "/img/product/handicrafts/craft1.jpg", "/img/product/handicrafts/craft5.jpg", "/img/product/handicrafts/craft9.jpg"], specification: "Craft sourcing, assortment planning, retail and gifting conversations, custom export packaging." },
];

export const process = [
  { step: "01", title: "Source", text: "Trusted product networks and category-specific procurement from India." },
  { step: "02", title: "Grade", text: "Sorting and buyer-led specification alignment before packing." },
  { step: "03", title: "Pack", text: "Export packaging planned for protection, freshness, and presentation." },
  { step: "04", title: "Move", text: "Documentation and dispatch coordination for global trade lanes." },
];

export type Insight = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  summary: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "indian-spices-food-programs",
    title: "How Indian spices build stronger international food programs",
    tag: "Spices",
    image: "/img/blog/blog-1.jpg",
    summary: "From turmeric to cardamom, Indian spices offer food manufacturers a proven supply story — if the sourcing partner can communicate it properly.",
    body: [
      "Indian spices occupy a unique position in the global food market. They are simultaneously ancient commodities and modern functional ingredients — sought for flavor, color, and increasingly for their health profiles. For food manufacturers and retail brands, this duality creates strong sourcing logic.",
      "The challenge has never been product quality. India produces spices of extraordinary range and consistency. The challenge is the communication layer: most Indian exporters do not package their supply story in a way that speaks to procurement teams in Europe, the Middle East, or North America.",
      "Zorine Exports approaches this differently. Each spice category is presented with export-grade intent: sorted lot quality, clear labeling parameters, buyer-specific packaging discussions, and documentation support mindset. The product is clean. The supply story is clean. The inquiry experience is clean.",
      "For food programs that depend on consistent color (turmeric, chili), aroma reliability (cumin, coriander), or premium sensory profile (cardamom, cloves), a well-briefed Indian sourcing partner removes the premium-positioning risk that comes with underdocumented supply.",
    ],
  },
  {
    slug: "global-buyers-fresh-produce",
    title: "What global buyers expect from premium fresh produce exporters",
    tag: "Fresh Produce",
    image: "/img/blog/blog-3.jpg",
    summary: "The modern produce importer wants more than a price list. They want a sourcing partner who understands shelf life, grading, packing, and buyer communication.",
    body: [
      "The expectations placed on fresh produce exporters have changed considerably over the past decade. Price remains relevant, but it is no longer the primary filter for serious importers. What matters now is the exporter's ability to demonstrate operational clarity before the first container is loaded.",
      "Specifically, international buyers want to know: how is the product graded? What is the cold chain protocol? How is shelf life protected during transit? How quickly will the exporter respond to queries about lot quality or dispatch delays?",
      "These are not extraordinary asks. They are the baseline for any produce export relationship that lasts beyond a single trial order. Yet many Indian exporters — even those with genuinely good product — fail at the communication and presentation layer.",
      "Zorine Exports is built around this exact gap. The export process is designed for buyer confidence at each step: clear category grading, buyer-led packing discussions, freshness-aware dispatch planning, and responsive communication that removes uncertainty from the relationship.",
    ],
  },
  {
    slug: "packaging-agricultural-exports",
    title: "Packaging cues that make agricultural exports feel more premium",
    tag: "Export Quality",
    image: "/img/blog/blog-6.jpg",
    summary: "Packaging is not just protective — for agricultural exports, it is the first signal of quality that an international buyer receives before any product testing.",
    body: [
      "In agricultural exports, packaging performs a function that goes beyond product protection. It is the first physical signal of quality that a buyer receives. Before the product is tested, before the documentation is reviewed in detail, the packaging communicates the sourcing partner's standards.",
      "For premium retail channels and food brands, this matters significantly. A well-presented export pack signals: the supplier has thought about the end customer. They understand that the product's journey does not end at the port — it ends on a retail shelf or in a kitchen, and the packaging must be appropriate for that final destination.",
      "The specific cues that communicate premium intent are often modest: clean labeling, appropriate barrier materials, informative but restrained design, and packing formats that reduce waste while protecting product integrity. None of these require large capital investment. They require attention to how the buyer's customer will experience the product.",
      "Zorine Exports treats packaging as part of the product offer. Packing discussions happen early in the inquiry process, and formats are selected around buyer destination and use case rather than default shipping convenience.",
    ],
  },
  {
    slug: "millets-global-health-market",
    title: "Why millets are the next global health supply opportunity for Indian exporters",
    tag: "Millets",
    image: "/img/product/millets/millets1.jpg",
    summary: "Global demand for ancient grains is accelerating. India's millet supply story is uniquely positioned — but only exporters who can communicate it will benefit.",
    body: [
      "Millets have moved from niche health-food stores into mainstream supermarkets across Europe, the United States, and the Gulf. This shift has been driven by a convergence of interests: health-conscious consumers seeking low-glycemic grain alternatives, food brands looking for heritage ingredient stories, and sustainability-focused buyers attracted to millets' low water footprint.",
      "India is the world's largest millet producer. The supply base is significant. But supply alone is not enough — the global opportunity requires exporters who can present millets in the language of modern food retail: clean specifications, consistent lot quality, appropriate packaging for health-food positioning, and a supply narrative that connects the buyer's customer to the origin story.",
      "Foxtail millet, pearl millet, finger millet, barnyard millet — each variety carries a different nutritional profile and culinary application. Buyers building health food lines need sourcing partners who understand this differentiation and can plan supply around it.",
      "Zorine Exports brings millets into a clean export conversation: specification-led, bulk and retail format flexible, and designed around the buyer's program rather than a generic volume offer.",
    ],
  },
  {
    slug: "export-inquiry-process",
    title: "The anatomy of a high-quality export inquiry: what serious buyers include",
    tag: "Export Process",
    image: "/img/slideshow/home4-slideshow-1.jpg",
    summary: "The quality of an import inquiry determines the quality of the supplier response. Here is what experienced procurement teams communicate from the first message.",
    body: [
      "An export inquiry is the beginning of a commercial relationship. The information included in that first contact shapes how the supplier understands the opportunity, how quickly they can respond with relevant specifics, and whether the relationship has the structural foundation to survive past the sample stage.",
      "Experienced procurement teams know this. Their initial inquiries are not vague price requests — they include destination country and port of entry, estimated monthly or trial volume, preferred packing format (bulk, retail-ready, custom), quality and specification notes, and expected timeline for samples or first shipment.",
      "This information allows the exporter to give a response that is actually useful: category availability, realistic lead times, packing options, relevant documentation notes, and an honest view of what can and cannot be achieved within the buyer's parameters.",
      "Zorine Exports has structured the inquiry process around this expectation. The contact page brief, the response protocol, and the quotation approach are all designed to reduce the back-and-forth that delays serious procurement conversations. The goal is fewer emails to reach a useful outcome.",
    ],
  },
  {
    slug: "honey-export-quality",
    title: "Natural honey as a premium export: what quality means in global trade",
    tag: "Honey",
    image: "/img/product/honey/honey1.jpg",
    summary: "Honey occupies a complex position in global food trade — high consumer interest, high adulteration risk, and high standards for documentation. Here is what buyers should know.",
    body: [
      "Natural honey commands premium prices and serious buyer interest across global food channels. The market includes bulk industrial buyers, premium retail programs, health food brands, and gift food curators. Each channel has different quality thresholds and different documentation expectations.",
      "The challenge in honey trade is that quality is not always visible. Purity, floral source, moisture content, and HMF levels are laboratory determinations. This makes the trust relationship between buyer and exporter exceptionally important — and it is why honey buyers tend to be careful, thorough, and slow to change suppliers once a reliable source is established.",
      "For Indian natural honey, the supply story is strong: diverse floral sources, significant volume capacity, and a long tradition of apiculture in states like Punjab, Rajasthan, and Himachal Pradesh. The communication story is where many exporters fall short.",
      "Zorine Exports approaches honey as a trust-first category. Purity is the lead positioning. Packaging discussions happen with specific buyer programs in mind. And the inquiry process is structured to move quickly toward the technical specifics that honey buyers need before any order discussion can begin.",
    ],
  },
];
