export type Job = {
  jobTitle: string;
  jobLevel: string;
  jobLocation: string;
  jobTypes: string[];
  salaryCurrency: string;
  salaryMin: number;
  salaryMax: number;
  salaryPeriod: string;
  workplaceTypes: string[];
  description: string;
};

export const seedDataJobs: Job[] = [
  {
    jobTitle: "Software Engineer",
    jobLevel: "Mid-level",
    jobLocation: "New York, NY",
    jobTypes: ["Full-time", "Contract"],
    salaryCurrency: "USD",
    salaryMin: 80000,
    salaryMax: 110000,
    salaryPeriod: "year",
    workplaceTypes: ["Hybrid", "Remote"],
    description:
      "Design, develop, and maintain scalable software solutions in a collaborative environment.",
  },
  {
    jobTitle: "Data Scientist",
    jobLevel: "Senior",
    jobLocation: "San Francisco, CA",
    jobTypes: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 120000,
    salaryMax: 150000,
    salaryPeriod: "year",
    workplaceTypes: ["On-site"],
    description:
      "Analyze large datasets to identify trends and provide actionable insights to drive business decisions.",
  },
  {
    jobTitle: "UI/UX Designer",
    jobLevel: "Entry-level",
    jobLocation: "Remote",
    jobTypes: ["Part-time"],
    salaryCurrency: "USD",
    salaryMin: 40000,
    salaryMax: 60000,
    salaryPeriod: "year",
    workplaceTypes: ["Remote"],
    description:
      "Design user-friendly interfaces and create seamless experiences across web and mobile platforms.",
  },
  {
    jobTitle: "Product Manager",
    jobLevel: "Senior",
    jobLocation: "Los Angeles, CA",
    jobTypes: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 100000,
    salaryMax: 130000,
    salaryPeriod: "year",
    workplaceTypes: ["Hybrid"],
    description:
      "Manage product development from ideation to launch, ensuring alignment with business goals and customer needs.",
  },
  {
    jobTitle: "Marketing Specialist",
    jobLevel: "Mid-level",
    jobLocation: "Chicago, IL",
    jobTypes: ["Full-time"],
    salaryCurrency: "USD",
    salaryMin: 55000,
    salaryMax: 75000,
    salaryPeriod: "year",
    workplaceTypes: ["On-site", "Hybrid"],
    description:
      "Develop and execute marketing strategies to drive brand awareness, engagement, and revenue growth.",
  },
];
