import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Checkbox } from "../ui/checkbox";

export function NavFilters({
  groups,
}: {
  groups: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      slug: string;
    }[];
  }[];
}) {
  return (
    <>
      {groups.map((group) => (
        <Collapsible
          key={group.title}
          asChild
          defaultOpen={group.isActive}
          className="group/collapsible"
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={group.title}>
                {group.icon && <group.icon />}
                <span>{group.title}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>

            <CollapsibleContent className="py-1">
              <SidebarMenuSub className="space-y-1">
                {group.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.slug}>
                    <div className="flex items-center space-x-2 px-2">
                      <Checkbox id={subItem.slug} />
                      <label
                        htmlFor={subItem.slug}
                        className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {subItem.title}
                      </label>
                    </div>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </>
  );
}
