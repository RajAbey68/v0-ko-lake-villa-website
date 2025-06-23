"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

const galleryCategories = [
  "All",
  "Entire Villa",
  "Family Suite",
  "Group Room",
  "Triple Room",
  "Dining Area",
  "Pool Deck",
  "Lake Garden",
  "Roof Garden",
  "Front Garden",
  "Koggala Lake",
  "Excursions",
]

const galleryImages = [
  { id: 1, category: "Entire Villa", src: "/placeholder.svg?height=400&width=600", alt: "Villa Exterior" },
  { id: 2, category: "Pool Deck", src: "/placeholder.svg?height=400&width=600", alt: "Pool Deck" },
  { id: 3, category: "Family Suite", src: "/placeholder.svg?height=400&width=600", alt: "Family Suite" },
  { id: 4, category: "Dining Area", src: "/placeholder.svg?height=400&width=600", alt: "Dining Area" },
  { id: 5, category: "Koggala Lake", src: "/placeholder.svg?height=400&width=600", alt: "Koggala Lake" },
  { id: 6, category: "Lake Garden", src: "/placeholder.svg?height=400&width=600", alt: "Lake Garden" },
  { id: 7, category: "Group Room", src: "/placeholder.svg?height=400&width=600", alt: "Group Room" },
  { id: 8, category: "Roof Garden", src: "/placeholder.svg?height=400&width=600", alt: "Roof Garden" },
  { id: 9, category: "Triple Room", src: "/placeholder.svg?height=400&width=600", alt: "Triple Room" },
  { id: 10, category: "Front Garden", src: "/placeholder.svg?height=400&width=600", alt: "Front Garden" },
  { id: 11, category: "Excursions", src: "/placeholder.svg?height=400&width=600", alt: "Lake Excursion" },
  { id: 12, category: "Excursions", src: "/placeholder.svg?height=400&width=600", alt: "Whale Watching" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://sjc.microlink.io/-llAJQf-CPVh7tNIxiNbaTnOy4Csorx_ezydgBAslpMUzUuNbMgCflf-FYeAE_f2VFlI_EMDbx7WXicXKXV0Gw.jpeg"
            alt="Ko Lake Villa Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Gallery</h1>
          <p className="text-xl lg:text-2xl font-light">Discover the beauty of Ko Lake Villa</p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-orange-400 hover:bg-orange-500 text-white"
                    : "bg-white hover:bg-orange-50 text-gray-700 border-gray-300"
                } px-4 py-2 text-sm font-medium transition-all duration-200`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium text-sm">{image.alt}</p>
                  <p className="text-white/80 text-xs">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <Image
              src={galleryImages.find((img) => img.id === selectedImage)?.src || ""}
              alt={galleryImages.find((img) => img.id === selectedImage)?.alt || ""}
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </Button>
          </div>
        </div>
      )}

      <WhatsAppWidget />
    </div>
  )
}
