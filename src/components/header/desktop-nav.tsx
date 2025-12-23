"use client";

import { useRouter } from "next/navigation";
import type { MouseEventHandler } from "react";
import { useCallback } from "react";

import { NavItems } from "@/config/menu-config";
import { cn } from "@/lib/utils";
import { type NavItem, URL_HASH_TYPE } from "@/types";

export default function DesktopNav({ className }: { className?: string }) {
  const router = useRouter();

  const handleClick = useCallback(
    (item: NavItem) => {
      if (item.elementId === URL_HASH_TYPE.PROFILE) {
        router.push("/");
      } else {
        const element = document.getElementById(item.elementId);
        if (element) element.scrollIntoView({ behavior: "instant" });
      }
    },
    [router]
  );

  return (
    <nav className={cn(className)}>
      {NavItems.map((item) => (
        <NavItem
          key={item.title}
          item={item}
          onClick={() => handleClick(item)}
        />
      ))}
    </nav>
  );
}

function NavItem({
  item,
  onClick,
}: {
  item: NavItem;
  onClick: MouseEventHandler<HTMLSpanElement>;
}) {
  return (
    <span
      onClick={onClick}
      className={cn(
        "cursor-pointer font-mono text-sm font-medium text-muted-foreground"
      )}
    >
      {item.title}
    </span>
  );
}
