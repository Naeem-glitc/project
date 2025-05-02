/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Add these to ensure proper static generation
    output: 'standalone', // Or 'export' if you want fully static
    trailingSlash: true, // Helps with some routing cases
  }
  
  export default nextConfig