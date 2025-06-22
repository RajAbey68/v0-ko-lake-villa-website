// Frontend Component: Real-time Availability Calendar

"use client"

import { useState } from "react"
import { useAvailability } from "@/hooks/useGuestyIntegration"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GuestyAvailabilityCalendarProps {
  roomType: string
  onDateSelect: (checkIn: string, checkOut: string) => void
}

export function GuestyAvailabilityCalendar({ roomType, onDateSelect }: GuestyAvailabilityCalendarProps) {
  const [selectedDates, setSelectedDates] = useState<{ from?: Date; to?: Date }>({})

  const startDate = new Date().toISOString().split("T")[0]
  const endDate = new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

  const { availability, loading, error } = useAvailability(roomType, startDate, endDate)

  const isDateAvailable = (date: Date) => {
    const dateString = date.toISOString().split("T")[0]
    const dayAvailability = availability.find((day) => day.date === dateString)
    return dayAvailability?.status === "available"
  }

  const handleDateSelect = (range: { from?: Date; to?: Date }) => {
    setSelectedDates(range)

    if (range.from && range.to) {
      onDateSelect(range.from.toISOString().split("T")[0], range.to.toISOString().split("T")[0])
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-red-600">Error loading availability: {error}</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Select Your Dates
          <Badge variant="outline">Live Availability</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="range"
          selected={selectedDates}
          onSelect={handleDateSelect}
          disabled={(date) => !isDateAvailable(date) || date < new Date()}
          className="rounded-md border"
        />

        <div className="mt-4 flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>Booked</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded"></div>
            <span>Blocked</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
