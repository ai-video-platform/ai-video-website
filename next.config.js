/** @type {import('next').NextConfig} */
const nextConfig = {
  // VidArt's legal pages live in their own Vercel project (vidart-legal, source
  // in the Vidart repo's legal-site/). This site only forwards /vidart to it,
  // so VidArt edits never touch these pages.
  async rewrites() {
    return [
      { source: '/vidart', destination: 'https://vidart-legal.vercel.app/vidart' },
      { source: '/vidart/:path*', destination: 'https://vidart-legal.vercel.app/vidart/:path*' },
      // Ring Sizer's pages: their own Vercel project (ringsizer-legal, source
      // in the Ring Sizer repo's legal-site/), forwarded the same way.
      { source: '/ringsizer', destination: 'https://ringsizer-legal.vercel.app/ringsizer' },
      { source: '/ringsizer/:path*', destination: 'https://ringsizer-legal.vercel.app/ringsizer/:path*' },
    ]
  },
}

module.exports = nextConfig
