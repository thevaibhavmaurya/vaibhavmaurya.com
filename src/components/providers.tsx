import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";

import { MixpanelProvider } from "./mixpanel-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NuqsAdapter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <MixpanelProvider>{children}</MixpanelProvider>
      </ThemeProvider>
    </NuqsAdapter>
  );
}
