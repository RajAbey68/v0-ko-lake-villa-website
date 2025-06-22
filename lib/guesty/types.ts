// Guesty API Types for Ko Lake Villa

export interface GuestyProperty {
  _id: string
  title: string
  nickname: string
  propertyType: string
  roomType: string
  accommodates: number
  bedrooms: number
  bathrooms: number
  timezone: string
  address: {
    full: string
    city: string
    country: string
    coordinates: [number, number]
  }
}

export interface GuestyReservation {
  _id: string
  listingId: string
  guestId: string
  checkIn: string
  checkOut: string
  status: "confirmed" | "pending" | "cancelled" | "inquiry"
  source: string
  guest: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  money: {
    totalPrice: number
    currency: string
    hostPayout: number
  }
  guestsCount: number
  specialRequests?: string
}

export interface GuestyCalendar {
  listingId: string
  date: string
  status: "available" | "booked" | "blocked"
  price: number
  currency: string
  minimumNights: number
}

export interface GuestyRate {
  listingId: string
  date: string
  basePrice: number
  currency: string
  discounts: {
    weekly?: number
    monthly?: number
    earlyBird?: number
    lastMinute?: number
  }
}

export interface KoLakeVillaBooking {
  id: string
  roomType: "KNP" | "KNP1" | "KNP3" | "KNP6"
  guestName: string
  guestEmail: string
  guestPhone: string
  checkIn: string
  checkOut: string
  guestCount: number
  specialRequests?: string
  totalPrice: number
  directBookingDiscount: number
  guestyReservationId?: string
  status: "pending" | "confirmed" | "cancelled"
  createdAt: string
}
