-- CreateTable
CREATE TABLE "Job" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "level" TEXT,
    "location" TEXT,
    "types" TEXT[],
    "salaryCurrency" TEXT,
    "salaryMin" MONEY,
    "salaryMax" MONEY,
    "salaryPeriod" TEXT,
    "experienceMin" INTEGER,
    "experienceMax" INTEGER,
    "workplaceTypes" TEXT[],
    "description" TEXT NOT NULL DEFAULT 'No detailed description.',
    "benefits" TEXT NOT NULL DEFAULT 'No detailed benefits.',
    "skills" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_slug_key" ON "Job"("slug");
