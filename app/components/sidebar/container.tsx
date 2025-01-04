import * as React from "react";
import {
  Box,
  BriefcaseBusiness,
  Building,
  Cat,
  Dog,
  Locate,
  PawPrint,
  Rabbit,
} from "lucide-react";

import { NavLinks } from "@/components/sidebar/nav-links";
import { NavUser } from "@/components/sidebar/nav-user";
import { OrganizationSwitcher } from "@/components/sidebar/organization-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavFilters } from "@/components/sidebar/nav-filters";

// This is sample data.
const data = {
  user: {
    name: "Example User",
    email: "example@example.com",
    avatar: "https://api.dicebear.com/9.x/initials/svg?seed=ExampleUser",
  },
  organizations: [
    { name: "Goosejob", plan: "Enterprise", logo: Rabbit },
    { name: "Bearmentor", plan: "Startup", logo: PawPrint },
    { name: "Catamyst", plan: "Startup", logo: Cat },
    { name: "Dogokit", plan: "Free", logo: Dog },
  ],
  links: [
    {
      title: "Jobs",
      to: "/jobs",
      icon: BriefcaseBusiness,
      isActive: true,
      items: [
        { title: "List", to: "/jobs" },
        { title: "Saved", to: "/jobs/saved" },
        { title: "Created", to: "/jobs/created" },
      ],
    },
    {
      title: "Companies",
      to: "/companies",
      icon: Building,
      isActive: true,
      items: [
        { title: "List", to: "/companies" },
        { title: "Saved", to: "/companies/saved" },
      ],
    },
  ],
  filters: [
    {
      title: "Types",
      url: "#",
      icon: Box,
      isActive: true,
      items: [
        { title: "Full-Time", slug: "full-time" },
        { title: "Part-Time", slug: "part-time" },
        { title: "Contract", slug: "contract" },
        { title: "Freelance", slug: "freelance" },
        { title: "Internship", slug: "internship" },
        { title: "Daily", slug: "daily" },
      ],
    },
    {
      title: "Arrangements",
      url: "#",
      icon: Locate,
      isActive: true,
      items: [
        { title: "Remote", slug: "remote" },
        { title: "Hybrid", slug: "hybrid" },
        { title: "Onsite", slug: "onsite" },
      ],
    },
  ],
};

export function SidebarContainer({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <OrganizationSwitcher organizations={data.organizations} />
      </SidebarHeader>

      <SidebarContent>
        <NavLinks groups={data.links} />
        <NavFilters groups={data.filters} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
