/*
  Warnings:

  - Made the column `salaryCurrency` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `salaryMin` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `salaryMax` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `salaryPeriod` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `experienceMin` on table `Job` required. This step will fail if there are existing NULL values in that column.
  - Made the column `experienceMax` on table `Job` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "salaryCurrency" SET NOT NULL,
ALTER COLUMN "salaryMin" SET NOT NULL,
ALTER COLUMN "salaryMax" SET NOT NULL,
ALTER COLUMN "salaryPeriod" SET NOT NULL,
ALTER COLUMN "experienceMin" SET NOT NULL,
ALTER COLUMN "experienceMax" SET NOT NULL;
