"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { AdminHeader } from "@/components/admin/admin-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, Sparkles, Check, AlertCircle, FileImage } from "lucide-react"
import Image from "next/image"

interface UploadedFile {
  id: string
  file: File
  preview: string
  category?: string
  title?: string
  tags?: string[]
  aiProcessed?: boolean
  status: "uploading" | "processing" | "completed" | "error"
}

const galleryCategories = [
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

export default function AdminUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [useAI, setUseAI] = useState(true)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))

    processFiles(files)
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    processFiles(files)
  }

  const processFiles = (files: File[]) => {
    const newFiles: UploadedFile[] = files.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: URL.createObjectURL(file),
      status: "uploading",
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])

    // Simulate upload and AI processing
    newFiles.forEach((uploadedFile) => {
      setTimeout(() => {
        setUploadedFiles((prev) => prev.map((f) => (f.id === uploadedFile.id ? { ...f, status: "processing" } : f)))

        if (useAI) {
          // Simulate AI processing
          setTimeout(() => {
            const aiResults = {
              category: galleryCategories[Math.floor(Math.random() * galleryCategories.length)],
              title: `Beautiful ${uploadedFile.file.name.split(".")[0]}`,
              tags: ["luxury", "villa", "sri lanka"],
              aiProcessed: true,
            }

            setUploadedFiles((prev) =>
              prev.map((f) => (f.id === uploadedFile.id ? { ...f, ...aiResults, status: "completed" } : f)),
            )
          }, 2000)
        } else {
          setUploadedFiles((prev) => prev.map((f) => (f.id === uploadedFile.id ? { ...f, status: "completed" } : f)))
        }
      }, 1000)
    })
  }

  const removeFile = (id: string) => {
    setUploadedFiles((prev) => {
      const file = prev.find((f) => f.id === id)
      if (file) {
        URL.revokeObjectURL(file.preview)
      }
      return prev.filter((f) => f.id !== id)
    })
  }

  const updateFileData = (id: string, updates: Partial<UploadedFile>) => {
    setUploadedFiles((prev) => prev.map((f) => (f.id === id ? { ...f, ...updates } : f)))
  }

  const handleBulkUpload = () => {
    // Simulate bulk upload to server
    console.log("Uploading files:", uploadedFiles)
    alert("Files uploaded successfully!")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Images</h1>
          <p className="text-gray-600">Upload and manage your property images with AI-powered categorization</p>
        </div>

        {/* Upload Settings */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span>AI Processing Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={useAI}
                  onChange={(e) => setUseAI(e.target.checked)}
                  className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                />
                <span className="text-sm font-medium text-gray-700">Enable AI auto-categorization and tagging</span>
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              AI will automatically categorize images and generate titles and tags using OpenAI Vision API
            </p>
          </CardContent>
        </Card>

        {/* Upload Area */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors duration-200 ${
                isDragging
                  ? "border-orange-400 bg-orange-50"
                  : "border-gray-300 hover:border-orange-400 hover:bg-orange-50"
              }`}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Drop images here or click to upload</h3>
              <p className="text-gray-600 mb-4">Support for JPG, PNG, WebP files up to 10MB each</p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <Button className="bg-orange-400 hover:bg-orange-500 text-white">
                  <FileImage className="w-4 h-4 mr-2" />
                  Select Images
                </Button>
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Files */}
        {uploadedFiles.length > 0 && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Uploaded Images ({uploadedFiles.length})</CardTitle>
                <Button
                  onClick={handleBulkUpload}
                  className="bg-green-500 hover:bg-green-600 text-white"
                  disabled={uploadedFiles.some((f) => f.status !== "completed")}
                >
                  <Check className="w-4 h-4 mr-2" />
                  Save All Images
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {uploadedFiles.map((uploadedFile) => (
                  <div key={uploadedFile.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      {/* Image Preview */}
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={uploadedFile.preview || "/placeholder.svg"}
                          alt="Preview"
                          fill
                          className="object-cover rounded"
                        />
                        {uploadedFile.aiProcessed && (
                          <div className="absolute -top-1 -right-1 bg-purple-500 text-white rounded-full p-1">
                            <Sparkles className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      {/* File Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium text-gray-900 truncate">{uploadedFile.file.name}</h4>
                          <Button size="sm" variant="ghost" onClick={() => removeFile(uploadedFile.id)}>
                            <X className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Status */}
                        <div className="flex items-center space-x-2 mb-3">
                          {uploadedFile.status === "uploading" && (
                            <>
                              <div className="w-4 h-4 border-2 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                              <span className="text-sm text-gray-600">Uploading...</span>
                            </>
                          )}
                          {uploadedFile.status === "processing" && (
                            <>
                              <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                              <span className="text-sm text-gray-600">AI Processing...</span>
                            </>
                          )}
                          {uploadedFile.status === "completed" && (
                            <>
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-sm text-green-600">Ready</span>
                            </>
                          )}
                          {uploadedFile.status === "error" && (
                            <>
                              <AlertCircle className="w-4 h-4 text-red-500" />
                              <span className="text-sm text-red-600">Error</span>
                            </>
                          )}
                        </div>

                        {/* Editable Fields */}
                        {uploadedFile.status === "completed" && (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
                              <input
                                type="text"
                                value={uploadedFile.title || ""}
                                onChange={(e) => updateFileData(uploadedFile.id, { title: e.target.value })}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Image title"
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Category</label>
                              <select
                                value={uploadedFile.category || ""}
                                onChange={(e) => updateFileData(uploadedFile.id, { category: e.target.value })}
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                              >
                                <option value="">Select category</option>
                                {galleryCategories.map((category) => (
                                  <option key={category} value={category}>
                                    {category}
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Tags</label>
                              <input
                                type="text"
                                value={uploadedFile.tags?.join(", ") || ""}
                                onChange={(e) =>
                                  updateFileData(uploadedFile.id, {
                                    tags: e.target.value
                                      .split(",")
                                      .map((tag) => tag.trim())
                                      .filter(Boolean),
                                  })
                                }
                                className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="tag1, tag2, tag3"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
