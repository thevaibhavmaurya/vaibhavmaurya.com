import type { ProfilePage as PageSchema, WithContext } from "schema-dts";

import { About } from "@/components/about";
import { ContactCTA } from "@/components/contact-cta";
import { Divider } from "@/components/divider";
import { Experiences } from "@/components/experiences";
import { Footer } from "@/components/footer";
import { GitHubContributions } from "@/components/github-contributions";
import { Header } from "@/components/header/header";
import { Overview } from "@/components/overview";
import { ProfileHeader } from "@/components/profile-header";
import { Projects } from "@/components/projects";
import { SocialLinks } from "@/components/social-links";
import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS } from "@/data/projects";
import { SOCIAL_LINKS } from "@/data/social-links";
import { USER } from "@/data/user";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageJsonLd()).replace(/</g, "\\u003c"),
        }}
      />

      <Header />

      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto max-w-3xl *:[[id]]:scroll-mt-22">
          <Divider />
          <ProfileHeader />
          <Divider />

          <Overview />
          <Divider className="before:border-b-0" />

          <SocialLinks />
          <Divider />

          <About />
          <Divider />

          <GitHubContributions />
          <Divider />

          <Experiences />
          <Divider />

          <Projects />
          <Divider hideBeforeBorder={false} />

          <ContactCTA />
          <Divider hideBeforeBorder={false} />
        </div>

        <Footer />
      </main>
    </>
  );
}

function getPageJsonLd(): WithContext<PageSchema> {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: new Date(USER.dateCreated).toISOString(),
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: USER.displayName,
      identifier: USER.username,
      image: USER.avatar,
      url: USER.website,
      jobTitle: USER.jobTitle,
      sameAs: SOCIAL_LINKS.map((link) => link.href),
      worksFor: EXPERIENCES.filter((exp) => exp.isCurrentEmployer).map(
        (exp) => ({
          "@type": "Organization" as const,
          name: exp.title,
          logo: exp.iconImage,
        })
      ),
      alumniOf: EXPERIENCES.filter((exp) => !exp.isCurrentEmployer).map(
        (exp) => ({
          "@type": "Organization" as const,
          name: exp.title,
        })
      ),
    },
    about: PROJECTS.map((project) => ({
      "@type": "CreativeWork" as const,
      name: project.title,
      description: project.description,
      url: project.href,
      image: project.logo,
      keywords: project.skills.join(", "),
    })),
  };
}
