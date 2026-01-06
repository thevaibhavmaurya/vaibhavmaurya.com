import { PROJECTS } from "@/data/projects";
import { URL_HASH_TYPE } from "@/types";

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id={URL_HASH_TYPE.PROJECTS}>
      <PanelHeader>
        <PanelTitle>
          Projects
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="*:[[id]]:scroll-mt-14">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </Panel>
  );
}
