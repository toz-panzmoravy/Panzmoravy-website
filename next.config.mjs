/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Statický export pro FTP hosting
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Nutné pro statický export
  },
  trailingSlash: true, // Přidá trailing slash pro lepší kompatibilitu s FTP hostingy
}

export default nextConfig
