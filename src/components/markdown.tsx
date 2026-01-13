import type { ComponentProps } from "react";
import type { Options } from "react-markdown";
import MarkdownComponent, {
  MarkdownAsync as MarkdownAsyncComponent,
} from "react-markdown";
import rehypeExternalLinks from "rehype-external-links";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

import { UTM_PARAMS } from "@/config/site-config";
import { rehypeAddQueryParams } from "@/lib/rehype-add-query-params";

const options: Options = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeRaw,
    [
      rehypeExternalLinks,
      { target: "_blank", rel: "nofollow noopener noreferrer" },
    ],
    [rehypeAddQueryParams, UTM_PARAMS],
  ],
};

export function Markdown(props: ComponentProps<typeof MarkdownComponent>) {
  return <MarkdownComponent {...options} {...props} />;
}

export function MarkdownAsync(
  props: ComponentProps<typeof MarkdownAsyncComponent>
) {
  return <MarkdownAsyncComponent {...options} {...props} />;
}
