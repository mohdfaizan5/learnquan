// purpose of this file is to create a Prisma Client instance also check if already exists and export it for use in the rest of the application
import { PrismaClient } from "@prisma/client";

// create a new Prisma Client instance
const client = new PrismaClient({
  log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
});

// check if the global object already has a Prisma Client instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const prisma = globalForPrisma.prisma ?? client;

// if we're in development, set the global object to the Prisma Client instance
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };
