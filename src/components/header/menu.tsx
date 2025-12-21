"use client";

import { useCommandState } from "cmdk";
import type { LucideProps } from "lucide-react";
import {
  BoxIcon,
  CornerDownLeftIcon,
  MailIcon,
  Monitor,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { useCallback, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { MENU_NAV_ITEMS, MENU_THEME_ITEMS } from "@/config/menu-config";
import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/social-links";
import { useContactEmail } from "@/hooks/use-contact-email";
import { capitalizeFirstLetter } from "@/lib/string";
import type { Experience, MenuLinkItem, Project, Themes } from "@/types";

import { Button } from "../ui/button";
import { Kbd, KbdGroup } from "../ui/kbd";
import { Separator } from "../ui/separator";

export function Menu() {
  const { mailtoLink } = useContactEmail();
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useHotkeys("mod+k, slash", (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  });

  const handleOpenLink = useCallback(
    (object: CommandLink, isId?: boolean) => {
      setOpen(false);

      if (isId && "id" in object) {
        const id = object?.id ?? "";
        if (!id) {
          router.push("/");
          return;
        }
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "instant" });
        return;
      }

      const link = object.href ?? "";

      if (object.openInNewTab) window.open(link, "_blank", "noopener");
      else router.push(link);
    },
    [router]
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

          <CommandGroup heading="Contact Me">
            <CommandItem
              value="Mail Me"
              keywords={["mail", "me", "email", "contact"]}
              onSelect={handleMailMe}
            >
              <MailIcon />
              Mail Me
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
            onLinkSelect={handleOpenLink}
          />

          <CommandSeparator />

          <CommandLinkGroup
            heading="Experiences"
            links={EXPERIENCES}
            fallbackImage={"/images/experience.png"}
            onLinkSelect={(item) => handleOpenLink(item, true)}
          />

          <CommandSeparator />

          <CommandLinkGroup
            heading="Projects"
            links={PROJECTS}
            fallbackIcon={BoxIcon}
            onLinkSelect={(item) => handleOpenLink(item, true)}
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

function CommandMenuInput() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <CommandInput
      placeholder="Type a command or search..."
      value={searchValue}
      onValueChange={setSearchValue}
    />
  );
}

type CommandLink = Project | Experience | MenuLinkItem;

/**
 * Type guard to check if a link is an Experience with positions
 */
function isExperienceWithPositions(link: CommandLink): link is Experience {
  return (
    "positions" in link &&
    Array.isArray(link.positions) &&
    link.positions.length > 0
  );
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  fallbackImage,
  onLinkSelect,
}: {
  heading: string;
  links: CommandLink[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  fallbackImage?: string;
  onLinkSelect: (object: CommandLink, id?: boolean) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;
        const image = link?.iconImage ?? fallbackImage ?? "";

        // If it's an experience with positions, render company + positions
        if (isExperienceWithPositions(link)) {
          return (
            <React.Fragment key={link.id}>
              {/* Company/Organization Item */}
              <CommandItem
                value={link.title}
                keywords={link.keywords}
                onSelect={() => onLinkSelect(link)}
                className="font-medium"
              >
                {image ? (
                  <Image
                    className="rounded-sm corner-squircle supports-corner-shape:rounded-[50%]"
                    src={image}
                    alt={link.title}
                    width={16}
                    height={16}
                    unoptimized
                  />
                ) : (
                  <Icon />
                )}
                <span className="flex items-center gap-1.5">
                  {link.title}
                  {link.isCurrentEmployer && (
                    <span className="flex size-1.5 animate-pulse rounded-full bg-green-500" />
                  )}
                </span>
              </CommandItem>

              {/* Position Items - nested under company */}
              {link.positions.map((position) => (
                <CommandItem
                  key={position.id}
                  value={position.title}
                  keywords={[
                    ...(link.keywords || []),
                    position.title,
                    ...(position.skills || []),
                  ]}
                  onSelect={() =>
                    onLinkSelect(
                      {
                        ...link,
                        id: position.id,
                        title: `${position.title} at ${link.title}`,
                      } as Experience,
                      true
                    )
                  }
                  className="pl-8 text-muted-foreground"
                >
                  <span className="flex size-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  <span className="truncate">{position.title}</span>
                  {position.employmentPeriod.end ? (
                    <span className="ml-auto text-xs opacity-60">
                      {position.employmentPeriod.start} –{" "}
                      {position.employmentPeriod.end}
                    </span>
                  ) : (
                    <span className="ml-auto text-xs opacity-60">
                      {position.employmentPeriod.start} – Present
                    </span>
                  )}
                </CommandItem>
              ))}
            </React.Fragment>
          );
        }

        // Regular link item (for projects, social links, etc.)
        const itemKey = "id" in link ? link.id : link.href;
        return (
          <CommandItem
            key={itemKey}
            value={link.title}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link)}
          >
            {image ? (
              <Image
                className="rounded-sm corner-squircle supports-corner-shape:rounded-[50%]"
                src={image}
                alt={link.title}
                width={16}
                height={16}
                unoptimized
              />
            ) : (
              <Icon />
            )}
            {link.title}
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

type CommandKind = "command" | "page" | "link" | "project" | "experience";

type CommandMetaMap = Map<
  string,
  {
    commandKind: CommandKind;
  }
>;

function buildCommandMetaMap() {
  const commandMetaMap: CommandMetaMap = new Map();

  MENU_THEME_ITEMS.forEach((item) => {
    commandMetaMap.set(capitalizeFirstLetter(item.title), {
      commandKind: "command",
    });
  });

  SOCIAL_LINKS.forEach((item) => {
    commandMetaMap.set(item.title, {
      commandKind: "link",
    });
  });

  EXPERIENCES.forEach((item) => {
    commandMetaMap.set(item.title, {
      commandKind: "experience",
    });
    item.positions.forEach((position) => {
      commandMetaMap.set(position.title, {
        commandKind: "experience",
      });
    });
  });

  PROJECTS.forEach((item) => {
    commandMetaMap.set(item.title, {
      commandKind: "project",
    });
  });

  return commandMetaMap;
}

const COMMAND_META_MAP = buildCommandMetaMap();

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run Command",
  page: "Go to Page",
  link: "Open Link",
  project: "Go to Project",
  experience: "Go to Experience",
};

function CommandMenuFooter() {
  const selectedCommandKind = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value)?.commandKind ?? "page"
  );

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-zinc-100/30 px-4 text-xs font-medium dark:bg-zinc-800/30">
        <Monitor className="size-6 text-muted-foreground" aria-hidden />

        <div className="flex shrink-0 items-center gap-2">
          <span>{ENTER_ACTION_LABELS[selectedCommandKind]}</span>
          <Kbd>
            <CornerDownLeftIcon />
          </Kbd>
          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:h-4"
          />
          <span className="text-muted-foreground">Exit</span>
          <Kbd>Esc</Kbd>
        </div>
      </div>
    </>
  );
}
