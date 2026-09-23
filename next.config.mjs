/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactCompiler: true,
  serverExternalPackages: [
    "firebase-admin",
    "jwks-rsa",
    "jose",
    "google-auth-library",
  ],
};

export default nextConfig;

