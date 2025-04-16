import { PrismaClient } from "@prisma/client";

import { convertToSlug } from "@/lib/string";
import { dataSeedJobStatuses, dataSeedJobs } from "@/modules/job/data";
import { dataSeedOrganizations } from "@/modules/organization/data";

const prisma = new PrismaClient();

async function main() {
  // await prisma.job.deleteMany(); // ❌ Uncomment to delete all

  for (const dataSeedJobStatus of dataSeedJobStatuses) {
    const jobStatusData = {
      ...dataSeedJobStatus,
      slug: convertToSlug(dataSeedJobStatus.name),
    };

    const upsertedJobStatus = await prisma.jobStatus.upsert({
      where: { slug: jobStatusData.slug },
      update: jobStatusData,
      create: jobStatusData,
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
    const { organizationSlug, ...dataJobRest } = dataSeedJob;

    const jobData = {
      ...dataJobRest,
      slug: convertToSlug(dataSeedJob.title),
      status: { connect: { slug: "published" } },
      organization: { connect: { slug: organizationSlug } },
    };

    const job = await prisma.job.upsert({
      where: { slug: jobData.slug },
      update: jobData,
      create: jobData,
      include: {
        status: true,
        organization: true,
      },
    });

    console.log(
      `💼 Job: ${job.title} (${job.slug}) at ${job.organization.name} is ${job.status.name}`
    );
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
