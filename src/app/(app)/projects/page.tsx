import type { Metadata } from "next";

import { PageHeading } from "@/components/page-heading";
import { ProjectItem } from "@/components/projects/project-item";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A list of my projects",
};

export default function Page() {
  return (
    <div className="min-h-svh border">
      <PageHeading title="Projects" description={metadata.description} />
      <div className="grid grid-cols-1">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
