// API Route: Sync data from Guesty

import { type NextRequest, NextResponse } from "next/server"
import { KoLakeVillaGuestyIntegration } from "@/lib/guesty/integration"

const integration = new KoLakeVillaGuestyIntegration()

export async function POST(request: NextRequest) {
  try {
    const { action, roomType, startDate, endDate } = await request.json()

    switch (action) {
      case "sync-availability":
        const availability = await integration.syncAvailability(roomType, startDate, endDate)
        return NextResponse.json({ success: true, data: availability })

      case "sync-pricing":
        const pricing = await integration.syncPricing(roomType, startDate, endDate)
        return NextResponse.json({ success: true, data: pricing })

      case "sync-reservations":
        const reservations = await integration.syncReservations(startDate, endDate)
        return NextResponse.json({ success: true, data: reservations })

      case "check-availability":
        const { checkIn, checkOut } = await request.json()
        const isAvailable = await integration.checkAvailability(roomType, checkIn, checkOut)
        return NextResponse.json({ success: true, available: isAvailable })

      default:
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
  } catch (error) {
    console.error("Guesty sync error:", error)
    return NextResponse.json({ error: "Sync failed" }, { status: 500 })
  }
}
