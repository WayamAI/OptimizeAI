"use client";

import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { navGroups } from "@/lib/nav-config";

function useBreadcrumb(pathname: string) {
  if (pathname === "/") return "Dashboard";
  for (const group of navGroups) {
    const child = group.children?.find((c) => c.href === pathname);
    if (child) return `${group.label} / ${child.label}`;
  }
  return "OptimizeAI";
}

export function Topbar() {
  const pathname = usePathname();
  const breadcrumb = useBreadcrumb(pathname);

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6 shrink-0">
      <p className="text-sm text-muted-foreground">{breadcrumb}</p>
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 rounded-md border border-input bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground w-56">
          <Search className="h-4 w-4" />
          <span className="flex-1">Search...</span>
          <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded">⌘K</kbd>
        </div>
        <button
          type="button"
          aria-label="Notifications"
          className="relative flex items-center justify-center h-9 w-9 rounded-md hover:bg-secondary transition-colors"
        >
          <Bell className="h-4.5 w-4.5 text-muted-foreground" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
            4
          </span>
        </button>
        <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/10">
          Executive
        </Badge>
      </div>
    </header>
  );
}
