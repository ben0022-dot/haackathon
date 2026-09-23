/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactCompiler: true,
  transpilePackages: [
    "firebase-admin",
    "jwks-rsa",
    "jose",
    "google-auth-library",
  ],
};

export default nextConfig;

