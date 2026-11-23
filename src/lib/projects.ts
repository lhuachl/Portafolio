import type { Project } from '../data/projects';

export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function filterByLanguage(projects: Project[], language: string | null): Project[] {
  if (!language) return projects;
  return projects.filter((p) => p.language.toLowerCase() === language.toLowerCase());
}

/** Most recently updated first. Does not mutate the input. */
export function sortByDate(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => b.updated.localeCompare(a.updated));
}

export function uniqueLanguages(projects: Project[]): string[] {
  return [...new Set(projects.map((p) => p.language))].sort((a, b) => a.localeCompare(b));
}

export function findBySlug(projects: Project[], slug: string): Project | undefined {
  return projects.find((p) => slugify(p.name) === slug);
}
