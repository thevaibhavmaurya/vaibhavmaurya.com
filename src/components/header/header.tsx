import Link from "next/link";

import ThemeToggle from "../theme-toggle";
import DesktopNav from "./desktop-nav";
import Menu from "./menu";
import MobileNav from "./mobile-nav";

export const Header = () => {
  return (
    <header className="sticky top-0 overflow-x-hidden bg-background px-2 pt-2">
      <div className="screen-line-before screen-line-after mx-auto flex h-12 max-w-3xl items-center justify-between gap-2 border-x border-border px-2">
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

        <DesktopNav className="hidden items-center gap-4 md:flex" />
        <Menu />
        <ThemeToggle />
        <span className="block h-2/4 w-px bg-border md:hidden" />
        <MobileNav className="md:hidden" />
      </div>
    </header>
  );
};
