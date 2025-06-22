"use client"

// React Hook: Guesty Integration

import { useState, useEffect } from "react"
import type { GuestyCalendar } from "@/lib/guesty/types"

export function useAvailability(roomType: string, startDate: string, endDate: string) {
  const [availability, setAvailability] = useState<GuestyCalendar[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!roomType || !startDate || !endDate) return

    const fetchAvailability = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/guesty/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "sync-availability",
            roomType,
            startDate,
            endDate,
          }),
        })

        if (!response.ok) throw new Error("Failed to fetch availability")

        const { data } = await response.json()
        setAvailability(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchAvailability()
  }, [roomType, startDate, endDate])

  return { availability, loading, error }
}

export function usePricing(roomType: string, checkIn: string, checkOut: string) {
  const [pricing, setPricing] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!roomType || !checkIn || !checkOut) return

    const fetchPricing = async () => {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch("/api/guesty/sync", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "sync-pricing",
            roomType,
            startDate: checkIn,
            endDate: checkOut,
          }),
        })

        if (!response.ok) throw new Error("Failed to fetch pricing")

        const { data } = await response.json()
        setPricing(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchPricing()
  }, [roomType, checkIn, checkOut])

  return { pricing, loading, error }
}

export function useBookingCreation() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createBooking = async (bookingData: any) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/guesty/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Booking failed")
      }

      const result = await response.json()
      return result
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error"
      setError(errorMessage)
      throw err
    } finally {
      setLoading(false)
    }
  }

  return { createBooking, loading, error }
}
