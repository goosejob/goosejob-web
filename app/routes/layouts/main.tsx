import { Link, Outlet } from "react-router";

import { SidebarContainer } from "@/components/sidebar/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CreateNewDropdown } from "@/components/sidebar/create-new-dropdown";
import { SearchForm } from "@/components/shared/search-form";

export default function Route() {
  return (
    <SidebarProvider>
      <SidebarContainer />

      <SidebarInset>
        <header className="flex items-center justify-between sticky top-0 bg-background h-16 shrink-0 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />

            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb className="hidden sm:block">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" prefetch="intent">
                      🪿 Goosejob
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Page</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex items-center gap-2">
            <SearchForm />
            <CreateNewDropdown />
          </div>
        </header>

        <main className="p-4 sm:p-8 space-y-4 sm:space-y-8">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
