// Ko Lake Villa <-> Guesty Integration Service

import { GuestyClient } from "./client"
import type { KoLakeVillaBooking, GuestyReservation, GuestyCalendar } from "./types"

export class KoLakeVillaGuestyIntegration {
  private guesty: GuestyClient
  private propertyMappings: Record<string, string> = {
    KNP: process.env.GUESTY_ENTIRE_VILLA_ID!,
    KNP1: process.env.GUESTY_MASTER_SUITE_ID!,
    KNP3: process.env.GUESTY_TWIN_ROOM_ID!,
    KNP6: process.env.GUESTY_GROUP_ROOM_ID!,
  }

  constructor() {
    this.guesty = new GuestyClient(process.env.GUESTY_API_KEY!)
  }

  // Sync availability from Guesty to Ko Lake Villa
  async syncAvailability(roomType: string, startDate: string, endDate: string): Promise<GuestyCalendar[]> {
    const listingId = this.propertyMappings[roomType]
    if (!listingId) {
      throw new Error(`No Guesty listing ID found for room type: ${roomType}`)
    }

    return this.guesty.getCalendar(listingId, startDate, endDate)
  }

  // Sync pricing from Guesty to Ko Lake Villa
  async syncPricing(roomType: string, startDate: string, endDate: string) {
    const listingId = this.propertyMappings[roomType]
    const rates = await this.guesty.getRates(listingId, startDate, endDate)

    // Apply Ko Lake Villa direct booking discount
    return rates.map((rate) => ({
      ...rate,
      directPrice: this.calculateDirectPrice(rate.basePrice),
      savings: this.calculateSavings(rate.basePrice),
      discount: this.getDiscountPercentage(startDate, rate.date),
    }))
  }

  // Create reservation in Guesty from Ko Lake Villa booking
  async createGuestyReservation(booking: KoLakeVillaBooking): Promise<string> {
    const listingId = this.propertyMappings[booking.roomType]

    // Create guest in Guesty if needed
    const guest = await this.guesty.createGuest({
      firstName: booking.guestName.split(" ")[0],
      lastName: booking.guestName.split(" ").slice(1).join(" "),
      email: booking.guestEmail,
      phone: booking.guestPhone,
    })

    // Create reservation
    const reservation = await this.guesty.createReservation({
      listingId,
      guestId: guest._id,
      checkIn: booking.checkIn,
      checkOut: booking.checkOut,
      status: "confirmed",
      source: "Ko Lake Villa Direct",
      guest: {
        firstName: guest.firstName,
        lastName: guest.lastName,
        email: guest.email,
        phone: guest.phone,
      },
      money: {
        totalPrice: booking.totalPrice,
        currency: "USD",
        hostPayout: booking.totalPrice * 0.97, // 3% processing fee
      },
      guestsCount: booking.guestCount,
      specialRequests: booking.specialRequests,
    })

    return reservation._id
  }

  // Block calendar in Guesty for direct bookings
  async blockCalendar(roomType: string, checkIn: string, checkOut: string, reason = "Direct Booking"): Promise<void> {
    const listingId = this.propertyMappings[roomType]
    const dates = this.getDateRange(checkIn, checkOut)

    const updates = dates.map((date) => ({
      date,
      status: "booked" as const,
      notes: reason,
    }))

    await this.guesty.updateCalendar(listingId, updates)
  }

  // Sync all reservations from Guesty
  async syncReservations(startDate: string, endDate: string): Promise<GuestyReservation[]> {
    const allReservations: GuestyReservation[] = []

    for (const [roomType, listingId] of Object.entries(this.propertyMappings)) {
      const reservations = await this.guesty.getReservations({
        listingId,
        startDate,
        endDate,
      })
      allReservations.push(...reservations)
    }

    return allReservations
  }

  // Check availability for specific dates
  async checkAvailability(roomType: string, checkIn: string, checkOut: string): Promise<boolean> {
    const calendar = await this.syncAvailability(roomType, checkIn, checkOut)
    return calendar.every((day) => day.status === "available")
  }

  // Get current pricing for room type
  async getCurrentPricing(roomType: string, checkIn: string, checkOut: string) {
    const pricing = await this.syncPricing(roomType, checkIn, checkOut)
    const totalNights = this.calculateNights(checkIn, checkOut)

    const baseTotal = pricing.reduce((sum, rate) => sum + rate.basePrice, 0)
    const directTotal = pricing.reduce((sum, rate) => sum + rate.directPrice, 0)

    return {
      basePrice: baseTotal,
      directPrice: directTotal,
      savings: baseTotal - directTotal,
      pricePerNight: directTotal / totalNights,
      nights: totalNights,
      breakdown: pricing,
    }
  }

  // Webhook handler for Guesty updates
  async handleGuestyWebhook(webhookData: any): Promise<void> {
    const { event, data } = webhookData

    switch (event) {
      case "reservation.created":
      case "reservation.updated":
        await this.handleReservationUpdate(data)
        break
      case "calendar.updated":
        await this.handleCalendarUpdate(data)
        break
      case "rates.updated":
        await this.handleRatesUpdate(data)
        break
      default:
        console.log(`Unhandled Guesty webhook event: ${event}`)
    }
  }

  // Private helper methods
  private calculateDirectPrice(basePrice: number): number {
    // Ko Lake Villa 10% direct booking discount
    return Math.round(basePrice * 0.9)
  }

  private calculateSavings(basePrice: number): number {
    return basePrice - this.calculateDirectPrice(basePrice)
  }

  private getDiscountPercentage(bookingDate: string, stayDate: string): number {
    const booking = new Date(bookingDate)
    const stay = new Date(stayDate)
    const daysInAdvance = Math.ceil((stay.getTime() - booking.getTime()) / (1000 * 60 * 60 * 24))

    // 15% for bookings 3 days or less in advance
    return daysInAdvance <= 3 ? 15 : 10
  }

  private getDateRange(startDate: string, endDate: string): string[] {
    const dates: string[] = []
    const current = new Date(startDate)
    const end = new Date(endDate)

    while (current < end) {
      dates.push(current.toISOString().split("T")[0])
      current.setDate(current.getDate() + 1)
    }

    return dates
  }

  private calculateNights(checkIn: string, checkOut: string): number {
    const start = new Date(checkIn)
    const end = new Date(checkOut)
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  }

  private async handleReservationUpdate(reservationData: GuestyReservation): Promise<void> {
    // Update local database with Guesty reservation changes
    console.log("Handling reservation update:", reservationData._id)
    // Implementation depends on your database structure
  }

  private async handleCalendarUpdate(calendarData: any): Promise<void> {
    // Update local availability cache
    console.log("Handling calendar update:", calendarData)
  }

  private async handleRatesUpdate(ratesData: any): Promise<void> {
    // Update local pricing cache
    console.log("Handling rates update:", ratesData)
  }
}
