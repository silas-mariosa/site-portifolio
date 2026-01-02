import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Necessário para Docker
  images: {
    domains: ["icon-icons.com"], // Permite imagens do domínio 'icon-icons.com'
  },
};

export default nextConfig;
