import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Users, Bed, Bath, Wifi, Car, Coffee } from "lucide-react"

export default function AccommodationPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://sjc.microlink.io/-llAJQf-CPVh7tNIxiNbaTnOy4Csorx_ezydgBAslpMUzUuNbMgCflf-FYeAE_f2VFlI_EMDbx7WXicXKXV0Gw.jpeg"
            alt="Ko Lake Villa Accommodation"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Accommodation</h1>
          <p className="text-xl lg:text-2xl font-light">Luxury rooms with stunning lake views</p>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Entire Villa */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=600" alt="Entire Villa" fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Entire Villa</h3>
                <p className="text-gray-600 mb-6">
                  Experience ultimate privacy and luxury with the entire villa to yourself. Perfect for families and
                  groups seeking an exclusive retreat.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">8-12 Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">4 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">4 Bathrooms</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <Wifi className="w-5 h-5 text-gray-400" />
                  <Car className="w-5 h-5 text-gray-400" />
                  <Coffee className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-orange-500">$450</span>
                    <span className="text-gray-600">/night</span>
                  </div>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Family Suite */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=600" alt="Family Suite" fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Family Suite</h3>
                <p className="text-gray-600 mb-6">
                  Spacious suite perfect for families, featuring separate living areas and stunning lake views from
                  private balcony.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">4-6 Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">2 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">2 Bathrooms</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <Wifi className="w-5 h-5 text-gray-400" />
                  <Car className="w-5 h-5 text-gray-400" />
                  <Coffee className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-orange-500">$280</span>
                    <span className="text-gray-600">/night</span>
                  </div>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Group Room */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=600" alt="Group Room" fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Group Room</h3>
                <p className="text-gray-600 mb-6">
                  Comfortable accommodation for groups with shared common areas and access to all villa facilities.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">6-8 Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">3 Bedrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">2 Bathrooms</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <Wifi className="w-5 h-5 text-gray-400" />
                  <Car className="w-5 h-5 text-gray-400" />
                  <Coffee className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-orange-500">$180</span>
                    <span className="text-gray-600">/night</span>
                  </div>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Triple Room */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=600" alt="Triple Room" fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Triple Room</h3>
                <p className="text-gray-600 mb-6">
                  Cozy room perfect for small groups or families, featuring garden views and modern amenities.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">2-3 Guests</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bed className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">1 Bedroom</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Bath className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">1 Bathroom</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <Wifi className="w-5 h-5 text-gray-400" />
                  <Car className="w-5 h-5 text-gray-400" />
                  <Coffee className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-bold text-orange-500">$120</span>
                    <span className="text-gray-600">/night</span>
                  </div>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  )
}
