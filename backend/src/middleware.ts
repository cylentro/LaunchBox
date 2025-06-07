// backend/src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// Define the single, specific origin for your production frontend
const productionOrigin = process.env.FRONTEND_URL ?? "";

function getOrigin(request: NextRequest): string {
  const requestOrigin = request.headers.get('origin') ?? '';

  // In development, dynamically allow any localhost port
  if (process.env.NODE_ENV !== 'production') {
    if (requestOrigin.startsWith('http://localhost:')) {
      return requestOrigin;
    }
  }

  // In production, only allow the specific frontend origin
  if (requestOrigin === productionOrigin) {
    return productionOrigin;
  }

  // If the origin is not allowed, we can return an empty string or a default
  // Returning the production origin is a safe default.
  return productionOrigin;
}

export function middleware(request: NextRequest) {
  const origin = getOrigin(request);

  // For preflight (OPTIONS) requests, respond with CORS headers
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
      },
    });
  }

  // For all other requests, add CORS headers to the response
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Allow-Credentials', 'true');

  return response;
}

// Apply this middleware to all API routes
export const config = {
  matcher: '/api/:path*',
};