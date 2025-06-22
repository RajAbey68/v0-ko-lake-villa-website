// API Route: Create booking in Guesty

import { type NextRequest, NextResponse } from "next/server"
import { KoLakeVillaGuestyIntegration } from "@/lib/guesty/integration"
import type { KoLakeVillaBooking } from "@/lib/guesty/types"

const integration = new KoLakeVillaGuestyIntegration()

export async function POST(request: NextRequest) {
  try {
    const bookingData: KoLakeVillaBooking = await request.json()

    // 1. Check availability first
    const isAvailable = await integration.checkAvailability(
      bookingData.roomType,
      bookingData.checkIn,
      bookingData.checkOut,
    )

    if (!isAvailable) {
      return NextResponse.json(
        {
          error: "Selected dates are not available",
        },
        { status: 409 },
      )
    }

    // 2. Get current pricing
    const pricing = await integration.getCurrentPricing(bookingData.roomType, bookingData.checkIn, bookingData.checkOut)

    // 3. Create reservation in Guesty
    const guestyReservationId = await integration.createGuestyReservation({
      ...bookingData,
      totalPrice: pricing.directPrice,
      directBookingDiscount: pricing.savings,
    })

    // 4. Block calendar
    await integration.blockCalendar(
      bookingData.roomType,
      bookingData.checkIn,
      bookingData.checkOut,
      "Ko Lake Villa Direct Booking",
    )

    // 5. Save to local database
    // Implementation depends on your database choice

    return NextResponse.json({
      success: true,
      bookingId: bookingData.id,
      guestyReservationId,
      pricing,
      message: "Booking confirmed successfully",
    })
  } catch (error) {
    console.error("Booking creation error:", error)
    return NextResponse.json(
      {
        error: "Failed to create booking",
      },
      { status: 500 },
    )
  }
}
