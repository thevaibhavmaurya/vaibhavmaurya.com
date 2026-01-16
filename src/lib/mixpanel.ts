"use client";

import mixpanel from "mixpanel-browser";

let isInitialized = false;

export function initMixpanel(): void {
  if (typeof window === "undefined") {
    return;
  }

  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

  if (!token) {
    console.warn("Mixpanel token not found. Analytics will not be tracked.");
    return;
  }

  if (isInitialized) {
    return;
  }

  mixpanel.init(token, {
    debug: process.env.NODE_ENV === "development",
    track_pageview: false,
    autocapture: false,
    persistence: "localStorage",
  });

  isInitialized = true;
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, unknown>
): void {
  if (typeof window === "undefined" || !isInitialized) {
    return;
  }

  try {
    mixpanel.track(eventName, properties);
  } catch (error) {
    console.error("Error tracking event:", error);
  }
}

export function getUTMParams(): Record<string, string> {
  if (typeof window === "undefined") {
    return {};
  }

  const params = new URLSearchParams(window.location.search);
  const utmParams: Record<string, string> = {};

  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  utmKeys.forEach((key) => {
    const value = params.get(key);
    if (value) {
      utmParams[key] = value;
    }
  });

  return utmParams;
}

export function trackUTMParams(): void {
  if (typeof window === "undefined" || !isInitialized) {
    return;
  }

  const utmParams = getUTMParams();

  if (Object.keys(utmParams).length > 0) {
    trackEvent("utm_params_detected", utmParams);

    try {
      mixpanel.people.set(utmParams);
    } catch (error) {
      console.error("Error setting user properties:", error);
    }
  }
}
