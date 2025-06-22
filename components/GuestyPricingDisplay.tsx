// Frontend Component: Dynamic Pricing from Guesty

"use client"

import { usePricing } from "@/hooks/useGuestyIntegration"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface GuestyPricingDisplayProps {
  roomType: string
  checkIn: string
  checkOut: string
}

export function GuestyPricingDisplay({ roomType, checkIn, checkOut }: GuestyPricingDisplayProps) {
  const { pricing, loading, error } = usePricing(roomType, checkIn, checkOut)

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-24 mb-2" />
          <Skeleton className="h-4 w-40" />
        </CardContent>
      </Card>
    )
  }

  if (error || !pricing) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-gray-500">Select dates to see pricing</div>
        </CardContent>
      </Card>
    )
  }

  const discountPercentage = Math.round((pricing.savings / pricing.basePrice) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Pricing Summary
          <Badge className="bg-green-600">Save {discountPercentage}%</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 line-through">Airbnb Rate:</span>
            <span className="text-gray-600 line-through">${pricing.basePrice}</span>
          </div>

          <div className="flex justify-between items-center text-lg font-semibold">
            <span>Direct Rate:</span>
            <span className="text-blue-600">${pricing.directPrice}</span>
          </div>

          <div className="flex justify-between items-center text-green-600 font-medium">
            <span>You Save:</span>
            <span>${pricing.savings}</span>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>{pricing.nights} nights</span>
              <span>${pricing.pricePerNight}/night average</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
