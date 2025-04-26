import { Briefcase, Building2, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { href, Link } from "react-router";

export function CreateNewDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          <span>New</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-[180px] p-1">
        <DropdownMenuItem asChild className="flex items-center gap-2 py-1.5">
          <Link to={href("/jobs/new")} prefetch="intent">
            <Briefcase className="size-4" />
            <span>New Job</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex items-center gap-2 py-1.5">
          <Link to={href("/setup/organization")} prefetch="intent">
            <Building2 className="size-4" />
            <span>New Organization</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
