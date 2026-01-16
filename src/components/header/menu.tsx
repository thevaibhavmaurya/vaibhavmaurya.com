"use client";

import { BoxIcon, MailIcon, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { MENU_NAV_ITEMS, MENU_THEME_ITEMS } from "@/config/menu-config";
import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/social-links";
import { useContactEmail } from "@/hooks/use-contact-email";
import { trackEvent } from "@/lib/mixpanel";
import { capitalizeFirstLetter } from "@/lib/string";
import { useExpandStore } from "@/store/expand-store";
import { type Experience, type Themes, URL_HASH_TYPE } from "@/types";

import { Button } from "../ui/button";
import { Kbd, KbdGroup } from "../ui/kbd";
import type { CommandLink } from "./menu-command";
import {
  CommandExperienceGroup,
  CommandLinkGroup,
  CommandMenuFooter,
  CommandMenuInput,
} from "./menu-command";

export function Menu() {
  const { mailtoLink } = useContactEmail();
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { expandExperience, expandProject } = useExpandStore();

  useHotkeys("mod+k, slash", (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  });

  useEffect(() => {
    if (open) {
      trackEvent("menu_open");
    }
  }, [open]);

  const handleOpenLink = useCallback(
    (link: CommandLink, isHref: boolean = false) => {
      setOpen(false);

      const isProject = "period" in link && "skills" in link;
      const isSocialLink = SOCIAL_LINKS.some((sl) => sl.title === link.title);
      const isNavItem = MENU_NAV_ITEMS.some((ni) => ni.title === link.title);

      let section = "page";
      if (isProject) {
        section = "projects";
      } else if (isSocialLink) {
        section = "social-links";
      } else if (isNavItem) {
        section = "page";
      }

      trackEvent("menu_item_click", {
        section,
        ...(isProject && { project_title: link.title }),
      });

      if (isProject) {
        expandProject(link.id);
      }

      if ("href" in link && link.href && isHref) {
        if (link.openInNewTab) {
          window.open(link.href, "_blank", "noopener");
        } else {
          router.push(link.href);
        }
      }

      if ("id" in link && link.id) {
        if (link.id === URL_HASH_TYPE.PROFILE) {
          router.push("/");
        } else {
          const element = document.getElementById(link.id);
          if (element) element.scrollIntoView({ behavior: "instant" });
        }
      }
    },
    [router, expandProject]
  );

  const handleOpenExperience = useCallback(
    (experience: Experience, index?: number) => {
      setOpen(false);

      const trackingProps: Record<string, string> = {
        section: "experiences",
        company_name: experience.title,
      };

      if (index !== undefined) {
        const position = experience.positions[index];
        if (position) {
          trackingProps.position_title = position.title;
          trackEvent("menu_item_click", trackingProps);

          expandExperience(position.id);
          const element = document.getElementById(experience.id);
          if (element) element.scrollIntoView({ behavior: "instant" });
          return;
        }
      }

      trackEvent("menu_item_click", trackingProps);

      if (experience.positions.length > 0) {
        const firstPosition = experience.positions[0];
        expandExperience(firstPosition.id);
      }

      const element = document.getElementById(experience.id);
      if (element) element.scrollIntoView({ behavior: "instant" });
    },
    [expandExperience]
  );

  const createThemeHandler = useCallback(
    (theme: Themes) => () => {
      setOpen(false);
      setTheme(theme);
    },
    [setTheme]
  );

  const handleMailMe = useCallback(() => {
    setOpen(false);
    trackEvent("menu_item_click", {
      section: "contact",
    });
    window.open(mailtoLink, "_blank", "noopener");
  }, [mailtoLink]);

  return (
    <>
      <Button
        variant="secondary"
        className="h-8 gap-1.5 rounded-full border border-input bg-white px-2.5 text-muted-foreground shadow-xs select-none hover:bg-white dark:bg-input/30 dark:hover:bg-input/30"
        onClick={() => {
          setOpen(true);
        }}
      >
        <SearchIcon aria-hidden />

        <span className="font-sans text-sm/4 font-medium sm:hidden">
          Search
        </span>

        <KbdGroup className="hidden sm:in-[.os-macos_&]:flex">
          <Kbd className="w-5 min-w-5">⌘</Kbd>
          <Kbd className="w-5 min-w-5">K</Kbd>
        </KbdGroup>

        <KbdGroup className="hidden sm:not-[.os-macos_&]:flex">
          <Kbd>Ctrl</Kbd>
          <Kbd className="w-5 min-w-5">K</Kbd>
        </KbdGroup>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandMenuInput />

        <CommandList className="min-h-80 supports-timeline-scroll:scroll-fade-y">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Get in Touch">
            <CommandItem
              value="Send me an email"
              keywords={["mail", "me", "email", "contact"]}
              onSelect={handleMailMe}
            >
              <MailIcon />
              Send me an email
            </CommandItem>
          </CommandGroup>

          <CommandLinkGroup
            heading="Page"
            links={MENU_NAV_ITEMS}
            onLinkSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandLinkGroup
            heading="Social Links"
            links={SOCIAL_LINKS}
            onLinkSelect={(o) => handleOpenLink(o, true)}
          />

          <CommandSeparator />

          <CommandExperienceGroup
            heading="Experiences"
            links={EXPERIENCES}
            fallbackImage={"/images/experience.webp"}
            onLinkSelect={handleOpenExperience}
          />

          <CommandSeparator />

          <CommandLinkGroup
            heading="Projects"
            links={PROJECTS}
            fallbackIcon={BoxIcon}
            onLinkSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandGroup heading="Theme">
            {MENU_THEME_ITEMS.map((item) => (
              <CommandItem
                key={item.title}
                value={capitalizeFirstLetter(item.title)}
                onSelect={createThemeHandler(item.title)}
              >
                <item.icon />
                {capitalizeFirstLetter(item.title)}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>

        <CommandMenuFooter />
      </CommandDialog>
    </>
  );
}
