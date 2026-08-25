import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({
    apiUrl: process.env.EWA_API_URL || 'http://localhost:3000',
    apiKey: process.env.EWA_API_KEY || '',
  })
}
