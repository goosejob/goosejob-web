/*
  Warnings:

  - Added the required column `location` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "workplaceTypes" TEXT[];
