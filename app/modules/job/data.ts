export type SeedJob = {
  organizationSlug: string;
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

export type SeedJobStatus = {
  slug: string;
  name: string;
};

export const dataSeedJobStatuses: SeedJobStatus[] = [
  { slug: "draft", name: "Draft" },
  { slug: "published", name: "Published" },
  { slug: "archived", name: "Archived" },
];

export const dataSeedJobTypes = [
  { value: "full-time", label: "Full-time" },
  { value: "part-time", label: "Part-time" },
  { value: "contract", label: "Contract" },
  { value: "freelance", label: "Freelance" },
  { value: "internship", label: "Internship" },
];

export const dataSeedWorkplaceTypes = [
  { value: "remote", label: "Remote" },
  { value: "onsite", label: "On-site" },
  { value: "hybrid", label: "Hybrid" },
];

export const dataSeedJobs: SeedJob[] = [
  {
    organizationSlug: "google",
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
    organizationSlug: "facebook",
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
    organizationSlug: "youtube",
    title: "UI/UX Designer",
    level: "Mid-Level",
    location: "Remote",
    types: ["Part-time"],
    salaryCurrency: "USD",
    salaryMin: 60_000,
    salaryMax: 80_000,
    salaryPeriod: "year",
    workplaceTypes: ["Remote"],
    description:
      "Design user-friendly interfaces and create seamless experiences across web and mobile platforms.",
    experienceMin: 2,
    experienceMax: 4,
  },
  {
    organizationSlug: "x",
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
    organizationSlug: "shopify",
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
  {
    organizationSlug: "bearmentor",
    title: "Web Development Mentor",
    level: "Senior",
    location: "Indonesia",
    types: ["Part-time", "Freelance"],
    salaryCurrency: "IDR",
    salaryMin: 3000000,
    salaryMax: 5000000,
    salaryPeriod: "month",
    workplaceTypes: ["Remote"],
    description:
      "Guide and support students in their web development journey, providing feedback and resources.",
    experienceMin: 3,
    experienceMax: 15,
  },
  {
    organizationSlug: "catamyst",
    title: "Full Stack Web Developer",
    level: "Mid-Level",
    location: "Indonesia",
    types: ["Part-time", "Contract"],
    salaryCurrency: "IDR",
    salaryMin: 6000000,
    salaryMax: 10000000,
    salaryPeriod: "month",
    workplaceTypes: ["Hybrid", "Remote"],
    description:
      "Develop and maintain web applications using modern technologies and frameworks.",
    experienceMin: 2,
    experienceMax: 10,
  },
];
