import { KoLakeHero, KoLakeRoomCard, KoLakeGallery, KoLakeContact } from "../kolake-components"
import brandConfig from "../kolake-brand-config.json"

const images = [
  { url: "/images/kolake-entire-villa.jpg", alt: "Entire Villa" },
  { url: "/images/kolake-family-suite.jpg", alt: "Family Suite" },
  { url: "/images/kolake-pool-deck.jpg", alt: "Pool Deck" },
  { url: "/images/kolake-lake-view.jpg", alt: "Lake View" },
  { url: "/images/kolake-dining-area.jpg", alt: "Dining Area" },
  { url: "/images/kolake-garden.jpg", alt: "Garden" },
]

export default function Page() {
  return (
    <main>
      <KoLakeHero />
      <div className="container mx-auto py-12">
        <h2 className="kolake-heading-2 text-center mb-8">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandConfig.roomTypes.map((room) => (
            <KoLakeRoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="kolake-heading-2 text-center mb-8">Gallery</h2>
        <KoLakeGallery images={images} />
      </div>
      <KoLakeContact />
    </main>
  )
}
