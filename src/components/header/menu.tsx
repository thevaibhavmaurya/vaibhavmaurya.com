"use client";

import "@/lib/string-prototypes";

import { useCommandState } from "cmdk";
import type { LucideIcon } from "lucide-react";
import { CornerDownLeftIcon, MonitorIcon, Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Fragment, useCallback, useState } from "react";
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
import { MENU_NAV_ITEMS, MENU_THEME_ITEMS } from "@/config/menu-contants";
import type { MenuLinkItem } from "@/types";

import { Button } from "../ui/button";
import { Kbd, KbdGroup } from "../ui/kbd";
import { Separator } from "../ui/separator";

export default function Menu() {
  const [open, setOpen] = useState<boolean>(false);
  const { setTheme } = useTheme();
  const router = useRouter();

  useHotkeys("mod+k, slash", (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  });

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false);

      if (openInNewTab) {
        window.open(href, "_blank", "noopener");
      } else {
        router.push(href);
      }
    },
    [router]
  );

  const createThemeHandler = useCallback(
    (theme: "light" | "dark" | "system") => () => {
      setOpen(false);
      setTheme(theme);
    },
    [setTheme]
  );

  return (
    <>
      <Button
        variant="secondary"
        className="h-8 gap-1.5 rounded-full border border-input bg-white px-2.5 text-muted-foreground shadow-xs select-none hover:bg-white dark:bg-input/30 dark:hover:bg-input/30"
        onClick={() => setOpen(!open)}
      >
        <Search aria-hidden />

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
      <CommandDialog className="rounded-2xl" open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="h-80">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandLinkGroup
            heading="Pages"
            links={MENU_NAV_ITEMS}
            onLinkSelect={handleOpenLink}
          />
          <CommandSeparator />
          <CommandGroup heading="Theme">
            {MENU_THEME_ITEMS.map((item) => (
              <CommandItem
                key={item.title.capitalizeFirstLetter()}
                keywords={["theme"]}
                onSelect={createThemeHandler(item.title)}
              >
                <item.icon />
                {item.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
        <CommandMenuFooter />
      </CommandDialog>
    </>
  );
}

function CommandLinkGroup({
  heading,
  links,
  fallbackIcon,
  onLinkSelect,
}: {
  heading: string;
  links: MenuLinkItem[];
  fallbackIcon?: LucideIcon;
  onLinkSelect: (href: string, openInNewTab?: boolean) => void;
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link?.icon ?? fallbackIcon ?? Fragment;

        return (
          <CommandItem
            key={link.href}
            keywords={link.keywords}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            {link?.iconImage ? (
              <Image
                className="corner-squircle rounded-sm supports-corner-shape:rounded-[50%]"
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

type CommandKind = "command" | "page" | "link";

type CommandMetaMap = Map<
  string,
  {
    commandKind: CommandKind;
  }
>;

function buildCommandMetaMap() {
  const commandMetaMap: CommandMetaMap = new Map();

  commandMetaMap.set("Light", { commandKind: "command" });
  commandMetaMap.set("Dark", { commandKind: "command" });
  commandMetaMap.set("System", { commandKind: "command" });

  return commandMetaMap;
}

const COMMAND_META_MAP = buildCommandMetaMap();

const ENTER_ACTION_LABELS: Record<CommandKind, string> = {
  command: "Run Command",
  page: "Go to Page",
  link: "Open Link",
};

function CommandMenuFooter() {
  const selectedCommandKind = useCommandState(
    (state) => COMMAND_META_MAP.get(state.value)?.commandKind ?? "page"
  );

  return (
    <>
      <div className="flex h-10" />

      <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 border-t bg-zinc-100/30 px-4 text-xs font-medium dark:bg-zinc-800/30">
        <MonitorIcon className="size-6 text-muted-foreground" aria-hidden />

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
