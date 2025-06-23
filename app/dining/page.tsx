import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Clock, Users, Star } from "lucide-react"

export default function DiningPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://sjc.microlink.io/-llAJQf-CPVh7tNIxiNbaTnOy4Csorx_ezydgBAslpMUzUuNbMgCflf-FYeAE_f2VFlI_EMDbx7WXicXKXV0Gw.jpeg"
            alt="Ko Lake Villa Dining"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Dining</h1>
          <p className="text-xl lg:text-2xl font-light">Authentic Sri Lankan cuisine with a modern twist</p>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Restaurant */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image
                  src="/placeholder.svg?height=320&width=600"
                  alt="Restaurant Dining"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Lake View Restaurant</h3>
                <p className="text-gray-600 mb-6">
                  Experience fine dining with panoramic lake views. Our chef creates exquisite dishes using fresh local
                  ingredients and traditional Sri Lankan spices.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">7:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">Up to 40 guests</span>
                  </div>
                </div>

                <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 w-full">
                  Make Reservation
                </Button>
              </CardContent>
            </Card>

            {/* Private Dining */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=600" alt="Private Dining" fill className="object-cover" />
              </div>
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Private Dining</h3>
                <p className="text-gray-600 mb-6">
                  Intimate dining experiences tailored to your preferences. Perfect for romantic dinners, family
                  celebrations, or business meetings.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">By appointment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-sm text-gray-600">2-12 guests</span>
                  </div>
                </div>

                <Button className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 w-full">
                  Request Private Dining
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Menu Highlights */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Menu Highlights</h2>
            <p className="text-xl text-gray-600">Signature dishes that showcase the best of Sri Lankan cuisine</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Dish 1 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=256&width=400" alt="Fish Curry" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Traditional Fish Curry</h3>
                <p className="text-gray-600 mb-4">
                  Fresh catch of the day prepared with coconut milk, curry leaves, and aromatic spices.
                </p>
                <span className="text-2xl font-bold text-orange-500">$18</span>
              </CardContent>
            </Card>

            {/* Dish 2 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=256&width=400" alt="Kottu Roti" fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Signature Kottu Roti</h3>
                <p className="text-gray-600 mb-4">
                  Sri Lankan street food favorite with chopped roti, vegetables, and your choice of protein.
                </p>
                <span className="text-2xl font-bold text-orange-500">$15</span>
              </CardContent>
            </Card>

            {/* Dish 3 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Tropical Dessert"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Tropical Fruit Platter</h3>
                <p className="text-gray-600 mb-4">
                  Fresh seasonal fruits served with coconut ice cream and palm sugar syrup.
                </p>
                <span className="text-2xl font-bold text-orange-500">$12</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  )
}
