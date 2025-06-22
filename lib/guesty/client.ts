// Guesty API Client for Ko Lake Villa

export interface GuestyProperty {
  _id: string
  name: string
  // Add other property fields as needed
}

export interface GuestyCalendar {
  _id: string
  date: string
  available: boolean
  // Add other calendar fields as needed
}

export interface GuestyRate {
  _id: string
  date: string
  rate: number
  // Add other rate fields as needed
}

export interface GuestyReservation {
  _id: string
  listingId: string
  startDate: string
  endDate: string
  guestId: string
  // Add other reservation fields as needed
}

export class GuestyClient {
  private baseUrl = "https://open-api.guesty.com/v1"
  private apiKey: string

  constructor(apiKey: string) {
    this.apiKey = apiKey
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
        ...options.headers,
      },
    })

    if (!response.ok) {
      throw new Error(`Guesty API error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  // Property Management
  async getProperties(): Promise<GuestyProperty[]> {
    const response = await this.request<{ results: GuestyProperty[] }>("/listings")
    return response.results
  }

  async getProperty(listingId: string): Promise<GuestyProperty> {
    return this.request<GuestyProperty>(`/listings/${listingId}`)
  }

  // Calendar & Availability
  async getCalendar(listingId: string, startDate: string, endDate: string): Promise<GuestyCalendar[]> {
    const params = new URLSearchParams({
      listingId,
      startDate,
      endDate,
    })

    const response = await this.request<{ results: GuestyCalendar[] }>(`/calendar?${params}`)
    return response.results
  }

  async updateCalendar(listingId: string, updates: Partial<GuestyCalendar>[]): Promise<void> {
    await this.request(`/calendar`, {
      method: "PUT",
      body: JSON.stringify({
        listingId,
        updates,
      }),
    })
  }

  // Pricing Management
  async getRates(listingId: string, startDate: string, endDate: string): Promise<GuestyRate[]> {
    const params = new URLSearchParams({
      listingId,
      startDate,
      endDate,
    })

    const response = await this.request<{ results: GuestyRate[] }>(`/rates?${params}`)
    return response.results
  }

  async updateRates(listingId: string, rates: Partial<GuestyRate>[]): Promise<void> {
    await this.request(`/rates`, {
      method: "PUT",
      body: JSON.stringify({
        listingId,
        rates,
      }),
    })
  }

  // Reservation Management
  async getReservations(
    params: {
      listingId?: string
      startDate?: string
      endDate?: string
      status?: string
    } = {},
  ): Promise<GuestyReservation[]> {
    const searchParams = new URLSearchParams(params as Record<string, string>)
    const response = await this.request<{ results: GuestyReservation[] }>(`/reservations?${searchParams}`)
    return response.results
  }

  async createReservation(reservation: Omit<GuestyReservation, "_id">): Promise<GuestyReservation> {
    return this.request<GuestyReservation>("/reservations", {
      method: "POST",
      body: JSON.stringify(reservation),
    })
  }

  async updateReservation(reservationId: string, updates: Partial<GuestyReservation>): Promise<GuestyReservation> {
    return this.request<GuestyReservation>(`/reservations/${reservationId}`, {
      method: "PUT",
      body: JSON.stringify(updates),
    })
  }

  async cancelReservation(reservationId: string, reason?: string): Promise<void> {
    await this.request(`/reservations/${reservationId}/cancel`, {
      method: "POST",
      body: JSON.stringify({ reason }),
    })
  }

  // Guest Management
  async getGuest(guestId: string): Promise<any> {
    return this.request(`/guests/${guestId}`)
  }

  async createGuest(guestData: {
    firstName: string
    lastName: string
    email: string
    phone?: string
  }): Promise<any> {
    return this.request("/guests", {
      method: "POST",
      body: JSON.stringify(guestData),
    })
  }
}
