import type { LucideIcon } from "lucide-react";

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
