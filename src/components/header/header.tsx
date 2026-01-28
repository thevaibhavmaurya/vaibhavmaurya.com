import Link from "next/link";

import { cn } from "@/lib/utils";

import { BrandIcon } from "../icons/brand-icon";
import { ThemeToggle } from "../theme-toggle";
import DesktopNav from "./desktop-nav";
import { SiteHeaderWrapper } from "./header-wrapper";
import { Menu } from "./menu";
import MobileNav from "./mobile-nav";

export const Header = () => {
  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 overflow-x-hidden bg-background px-2 pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]"
      )}
    >
      <div className="screen-line-before screen-line-after mx-auto flex h-12 max-w-3xl items-center justify-between gap-2 border-x border-edge px-2">
        <Link href="/" aria-label="Brand Logo" className="h-8 [&_svg]:h-full">
          <BrandIcon />
        </Link>

        <div className="flex-1" />

        <DesktopNav className="hidden items-center gap-4 md:flex" />
        <Menu />
        <ThemeToggle />
        <span className="block h-2/4 w-px bg-border md:hidden" />
        <MobileNav className="md:hidden" />
      </div>
    </SiteHeaderWrapper>
  );
};
