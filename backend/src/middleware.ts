// backend/src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

// Define the single, specific origin for your production frontend
const vercelURL = process.env.VERCEL_URL ?? ""; 
const hostname = process.env.HOSTNAME ?? ""; // Expects "HostName.me" or similar hostname from .env

function getOrigin(request: NextRequest): string {
  const requestOrigin = request.headers.get('origin') ?? '';

  // In development, dynamically allow any localhost port
  if (process.env.NODE_ENV !== 'production') {
    if (requestOrigin.startsWith('http://localhost:')) {
      return requestOrigin;
    }
  }
  
  if (vercelURL && requestOrigin === vercelURL) {
    return vercelURL;
  }

  if (hostname) {
    const hostNameOrigin = `https://${hostname}`;
    const wwwHostNameOrigin = `https://www.${hostname}`; 
    if (requestOrigin === hostNameOrigin || requestOrigin === wwwHostNameOrigin) {
      return requestOrigin;
    }
  }

  return vercelURL; 
}

export function middleware(request: NextRequest) {
  const origin = getOrigin(request);

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

export const config = {
  matcher: '/api/:path*',
};