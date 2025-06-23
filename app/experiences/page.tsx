import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Clock, Users, MapPin } from "lucide-react"

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://sjc.microlink.io/-llAJQf-CPVh7tNIxiNbaTnOy4Csorx_ezydgBAslpMUzUuNbMgCflf-FYeAE_f2VFlI_EMDbx7WXicXKXV0Gw.jpeg"
            alt="Ko Lake Villa Experiences"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Experiences</h1>
          <p className="text-xl lg:text-2xl font-light">Discover the beauty and culture of Sri Lanka</p>
        </div>
      </section>

      {/* Experiences Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Lake Activities */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Lake Activities"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Koggala Lake Boat Ride</h3>
                <p className="text-gray-600 mb-4">
                  Explore the serene Koggala Lake, visit the temple on the island, and spot exotic birds in their
                  natural habitat.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">2-3 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Up to 8 people</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Koggala Lake</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$45</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Experience</Button>
                </div>
              </CardContent>
            </Card>

            {/* Galle Fort Tour */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Galle Fort Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Galle Fort Historical Tour</h3>
                <p className="text-gray-600 mb-4">
                  Discover the UNESCO World Heritage site of Galle Fort with its colonial architecture and rich history.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">4-5 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Up to 12 people</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Galle Fort</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$65</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Experience</Button>
                </div>
              </CardContent>
            </Card>

            {/* Whale Watching */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=256&width=400" alt="Whale Watching" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Whale Watching Safari</h3>
                <p className="text-gray-600 mb-4">
                  Experience the thrill of spotting blue whales and dolphins in the waters off Mirissa Beach.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">6-7 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Up to 15 people</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Mirissa Harbor</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$85</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Experience</Button>
                </div>
              </CardContent>
            </Card>

            {/* Cooking Class */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=256&width=400" alt="Cooking Class" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Sri Lankan Cooking Class</h3>
                <p className="text-gray-600 mb-4">
                  Learn to prepare authentic Sri Lankan dishes with our chef using fresh local ingredients and
                  traditional techniques.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">3-4 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Up to 6 people</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Villa Kitchen</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$55</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Experience</Button>
                </div>
              </CardContent>
            </Card>

            {/* Spice Garden Tour */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Spice Garden Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Spice Garden Tour</h3>
                <p className="text-gray-600 mb-4">
                  Visit a traditional spice garden and learn about Ceylon's famous spices including cinnamon, cardamom,
                  and pepper.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">2-3 hours</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Up to 10 people</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Local Spice Garden</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$35</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Experience</Button>
                </div>
              </CardContent>
            </Card>

            {/* Beach Activities */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Beach Activities"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Beach Activities</h3>
                <p className="text-gray-600 mb-4">
                  Enjoy surfing lessons, snorkeling, or simply relax on the pristine beaches of the southern coast.
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Half/Full day</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Any group size</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-orange-500" />
                    <span className="text-sm text-gray-600">Nearby Beaches</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">$25</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Experience</Button>
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
