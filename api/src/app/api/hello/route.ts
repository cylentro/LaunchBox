import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  return NextResponse.json({ message: "Hello from Nait's Brain!" })
}