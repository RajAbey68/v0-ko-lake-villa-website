import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Header - Exact replica */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo - Exact positioning and styling */}
          <Link href="/" className="text-2xl font-semibold text-amber-900 tracking-tight">
            Ko Lake Villa
          </Link>

          {/* Navigation - Exact spacing and colors */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200"
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
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Book Now Button - Exact styling */}
          <Button className="bg-orange-400 hover:bg-orange-500 text-white font-medium text-sm px-6 py-2.5 rounded-md shadow-sm transition-all duration-200">
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section - Exact replica */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Exact positioning */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://sjc.microlink.io/-llAJQf-CPVh7tNIxiNbaTnOy4Csorx_ezydgBAslpMUzUuNbMgCflf-FYeAE_f2VFlI_EMDbx7WXicXKXV0Gw.jpeg"
            alt="Ko Lake Villa Pool and Villa View"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Overlay - Exact opacity */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Hero Content - Exact positioning and typography */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Main Heading - Exact font size and spacing */}
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 tracking-tight leading-none">Ko Lake Villa</h1>

          {/* Subtitle - Exact text and styling */}
          <p className="text-xl lg:text-2xl mb-12 font-light tracking-wide leading-relaxed">
            Relax. Revive. Reconnect by the Lake in Ahangama, Sri Lanka.
          </p>

          {/* Action Buttons - Exact spacing and styling */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium text-base px-8 py-3 rounded-md transition-all duration-300 min-w-[140px]"
            >
              View Gallery
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium text-base px-8 py-3 rounded-md transition-all duration-300 min-w-[140px]"
            >
              Request Info
            </Button>
            <Button className="bg-orange-400 hover:bg-orange-500 text-white font-medium text-base px-8 py-3 rounded-md shadow-lg transition-all duration-300 min-w-[180px]">
              Book Direct - Save 10%
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Widget - Exact positioning and styling */}
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
