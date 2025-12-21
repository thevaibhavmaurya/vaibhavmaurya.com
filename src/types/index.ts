import type { LucideIcon } from "lucide-react"; // Importing type for icons from the Lucide library
import type { Dispatch, SetStateAction } from "react"; // Importing types for state management in React

/**
 * Represents state management for the hash URL.
 * @property {string} hash - The current hash in the URL.
 * @property {Dispatch<SetStateAction<string>>} setHash - Function to update the hash.
 */
export type StateType = {
  hash: string;
  setHash: Dispatch<SetStateAction<string>>;
};

/**
 * Represents an item in the navigation menu.
 * @property {string} id - The unique identifier for the menu item as an anchor.
 * @property {string} title - The display name of the menu item.
 * @property {string} href - The URL or link associated with the menu item.
 * @property {LucideIcon} [icon] - An optional icon displayed alongside the menu title.
 * @property {string} [iconImage] - An optional image URL for the icon.
 * @property {string[]} [keywords] - Optional keywords for filtering or searching.
 * @property {boolean} [openInNewTab] - Flag to indicate if the link should open in a new tab.
 */
export interface MenuLinkItem {
  id?: string;
  title: string;
  href?: string;
  icon?: LucideIcon; // Optional Lucide icon to represent the menu link.
  iconImage?: string; // Optional image URL for the icon.
  keywords?: string[]; // Optional keywords for searching.
  openInNewTab?: boolean; // Determines if the link opens in a new tab.
}

/**
 * Enum representing the possible theme modes for the application.
 * @enum {string}
 */
export enum Themes {
  LIGHT = "light", // Light theme mode.
  DARK = "dark", // Dark theme mode.
  SYSTEM = "system", // System-defined theme setting (light/dark).
}

/**
 * Represents a social link extended from MenuLinkItem.
 * @property {string} [description] - An optional description of the social link.
 */
export interface SocialLink extends MenuLinkItem {
  description?: string; // Optional description providing more context about the link.
}

/**
 * Enum representing icons for different experience positions.
 */
export type ExperiencePositionIcon =
  | "code" // Represents coding roles.
  | "design" // Represents design roles.
  | "education" // Represents educational roles.
  | "business" // Represents business roles.
  | "idea"; // Represents roles related to ideas or conceptual positions.

/**
 * Represents a position held in an experience.
 * @property {string} id - Unique identifier for the experience position.
 * @property {string} title - The title of the position.
 * @property {Object} employmentPeriod - The time period the position was held.
 * @property {string} employmentPeriod.start - Start date of the position.
 * @property {string} [employmentPeriod.end] - End date; omitted for current roles.
 * @property {string} [employmentType] - Type of employment.
 * @property {string} [description] - Description of the role.
 * @property {ExperiencePositionIcon} [icon] - Icon representing the role.
 * @property {string[]} [skills] - Skills related to this position.
 * @property {boolean} [isExpanded] - Indicates if the position is expanded by default in the UI.
 */
export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: {
    start: string; // Start date of the position.
    end?: string; // End date; omitted if the role is current.
  };
  employmentType?: string; // Type of employment (e.g., Full-time, Part-time).
  description?: string; // Additional details about the position.
  icon?: ExperiencePositionIcon; // Icon representing the role.
  skills?: string[]; // Skills related to this position.
  isExpanded?: boolean; // Marks whether the position is expanded by default in the UI.
};

/**
 * Represents a work experience record.
 * @property {string} id - Unique identifier for the experience.
 * @property {string} title - Name of the company.
 * @property {string} [iconName] - URL to the company's logo.
 * @property {ExperiencePosition[]} positions - List of positions held at this company.
 * @property {boolean} [isCurrentEmployer] - Indicates if this is the current employer.
 */
export interface Experience extends MenuLinkItem {
  id: string;
  positions: ExperiencePosition[]; // List of positions at this company.
  isCurrentEmployer?: boolean; // Indicates if this is the current employer.
}

/**
 * Represents a project extended from MenuLinkItem.
 * @property {string} id - Unique identifier for the project.
 * @property {Object} period - Time period for the project.
 * @property {string} period.start - Start date of the project.
 * @property {string} [period.end] - End date; omitted for ongoing projects.
 * @property {string[]} skills - Tags or technologies related to the project.
 * @property {string} [description] - Rich description of the project.
 * @property {string} [logo] - Logo image URL associated with the project.
 * @property {boolean} [isExpanded] - Indicates whether the project card is expanded by default.
 */
export interface Project extends MenuLinkItem {
  id: string;
  period: {
    start: string; // Start date of the project.
    end?: string; // End date; omitted for ongoing projects.
  };
  skills: string[]; // Tags or technologies related to the project.
  description?: string; // Rich description about the project.
  logo?: string; // Logo image URL associated with the project.
  isExpanded?: boolean; // Marks whether the project card is expanded by default.
}

/**
 * Enum representing the possible URL hash types.
 */
export enum URL_HASH_TYPE {
  PROFILE = "",
  OVERVIEW = "overview",
  SOCIAL_LINKS = "social-links",
  ABOUT = "about",
  GITHUB_CONTRIBUTIONS = "github-contributions",
  EXPERIENCES = "experiences",
  PROJECTS = "projects",
  CONTACT = "contact",
}
