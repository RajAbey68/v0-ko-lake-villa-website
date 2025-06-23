"use client"

import { AdminHeader } from "@/components/admin/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Filter, Download, Search, User, ImageIcon, Settings, Trash2, Edit } from "lucide-react"

interface AuditLog {
  id: string
  timestamp: string
  user: string
  action: string
  resource: string
  details: string
  ipAddress: string
  userAgent: string
}

export default function AdminAudit() {
  const auditLogs: AuditLog[] = [
    {
      id: "1",
      timestamp: "2024-01-15 14:30:25",
      user: "kolakevilla@gmail.com",
      action: "CREATE",
      resource: "Gallery Image",
      details: "Uploaded new image: pool-sunset.jpg to Pool Deck category",
      ipAddress: "192.168.1.100",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
    {
      id: "2",
      timestamp: "2024-01-15 13:45:12",
      user: "rajiv.abey@gmail.com",
      action: "UPDATE",
      resource: "Content",
      details: "Modified homepage hero text",
      ipAddress: "192.168.1.101",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
    {
      id: "3",
      timestamp: "2024-01-15 12:20:08",
      user: "kolakevilla@gmail.com",
      action: "DELETE",
      resource: "Gallery Image",
      details: "Deleted image: old-room-photo.jpg from Family Suite category",
      ipAddress: "192.168.1.100",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
    {
      id: "4",
      timestamp: "2024-01-15 11:15:33",
      user: "rajiv.abey@gmail.com",
      action: "LOGIN",
      resource: "Admin Panel",
      details: "Successful admin login",
      ipAddress: "192.168.1.101",
      userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
    {
      id: "5",
      timestamp: "2024-01-15 10:30:45",
      user: "kolakevilla@gmail.com",
      action: "UPDATE",
      resource: "Gallery Settings",
      details: "Enabled AI auto-categorization for new uploads",
      ipAddress: "192.168.1.100",
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  ]

  const getActionIcon = (action: string) => {
    switch (action) {
      case "CREATE":
        return <ImageIcon className="w-4 h-4 text-green-500" />
      case "UPDATE":
        return <Edit className="w-4 h-4 text-blue-500" />
      case "DELETE":
        return <Trash2 className="w-4 h-4 text-red-500" />
      case "LOGIN":
        return <User className="w-4 h-4 text-purple-500" />
      default:
        return <Settings className="w-4 h-4 text-gray-500" />
    }
  }

  const getActionColor = (action: string) => {
    switch (action) {
      case "CREATE":
        return "bg-green-100 text-green-800"
      case "UPDATE":
        return "bg-blue-100 text-blue-800"
      case "DELETE":
        return "bg-red-100 text-red-800"
      case "LOGIN":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Audit Logs</h1>
            <p className="text-gray-600">Track all administrative actions and system events</p>
          </div>
          <div className="flex space-x-3 mt-4 lg:mt-0">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button className="bg-orange-400 hover:bg-orange-500 text-white">
              <Download className="w-4 h-4 mr-2" />
              Export Logs
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search logs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="">All Actions</option>
                  <option value="CREATE">Create</option>
                  <option value="UPDATE">Update</option>
                  <option value="DELETE">Delete</option>
                  <option value="LOGIN">Login</option>
                </select>
                <select className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option value="">All Users</option>
                  <option value="kolakevilla@gmail.com">kolakevilla@gmail.com</option>
                  <option value="rajiv.abey@gmail.com">rajiv.abey@gmail.com</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audit Logs Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Timestamp
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Resource
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      IP Address
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {auditLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.timestamp}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span>{log.user}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          {getActionIcon(log.action)}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getActionColor(log.action)}`}>
                            {log.action}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.resource}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{log.details}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{log.ipAddress}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold text-gray-900">156</p>
              <p className="text-sm text-gray-600">Total Actions Today</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold text-green-600">89</p>
              <p className="text-sm text-gray-600">Create Actions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold text-blue-600">45</p>
              <p className="text-sm text-gray-600">Update Actions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-2xl font-bold text-red-600">12</p>
              <p className="text-sm text-gray-600">Delete Actions</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
