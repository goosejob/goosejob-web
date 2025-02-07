import { Form } from "react-router";
import { useQueryState } from "nuqs";
import { Search } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export function SearchForm() {
  const [q] = useQueryState("q");

  return (
    <Form method="get" action="/search" className="hidden sm:block">
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          Search
        </Label>
        <SidebarInput
          className="h-9 pl-8"
          id="search"
          placeholder="Search anything..."
          name="q"
          defaultValue={q || ""}
        />
        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
      </div>
    </Form>
  );
}
