import * as React from "react";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavLinks } from "@/components/sidebar/nav-links";
import { NavUser } from "@/components/sidebar/nav-user";
import { OrganizationSwitcher } from "@/components/sidebar/organization-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
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
    { name: "Goosejob", plan: "Enterprise", logo: GalleryVerticalEnd },
    { name: "Bearmentor", plan: "Free", logo: AudioWaveform },
    { name: "Catamyst", plan: "Startup", logo: Command },
  ],
  links: [
    {
      title: "Jobs",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        { title: "List", url: "#" },
        { title: "Saved", url: "#" },
        { title: "Created", url: "#" },
      ],
    },
  ],
  filters: [
    {
      title: "Job Types",
      url: "#",
      icon: Settings2,
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
      title: "Work Locations",
      url: "#",
      icon: Settings2,
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
        <SidebarGroup>
          <SidebarMenu>
            <NavLinks groups={data.links} />
            <NavFilters groups={data.filters} />
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
