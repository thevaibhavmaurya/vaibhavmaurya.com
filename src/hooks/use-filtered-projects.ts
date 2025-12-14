import { normalize } from "path";

import type { Project } from "@/types/project";

import { useSearchQuery } from "./use-search-query";

const matchesQuery = (project: Project, normalizedQuery: string) => {
  const normalizedTitle = normalize(project.title);
  const normalizedDescription = normalize(project.description ?? "");

  return (
    normalizedTitle.includes(normalizedQuery) ||
    normalizedDescription.includes(normalizedQuery)
  );
};

const searchProjects = (projects: Project[], query: string | null) => {
  if (!query) return projects;

  const normalizedQuery = normalize(query);
  return projects.filter((project) => matchesQuery(project, normalizedQuery));
};

export function useFilteredProjects(projects: Project[]) {
  const { query } = useSearchQuery();
  return searchProjects(projects, query);
}
