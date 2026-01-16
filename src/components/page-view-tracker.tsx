"use client";

import { useEffect, useRef } from "react";

import { trackEvent } from "@/lib/mixpanel";

const PAGE_VIEW_COMPLETE_THRESHOLD = 30000;

export function PageViewTracker() {
  const hasTracked = useRef(false);

  useEffect(() => {
    if (hasTracked.current) {
      return;
    }

    const timer = setTimeout(() => {
      trackEvent("page_view_complete", {
        time_on_page: PAGE_VIEW_COMPLETE_THRESHOLD / 1000,
      });
      hasTracked.current = true;
    }, PAGE_VIEW_COMPLETE_THRESHOLD);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return null;
}
