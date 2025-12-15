import type { Metadata } from "next";
import { Suspense } from "react";

import { BlogList, PostListWithSearch } from "@/components/blog/blog-list";
import { SearchInput } from "@/components/search-input";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Blogs",
  description: "A list of my blog posts",
};

export default function Page() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-svh">
      <div className="screen-line-after px-4">
        <h1 className="text-3xl font-semibold">Blogs</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          {metadata.description}
        </p>
      </div>

      <div className="screen-line-before screen-line-after p-2">
        <Suspense
          fallback={
            <div className="flex h-9 w-full rounded-lg border border-input shadow-xs dark:bg-input/30" />
          }
        >
          <SearchInput />
        </Suspense>
      </div>

      <Suspense fallback={<BlogList posts={allPosts} />}>
        <PostListWithSearch posts={allPosts} />
      </Suspense>

      <div className="h-4" />
    </div>
  );
}
