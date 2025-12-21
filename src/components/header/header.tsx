import Link from "next/link";

import { cn } from "@/lib/utils";

import { ThemeToggle } from "../theme-toggle";
import { SiteHeaderWrapper } from "./header-wrapper";
import { Menu } from "./menu";

export const Header = () => {
  return (
    <SiteHeaderWrapper
      className={cn(
        "sticky top-0 z-50 overflow-x-hidden bg-background px-2 pt-2",
        "data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:data-[affix=true]:shadow-[0_0_16px_0_black]"
      )}
    >
      <div className="screen-line-before screen-line-after mx-auto flex h-12 max-w-3xl items-center justify-between gap-2 border-x border-edge px-2">
        <Link href="/" className="h-8 [&_svg]:h-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 512 256"
            data-visible="true"
          >
            <path
              fill="currentColor"
              d="M192 256H64v-64h128v64ZM448 64H320v128h128v64H256V0h192v64ZM64 192H0V64h64v128ZM512 192h-64V64h64v128ZM192 64H64V0h128v64Z"
            ></path>
          </svg>
        </Link>

        <div className="flex-1" />

        <Menu />
        <span className="block h-2/4 w-px bg-edge" />
        <ThemeToggle />
      </div>
    </SiteHeaderWrapper>
  );
};
