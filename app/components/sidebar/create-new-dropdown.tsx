import { Briefcase, Building2, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export function CreateNewDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2">
          <span>Create</span>
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="p-1">
        <DropdownMenuItem asChild className="flex items-center gap-2 py-1.5">
          <Link to={"/post-a-job"}>
            <Briefcase className="size-4" />
            <span>Create New Job</span>
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="flex items-center gap-2 py-1.5">
          <Link to={"/setup/organization"}>
            <Building2 className="size-4" />
            <span>Create New Organization</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
