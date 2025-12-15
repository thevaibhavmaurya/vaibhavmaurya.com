"use client";

import { useMemo } from "react";

import { getIconForPackageManager } from "@/components/icons";
import { CopyButton } from "@/components/markdown/components/copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { PackageManager } from "@/hooks/use-config";
import { useConfig } from "@/hooks/use-config";
import type { NpmCommands } from "@/types/unist";

export function CodeBlockCommand({
  __pnpm__,
  __yarn__,
  __npm__,
  __bun__,
}: NpmCommands) {
  const [config, setConfig] = useConfig();

  const packageManager = config.packageManager || "pnpm";

  const tabs = useMemo(() => {
    return {
      pnpm: __pnpm__,
      yarn: __yarn__,
      npm: __npm__,
      bun: __bun__,
    };
  }, [__pnpm__, __yarn__, __npm__, __bun__]);

  return (
    <div className="bg-code relative overflow-hidden rounded-xl">
      <Tabs
        className="gap-0"
        value={packageManager}
        onValueChange={(value) => {
          setConfig((prev) => ({
            ...prev,
            packageManager: value as PackageManager,
          }));
        }}
      >
        <div className="px-4 shadow-[inset_0_-1px_0_0] shadow-border">
          <TabsList className="h-auto gap-4 rounded-none bg-transparent p-0 dark:bg-transparent [&_svg]:size-4 [&_svg]:text-muted-foreground">
            {getIconForPackageManager(packageManager)}

            {Object.entries(tabs).map(([key]) => {
              return (
                <TabsTrigger
                  key={key}
                  className="h-10 rounded-none border-b border-transparent p-0 font-mono data-[state=active]:border-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none dark:data-[state=active]:bg-transparent"
                  value={key}
                >
                  {key}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>

        {Object.entries(tabs).map(([key, value]) => {
          return (
            <TabsContent key={key} value={key}>
              <pre>
                <code
                  data-slot="code-block"
                  data-language="bash"
                  className="text-code-foreground font-mono text-sm leading-none"
                >
                  {value}
                </code>
              </pre>
            </TabsContent>
          );
        })}
      </Tabs>

      <CopyButton
        className="absolute top-2 right-2"
        value={tabs[packageManager] || ""}
      />
    </div>
  );
}
