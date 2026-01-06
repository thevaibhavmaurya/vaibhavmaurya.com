import { Markdown } from "@/components/markdown";
import { USER } from "@/data/user";
import { URL_HASH_TYPE } from "@/types";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { ProseMono } from "./ui/typography";

export function About() {
  return (
    <Panel id={URL_HASH_TYPE.ABOUT} className="screen-line-after">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ProseMono>
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </PanelContent>
    </Panel>
  );
}
