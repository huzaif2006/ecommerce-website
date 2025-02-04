/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['next-ecommerce-template-4.vercel.app', "plus.unsplash.com", "cdn.sanity.io", 'images.unsplash.com'], // Add the required domain here
  },
};

module.exports = nextConfig;
