/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "contents.kyobobook.co.kr",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
