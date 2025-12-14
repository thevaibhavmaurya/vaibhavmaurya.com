"use client";

import { useTheme } from "next-themes";
import { useCallback, useMemo } from "react";

import { Themes } from "@/types";

import { MoonIcon } from "./animated-icons/moon";
import { SunMediumIcon } from "./animated-icons/sun-medium";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDarkTheme = useMemo(
    () => Themes.DARK === resolvedTheme,
    [resolvedTheme]
  );

  const handleTheme = useCallback(() => {
    setTheme(isDarkTheme ? Themes.LIGHT : Themes.DARK);
  }, [isDarkTheme, setTheme]);

  return (
    <Button
      variant="secondary"
      size="icon"
      className="h-8 w-8 rounded-full border bg-input/30"
      onClick={handleTheme}
    >
      <MoonIcon className="relative hidden [html.dark_&]:block" />
      <SunMediumIcon className="relative hidden [html.light_&]:block" />
    </Button>
  );
}
