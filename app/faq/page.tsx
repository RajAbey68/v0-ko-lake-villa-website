"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"

const faqData = [
  {
    id: 1,
    question: "What is included in the room rate?",
    answer:
      "All room rates include complimentary Wi-Fi, daily housekeeping, access to the pool and gardens, and basic breakfast. Airport transfers and excursions are available at additional cost.",
  },
  {
    id: 2,
    question: "How far is Ko Lake Villa from the airport?",
    answer:
      "Ko Lake Villa is approximately 2.5 hours drive from Bandaranaike International Airport (CMB). We offer airport transfer services for your convenience.",
  },
  {
    id: 3,
    question: "Can I book the entire villa for my group?",
    answer:
      "Yes, the entire villa can be booked exclusively for groups of 8-12 people. This includes all bedrooms, common areas, and private use of all facilities.",
  },
  {
    id: 4,
    question: "What activities are available nearby?",
    answer:
      "We offer various excursions including Koggala Lake boat rides, Galle Fort tours, whale watching, spice garden visits, and beach activities. Our team can arrange these experiences for you.",
  },
  {
    id: 5,
    question: "Is there a minimum stay requirement?",
    answer:
      "During peak season (December-March), we have a minimum 3-night stay requirement. For other periods, minimum stay is 2 nights.",
  },
  {
    id: 6,
    question: "What dining options are available?",
    answer:
      "We have an on-site restaurant serving authentic Sri Lankan cuisine and international dishes. Private dining experiences can also be arranged upon request.",
  },
  {
    id: 7,
    question: "Do you provide transportation services?",
    answer:
      "Yes, we offer airport transfers, local transportation for excursions, and can arrange tuk-tuk or car rentals for independent exploration.",
  },
  {
    id: 8,
    question: "What is your cancellation policy?",
    answer:
      "Cancellations made 14 days before arrival receive full refund. Cancellations made 7-14 days before arrival receive 50% refund. Cancellations within 7 days are non-refundable.",
  },
  {
    id: 9,
    question: "Is the property suitable for children?",
    answer:
      "Yes, Ko Lake Villa is family-friendly. However, please supervise children around the pool and lake areas. We can provide extra beds and child-friendly amenities upon request.",
  },
  {
    id: 10,
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), bank transfers, and cash payments in USD, EUR, or LKR.",
  },
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://sjc.microlink.io/-llAJQf-CPVh7tNIxiNbaTnOy4Csorx_ezydgBAslpMUzUuNbMgCflf-FYeAE_f2VFlI_EMDbx7WXicXKXV0Gw.jpeg"
            alt="Ko Lake Villa FAQ"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">FAQ</h1>
          <p className="text-xl lg:text-2xl font-light">Frequently asked questions about your stay</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  )}
                </button>

                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center bg-orange-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Still have questions?</h2>
            <p className="text-gray-600 mb-6">Our team is here to help you plan the perfect stay at Ko Lake Villa.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+94123456789"
                className="bg-orange-400 hover:bg-orange-500 text-white font-medium px-6 py-3 rounded-md transition-colors duration-200"
              >
                Call Us: +94 12 345 6789
              </a>
              <a
                href="mailto:info@kolakevilla.com"
                className="bg-white hover:bg-gray-50 text-orange-500 border border-orange-400 font-medium px-6 py-3 rounded-md transition-colors duration-200"
              >
                Email: info@kolakevilla.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppWidget />
    </div>
  )
}
