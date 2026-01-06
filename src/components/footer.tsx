import { SOURCE_CODE_GITHUB_URL, UTM_PARAMS } from "@/config/site-config";
import { addQueryParams } from "@/lib/url";

export function Footer() {
  return (
    <footer className="overflow-x-hidden px-2">
      <div className="screen-line-after mx-auto border-x border-edge py-4 md:max-w-3xl">
        <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Design inspired by{" "}
          <a
            className="link"
            href={addQueryParams("https://chanhdai.com/", UTM_PARAMS)}
            target="_blank"
            rel="noopener"
          >
            Chanhdai
          </a>
          . Lightweight adaptation
        </p>

        <p className="px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="link"
            href="https://x.com/hevaibhavmaurya"
            target="_blank"
            rel="noopener"
          >
            Vaibhav
          </a>
          . Source code available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <div className="flex h-2" />
    </footer>
  );
}
