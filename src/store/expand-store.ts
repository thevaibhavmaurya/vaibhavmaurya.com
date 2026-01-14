"use client";

import { create } from "zustand";

import { EXPERIENCES } from "@/data/experiences";
import { PROJECTS } from "@/data/projects";

interface ExpandStore {
  expandedExperienceIds: Set<string>;
  expandedProjectIds: Set<string>;
  expandExperience: (id: string) => void;
  expandProject: (id: string) => void;
  collapseExperience: (id: string) => void;
  collapseProject: (id: string) => void;
  isExperienceExpanded: (id: string) => boolean;
  isProjectExpanded: (id: string) => boolean;
}

function getInitialExpandedExperiences(): Set<string> {
  const expanded = new Set<string>();
  EXPERIENCES.forEach((experience) => {
    experience.positions.forEach((position) => {
      if (position.isExpanded) {
        expanded.add(position.id);
      }
    });
  });
  return expanded;
}

function getInitialExpandedProjects(): Set<string> {
  const expanded = new Set<string>();
  PROJECTS.forEach((project) => {
    if (project.isExpanded) {
      expanded.add(project.id);
    }
  });
  return expanded;
}

export const useExpandStore = create<ExpandStore>((set, get) => ({
  expandedExperienceIds: getInitialExpandedExperiences(),
  expandedProjectIds: getInitialExpandedProjects(),

  expandExperience: (id: string) => {
    set({
      expandedExperienceIds: new Set([id]),
      expandedProjectIds: get().expandedProjectIds,
    });
  },

  expandProject: (id: string) => {
    set({
      expandedProjectIds: new Set([id]),
      expandedExperienceIds: get().expandedExperienceIds,
    });
  },

  collapseExperience: (id: string) => {
    const current = get().expandedExperienceIds;
    const updated = new Set(current);
    updated.delete(id);
    set({
      expandedExperienceIds: updated,
      expandedProjectIds: get().expandedProjectIds,
    });
  },

  collapseProject: (id: string) => {
    const current = get().expandedProjectIds;
    const updated = new Set(current);
    updated.delete(id);
    set({
      expandedProjectIds: updated,
      expandedExperienceIds: get().expandedExperienceIds,
    });
  },

  isExperienceExpanded: (id: string) => {
    return get().expandedExperienceIds.has(id);
  },

  isProjectExpanded: (id: string) => {
    return get().expandedProjectIds.has(id);
  },
}));
