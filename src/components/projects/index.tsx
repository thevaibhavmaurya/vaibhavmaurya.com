import { PROJECTS } from "@/data/projects";
import { URL_HASH_TYPE } from "@/types";

import { CollapsibleList } from "../collapsible-list";
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

      <CollapsibleList
        items={PROJECTS}
        max={4}
        renderItem={(item) => <ProjectItem project={item} />}
      />
    </Panel>
  );
}
