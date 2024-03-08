/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_MONGODB_URI: "mongodb://localhost:27017",
    NEXT_PUBLIC_DOMAIN: "http://localhost:3000",
    NEXT_JWT_KEY: "0bWlDUqN44FnwBnZMi2mMH+7HSbljIhKZNDC6uPyvNI=",
  },
};

export default nextConfig;
