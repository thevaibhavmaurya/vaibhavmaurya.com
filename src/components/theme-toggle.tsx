"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useMemo } from "react";

import { Themes } from "@/types";

import { Button } from "./ui/button";

export default function ThemeToggle() {
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
      <Moon className="relative hidden [html.dark_&]:block" />
      <Sun className="relative hidden [html.light_&]:block" />
    </Button>
  );
}
