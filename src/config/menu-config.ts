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

import type { MenuLinkItem } from "@/types";
import { Themes, URL_HASH_TYPE } from "@/types";

export const MENU_NAV_ITEMS: MenuLinkItem[] = [
  {
    title: "Profile",
    id: URL_HASH_TYPE.PROFILE,
    icon: UserIcon,
  },
  {
    title: "Overview",
    id: URL_HASH_TYPE.OVERVIEW,
    icon: Globe,
  },
  {
    title: "Social Links",
    id: URL_HASH_TYPE.SOCIAL_LINKS,
    icon: Globe,
  },
  {
    title: "About",
    id: URL_HASH_TYPE.ABOUT,
    icon: UserIcon,
  },
  {
    title: "Github Contributions",
    id: URL_HASH_TYPE.GITHUB_CONTRIBUTIONS,
    icon: GithubIcon,
  },
  {
    title: "Experiences",
    id: URL_HASH_TYPE.EXPERIENCES,
    icon: NotebookPen,
  },
  {
    title: "Projects",
    id: URL_HASH_TYPE.PROJECTS,
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
