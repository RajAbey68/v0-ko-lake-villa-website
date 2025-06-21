"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, ChevronLeft, ChevronRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = [
    { id: "all", name: "All Photos", count: 45 },
    { id: "villa-grounds", name: "Villa & Grounds", count: 12 },
    { id: "rooms-suites", name: "Rooms & Suites", count: 15 },
    { id: "pool-amenities", name: "Pool & Amenities", count: 8 },
    { id: "views-surroundings", name: "Views & Surroundings", count: 10 },
  ]

  const galleryImages = [
    // Villa & Grounds
    {
      id: 1,
      category: "villa-grounds",
      src: "/placeholder.svg?height=400&width=600&text=Villa+Exterior+Day",
      alt: "Villa exterior during daytime",
      title: "Ko Lake Villa Exterior",
    },
    {
      id: 2,
      category: "villa-grounds",
      src: "/placeholder.svg?height=400&width=600&text=Villa+Night+Lights",
      alt: "Villa illuminated at night",
      title: "Evening Villa Ambiance",
    },
    {
      id: 3,
      category: "villa-grounds",
      src: "/placeholder.svg?height=400&width=600&text=Garden+Terrace",
      alt: "Beautiful garden terrace",
      title: "Garden Terrace Area",
    },
    {
      id: 4,
      category: "villa-grounds",
      src: "/placeholder.svg?height=400&width=600&text=Entrance+Pathway",
      alt: "Villa entrance pathway",
      title: "Welcome Entrance",
    },

    // Rooms & Suites
    {
      id: 5,
      category: "rooms-suites",
      src: "/placeholder.svg?height=400&width=600&text=Master+Bedroom+Lake+View",
      alt: "Master bedroom with lake view",
      title: "Master Suite Lake View",
    },
    {
      id: 6,
      category: "rooms-suites",
      src: "/placeholder.svg?height=400&width=600&text=Twin+Room+Setup",
      alt: "Twin room configuration",
      title: "Twin Room Setup",
    },
    {
      id: 7,
      category: "rooms-suites",
      src: "/placeholder.svg?height=400&width=600&text=Group+Room+Multiple+Beds",
      alt: "Group room with multiple beds",
      title: "Group Accommodation",
    },
    {
      id: 8,
      category: "rooms-suites",
      src: "/placeholder.svg?height=400&width=600&text=Luxury+Bathroom",
      alt: "Luxury bathroom facilities",
      title: "Premium Bathroom",
    },
    {
      id: 9,
      category: "rooms-suites",
      src: "/placeholder.svg?height=400&width=600&text=Living+Room+Interior",
      alt: "Spacious living room",
      title: "Living Room Space",
    },

    // Pool & Amenities
    {
      id: 10,
      category: "pool-amenities",
      src: "/placeholder.svg?height=400&width=600&text=Infinity+Pool+Lake+View",
      alt: "Infinity pool overlooking lake",
      title: "Infinity Pool Paradise",
    },
    {
      id: 11,
      category: "pool-amenities",
      src: "/placeholder.svg?height=400&width=600&text=Pool+Deck+Lounging",
      alt: "Pool deck with loungers",
      title: "Pool Deck Relaxation",
    },
    {
      id: 12,
      category: "pool-amenities",
      src: "/placeholder.svg?height=400&width=600&text=Outdoor+Dining+Area",
      alt: "Outdoor dining setup",
      title: "Al Fresco Dining",
    },
    {
      id: 13,
      category: "pool-amenities",
      src: "/placeholder.svg?height=400&width=600&text=BBQ+Grill+Area",
      alt: "BBQ and grilling area",
      title: "BBQ Facilities",
    },

    // Views & Surroundings
    {
      id: 14,
      category: "views-surroundings",
      src: "/placeholder.svg?height=400&width=600&text=Koggala+Lake+Sunrise",
      alt: "Sunrise over Koggala Lake",
      title: "Lake Sunrise Views",
    },
    {
      id: 15,
      category: "views-surroundings",
      src: "/placeholder.svg?height=400&width=600&text=Lake+Sunset+Golden+Hour",
      alt: "Golden sunset over lake",
      title: "Magical Sunset Views",
    },
    {
      id: 16,
      category: "views-surroundings",
      src: "/placeholder.svg?height=400&width=600&text=Boat+Dock+Access",
      alt: "Private boat dock",
      title: "Private Lake Access",
    },
    {
      id: 17,
      category: "views-surroundings",
      src: "/placeholder.svg?height=400&width=600&text=Tropical+Garden+Views",
      alt: "Lush tropical gardens",
      title: "Tropical Garden Paradise",
    },
    {
      id: 18,
      category: "views-surroundings",
      src: "/placeholder.svg?height=400&width=600&text=Lake+Activities+Kayaking",
      alt: "Lake activities and kayaking",
      title: "Lake Adventures",
    },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (imageSrc: string, index: number) => {
    setLightboxImage(imageSrc)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length
    setLightboxIndex(nextIndex)
    setLightboxImage(filteredImages[nextIndex].src)
  }

  const prevImage = () => {
    const prevIndex = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
    setLightboxIndex(prevIndex)
    setLightboxImage(filteredImages[prevIndex].src)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Ko Lake Villa
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900">
                Home
              </Link>
              <Link href="/accommodation" className="text-gray-700 hover:text-blue-900">
                Rooms
              </Link>
              <Link href="/gallery" className="text-blue-900 font-medium">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900">
                Contact
              </Link>
            </div>
            <Button asChild>
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Explore the beauty of Ko Lake Villa through our comprehensive photo gallery. From luxurious interiors to
            stunning lake views, see what makes us special.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Filter className="w-6 h-6 mr-2" />
              Filter Photos
            </h2>
            <div className="text-sm text-gray-600">
              Showing {filteredImages.length} of {galleryImages.length} photos
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center gap-2"
              >
                {category.name}
                <Badge variant="secondary" className="ml-1">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(image.src, index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No images found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 z-10">
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt={filteredImages[lightboxIndex]?.alt || "Gallery image"}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
              <h3 className="text-xl font-semibold mb-2">{filteredImages[lightboxIndex]?.title}</h3>
              <p className="text-sm opacity-90">
                {lightboxIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience This Paradise?</h2>
          <p className="text-xl mb-8">Book your stay at Ko Lake Villa and create your own unforgettable memories.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
              <Link href="/booking">Book Your Stay</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900"
              asChild
            >
              <Link href="/accommodation">View Room Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
