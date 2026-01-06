import type { LucideIcon } from "lucide-react";
import type { Node } from "unist-builder";

export interface NpmCommands {
  __pnpm__?: string;
  __yarn__?: string;
  __npm__?: string;
  __bun__?: string;
}

export interface UnistNode extends Node {
  type: string;
  name?: string;
  tagName?: string;
  value?: string;
  properties?: {
    __rawString__?: string;
    [key: string]: unknown;
  } & NpmCommands;
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
}

export interface UnistTree extends Node {
  children: UnistNode[];
}

/**
 * Represents a navigation item with a title, element ID, and icon for the desktop and mobile menu.
 */
export interface NavItem {
  title: string;
  elementId: string;
  icon?: LucideIcon;
}

/**
 * Base interface for all menu items with common properties.
 */
export interface MenuBaseItem {
  title: string;
  icon?: LucideIcon;
  iconImage?: string;
  keywords?: string[];
  openInNewTab?: boolean;
}

/**
 * Represents a navigation menu item with an ID for hash-based routing.
 */
export interface MenuLinkItem extends MenuBaseItem {
  id: string;
  href?: string;
}

/**
 * Represents a social link with a description and URL.
 */
export interface SocialLink extends MenuBaseItem {
  href: string;
  description?: string;
}

/**
 * Available theme modes for the application.
 */
export enum Themes {
  LIGHT = "light",
  DARK = "dark",
  SYSTEM = "system",
}

/**
 * Icon types for different experience position categories.
 */
export type ExperiencePositionIcon =
  | "code"
  | "design"
  | "education"
  | "business"
  | "idea";

/**
 * Represents a single position within a work experience.
 */
export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: {
    start: string;
    end?: string;
  };
  employmentType?: string;
  description?: string;
  icon?: ExperiencePositionIcon;
  skills?: string[];
  isExpanded?: boolean;
};

/**
 * Represents a complete work experience at a company or organization.
 */
export interface Experience extends MenuBaseItem {
  id: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
}

/**
 * Represents a project with metadata and time period.
 */
export interface Project extends MenuBaseItem {
  id: string;
  href: string;
  period: {
    start: string;
    end?: string;
  };
  skills: string[];
  description?: string;
  logo?: string;
  isExpanded?: boolean;
}

/**
 * URL hash identifiers for page sections.
 */
export enum URL_HASH_TYPE {
  PROFILE = "profile",
  OVERVIEW = "overview",
  SOCIAL_LINKS = "social-links",
  ABOUT = "about",
  GITHUB_CONTRIBUTIONS = "github-contributions",
  EXPERIENCES = "experiences",
  PROJECTS = "projects",
  CONTACT = "contact",
}
