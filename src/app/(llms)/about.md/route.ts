import { SOCIAL_LINKS } from "@/data/social-links";
import { USER } from "@/data/user";

const content = `# About

${USER.about.trim()}

## Personal Information

- First Name: ${USER.firstName}
- Last Name: ${USER.lastName}
- Display Name: ${USER.displayName}
- Location: ${USER.address}
- Website: ${USER.website}

## Social Links

${SOCIAL_LINKS.map((item) => `- [${item.title}](${item.href})`).join("\n")}
`;

export const dynamic = "force-static";

export async function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown;charset=utf-8",
    },
  });
}
