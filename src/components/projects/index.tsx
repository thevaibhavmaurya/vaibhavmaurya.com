import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

import { PROJECTS } from "@/data/projects";

import { Panel, PanelHeader, PanelTitle } from "../panel";
import { Button } from "../ui/button";
import { ProjectItem } from "./project-item";

export function Projects({ projectsLength = 4 }: { projectsLength?: number }) {
  const isPostMore = useMemo(
    () => projectsLength < PROJECTS.length,
    [projectsLength]
  );
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <div className="grid grid-cols-1">
        {PROJECTS.slice(0, projectsLength).map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>

      {isPostMore && (
        <div className="screen-line-before flex justify-center py-2">
          <Button variant="default" asChild>
            <Link href="/projects">
              All Projects
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
      )}
    </Panel>
  );
}
