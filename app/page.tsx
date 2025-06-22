"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, MessageCircle, Users, Bed, Bath, Utensils, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function KoLakeVilla() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0)

  const heroImages = [
    {
      src: "/images/kolake-hero-main.png",
      alt: "Ko Lake Villa aerial view with infinity pool and lake",
      title: "Luxury Lakefront Paradise",
    },
    {
      src: "/images/kolake-hero-sunset.png",
      alt: "Sunset over Koggala Lake from villa terrace",
      title: "Breathtaking Sunset Views",
    },
    {
      src: "/images/kolake-villa-exterior.png",
      alt: "Modern villa architecture with tropical landscaping",
      title: "Elegant Modern Design",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const roomTypes = [
    {
      id: "KNP",
      name: "Entire Villa Exclusive",
      subtitle: "Ultimate Privacy & Luxury",
      airbnbPrice: 431,
      directPrice: 388,
      savings: 43,
      discount: "10%",
      guests: 12,
      bedrooms: 6,
      bathrooms: 4,
      image: "/images/kolake-villa-exterior.png",
      features: ["Private Pool", "Lake Views", "Full Kitchen", "6 Bedrooms", "Boat Dock", "Garden"],
      amenities: ["Private Pool", "Lake Access", "Full Kitchen", "Free Parking", "WiFi", "AC"],
    },
    {
      id: "KNP1",
      name: "Master Family Suite",
      subtitle: "Lake View Luxury",
      airbnbPrice: 119,
      directPrice: 107,
      savings: 12,
      discount: "10%",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg?height=300&width=400&text=Master+Suite+Lake+View",
      features: ["Lake View", "Private Balcony", "King Bed", "En-suite Bath"],
      amenities: ["Lake View", "Private Balcony", "En-suite Bath", "Pool Access", "WiFi", "AC"],
    },
    {
      id: "KNP3",
      name: "Triple/Twin Rooms",
      subtitle: "Comfortable & Affordable",
      airbnbPrice: 70,
      directPrice: 63,
      savings: 7,
      discount: "10%",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg?height=300&width=400&text=Twin+Room+Garden+View",
      features: ["Garden View", "Twin/Triple Beds", "Shared Facilities", "AC"],
      amenities: ["Garden View", "Shared Kitchen", "Pool Access", "WiFi", "AC", "Parking"],
    },
    {
      id: "KNP6",
      name: "Group Room",
      subtitle: "Perfect for Friends",
      airbnbPrice: 250,
      directPrice: 225,
      savings: 25,
      discount: "10%",
      guests: 6,
      bedrooms: 2,
      bathrooms: 2,
      image: "/placeholder.svg?height=300&width=400&text=Group+Room+Multiple+Beds",
      features: ["Multiple Beds", "Shared Space", "Group Friendly", "Lake Access"],
      amenities: ["Multiple Beds", "Shared Space", "Lake Access", "Pool Access", "WiFi", "AC"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
            >
              Ko Lake Villa
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/accommodation" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Rooms
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </div>
            <Button
              className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              asChild
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentHeroImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                ⭐ 4.9 Rating • 🏆 Luxury Lakefront Villa
              </Badge>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">Ko Lake Villa</h1>

            <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">{heroImages[currentHeroImage].title}</p>

            <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto">
              Luxury lakefront accommodation on the pristine shores of Koggala Lake, Sri Lanka
            </p>

            <div className="flex items-center justify-center mb-8 text-white/90">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">Koggala Lake, Galle District, Sri Lanka</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
                asChild
              >
                <Link href="/accommodation">View Rooms & Rates</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-3 text-lg"
                asChild
              >
                <Link href="/gallery">Explore Gallery</Link>
              </Button>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 flex justify-center">
              <Button
                className="bg-green-600 hover:bg-green-700 text-white font-semibold"
                onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentHeroImage ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                12
              </div>
              <div className="text-gray-600 font-medium">Max Guests</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                6
              </div>
              <div className="text-gray-600 font-medium">Bedrooms</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                4.9
              </div>
              <div className="text-gray-600 font-medium flex items-center justify-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                Rating
              </div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                15%
              </div>
              <div className="text-gray-600 font-medium">Save Direct</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ko Lake Villa */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ko Lake Villa?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of luxury, nature, and authentic Sri Lankan hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Waves className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lakefront Location</h3>
              <p className="text-gray-600">Direct access to pristine Koggala Lake with private boat dock</p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Star className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Luxury Amenities</h3>
              <p className="text-gray-600">Infinity pool, modern kitchen, premium furnishings</p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Perfect for Groups</h3>
              <p className="text-gray-600">Accommodate up to 12 guests with flexible room options</p>
            </div>

            <div className="text-center group">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">2 hours from Colombo, near Galle Fort and beaches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Room Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Perfect Stay</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate suites to the entire villa, we offer flexible accommodation options with significant savings
              when you book direct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roomTypes.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Badge className="bg-red-500 text-white">Save {room.discount}</Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-black/70 text-white">{room.subtitle}</Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {room.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {room.guests}
                    </div>
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1" />
                      {room.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1" />
                      {room.bathrooms}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500 line-through">Airbnb: ${room.airbnbPrice}</span>
                      <span className="text-sm text-green-600 font-medium">Save ${room.savings}</span>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      ${room.directPrice}
                      <span className="text-sm font-normal text-gray-500">/night</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {room.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="text-sm text-gray-600 flex items-center">
                        <Star className="w-3 h-3 mr-2 text-yellow-500 fill-current" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                    asChild
                  >
                    <Link href={`/booking?room=${room.id}`}>Book Direct & Save</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Unforgettable Lake Experiences</h2>
              <p className="text-lg text-gray-600 mb-8">
                Wake up to serene lake views, enjoy water activities, explore local culture, and create memories that
                last a lifetime at Ko Lake Villa.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Waves className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Water Activities</h4>
                    <p className="text-gray-600">Kayaking, boat tours, fishing on Koggala Lake</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Utensils className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Local Cuisine</h4>
                    <p className="text-gray-600">Fresh seafood and authentic Sri Lankan dishes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-full">
                    <MapPin className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Cultural Exploration</h4>
                    <p className="text-gray-600">Visit Galle Fort, temples, and local markets</p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                asChild
              >
                <Link href="/experiences">Explore Experiences</Link>
              </Button>
            </div>

            <div className="relative">
              <Image
                src="/images/kolake-pool-deck.png"
                alt="Ko Lake Villa pool deck experience"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
            <div className="flex justify-center items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-xl font-semibold">4.9/5 from 127 reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Mike",
                location: "Australia",
                text: "Absolutely stunning location! The lake views are breathtaking and the villa exceeded all our expectations. Booking direct saved us money and the personal service was exceptional.",
                rating: 5,
              },
              {
                name: "David Chen",
                location: "Singapore",
                text: "Perfect for our family reunion. The entire villa gave us privacy and space for 10 people. The infinity pool and lake access made it unforgettable.",
                rating: 5,
              },
              {
                name: "Emma Thompson",
                location: "UK",
                text: "Ko Lake Villa is a hidden gem. The combination of luxury amenities and natural beauty is unmatched. We'll definitely be back!",
                rating: 5,
              },
            ].map((review, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Ko Lake Villa?</h2>
          <p className="text-xl mb-8 text-white/90">
            Book direct and save up to 15% while enjoying personalized service and the best rates guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3" asChild>
              <Link href="/booking">Book Your Stay Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-1">10-15%</div>
              <div className="text-white/80">Direct Savings</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">24/7</div>
              <div className="text-white/80">Personal Service</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Free</div>
              <div className="text-white/80">Cancellation</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-1">Best</div>
              <div className="text-white/80">Rate Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
                Ko Lake Villa
              </h3>
              <p className="text-gray-400 mb-4">
                Luxury lakefront accommodation in Sri Lanka's southern coast, offering unforgettable experiences on
                pristine Koggala Lake.
              </p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="bg-green-600 p-2 rounded-full">
                  <MessageCircle className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +94 123 456 789
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp 24/7
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Koggala Lake, Galle
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Why Book Direct?</h4>
              <div className="space-y-2 text-gray-400">
                <div>• Save up to 15%</div>
                <div>• Best Rate Guarantee</div>
                <div>• Personalized Service</div>
                <div>• Flexible Cancellation</div>
                <div>• Direct Communication</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <Link href="/accommodation" className="block hover:text-white transition-colors">
                  Accommodation
                </Link>
                <Link href="/gallery" className="block hover:text-white transition-colors">
                  Photo Gallery
                </Link>
                <Link href="/experiences" className="block hover:text-white transition-colors">
                  Experiences
                </Link>
                <Link href="/contact" className="block hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ko Lake Villa. All rights reserved. | Luxury lakefront accommodation in Sri Lanka</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
