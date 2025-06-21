"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Bed, Bath, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AccommodationPage() {
  const rooms = [
    {
      id: "KNP",
      name: "Entire Villa Exclusive",
      subtitle: "Perfect for Large Groups & Special Occasions",
      airbnbPrice: 431,
      directPrice: 388,
      savings: 43,
      discount: "10%",
      lastMinuteDiscount: "15%",
      guests: 12,
      bedrooms: 6,
      bathrooms: 4,
      image: "/placeholder.svg?height=400&width=600&text=Entire+Villa+Aerial+View",
      gallery: [
        "/placeholder.svg?height=300&width=400&text=Villa+Exterior",
        "/placeholder.svg?height=300&width=400&text=Pool+Area",
        "/placeholder.svg?height=300&width=400&text=Living+Room",
        "/placeholder.svg?height=300&width=400&text=Master+Bedroom",
      ],
      features: [
        "Exclusive use of entire property",
        "Private infinity pool with lake views",
        "Fully equipped modern kitchen",
        "Multiple living and dining areas",
        "Private boat dock access",
        "Dedicated parking for 4 cars",
        "Garden and terrace spaces",
        "Premium lake-facing bedrooms",
      ],
      amenities: ["Private Pool", "Lake Access", "Full Kitchen", "Free Parking", "WiFi", "AC"],
    },
    {
      id: "KNP1",
      name: "Master Family Suite",
      subtitle: "Luxury Suite with Stunning Lake Views",
      airbnbPrice: 119,
      directPrice: 107,
      savings: 12,
      discount: "10%",
      lastMinuteDiscount: "15%",
      guests: 4,
      bedrooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg?height=400&width=600&text=Master+Suite+Lake+View",
      gallery: [
        "/placeholder.svg?height=300&width=400&text=Master+Bedroom",
        "/placeholder.svg?height=300&width=400&text=Private+Balcony",
        "/placeholder.svg?height=300&width=400&text=En-suite+Bathroom",
        "/placeholder.svg?height=300&width=400&text=Lake+View",
      ],
      features: [
        "Spacious king-size bedroom",
        "Private balcony with lake views",
        "Luxury en-suite bathroom",
        "Sitting area with lake views",
        "Premium bedding and linens",
        "Mini-fridge and coffee station",
        "Direct lake access",
        "Shared pool and garden access",
      ],
      amenities: ["Lake View", "Private Balcony", "En-suite Bath", "Pool Access", "WiFi", "AC"],
    },
    {
      id: "KNP3",
      name: "Triple/Twin Rooms",
      subtitle: "Comfortable Accommodation for Small Groups",
      airbnbPrice: 70,
      directPrice: 63,
      savings: 7,
      discount: "10%",
      lastMinuteDiscount: "15%",
      guests: 3,
      bedrooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg?height=400&width=600&text=Twin+Room+Garden+View",
      gallery: [
        "/placeholder.svg?height=300&width=400&text=Twin+Beds",
        "/placeholder.svg?height=300&width=400&text=Garden+View",
        "/placeholder.svg?height=300&width=400&text=Shared+Bathroom",
        "/placeholder.svg?height=300&width=400&text=Common+Area",
      ],
      features: [
        "Flexible twin or triple bed setup",
        "Garden and partial lake views",
        "Shared bathroom facilities",
        "Access to common areas",
        "Shared kitchen facilities",
        "Pool and garden access",
        "Budget-friendly option",
        "Perfect for backpackers",
      ],
      amenities: ["Garden View", "Shared Kitchen", "Pool Access", "WiFi", "AC", "Parking"],
    },
    {
      id: "KNP6",
      name: "Group Room",
      subtitle: "Ideal for Friends & Family Groups",
      airbnbPrice: 250,
      directPrice: 225,
      savings: 25,
      discount: "10%",
      lastMinuteDiscount: "15%",
      guests: 6,
      bedrooms: 2,
      bathrooms: 2,
      image: "/placeholder.svg?height=400&width=600&text=Group+Room+Multiple+Beds",
      gallery: [
        "/placeholder.svg?height=300&width=400&text=Multiple+Beds",
        "/placeholder.svg?height=300&width=400&text=Shared+Living+Space",
        "/placeholder.svg?height=300&width=400&text=Lake+Access",
        "/placeholder.svg?height=300&width=400&text=Group+Dining",
      ],
      features: [
        "Multiple bed configurations",
        "Shared living and dining space",
        "Two bathroom facilities",
        "Direct lake access",
        "Shared kitchen access",
        "Group-friendly layout",
        "Pool and garden access",
        "Perfect for friend groups",
      ],
      amenities: ["Multiple Beds", "Shared Space", "Lake Access", "Pool Access", "WiFi", "AC"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Ko Lake Villa
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-900">
                Home
              </Link>
              <Link href="/accommodation" className="text-blue-900 font-medium">
                Rooms
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-blue-900">
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
          <h1 className="text-5xl font-bold mb-4">Our Accommodation</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Choose from our range of luxury accommodation options, each offering unique experiences with significant
            savings when you book direct.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">Book Direct & Save</h3>
            <p className="text-lg">Save 10-15% compared to Airbnb rates + enjoy exclusive perks</p>
          </div>
        </div>
      </section>

      {/* Room Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <Card key={room.id} className="overflow-hidden shadow-lg">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Image Section */}
                  <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      width={600}
                      height={400}
                      className="w-full h-96 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-red-500">Save {room.discount}</Badge>
                      <Badge className="bg-green-500">≤3 days: {room.lastMinuteDiscount}</Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent
                    className={`p-8 flex flex-col justify-between ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{room.name}</h2>
                      <p className="text-lg text-gray-600 mb-6">{room.subtitle}</p>

                      {/* Room Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center">
                          <Users className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                          <div className="text-sm text-gray-600">Up to</div>
                          <div className="font-semibold">{room.guests} guests</div>
                        </div>
                        <div className="text-center">
                          <Bed className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                          <div className="text-sm text-gray-600">Bedrooms</div>
                          <div className="font-semibold">{room.bedrooms}</div>
                        </div>
                        <div className="text-center">
                          <Bath className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                          <div className="text-sm text-gray-600">Bathrooms</div>
                          <div className="font-semibold">{room.bathrooms}</div>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="bg-gray-50 rounded-lg p-6 mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-lg text-gray-500 line-through">Airbnb: ${room.airbnbPrice}/night</span>
                          <span className="text-lg text-green-600 font-semibold">You Save: ${room.savings}</span>
                        </div>
                        <div className="text-3xl font-bold text-blue-900">
                          ${room.directPrice}
                          <span className="text-lg font-normal text-gray-500">/night direct</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-2">Book ≤3 days in advance for additional 5% off</div>
                      </div>

                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {room.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 mr-2 text-yellow-500 fill-current" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Amenities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.map((amenity, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {amenity}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="flex-1" asChild>
                        <Link href={`/booking?room=${room.id}`}>Book Direct & Save</Link>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={`/gallery?category=${room.id}`}>View Photos</Link>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book Direct */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Book Direct with Ko Lake Villa?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10-15%</div>
              <div className="font-semibold mb-2">Lower Rates</div>
              <div className="text-sm text-gray-600">Save compared to booking platforms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="font-semibold mb-2">Personal Service</div>
              <div className="text-sm text-gray-600">Direct contact with our team</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">Free</div>
              <div className="font-semibold mb-2">Cancellation</div>
              <div className="text-sm text-gray-600">Flexible booking terms</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Best</div>
              <div className="font-semibold mb-2">Rate Guarantee</div>
              <div className="text-sm text-gray-600">We'll match any lower rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Book Your Perfect Stay?</h2>
          <p className="text-xl mb-8">
            Choose your ideal accommodation and start planning your Ko Lake Villa experience.
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100" asChild>
            <Link href="/booking">Book Your Stay Now</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
