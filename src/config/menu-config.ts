import {
  Briefcase,
  Code,
  MonitorIcon,
  MoonStarIcon,
  NotebookPen,
  SunMediumIcon,
} from "lucide-react";

import type { MenuLinkItem } from "@/types";
import { Themes } from "@/types";

export const MENU_NAV_ITEMS: MenuLinkItem[] = [
  {
    title: "Portfolio",
    href: "/",
    icon: Briefcase,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: Code,
  },
  {
    title: "Blogs",
    href: "/blogs",
    icon: NotebookPen,
  },
] as const;

export const MENU_THEME_ITEMS = [
  {
    title: Themes.LIGHT,
    icon: SunMediumIcon,
  },
  {
    title: Themes.DARK,
    icon: MoonStarIcon,
  },
  {
    title: Themes.SYSTEM,
    icon: MonitorIcon,
  },
] as const;
