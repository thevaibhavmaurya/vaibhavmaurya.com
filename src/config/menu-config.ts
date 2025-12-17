import {
  Code,
  MonitorIcon,
  MoonStarIcon,
  NotebookPen,
  SunMediumIcon,
  UserIcon,
} from "lucide-react";

import type { MenuLinkItem } from "@/types";
import { Themes } from "@/types";

export const MENU_NAV_ITEMS: MenuLinkItem[] = [
  {
    title: "About",
    href: "",
    icon: UserIcon,
  },
  {
    title: "Experiences",
    href: "#experiences",
    icon: NotebookPen,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: Code,
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
