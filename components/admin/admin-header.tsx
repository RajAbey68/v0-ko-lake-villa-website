"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, ImageIcon, Upload, BarChart3, Settings, LogOut, User, Bell, Search } from "lucide-react"

export function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Gallery", href: "/admin/gallery", icon: ImageIcon },
    { name: "Upload", href: "/admin/upload", icon: Upload },
    { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
    { name: "Content", href: "/admin/content", icon: Settings },
    { name: "Audit Logs", href: "/admin/audit", icon: Settings },
  ]

  const handleLogout = () => {
    localStorage.removeItem("admin_token")
    localStorage.removeItem("admin_email")
    router.push("/admin/login")
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/admin" className="flex items-center space-x-3">
            <div className="text-2xl font-bold text-amber-900">Ko Lake Villa</div>
            <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">Admin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    pathname === item.href
                      ? "bg-orange-100 text-orange-700"
                      : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm"
              />
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </Button>

            {/* User Menu */}
            <div className="flex items-center space-x-3">
              <div className="hidden md:block text-right">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">kolakevilla@gmail.com</p>
              </div>
              <Button variant="ghost" size="sm">
                <User className="w-5 h-5 text-gray-600" />
              </Button>
            </div>

            {/* Logout */}
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="hidden lg:flex items-center space-x-2 border-red-300 text-red-600 hover:bg-red-50"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      pathname === item.href
                        ? "bg-orange-100 text-orange-700"
                        : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              <Button
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2 border-red-300 text-red-600 hover:bg-red-50 mt-4"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
