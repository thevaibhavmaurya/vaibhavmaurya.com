"use client";

import { MailIcon, SendIcon } from "lucide-react";

import { useContactEmail } from "@/hooks/use-contact-email";
import { trackEvent } from "@/lib/mixpanel";
import { URL_HASH_TYPE } from "@/types";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { Button } from "./ui/button";

export function ContactCTA() {
  const { mailtoLink, email } = useContactEmail();

  return (
    <Panel id={URL_HASH_TYPE.CONTACT}>
      <PanelHeader>
        <PanelTitle>Get in Touch</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-edge bg-gradient-to-br from-primary/5 via-transparent to-primary/5 p-8 text-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary ring-4 ring-primary/5">
            <MailIcon className="size-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Let&apos;s Work Together</h3>
            <p className="mx-auto max-w-md text-balance text-muted-foreground">
              Have a project in mind or want to discuss opportunities? I&apos;d
              love to hear from you. Drop me an email and let&apos;s start a
              conversation!
            </p>
          </div>

          <Button asChild size="lg" className="group relative overflow-hidden">
            <a
              href={mailtoLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackEvent("contact_email_click", {
                  email_type: "cta_button",
                });
              }}
            >
              <SendIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              Send me an Email
            </a>
          </Button>

          <p className="text-sm text-muted-foreground">
            or reach out directly at{" "}
            <a
              href={mailtoLink}
              className="font-medium text-foreground underline-offset-4 hover:underline"
              onClick={() => {
                trackEvent("contact_email_click", {
                  email_type: "email_link",
                });
              }}
            >
              {email}
            </a>
          </p>
        </div>
      </PanelContent>
    </Panel>
  );
}
