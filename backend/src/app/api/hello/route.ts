import { NextResponse } from 'next/server'

export async function GET() {

  const productionOrigin = process.env.FRONTEND_URL ?? "";
  return NextResponse.json({ message: "url: " + productionOrigin })
}