"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavItems } from "@/config/menu-config";
import { trackEvent } from "@/lib/mixpanel";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";
import { URL_HASH_TYPE } from "@/types";

export default function MobileNav({ className }: { className?: string }) {
  const router = useRouter();

  const handleClick = useCallback(
    (item: NavItem) => {
      trackEvent("nav_item_click", {
        nav_item: item.title,
        nav_type: "mobile",
      });

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "group/toggle flex h-8 w-8 flex-col gap-1 data-[state=open]:bg-accent",
            className
          )}
          size="icon"
        >
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[3px] group-data-[state=open]/toggle:rotate-45" />
          <span className="flex h-0.5 w-4 transform rounded-[1px] bg-foreground transition-transform group-data-[state=open]/toggle:translate-y-[-3px] group-data-[state=open]/toggle:-rotate-45" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64" align="end" sideOffset={8}>
        {NavItems.map((item) => (
          <DropdownMenuItem key={item.elementId} asChild>
            <span onClick={() => handleClick(item)}>{item.title}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
