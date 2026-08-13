"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { navGroups } from "@/lib/nav-config";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const activeGroupLabel = navGroups.find(
    (g) => g.children?.some((c) => c.href === pathname)
  )?.label;

  const [openGroup, setOpenGroup] = useState<string | null>(
    activeGroupLabel ?? null
  );

  return (
    <aside className="hidden md:flex md:w-64 md:flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border shrink-0">
      <div className="flex items-center gap-2 px-5 h-16 border-b border-sidebar-border">
        <Image
          src="/brand/logo-light.svg"
          alt="Wayam AI"
          width={120}
          height={28}
          className="h-7 w-auto"
          priority
        />
      </div>
      <div className="px-5 pt-4 pb-2">
        <p className="text-sm font-semibold text-sidebar-foreground">OptimizeAI</p>
        <p className="text-xs text-sidebar-foreground/60">Warranty &amp; Service Intelligence</p>
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-2 space-y-0.5">
        {navGroups.map((group) => {
          const Icon = group.icon;
          if (!group.children) {
            const isActive = pathname === group.href;
            return (
              <Link
                key={group.label}
                href={group.href!}
                className={cn(
                  "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-primary"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {group.label}
              </Link>
            );
          }

          const isOpen = openGroup === group.label;
          const isGroupActive = group.children.some((c) => c.href === pathname);

          return (
            <div key={group.label}>
              <button
                type="button"
                onClick={() => setOpenGroup(isOpen ? null : group.label)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isGroupActive
                    ? "text-sidebar-foreground"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span className="flex-1 text-left">{group.label}</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform",
                    isOpen && "rotate-180"
                  )}
                />
              </button>
              {isOpen && (
                <div className="ml-4 mt-0.5 space-y-0.5 border-l border-sidebar-border pl-3">
                  {group.children.map((child) => {
                    const isActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block rounded-md px-3 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-primary font-medium"
                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                        )}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
