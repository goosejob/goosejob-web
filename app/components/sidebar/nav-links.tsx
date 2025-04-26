import { Link } from "react-router";
import { ChevronRight, Gauge, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function NavLinks({
  label,
  groups,
}: {
  label: string;
  groups: {
    title: string;
    to: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      to: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{label}</SidebarGroupLabel>
      <SidebarMenu>
        {groups.map((group) => {
          const hasItems = group.items && group.items.length > 0;

          if (!hasItems) {
            return (
              <SidebarMenuItem key={group.title}>
                <SidebarMenuButton asChild tooltip={group.title}>
                  <Link to={group.to}>
                    {group.icon && <group.icon />}
                    <span className="font-medium">{group.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          }

          return (
            <Collapsible
              key={group.title}
              asChild
              defaultOpen={group.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton asChild tooltip={group.title}>
                    <Link to={group.to}>
                      {group.icon && <group.icon />}
                      <span className="font-medium">{group.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-100 group-data-[state=open]/collapsible:rotate-90" />
                    </Link>
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {group.items?.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild>
                          <Link to={item.to}>
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
