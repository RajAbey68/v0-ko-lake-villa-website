"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Save, Edit, Eye, Plus, Trash2, FileText, Globe } from "lucide-react"

interface ContentItem {
  id: string
  type: "page" | "section" | "text"
  title: string
  content: string
  lastModified: string
  status: "published" | "draft"
}

export default function AdminContent() {
  const [contentItems, setContentItems] = useState<ContentItem[]>([
    {
      id: "1",
      type: "section",
      title: "Homepage Hero Text",
      content: "Relax. Revive. Reconnect by the Lake in Ahangama, Sri Lanka.",
      lastModified: "2024-01-15",
      status: "published",
    },
    {
      id: "2",
      type: "page",
      title: "About Ko Lake Villa",
      content: "Ko Lake Villa is a luxury accommodation...",
      lastModified: "2024-01-14",
      status: "published",
    },
    {
      id: "3",
      type: "text",
      title: "Contact Information",
      content: "Phone: +94 12 345 6789\nEmail: info@kolakevilla.com",
      lastModified: "2024-01-13",
      status: "draft",
    },
  ])

  const [editingItem, setEditingItem] = useState<ContentItem | null>(null)

  const handleSave = (item: ContentItem) => {
    setContentItems((prev) => prev.map((i) => (i.id === item.id ? item : i)))
    setEditingItem(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
            <p className="text-gray-600">Manage website content and text</p>
          </div>
          <Button className="bg-orange-400 hover:bg-orange-500 text-white mt-4 lg:mt-0">
            <Plus className="w-4 h-4 mr-2" />
            Add Content
          </Button>
        </div>

        {/* Content List */}
        <div className="space-y-6">
          {contentItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {item.type === "page" && <FileText className="w-5 h-5 text-blue-500" />}
                    {item.type === "section" && <Globe className="w-5 h-5 text-green-500" />}
                    {item.type === "text" && <Edit className="w-5 h-5 text-purple-500" />}
                    <div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <p className="text-sm text-gray-500">
                        Last modified: {item.lastModified} • Status:
                        <span
                          className={`ml-1 px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.status}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={() => setEditingItem(item)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 rounded-md p-4">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {item.content.length > 200 ? `${item.content.substring(0, 200)}...` : item.content}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <CardTitle>Edit Content: {editingItem.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingItem.title}
                    onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    value={editingItem.content}
                    onChange={(e) => setEditingItem({ ...editingItem, content: e.target.value })}
                    rows={10}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={editingItem.status}
                    onChange={(e) =>
                      setEditingItem({ ...editingItem, status: e.target.value as "published" | "draft" })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <Button variant="outline" onClick={() => setEditingItem(null)}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleSave(editingItem)}
                    className="bg-orange-400 hover:bg-orange-500 text-white"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
