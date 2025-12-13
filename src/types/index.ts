import type { LucideIcon } from "lucide-react";

export interface MenuLinkItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  iconImage?: string;
  keywords?: string[];
  openInNewTab?: boolean;
}

export enum Themes {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

export type SocialLink = {
  icon: string;
  title: string;
  description?: string;
  href: string;
};
