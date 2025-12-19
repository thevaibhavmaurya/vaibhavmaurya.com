import { Suspense } from "react";

import { getGitHubContributions } from "@/data/github-contributions";
import { URL_HASH_TYPE } from "@/types";

import { Panel } from "../panel";
import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";

export function GitHubContributions() {
  const contributions = getGitHubContributions();

  return (
    <Panel
      id={URL_HASH_TYPE.GITHUB_CONTRIBUTIONS}
      className="screen-line-after"
    >
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Panel>
  );
}
