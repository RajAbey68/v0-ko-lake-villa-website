import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function DealsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://sjc.microlink.io/-llAJQf-CPVh7tNIxiNbaTnOy4Csorx_ezydgBAslpMUzUuNbMgCflf-FYeAE_f2VFlI_EMDbx7WXicXKXV0Gw.jpeg"
            alt="Ko Lake Villa Special Deals"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Special Deals</h1>
          <p className="text-xl lg:text-2xl font-light">Exclusive offers for your perfect getaway</p>
        </div>
      </section>

      {/* Deals Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deal 1 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Early Bird Special"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 25%
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Early Bird Special</h3>
                <p className="text-gray-600 mb-4">
                  Book 30 days in advance and save 25% on your stay. Valid for stays between March - November.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-500">25% OFF</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Deal 2 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Extended Stay Discount"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 30%
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Extended Stay Discount</h3>
                <p className="text-gray-600 mb-4">
                  Stay 7 nights or more and enjoy 30% off. Perfect for longer retreats and family vacations.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-500">30% OFF</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            {/* Deal 3 */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=256&width=400"
                  alt="Direct Booking Bonus"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Save 10%
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Direct Booking Bonus</h3>
                <p className="text-gray-600 mb-4">
                  Book directly with us and save 10% plus enjoy complimentary breakfast and airport transfers.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-500">10% OFF</span>
                  <Button className="bg-orange-400 hover:bg-orange-500 text-white">Book Now</Button>
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
