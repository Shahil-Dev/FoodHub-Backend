/*
  Warnings:

  - You are about to drop the column `dietaryPreferences` on the `meals` table. All the data in the column will be lost.
  - You are about to drop the `provider_profiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "meals" DROP CONSTRAINT "meals_providerId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_providerId_fkey";

-- DropForeignKey
ALTER TABLE "provider_profiles" DROP CONSTRAINT "provider_profiles_userId_fkey";

-- AlterTable
ALTER TABLE "meals" DROP COLUMN "dietaryPreferences";

-- DropTable
DROP TABLE "provider_profiles";

-- AddForeignKey
ALTER TABLE "meals" ADD CONSTRAINT "meals_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
