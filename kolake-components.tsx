// Hero Component
export const KoLakeHero = () => (
  <section className="kolake-hero">
    <div className="container mx-auto px-4">
      <div className="max-w-2xl">
        <h1 className="kolake-heading-1 text-white mb-4">Ko Lake Villa</h1>
        <p className="kolake-lead text-white/90 mb-8">Luxury Lakefront Resort in Koggala, Sri Lanka</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="kolake-btn-primary">Book Your Stay</button>
          <button className="kolake-btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900">
            View Gallery
          </button>
        </div>
      </div>
    </div>
  </section>
)

// Room Card Component
export const KoLakeRoomCard = ({ room }) => (
  <div className="kolake-room-card">
    <img src={`/images/kolake-${room.id.toLowerCase()}.jpg`} alt={room.name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="kolake-heading-3 mb-2">{room.name}</h3>
      <p className="kolake-body mb-4">{room.capacity}</p>
      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="kolake-price">${room.price}</span>
          <span className="text-sm text-gray-400 line-through ml-2">${room.price + room.savings}</span>
        </div>
        <span className="kolake-savings">Save ${room.savings}</span>
      </div>
      <button className="kolake-btn-primary w-full">Book Now</button>
    </div>
  </div>
)

// Gallery Grid Component
export const KoLakeGallery = ({ images }) => (
  <div className="kolake-gallery-grid">
    {images.map((image, index) => (
      <div key={index} className="kolake-gallery-item">
        <img src={image.url || "/placeholder.svg"} alt={image.alt} loading="lazy" />
      </div>
    ))}
  </div>
)

// Contact Card Component
export const KoLakeContact = () => (
  <div className="kolake-contact">
    <div className="container mx-auto px-4">
      <div className="kolake-contact-card max-w-2xl mx-auto text-center">
        <h2 className="kolake-heading-2 mb-4">Ready to Book?</h2>
        <p className="kolake-body mb-6">Contact us directly for the best rates and personalized service</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:kolakevilla@gmail.com" className="kolake-btn-primary">
            Email Us
          </a>
          <a href="https://wa.me/your-number" className="kolake-btn-secondary">
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
)
