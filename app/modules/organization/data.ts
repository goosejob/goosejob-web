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
  experienceMin?: number;
  experienceMax?: number;
  workplaceTypes: string[];
};

export const defaultJobTypeOptions = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
];

export const defaultWorkplaceTypeOptions = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
];

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
    experienceMin: 3,
    experienceMax: 5,
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
    experienceMin: 5,
    experienceMax: 7,
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
    experienceMin: 2,
    experienceMax: 4,
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
    experienceMin: 5,
    experienceMax: 7,
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
    experienceMin: 2,
    experienceMax: 4,
  },
];
