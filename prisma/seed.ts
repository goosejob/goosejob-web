import { PrismaClient } from "@prisma/client";

import { convertToSlug } from "@/lib/string";
import { dataJobStatusOptions, dataSeedJobs } from "@/modules/job/data";
import { dataSeedOrganizations } from "@/modules/organization/data";

const prisma = new PrismaClient();

async function main() {
  // await prisma.job.deleteMany(); // ❌ Uncomment to delete all

  for (const dataJobStatus of dataJobStatusOptions) {
    const jobStatusUpsertData = {
      ...dataJobStatus,
      slug: convertToSlug(dataJobStatus.name),
    };

    const upsertedJobStatus = await prisma.jobStatus.upsert({
      where: { slug: jobStatusUpsertData.slug },
      update: jobStatusUpsertData,
      create: jobStatusUpsertData,
    });

    console.log(
      `🗂️ Job Status: ${upsertedJobStatus.name} (${upsertedJobStatus.slug})`
    );
  }

  for (const dataSeedOrganization of dataSeedOrganizations) {
    const upsertedOrganization = await prisma.organization.upsert({
      where: { slug: dataSeedOrganization.slug },
      update: dataSeedOrganization,
      create: dataSeedOrganization,
    });

    console.log(
      `🏢 Organization: ${upsertedOrganization.name} (${upsertedOrganization.slug})`
    );
  }

  for (const dataSeedJob of dataSeedJobs) {
    const jobUpsertData = {
      ...dataSeedJob,
      slug: convertToSlug(dataSeedJob.title),
      status: { connect: { slug: "published" } },
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
