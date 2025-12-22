import { useCommandState } from "cmdk";
import type { LucideProps } from "lucide-react";
import { CornerDownLeftIcon, Monitor } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import {
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { MENU_THEME_ITEMS } from "@/config/menu-config";
import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/social-links";
import { capitalizeFirstLetter } from "@/lib/string";
import type { Experience, MenuLinkItem, Project, SocialLink } from "@/types";

import { Kbd } from "../ui/kbd";
import { Separator } from "../ui/separator";

export function CommandMenuInput() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <CommandInput
      placeholder="Type a command or search..."
      value={searchValue}
      onValueChange={setSearchValue}
    />
  );
}

export type CommandLink = Project | MenuLinkItem | SocialLink;

export function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string;
  links: CommandLink[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  fallbackImage?: string;
  onLinkSelect: (object: CommandLink) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;

        return (
          <CommandItem
            key={link.title}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link)}
          >
            {link?.iconImage ? (
              <Image
                className="rounded-sm corner-squircle supports-corner-shape:rounded-[50%]"
                src={link.iconImage}
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

export function CommandExperienceGroup({
  heading,
  links,
  fallbackIcon,
  fallbackImage,
  onLinkSelect,
}: {
  heading: string;
  links: Experience[];
  fallbackIcon?: React.ComponentType<LucideProps>;
  fallbackImage?: string;
  onLinkSelect: (object: Experience, index?: number) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? React.Fragment;
        const image = link?.iconImage ?? fallbackImage ?? "";

        return (
          <React.Fragment key={link.id}>
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

            {link.positions.map((position, index) => (
              <CommandItem
                key={position.id}
                value={position.title}
                keywords={[
                  ...(link.keywords || []),
                  position.title,
                  ...(position.skills || []),
                ]}
                onSelect={() => onLinkSelect(link, index)}
                className="pl-8 text-muted-foreground"
              >
                <span className="flex size-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                <span className="truncate">{position.title}</span>
                {position.employmentPeriod.end ? (
                  <span className="ml-auto text-xs opacity-60">
                    {position.employmentPeriod.start} -{" "}
                    {position.employmentPeriod.end}
                  </span>
                ) : (
                  <span className="ml-auto text-xs opacity-60">
                    {position.employmentPeriod.start} - Present
                  </span>
                )}
              </CommandItem>
            ))}
          </React.Fragment>
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

export function CommandMenuFooter() {
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
