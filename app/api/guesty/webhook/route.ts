// API Route: Handle Guesty webhooks

import { type NextRequest, NextResponse } from "next/server"
import { KoLakeVillaGuestyIntegration } from "@/lib/guesty/integration"

const integration = new KoLakeVillaGuestyIntegration()

export async function POST(request: NextRequest) {
  try {
    const webhookData = await request.json()

    // Verify webhook signature (implement based on Guesty's webhook security)
    const signature = request.headers.get("x-guesty-signature")
    if (!verifyWebhookSignature(webhookData, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    await integration.handleGuestyWebhook(webhookData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Webhook processing error:", error)
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 })
  }
}

function verifyWebhookSignature(data: any, signature: string | null): boolean {
  // Implement Guesty's webhook signature verification
  // This is a placeholder - check Guesty's documentation for actual implementation
  return true
}
