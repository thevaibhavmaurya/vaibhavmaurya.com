"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { MENU_NAV_ITEMS } from "@/config/menu-config";
import { cn } from "@/lib/utils";
import type { MenuLinkItem } from "@/types";

export function DesktopNav({ className }: { className?: string }) {
  const pathname = usePathname();
  return (
    <nav className={cn(className)}>
      {MENU_NAV_ITEMS.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          isActive={pathname === item.href}
        />
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
      href={item.href}
      className={cn(
        "font-mono text-sm font-medium",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
    >
      {item.title}
    </Link>
  );
}
