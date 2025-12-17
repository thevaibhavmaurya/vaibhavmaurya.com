import { About } from "@/components/about";
import { Divider } from "@/components/divider";
import { Experiences } from "@/components/experiences";
import { GitHubContributions } from "@/components/github-contributions";
import { Overview } from "@/components/overview";
import { ProfileHeader } from "@/components/profile-header";
import { Projects } from "@/components/projects";
import { SocialLinks } from "@/components/social-links";

export default function Home() {
  return (
    <>
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
    </>
  );
}
