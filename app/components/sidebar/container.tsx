import * as React from "react";
import {
  Binoculars,
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
        { title: "Applied", to: "/jobs/applied" },
        { title: "In Progress", to: "/jobs/progress" },
        { title: "Canceled", to: "/jobs/canceled" },
      ],
    },
    {
      title: "Organizations",
      to: "#",
      icon: Building,
      isActive: false,
      items: [
        { title: "List", to: "/organizations" },
        { title: "Saved", to: "/organizations/saved" },
      ],
    },
    {
      title: "Recruit",
      to: "#",
      icon: Binoculars,
      isActive: false,
      items: [
        { title: "Organizations", to: "/organizations/managed" },
        { title: "Jobs", to: "/jobs/managed" },
        { title: "Archived", to: "/jobs/archived" },
      ],
    },
  ],
  filters: [
    {
      title: "Types",
      url: "#",
      icon: Box,
      isActive: false,
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
      isActive: false,
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
