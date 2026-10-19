/** @type {import('next').NextConfig} */
const nextConfig = {
  // VidArt's legal pages live in their own Vercel project (vidart-legal, source
  // in the Vidart repo's legal-site/). This site only forwards /vidart to it,
  // so VidArt edits never touch these pages.
  async rewrites() {
    return [
      { source: '/vidart', destination: 'https://vidart-legal.vercel.app/vidart' },
      { source: '/vidart/:path*', destination: 'https://vidart-legal.vercel.app/vidart/:path*' },
    ]
  },
}

module.exports = nextConfig
