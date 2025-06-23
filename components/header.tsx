"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Deals", href: "/deals" },
    { name: "Accommodation", href: "/accommodation" },
    { name: "Dining", href: "/dining" },
    { name: "Experiences", href: "/experiences" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-amber-900 tracking-tight">
          Ko Lake Villa
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium text-sm transition-colors duration-200 ${
                pathname === item.href ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Book Now Button */}
        <Button className="hidden lg:block bg-orange-400 hover:bg-orange-500 text-white font-medium text-sm px-6 py-2.5 rounded-md shadow-sm transition-all duration-200">
          Book Now
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-700 hover:text-orange-500"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium text-sm transition-colors duration-200 ${
                  pathname === item.href ? "text-orange-500" : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-orange-400 hover:bg-orange-500 text-white font-medium text-sm px-6 py-2.5 rounded-md shadow-sm transition-all duration-200 w-fit">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
