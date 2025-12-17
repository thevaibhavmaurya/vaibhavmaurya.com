"use client";

import Link from "next/link";
import type { MouseEventHandler } from "react";
import { useState } from "react";

import { MENU_NAV_ITEMS } from "@/config/menu-config";
import { cn } from "@/lib/utils";
import type { MenuLinkItem } from "@/types";

export function DesktopNav({ className }: { className?: string }) {
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined"
      ? window.location.hash || "#profile"
      : "#profile"
  );

  return (
    <nav className={cn(className)}>
      {MENU_NAV_ITEMS.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          isActive={hash === item.href}
          onClick={() => setHash(item.href)}
        />
      ))}
    </nav>
  );
}

function NavItem({
  item,
  isActive,
  onClick,
}: {
  item: MenuLinkItem;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href={item.href}
      className={cn(
        "font-mono text-sm font-medium",
        isActive ? "text-primary" : "text-muted-foreground"
      )}
      onClick={onClick}
    >
      {item.title}
    </Link>
  );
}
