import Link from "next/link";

import { cn } from "@/lib/utils";

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
        <Link href="/" className="h-8 [&_svg]:h-full">
          <svg
            viewBox="0 0 19 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.604 8.4V8.388C1.284 8.22 0.360002 7.176 0.360002 5.784V2.796C0.360002 2.028 0.924002 1.956 1.212 1.956V1.716H0.852002C0.564002 1.716 2.15322e-06 1.704 2.15322e-06 0.996001V9.53674e-07H2.16V6.612H3.12L5.028 9.53674e-07H6.9L4.992 6.612H5.604V8.412H2.988C2.892 8.412 2.808 8.412 2.712 8.4H2.604ZM12.3776 2.628C12.3776 1.116 13.4696 0.0120008 14.9816 9.53674e-07H17.0216V1.8H16.4096L18.3176 8.4H16.4456L14.5376 1.8H14.1776V8.4H10.9736L9.42563 3.048V8.4H7.62563V2.796C7.62563 2.028 8.18963 1.956 8.47763 1.956V1.716H8.11763C7.82963 1.716 7.26563 1.704 7.26563 0.996001V9.53674e-07H10.4216L12.3776 6.78V2.628Z"
              fill="currentColor"
            />
          </svg>
        </Link>

        <div className="flex-1" />

        <DesktopNav className="hidden items-center gap-4 md:flex" />
        <Menu />
        {/* <ThemeToggle /> */}
        {/* <span className="block h-2/4 w-px bg-border md:hidden" /> */}
        <MobileNav className="md:hidden" />
      </div>
    </SiteHeaderWrapper>
  );
};
