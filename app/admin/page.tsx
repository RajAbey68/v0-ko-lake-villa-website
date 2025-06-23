"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImageIcon, Calendar, DollarSign, TrendingUp, Eye, MessageSquare, Star } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [stats, setStats] = useState({
    totalBookings: 45,
    totalRevenue: 28500,
    totalImages: 131,
    totalVisitors: 2847,
    avgRating: 4.8,
    pendingInquiries: 12,
  })

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      const adminToken = localStorage.getItem("admin_token")
      if (!adminToken) {
        router.push("/admin/login")
        return
      }
      setIsAuthenticated(true)
    }

    checkAuth()
  }, [router])

  if (!isAuthenticated) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening at Ko Lake Villa.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalBookings}</p>
                </div>
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Revenue</p>
                  <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Gallery Images</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalImages}</p>
                </div>
                <ImageIcon className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Visitors</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalVisitors.toLocaleString()}</p>
                </div>
                <Eye className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Rating</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
                </div>
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Inquiries</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.pendingInquiries}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ImageIcon className="w-5 h-5 text-orange-500" />
                <span>Gallery Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Manage your property images with AI-powered categorization.</p>
              <div className="flex space-x-3">
                <Button
                  onClick={() => router.push("/admin/gallery")}
                  className="bg-orange-400 hover:bg-orange-500 text-white"
                >
                  Manage Gallery
                </Button>
                <Button
                  onClick={() => router.push("/admin/upload")}
                  variant="outline"
                  className="border-orange-400 text-orange-500 hover:bg-orange-50"
                >
                  Upload Images
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span>Analytics & Reports</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">View detailed analytics and performance metrics.</p>
              <div className="flex space-x-3">
                <Button
                  onClick={() => router.push("/admin/analytics")}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  View Analytics
                </Button>
                <Button
                  onClick={() => router.push("/admin/statistics")}
                  variant="outline"
                  className="border-green-500 text-green-500 hover:bg-green-50"
                >
                  Statistics
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">New booking received</p>
                  <p className="text-xs text-gray-500">Family Suite - 3 nights - $840</p>
                </div>
                <span className="text-xs text-gray-400">2 hours ago</span>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Gallery updated</p>
                  <p className="text-xs text-gray-500">5 new images added to Pool Deck category</p>
                </div>
                <span className="text-xs text-gray-400">4 hours ago</span>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Contact inquiry</p>
                  <p className="text-xs text-gray-500">New message about dining reservations</p>
                </div>
                <span className="text-xs text-gray-400">6 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
