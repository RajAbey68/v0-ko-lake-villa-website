"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-orange-500"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            <a
              href="#"
              className="text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Deals
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Accommodation
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Dining
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Experiences
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Gallery
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-gray-700 font-medium text-sm hover:text-orange-500 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </div>
  )
}
