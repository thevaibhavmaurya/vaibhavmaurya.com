import type { LucideIcon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

export type StateType = {
  hash: string;
  setHash: Dispatch<SetStateAction<string>>;
};

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

export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "design" | "education" | "business" | "idea";

export type ExperiencePosition = {
  id: string;
  title: string;
  /**
   * Employment period of the position.
   * Use "MM.YYYY" or "YYYY" format. Omit `end` for current roles.
   */
  employmentPeriod: {
    /** Start date (e.g., "10.2022" or "2020"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Full-time | Part-time | Contract | Internship, etc. */
  employmentType?: string;
  description?: string;
  /** UI icon to represent the role type. */
  icon?: ExperiencePositionIcon;
  skills?: string[];
  /** Whether the position is expanded by default in the UI. */
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  /** URL to the company logo (absolute URL or path under /public). */
  companyLogo?: string;
  /** Roles held at this company; keep newest first for display. */
  positions: ExperiencePosition[];
  /** Marks the company as the current employer for highlighting. */
  isCurrentEmployer?: boolean;
};

export type Project = {
  /** Stable unique identifier (used as list key/anchor). */
  id: string;
  title: string;
  /**
   * Project period for display and sorting.
   * Use "MM.YYYY" format. Omit `end` for ongoing projects.
   */
  period: {
    /** Start date (e.g., "05.2025"). */
    start: string;
    /** End date; leave undefined for "Present". */
    end?: string;
  };
  /** Public URL (site, repository, demo, or video). */
  link: string;
  /** Tags/technologies for chips or filtering. */
  skills: string[];
  /** Optional rich description; Markdown and line breaks supported. */
  description?: string;
  /** Logo image URL (absolute or path under /public). */
  logo?: string;
  /** Whether the project card is expanded by default in the UI. */
  isExpanded?: boolean;
};
