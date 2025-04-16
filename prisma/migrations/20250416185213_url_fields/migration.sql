-- AlterTable
ALTER TABLE "Job" ADD COLUMN     "originalUrl" TEXT;

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "logoUrl" TEXT,
ADD COLUMN     "websiteUrl" TEXT;
