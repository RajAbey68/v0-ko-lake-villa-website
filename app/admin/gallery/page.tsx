"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Search, Grid3X3, List, Trash2, Edit, Eye, Tag, Sparkles } from "lucide-react"
import Image from "next/image"

const galleryCategories = [
  "All",
  "Entire Villa",
  "Family Suite",
  "Group Room",
  "Triple Room",
  "Dining Area",
  "Pool Deck",
  "Lake Garden",
  "Roof Garden",
  "Front Garden",
  "Koggala Lake",
  "Excursions",
]

const mockImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=300&width=400",
    category: "Pool Deck",
    title: "Pool Area Sunset",
    tags: ["pool", "sunset", "relaxing"],
    aiGenerated: false,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=300&width=400",
    category: "Entire Villa",
    title: "Villa Exterior",
    tags: ["villa", "architecture", "exterior"],
    aiGenerated: false,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=300&width=400",
    category: "Family Suite",
    title: "Family Room Interior",
    tags: ["bedroom", "family", "comfortable"],
    aiGenerated: true,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=300&width=400",
    category: "Dining Area",
    title: "Restaurant View",
    tags: ["dining", "restaurant", "food"],
    aiGenerated: false,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=300&width=400",
    category: "Koggala Lake",
    title: "Lake Morning View",
    tags: ["lake", "morning", "peaceful"],
    aiGenerated: true,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=300&width=400",
    category: "Lake Garden",
    title: "Garden Landscape",
    tags: ["garden", "landscape", "nature"],
    aiGenerated: false,
  },
]

export default function AdminGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImages, setSelectedImages] = useState<number[]>([])
  const [images, setImages] = useState(mockImages)

  const filteredImages = images.filter((img) => {
    const matchesCategory = selectedCategory === "All" || img.category === selectedCategory
    const matchesSearch =
      img.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleSelectImage = (id: number) => {
    setSelectedImages((prev) => (prev.includes(id) ? prev.filter((imgId) => imgId !== id) : [...prev, id]))
  }

  const handleBulkDelete = () => {
    setImages((prev) => prev.filter((img) => !selectedImages.includes(img.id)))
    setSelectedImages([])
  }

  const handleAIRecategorize = async () => {
    // Simulate AI recategorization
    console.log("AI recategorizing selected images...")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Gallery Management</h1>
            <p className="text-gray-600">Manage your property images with AI-powered tools</p>
          </div>
          <div className="flex space-x-3 mt-4 lg:mt-0">
            <Button className="bg-orange-400 hover:bg-orange-500 text-white">
              <Upload className="w-4 h-4 mr-2" />
              Upload Images
            </Button>
            <Button variant="outline" className="border-orange-400 text-orange-500">
              <Sparkles className="w-4 h-4 mr-2" />
              AI Categorize
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {galleryCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-md">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "bg-orange-400 hover:bg-orange-500 text-white" : ""}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "bg-orange-400 hover:bg-orange-500 text-white" : ""}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedImages.length > 0 && (
            <div className="mt-4 p-4 bg-orange-50 rounded-md border border-orange-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-orange-800">{selectedImages.length} image(s) selected</span>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={handleAIRecategorize}>
                    <Sparkles className="w-4 h-4 mr-1" />
                    AI Recategorize
                  </Button>
                  <Button size="sm" variant="outline" onClick={handleBulkDelete}>
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete Selected
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Gallery Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <Card key={image.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />

                  {/* Selection Checkbox */}
                  <div className="absolute top-2 left-2">
                    <input
                      type="checkbox"
                      checked={selectedImages.includes(image.id)}
                      onChange={() => handleSelectImage(image.id)}
                      className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    />
                  </div>

                  {/* AI Badge */}
                  {image.aiGenerated && (
                    <div className="absolute top-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      <Sparkles className="w-3 h-3 inline mr-1" />
                      AI
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="absolute bottom-2 right-2 flex space-x-1">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{image.category}</p>
                  <div className="flex flex-wrap gap-1">
                    {image.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedImages(filteredImages.map((img) => img.id))
                          } else {
                            setSelectedImages([])
                          }
                        }}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tags
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredImages.map((image) => (
                    <tr key={image.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input
                          type="checkbox"
                          checked={selectedImages.includes(image.id)}
                          onChange={() => handleSelectImage(image.id)}
                          className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="relative w-16 h-12">
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.title}
                            fill
                            className="object-cover rounded"
                          />
                          {image.aiGenerated && (
                            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-purple-500" />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{image.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{image.category}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-wrap gap-1">
                          {image.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {tag}
                            </span>
                          ))}
                          {image.tags.length > 2 && (
                            <span className="text-xs text-gray-500">+{image.tags.length - 2}</span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="ghost">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{images.length}</p>
              <p className="text-sm text-gray-600">Total Images</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{galleryCategories.length - 1}</p>
              <p className="text-sm text-gray-600">Categories</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{images.filter((img) => img.aiGenerated).length}</p>
              <p className="text-sm text-gray-600">AI Generated</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-900">{filteredImages.length}</p>
              <p className="text-sm text-gray-600">Filtered Results</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
