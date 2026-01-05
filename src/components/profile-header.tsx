import { USER } from "@/data/user";
import { URL_HASH_TYPE } from "@/types";

import { IndiaFlagIcon } from "./icons/india-flag-icon";
import { VerifiedIcon } from "./icons/verified-icon";
import { Panel } from "./panel";
import { FlipSentences } from "./ui/flip-sentences";

export function ProfileHeader() {
  return (
    <Panel
      id={URL_HASH_TYPE.PROFILE}
      className="screen-line-after flex border-x border-edge"
    >
      <div className="relative shrink-0 border-r border-edge">
        <div className="mx-0.5 my-[3px]">
          <img
            className="size-32 rounded-full ring-1 ring-edge ring-offset-2 ring-offset-background select-none sm:size-40"
            alt={`${USER.displayName}'s avatar`}
            src={USER.avatar}
            fetchPriority="high"
          />
        </div>
        <a
          href="https://www.india.gov.in/explore-india"
          target="_blank"
          rel="noreferrer"
          className="absolute top-0 left-0"
        >
          <IndiaFlagIcon className="h-6 md:h-8" />
        </a>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex grow items-end pb-1 pl-4">
          <div className="line-clamp-1 font-mono text-xs text-zinc-300 select-none max-sm:hidden dark:text-zinc-800">
            {"text-3xl "}
            <span className="inline dark:hidden">text-zinc-950</span>
            <span className="hidden dark:inline">text-zinc-50</span>
            {" font-medium"}
          </div>
        </div>

        <div className="border-t border-edge">
          <div className="flex items-center gap-2 pl-4">
            <h1 className="-translate-y-px text-xl font-semibold md:text-3xl">
              {USER.displayName}
            </h1>

            <VerifiedIcon
              className="size-4.5 text-blue-400 select-none"
              aria-label="Verified"
            />
          </div>

          <div className="h-12.5 border-t border-edge py-1 pl-4 sm:h-9">
            <FlipSentences
              className="font-mono text-sm text-balance text-muted-foreground"
              variants={{
                initial: { y: -10, opacity: 0 },
                animate: { y: -1, opacity: 1 },
                exit: { y: 10, opacity: 0 },
              }}
            >
              {USER.headlines}
            </FlipSentences>
          </div>
        </div>
      </div>
    </Panel>
  );
}
