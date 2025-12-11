import { MonitorIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

import ThemeToggle from "../theme-toggle";
import DesktopNav from "./desktop-nav";

const Menu = dynamic(() => import("./menu").then((mod) => mod.default));
const MobileNav = dynamic(() =>
  import("./mobile-nav").then((mod) => mod.default)
);

export const Header = () => {
  return (
    <header className="sticky top-0 max-w-screen overflow-x-hidden bg-background px-2 pt-2">
      <div className="screen-line-before screen-line-after mx-auto flex h-12 max-w-3xl items-center justify-between gap-2 border-x border-border px-2">
        <Link href="/" className="h-8 [&_svg]:h-full">
          <MonitorIcon />
        </Link>

        <div className="flex-1" />

        <DesktopNav className="hidden md:flex" />
        <Menu />
        <ThemeToggle />
        <span className="block h-2/4 w-px bg-border md:hidden" />
        <MobileNav className="md:hidden" />
      </div>
    </header>
  );
};
