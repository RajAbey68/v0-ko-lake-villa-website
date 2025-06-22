# Ko Lake Villa - Complete Style Guide & Asset Reference

## 🏖️ **Brand Overview**
Ko Lake Villa is a luxury lakefront resort in Koggala, Sri Lanka, featuring 7 bedrooms accommodating up to 18 guests with stunning lake and garden views.

## 🎨 **Brand Colors (MANDATORY)**
\`\`\`css
:root {
  /* Primary Brand Colors */
  --kolake-primary: #1e40af;      /* Deep Ocean Blue */
  --kolake-secondary: #0ea5e9;    /* Sky Blue */
  --kolake-accent: #f59e0b;       /* Golden Sunset */
  
  /* Neutral Colors */
  --kolake-dark: #1f2937;         /* Charcoal Text */
  --kolake-gray: #6b7280;         /* Medium Gray */
  --kolake-light: #f8fafc;        /* Off White */
  --kolake-white: #ffffff;        /* Pure White */
  
  /* Nature Colors */
  --kolake-green: #059669;        /* Tropical Green */
  --kolake-sand: #fbbf24;         /* Beach Sand */
}
\`\`\`

## 🖼️ **Image Categories & Specifications**

### Hero Images (PRIORITY)
- **Main Hero**: Villa exterior with lake view at sunset
- **Secondary**: Pool deck with lake backdrop
- **Mobile Hero**: Vertical crop of main villa view

### Gallery Categories (11 Total)
1. **entire-villa**: Full property exterior shots
2. **family-suite**: Master bedroom and family areas
3. **group-room**: Large group accommodation spaces
4. **triple-room**: Individual room layouts
5. **dining-area**: Indoor and outdoor dining spaces
6. **pool-deck**: Swimming pool and deck areas
7. **lake-garden**: Lakefront garden views
8. **roof-garden**: Rooftop terrace and views
9. **front-garden**: Property entrance and landscaping
10. **koggala-lake**: Lake views and water activities
11. **excursions**: Local attractions and activities

## 🏠 **Room Types & Pricing**
\`\`\`typescript
const roomTypes = {
  "KLV": {
    name: "Entire Villa",
    capacity: "Up to 18 guests",
    rooms: "7 bedrooms",
    basePrice: 388,
    airbnbPrice: 431,
    savings: 43
  },
  "KLV1": {
    name: "Master Family Suite", 
    capacity: "6+ guests",
    rooms: "Large suite",
    basePrice: 107,
    airbnbPrice: 119,
    savings: 12
  },
  "KLV3": {
    name: "Triple/Twin Room",
    capacity: "3+ guests per room", 
    rooms: "Individual rooms",
    basePrice: 63,
    airbnbPrice: 70,
    savings: 7
  },
  "KLV6": {
    name: "Group Room",
    capacity: "6+ guests",
    rooms: "Large group space", 
    basePrice: 225,
    airbnbPrice: 250,
    savings: 25
  }
}
\`\`\`

## 🎯 **Typography**
\`\`\`css
/* Primary Font Stack */
font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Headings */
.kolake-h1 { font-size: 3.5rem; font-weight: 700; line-height: 1.1; }
.kolake-h2 { font-size: 2.5rem; font-weight: 600; line-height: 1.2; }
.kolake-h3 { font-size: 1.875rem; font-weight: 600; line-height: 1.3; }

/* Body Text */
.kolake-body { font-size: 1rem; line-height: 1.6; color: var(--kolake-dark); }
.kolake-lead { font-size: 1.25rem; line-height: 1.6; color: var(--kolake-gray); }
\`\`\`

## 🏗️ **Component Specifications**

### Hero Section
\`\`\`tsx
<section className="hero-kolake">
  <div className="relative min-h-[80vh] bg-gradient-to-br from-blue-900/70 to-sky-600/70">
    <img 
      src="/images/kolake-hero-villa.jpg" 
      alt="Ko Lake Villa - Luxury Lakefront Resort"
      className="absolute inset-0 w-full h-full object-cover -z-10"
    />
    <div className="container mx-auto px-4 h-full flex items-center">
      <div className="text-white max-w-2xl">
        <h1 className="text-6xl font-bold mb-4">Ko Lake Villa</h1>
        <p className="text-xl mb-8">Luxury Lakefront Resort in Koggala, Sri Lanka</p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold">
          Book Your Stay
        </button>
      </div>
    </div>
  </div>
</section>
\`\`\`

### Accommodation Cards
\`\`\`tsx
<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
  <img 
    src="/images/kolake-room-{type}.jpg"
    alt="{roomName}"
    className="w-full h-48 object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{roomName}</h3>
    <p className="text-gray-600 mb-4">{capacity} • {rooms}</p>
    <div className="flex justify-between items-center">
      <div>
        <span className="text-2xl font-bold text-blue-900">${basePrice}</span>
        <span className="text-sm text-gray-500 line-through ml-2">${airbnbPrice}</span>
      </div>
      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
        Save ${savings}
      </span>
    </div>
  </div>
</div>
\`\`\`

## 📱 **Responsive Breakpoints**
\`\`\`css
/* Mobile First Approach */
.kolake-container {
  padding: 1rem;
}

@media (min-width: 640px) {
  .kolake-container { padding: 1.5rem; }
}

@media (min-width: 1024px) {
  .kolake-container { padding: 2rem; }
}

@media (min-width: 1280px) {
  .kolake-container { padding: 3rem; }
}
\`\`\`

## 🌟 **Key Features to Highlight**
- **Lakefront Location**: Koggala Lake views
- **Luxury Amenities**: Pool, gardens, multiple suites
- **Group Accommodation**: Up to 18 guests
- **Direct Savings**: Better prices than Airbnb
- **Authentic Experience**: Local Sri Lankan hospitality

## 🚫 **What NOT to Use**
- Generic placeholder images
- Stock photos of other properties
- Colors outside the brand palette
- Generic "resort" or "hotel" terminology
- Placeholder text like "Lorem ipsum"

## ✅ **Mandatory Requirements**
1. **Always use Ko Lake Villa branding colors**
2. **Include actual property images (not placeholders)**
3. **Show real pricing and room types**
4. **Maintain luxury lakefront resort positioning**
5. **Include Sri Lankan location context**
6. **Emphasize direct booking savings**

## 🔗 **Asset URLs (Update with actual URLs)**
\`\`\`typescript
const koLakeAssets = {
  hero: "/images/kolake-hero-villa.jpg",
  logo: "/images/kolake-logo.png",
  rooms: {
    entire: "/images/kolake-entire-villa.jpg",
    family: "/images/kolake-family-suite.jpg", 
    triple: "/images/kolake-triple-room.jpg",
    group: "/images/kolake-group-room.jpg"
  },
  amenities: {
    pool: "/images/kolake-pool-deck.jpg",
    dining: "/images/kolake-dining-area.jpg",
    lake: "/images/kolake-lake-view.jpg",
    garden: "/images/kolake-garden.jpg"
  }
}
\`\`\`

## 📞 **Contact Information**
- **Email**: kolakevilla@gmail.com
- **Admin**: rajiv.abey@gmail.com
- **Location**: Koggala, Sri Lanka
- **WhatsApp**: Direct messaging integration

---

**🎯 CURSOR INSTRUCTION: Use this style guide for ALL Ko Lake Villa projects. No exceptions. No placeholders. Only authentic Ko Lake Villa branding and assets.**
