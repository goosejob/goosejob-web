import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { SearchForm } from "@/components/shared/search-form";
import { CreateNewDropdown } from "@/components/sidebar/create-new-dropdown";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full justify-between items-center gap-4 px-4">
        <div className="flex items-center gap-1">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <h1 className="text-base font-medium">Page Title</h1>
        </div>

        <div className="flex items-center gap-2">
          <SearchForm />
          <CreateNewDropdown />
        </div>
      </div>
    </header>
  );
}
