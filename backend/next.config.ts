import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    // Determine the allowed origin based on the environment
    // NODE_ENV is 'production' when deployed to Vercel, and 'development' locally via `next dev`
    const allowedOrigin = process.env.NODE_ENV === 'production'
      ? 'https://launch-box-frontend.vercel.app' // Your production frontend URL
      : 'http://localhost:5173'; // Your local VitePress dev server URL (default Vite port)

    return [
      {
        // Apply these headers to all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: allowedOrigin }, // Dynamically set origin
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};

export default nextConfig;
