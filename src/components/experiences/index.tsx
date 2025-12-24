import { EXPERIENCES } from "@/data/experiences";
import { URL_HASH_TYPE } from "@/types";

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <Panel id={URL_HASH_TYPE.EXPERIENCES}>
      <PanelHeader>
        <PanelTitle>
          Experiences
          <PanelTitleSup>({EXPERIENCES.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      <div className="pr-2 pl-4 *:[[id]]:scroll-mt-14">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.id}
            experience={experience}
            fallbackImage={"/images/experience.webp"}
          />
        ))}
      </div>
    </Panel>
  );
}
