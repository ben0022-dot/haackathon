import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import mockDb from "@/lib/mock-db";

const globalForPrisma = globalThis;

let prisma;

if (process.env.DATABASE_URL && process.env.DATABASE_URL.startsWith("postgres")) {
  if (!globalForPrisma.spacemakersPrismaClient) {
    try {
      const adapter = new PrismaPg({
        connectionString: process.env.DATABASE_URL,
      });
      globalForPrisma.spacemakersPrismaClient = new PrismaClient({
        adapter,
        log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
      });
    } catch (err) {
      console.warn("[SpaceMakers] Prisma DB error, using in-memory store:", err?.message);
      globalForPrisma.spacemakersPrismaClient = mockDb;
    }
  }
  prisma = globalForPrisma.spacemakersPrismaClient;
} else {
  prisma = mockDb;
}

export default prisma;
