export type SeedJob = {
  slug?: string;
  title: string;
  description: string;
  level: string;
  location: string;
  types: string[];
  salaryCurrency: string;
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: string;
  workplaceTypes: string[];
};

export const dataSeedJobs: SeedJob[] = [
  {
    title: "Software Engineer",
    level: "Mid-level",
    location: "New York, NY",
    types: ["Full-time", "Contract"],
    salaryCurrency: "USD",
    salaryMin: 80000,
    salaryMax: 110000,
    salaryPeriod: "year",
    workplaceTypes: ["Hybrid", "Remote"],
    description:
      "Design, develop, and maintain scalable software solutions in a collaborative environment.",
  },
  {
    title: "Data Scientist",
    level: "Senior",
    location: "San Francisco, CA",
    types: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 120000,
    salaryMax: 150000,
    salaryPeriod: "year",
    workplaceTypes: ["On-site"],
    description:
      "Analyze large datasets to identify trends and provide actionable insights to drive business decisions.",
  },
  {
    title: "UI/UX Designer",
    level: "Mid-Level",
    location: "Remote",
    types: ["Part-time"],
    salaryCurrency: "IDR",
    salaryMin: 5_000_000,
    salaryMax: 8_000_000,
    salaryPeriod: "month",
    workplaceTypes: ["Remote"],
    description:
      "Design user-friendly interfaces and create seamless experiences across web and mobile platforms.",
  },
  {
    title: "Product Manager",
    level: "Senior",
    location: "Los Angeles, CA",
    types: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 100000,
    salaryMax: 130000,
    salaryPeriod: "year",
    workplaceTypes: ["Hybrid"],
    description:
      "Manage product development from ideation to launch, ensuring alignment with business goals and customer needs.",
  },
  {
    title: "Marketing Specialist",
    level: "Mid-level",
    location: "Chicago, IL",
    types: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 55000,
    salaryMax: 75000,
    salaryPeriod: "year",
    workplaceTypes: ["On-site", "Hybrid"],
    description:
      "Develop and execute marketing strategies to drive brand awareness, engagement, and revenue growth.",
  },
];
