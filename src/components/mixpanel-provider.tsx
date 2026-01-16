"use client";

import { useEffect } from "react";

import { initMixpanel, trackUTMParams } from "@/lib/mixpanel";

export function MixpanelProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initMixpanel();
    trackUTMParams();
  }, []);

  return <>{children}</>;
}
