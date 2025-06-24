"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Photos", count: 24 },
    { id: "villa", name: "Villa", count: 8 },
    { id: "rooms", name: "Rooms", count: 6 },
    { id: "lake", name: "Lake Views", count: 5 },
    { id: "dining", name: "Dining", count: 3 },
    { id: "experiences", name: "Experiences", count: 2 },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "villa",
      title: "Villa Exterior",
      image: "/placeholder.svg?height=400&width=600&text=Villa+Exterior",
    },
    { id: 2, category: "villa", title: "Pool Area", image: "/placeholder.svg?height=400&width=600&text=Pool+Area" },
    {
      id: 3,
      category: "rooms",
      title: "Master Bedroom",
      image: "/placeholder.svg?height=400&width=600&text=Master+Bedroom",
    },
    { id: 4, category: "lake", title: "Lake View", image: "/placeholder.svg?height=400&width=600&text=Lake+View" },
    { id: 5, category: "villa", title: "Garden Area", image: "/placeholder.svg?height=400&width=600&text=Garden+Area" },
    {
      id: 6,
      category: "dining",
      title: "Dining Area",
      image: "/placeholder.svg?height=400&width=600&text=Dining+Area",
    },
    {
      id: 7,
      category: "rooms",
      title: "Family Suite",
      image: "/placeholder.svg?height=400&width=600&text=Family+Suite",
    },
    { id: 8, category: "lake", title: "Sunset View", image: "/placeholder.svg?height=400&width=600&text=Sunset+View" },
    {
      id: 9,
      category: "villa",
      title: "Villa at Night",
      image: "/placeholder.svg?height=400&width=600&text=Villa+Night",
    },
    {
      id: 10,
      category: "experiences",
      title: "Boat Safari",
      image: "/placeholder.svg?height=400&width=600&text=Boat+Safari",
    },
    {
      id: 11,
      category: "rooms",
      title: "Triple Room",
      image: "/placeholder.svg?height=400&width=600&text=Triple+Room",
    },
    {
      id: 12,
      category: "lake",
      title: "Morning Lake",
      image: "/placeholder.svg?height=400&width=600&text=Morning+Lake",
    },
    { id: 13, category: "villa", title: "Pool Deck", image: "/placeholder.svg?height=400&width=600&text=Pool+Deck" },
    {
      id: 14,
      category: "dining",
      title: "Lakeside Dining",
      image: "/placeholder.svg?height=400&width=600&text=Lakeside+Dining",
    },
    { id: 15, category: "rooms", title: "Group Room", image: "/placeholder.svg?height=400&width=600&text=Group+Room" },
    {
      id: 16,
      category: "lake",
      title: "Lake Activities",
      image: "/placeholder.svg?height=400&width=600&text=Lake+Activities",
    },
    {
      id: 17,
      category: "villa",
      title: "Villa Entrance",
      image: "/placeholder.svg?height=400&width=600&text=Villa+Entrance",
    },
    {
      id: 18,
      category: "experiences",
      title: "Cultural Tour",
      image: "/placeholder.svg?height=400&width=600&text=Cultural+Tour",
    },
    { id: 19, category: "rooms", title: "Bathroom", image: "/placeholder.svg?height=400&width=600&text=Bathroom" },
    { id: 20, category: "dining", title: "BBQ Area", image: "/placeholder.svg?height=400&width=600&text=BBQ+Area" },
    {
      id: 21,
      category: "villa",
      title: "Terrace View",
      image: "/placeholder.svg?height=400&width=600&text=Terrace+View",
    },
    {
      id: 22,
      category: "lake",
      title: "Lake Panorama",
      image: "/placeholder.svg?height=400&width=600&text=Lake+Panorama",
    },
    {
      id: 23,
      category: "villa",
      title: "Villa Garden",
      image: "/placeholder.svg?height=400&width=600&text=Villa+Garden",
    },
    {
      id: 24,
      category: "rooms",
      title: "Living Area",
      image: "/placeholder.svg?height=400&width=600&text=Living+Area",
    },
  ]

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold text-amber-900 tracking-tight">
            Ko Lake Villa
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/deals"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Deals
            </Link>
            <Link
              href="/accommodation"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Accommodation
            </Link>
            <Link
              href="/dining"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Dining
            </Link>
            <Link
              href="/experiences"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Experiences
            </Link>
            <Link
              href="/gallery"
              className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200"
            >
              Gallery
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          <Button className="bg-orange-400 hover:bg-orange-500 text-white font-medium text-sm px-6 py-2.5 rounded-md shadow-sm transition-all duration-200">
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/placeholder.svg?height=400&width=1200&text=Photo+Gallery"
            alt="Ko Lake Villa Gallery"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Gallery</h1>
          <p className="text-xl lg:text-2xl font-light tracking-wide">
            Discover the beauty of Ko Lake Villa through our photo collection
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-orange-400 hover:bg-orange-500 text-white"
                    : "border-orange-200 text-orange-600 hover:bg-orange-50"
                }`}
              >
                {category.name}
                <Badge variant="secondary" className="ml-2 bg-orange-100 text-orange-800">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Dialog key={item.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                        <h3 className="text-white font-medium text-sm">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      {categories.find((cat) => cat.id === item.category)?.name}
                    </Badge>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 px-8">
              Load More Photos
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
