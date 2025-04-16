export type SeedOrganization = {
  slug: string;
  name: string;
  description: string;
  location: string;
  workplaceTypes: string[];
};

export const dataWorkplaceTypeOptions = [
  { slug: "remote", name: "Remote" },
  { slug: "onsite", name: "On-site" },
  { slug: "hybrid", name: "Hybrid" },
];

export const dataSeedOrganizations: SeedOrganization[] = [
  {
    slug: "google",
    name: "Google",
    description:
      "A multinational technology company specializing in Internet-related services and products.",
    location: "Mountain View, CA",
    workplaceTypes: ["Hybrid", "Remote"],
  },
  {
    slug: "facebook",
    name: "Facebook",
    description:
      "A social media and technology company that operates several businesses and is listed on the NASDAQ stock exchange.",
    location: "Menlo Park, CA",
    workplaceTypes: ["On-site", "Hybrid"],
  },
  {
    slug: "youtube",
    name: "YouTube",
    description:
      "A video-sharing platform where users can upload, share, and view videos.",
    location: "San Bruno, CA",
    workplaceTypes: ["Hybrid", "Remote"],
  },
  {
    slug: "x",
    name: "X",
    description:
      "A research and development company that focuses on making the world a better place through technology.",
    location: "Mountain View, CA",
    workplaceTypes: ["On-site"],
  },
  {
    slug: "shopify",
    name: "Shopify",
    description:
      "A Canadian multinational e-commerce company that provides businesses with an online platform to design, set up, and manage their stores.",
    location: "Ottawa, ON",
    workplaceTypes: ["Hybrid", "Remote"],
  },
  {
    slug: "bearmentor",
    name: "Bearmentor",
    description:
      "Mentoring platform that connects students with industry professionals for guidance and support.",
    location: "Indonesia",
    workplaceTypes: ["On-site", "Remote"],
  },
  {
    slug: "catamyst",
    name: "Catamyst",
    description:
      "Software Development agency that helps businesses grow their online business.",
    location: "Indonesia",
    workplaceTypes: ["Hybrid", "Remote"],
  },
];
