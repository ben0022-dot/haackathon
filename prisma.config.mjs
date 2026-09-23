import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";
import dns from "dns";
import net from "net";

dns.setDefaultResultOrder("ipv4first");
net.setDefaultAutoSelectFamily(false);

dotenv.config({ path: [".env.local", ".env"] });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node prisma/seed.js",
  },
  datasource: {
    url: env("DATABASE_URL_UNPOOLED") ?? env("DATABASE_URL"),
  },
});