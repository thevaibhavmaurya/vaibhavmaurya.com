import { USER } from "@/data/user";

export function useContactEmail() {
  const decodedEmail = atob(USER.email);

  const emailSubject = encodeURIComponent("Let's Connect!");
  const emailBody = encodeURIComponent(
    `Hi ${USER.displayName},\n\nI came across your portfolio and would love to connect with you.\n\n`
  );

  return {
    email: decodedEmail,
    mailtoLink: `mailto:${decodedEmail}?subject=${emailSubject}&body=${emailBody}`,
  };
}
