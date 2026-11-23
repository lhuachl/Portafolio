import { describe, expect, it } from 'vitest';
import type { Project } from '../../src/data/projects';
import {
  filterByLanguage,
  findBySlug,
  slugify,
  sortByDate,
  uniqueLanguages,
} from '../../src/lib/projects';

const sample: Project[] = [
  { name: 'Alpha App', description: 'a', language: 'Rust', url: 'https://x/a', updated: '2026-01-10' },
  { name: 'beta_tool', description: 'b', language: 'Ruby', url: 'https://x/b', updated: '2026-03-05' },
  { name: 'Gamma', description: 'c', language: 'Rust', url: 'https://x/c', updated: '2026-02-01' },
];

describe('slugify', () => {
  it('convierte nombres a slugs URL-safe', () => {
    expect(slugify('port_scan')).toBe('port-scan');
    expect(slugify('Alpha App')).toBe('alpha-app');
  });

  it('quita acentos y guiones sobrantes', () => {
    expect(slugify('  Árbol Ñandú!! ')).toBe('arbol-nandu');
  });
});

describe('filterByLanguage', () => {
  it('filtra sin distinguir mayúsculas', () => {
    expect(filterByLanguage(sample, 'rust').map((p) => p.name)).toEqual(['Alpha App', 'Gamma']);
  });

  it('devuelve todo si no hay filtro y vacío si no hay coincidencias', () => {
    expect(filterByLanguage(sample, null)).toHaveLength(3);
    expect(filterByLanguage(sample, 'Go')).toEqual([]);
  });
});

describe('sortByDate', () => {
  it('ordena del más reciente al más antiguo', () => {
    expect(sortByDate(sample).map((p) => p.name)).toEqual(['beta_tool', 'Gamma', 'Alpha App']);
  });

  it('no muta el arreglo original', () => {
    const copy = [...sample];
    sortByDate(sample);
    expect(sample).toEqual(copy);
  });
});

describe('uniqueLanguages / findBySlug', () => {
  it('devuelve lenguajes únicos ordenados', () => {
    expect(uniqueLanguages(sample)).toEqual(['Ruby', 'Rust']);
  });

  it('encuentra un proyecto por slug', () => {
    expect(findBySlug(sample, 'beta-tool')?.language).toBe('Ruby');
    expect(findBySlug(sample, 'no-existe')).toBeUndefined();
  });
});
