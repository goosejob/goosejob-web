import { Plus, Briefcase, Building2, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";

export function CreateNewDropdown() {
  const { isMobile } = useSidebar();

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="flex gap-2">
              <span>New</span>
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="left" align="center" hidden={isMobile}>
          Create new...
        </TooltipContent>
      </Tooltip>

      <DropdownMenuContent align="end" className="w-[180px] p-1">
        <DropdownMenuItem asChild className="flex items-center gap-2 py-1.5">
          <Link to="/jobs/new">
            <Briefcase className="size-4" />
            <span>New Job</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex items-center gap-2 py-1.5">
          <Link to="/organizations/new">
            <Building2 className="size-4" />
            <span>New Organization</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
