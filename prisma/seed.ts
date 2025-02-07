import { PrismaClient } from "@prisma/client";

import { convertToSlug } from "@/lib/string";
import { dataSeedJobs } from "@/modules/job/data";

const prisma = new PrismaClient();

async function main() {
  for (const dataSeedJob of dataSeedJobs) {
    const jobUpsertData = {
      ...dataSeedJob,
      slug: convertToSlug(dataSeedJob.title),
    };

    const upsertedJob = await prisma.job.upsert({
      where: { slug: jobUpsertData.slug },
      update: jobUpsertData,
      create: jobUpsertData,
    });

    console.log(`💼 Job: ${upsertedJob.title} (${upsertedJob.slug})`);
  }
}

main()
  .then(() => {
    console.log("✅ Seeding complete");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
  });
