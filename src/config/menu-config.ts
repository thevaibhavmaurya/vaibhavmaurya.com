import {
  Code,
  GithubIcon,
  Globe,
  MonitorIcon,
  MoonStarIcon,
  NotebookPen,
  SunMediumIcon,
  UserIcon,
} from "lucide-react";

import { addHashToString } from "@/lib/url";
import type { MenuLinkItem } from "@/types";
import { Themes, URL_HASH_TYPE } from "@/types";

export const NAV_ITEMS: MenuLinkItem[] = [
  {
    title: "About",
    href: "/",
    icon: UserIcon,
  },
  {
    title: "Experiences",
    href: addHashToString(URL_HASH_TYPE.EXPERIENCES),
    icon: NotebookPen,
  },
  {
    title: "Projects",
    href: addHashToString(URL_HASH_TYPE.PROJECTS),
    icon: Code,
  },
] as const;

export const MENU_NAV_ITEMS: MenuLinkItem[] = [
  {
    title: "Profile",
    href: "/",
    icon: UserIcon,
  },
  {
    title: "Overview",
    href: addHashToString(URL_HASH_TYPE.OVERVIEW),
    icon: Globe,
  },
  {
    title: "Social Links",
    href: addHashToString(URL_HASH_TYPE.SOCIAL_LINKS),
    icon: Globe,
  },
  {
    title: "About",
    href: addHashToString(URL_HASH_TYPE.ABOUT),
    icon: UserIcon,
  },
  {
    title: "Github Contributions",
    href: addHashToString(URL_HASH_TYPE.GITHUB_CONTRIBUTIONS),
    icon: GithubIcon,
  },
  {
    title: "Experiences",
    href: addHashToString(URL_HASH_TYPE.EXPERIENCES),
    icon: NotebookPen,
  },
  {
    title: "Projects",
    href: addHashToString(URL_HASH_TYPE.PROJECTS),
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
