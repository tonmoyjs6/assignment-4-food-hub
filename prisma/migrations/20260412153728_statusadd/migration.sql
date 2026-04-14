-- CreateEnum
CREATE TYPE "status" AS ENUM ('PREPARING', 'READY', 'DELIVERED');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "orderStatus" "status" NOT NULL DEFAULT 'PREPARING';
