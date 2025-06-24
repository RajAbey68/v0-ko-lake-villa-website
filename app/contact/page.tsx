"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.")
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Ko Lake Villa, Ahangama", "Southern Province, Sri Lanka", "Koggala Lake Waterfront"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 77 123 4567", "+94 91 234 5678", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kolakevilla.com", "bookings@kolakevilla.com", "Response within 24 hours"],
    },
    {
      icon: Clock,
      title: "Check-in/out",
      details: ["Check-in: 2:00 PM", "Check-out: 11:00 AM", "Early/late arrangements available"],
    },
  ]

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
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
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
              className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200"
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
            src="/placeholder.svg?height=400&width=1200&text=Contact+Us"
            alt="Ko Lake Villa Contact"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl lg:text-2xl font-light tracking-wide">
            Get in touch to plan your perfect lakefront getaway
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <info.icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <CardTitle className="text-lg text-gray-900">{info.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm mb-1 last:mb-0">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-200 text-orange-600 hover:bg-orange-50 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-200 text-orange-600 hover:bg-orange-50 flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="checkIn">Check-in Date</Label>
                        <Input
                          id="checkIn"
                          name="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut">Check-out Date</Label>
                        <Input
                          id="checkOut"
                          name="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          max="18"
                          value={formData.guests}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="mt-1"
                        placeholder="Tell us about your stay preferences, special requests, or any questions you have..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Find Us</h3>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-sm">Ko Lake Villa, Ahangama, Sri Lanka</p>
                  <p className="text-sm">Koggala Lake Waterfront</p>
                </div>
              </div>
            </div>
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
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
          </svg>
        </Button>
      </div>
    </div>
  )
}
