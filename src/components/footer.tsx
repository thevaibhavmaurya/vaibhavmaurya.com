"use client";

import {
  SITE_INFO,
  SOURCE_CODE_GITHUB_URL,
  UTM_PARAMS,
} from "@/config/site-config";
import { trackEvent } from "@/lib/mixpanel";
import { addQueryParams } from "@/lib/url";

export function Footer() {
  return (
    <footer className="overflow-x-hidden">
      <div className="screen-line-after mx-auto space-y-4 border-x border-edge pt-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Design inspired by{" "}
          <a
            className="link"
            href={addQueryParams("https://chanhdai.com/", UTM_PARAMS)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("footer_link_click", {
                link_type: "chanhdai",
              });
            }}
          >
            Chanhdai
          </a>{" "}
          · Lightweight adaptation
        </p>

        <p className="px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/hevaibhavmaurya"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("footer_link_click", {
                link_type: "twitter",
              });
            }}
          >
            Vaibhav
          </a>
          . Source code available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("footer_link_click", {
                link_type: "github",
              });
            }}
          >
            GitHub
          </a>
          .
        </p>

        {/* Subtle utility links */}
        <p className="screen-line-before px-4 py-2 text-center font-mono text-xs text-muted-foreground">
          <a
            href={`${SITE_INFO.url}/llms.txt`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackEvent("footer_link_click", {
                link_type: "llms_txt",
              });
            }}
          >
            AI usage policy (llms.txt)
          </a>
        </p>
      </div>

      <div className="flex h-2" />
    </footer>
  );
}
