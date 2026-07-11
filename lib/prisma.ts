import { PrismaClient } from "../prisma/generated";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const connectionString =
  process.env.DATABASE_URL ||
  process.env.SUPABASE_DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.DIRECT_URL;

const adapter = connectionString ? new PrismaPg({ connectionString }) : undefined;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(adapter ? { adapter } : undefined);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}