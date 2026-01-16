"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";

import { trackEvent } from "@/lib/mixpanel";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types";

export function SocialLinkItem({
  iconImage,
  title,
  description,
  href,
}: SocialLink) {
  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors hover:bg-accent2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener"
      onClick={() => {
        trackEvent("social_link_click", {
          social_platform: title,
          social_url: href,
        });
      }}
    >
      <div className="relative size-12 shrink-0">
        <Image
          className="rounded-xl select-none corner-squircle supports-corner-shape:rounded-[50%]"
          src={iconImage ?? ""}
          alt={title}
          width={48}
          height={48}
          quality={100}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 corner-squircle ring-inset dark:ring-white/15 supports-corner-shape:rounded-[50%]" />
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground" />
    </a>
  );
}
