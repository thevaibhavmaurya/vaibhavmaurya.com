import { Markdown } from "@/components/markdown/markdown";
import { USER } from "@/data/user";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";
import { ProseMono } from "./ui/typography";

export function About() {
  return (
    <Panel id="about">
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
