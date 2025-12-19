"use client";

import Link from "next/link";

import { NAV_ITEMS } from "@/config/menu-config";
import { cn } from "@/lib/utils";
import type { MenuLinkItem } from "@/types";

export function DesktopNav({ className }: { className?: string }) {
  return (
    <nav className={cn(className)}>
      {NAV_ITEMS.map((item) => (
        <NavItem key={item.title} item={item} isActive={false} />
      ))}
    </nav>
  );
}

function NavItem({
  item,
  isActive,
}: {
  item: MenuLinkItem;
  isActive: boolean;
}) {
  return (
    <Link
      href={item.href ?? ""}
      className={cn(
        "font-mono text-sm font-medium",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {item.title}
    </Link>
  );
}
