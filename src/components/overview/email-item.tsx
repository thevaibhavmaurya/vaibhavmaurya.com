"use client";

import { MailIcon } from "lucide-react";

import { useContactEmail } from "@/hooks/use-contact-email";

import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item";

export function EmailItem() {
  const { email: emailDecoded } = useContactEmail();

  return (
    <IntroItem>
      <IntroItemIcon>
        <MailIcon />
      </IntroItemIcon>

      <IntroItemContent>
        <IntroItemLink
          href={`mailto:${emailDecoded}`}
          aria-label={`Send email to ${emailDecoded}`}
        >
          {emailDecoded}
        </IntroItemLink>
      </IntroItemContent>
    </IntroItem>
  );
}
