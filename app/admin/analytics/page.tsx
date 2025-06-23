"use client"

import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Eye, Download, Filter, BarChart3, PieChart, Activity } from "lucide-react"

export default function AdminAnalytics() {
  const analyticsData = {
    totalVisitors: 2847,
    pageViews: 8934,
    avgSessionDuration: "4:32",
    bounceRate: "32%",
    topPages: [
      { page: "/", views: 3421, percentage: 38.3 },
      { page: "/gallery", views: 1876, percentage: 21.0 },
      { page: "/accommodation", views: 1234, percentage: 13.8 },
      { page: "/experiences", views: 987, percentage: 11.0 },
      { page: "/dining", views: 654, percentage: 7.3 },
    ],
    trafficSources: [
      { source: "Direct", visitors: 1138, percentage: 40.0 },
      { source: "Google", visitors: 854, percentage: 30.0 },
      { source: "Social Media", visitors: 569, percentage: 20.0 },
      { source: "Referrals", visitors: 286, percentage: 10.0 },
    ],
    deviceBreakdown: [
      { device: "Desktop", users: 1423, percentage: 50.0 },
      { device: "Mobile", users: 1138, percentage: 40.0 },
      { device: "Tablet", users: 286, percentage: 10.0 },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Track your website performance and visitor insights</p>
          </div>
          <div className="flex space-x-3 mt-4 lg:mt-0">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-orange-400 hover:bg-orange-500 text-white">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Visitors</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.totalVisitors.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Page Views</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.pageViews.toLocaleString()}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +8.3% from last month
                  </p>
                </div>
                <Eye className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg. Session</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.avgSessionDuration}</p>
                  <p className="text-sm text-green-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +15.2% from last month
                  </p>
                </div>
                <Activity className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Bounce Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{analyticsData.bounceRate}</p>
                  <p className="text-sm text-red-600 flex items-center mt-1">
                    <TrendingUp className="w-4 h-4 mr-1 rotate-180" />
                    -3.1% from last month
                  </p>
                </div>
                <BarChart3 className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-orange-500" />
                <span>Top Pages</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topPages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-900">{page.page}</span>
                        <span className="text-sm text-gray-600">{page.views.toLocaleString()} views</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-400 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${page.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <PieChart className="w-5 h-5 text-green-500" />
                <span>Traffic Sources</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.trafficSources.map((source, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          index === 0
                            ? "bg-blue-500"
                            : index === 1
                              ? "bg-green-500"
                              : index === 2
                                ? "bg-purple-500"
                                : "bg-orange-500"
                        }`}
                      ></div>
                      <span className="text-sm font-medium text-gray-900">{source.source}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{source.visitors.toLocaleString()}</p>
                      <p className="text-xs text-gray-500">{source.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Device Breakdown */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-purple-500" />
              <span>Device Breakdown</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {analyticsData.deviceBreakdown.map((device, index) => (
                <div key={index} className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center ${
                      index === 0 ? "bg-blue-100" : index === 1 ? "bg-green-100" : "bg-purple-100"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 ${
                        index === 0 ? "text-blue-500" : index === 1 ? "text-green-500" : "text-purple-500"
                      }`}
                    >
                      {/* Device icons would go here */}📱
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{device.device}</h3>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{device.users.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{device.percentage}% of users</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Real-time Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-red-500" />
              <span>Real-time Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-900">New visitor viewing Gallery page</span>
                </div>
                <span className="text-xs text-gray-500">Just now</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-900">Booking inquiry submitted</span>
                </div>
                <span className="text-xs text-gray-500">2 minutes ago</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-900">Contact form submitted</span>
                </div>
                <span className="text-xs text-gray-500">5 minutes ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
