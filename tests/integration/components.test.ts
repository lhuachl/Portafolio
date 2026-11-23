import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { beforeAll, describe, expect, it } from 'vitest';
import Contact from '../../src/components/Contact.astro';
import ProjectCard from '../../src/components/ProjectCard.astro';
import ProjectList from '../../src/components/ProjectList.astro';
import { profile, projects, type Project } from '../../src/data/projects';
import IndexPage from '../../src/pages/index.astro';

let container: AstroContainer;

beforeAll(async () => {
  container = await AstroContainer.create();
});

const project: Project = {
  name: 'demo_repo',
  description: 'Un repo de prueba',
  language: 'Rust',
  url: 'https://github.com/example/demo_repo',
  updated: '2026-05-01',
};

describe('ProjectCard', () => {
  it('muestra nombre, descripción y lenguaje', async () => {
    const html = await container.renderToString(ProjectCard, { props: { project } });
    expect(html).toContain('demo_repo');
    expect(html).toContain('Un repo de prueba');
    expect(html).toContain('Rust');
  });

  it('enlaza al detalle interno y al repositorio externo de forma segura', async () => {
    const html = await container.renderToString(ProjectCard, { props: { project } });
    expect(html).toContain('href="/projects/demo-repo"');
    expect(html).toContain('href="https://github.com/example/demo_repo"');
    expect(html).toContain('rel="noopener noreferrer"');
  });
});

describe('ProjectList', () => {
  it('renderiza una tarjeta por proyecto', async () => {
    const html = await container.renderToString(ProjectList, { props: { projects } });
    expect(html.match(/class="card"/g)).toHaveLength(projects.length);
  });

  it('ordena por fecha: primero el más reciente', async () => {
    const html = await container.renderToString(ProjectList, {
      props: {
        projects: [
          { ...project, name: 'viejo', updated: '2020-01-01' },
          { ...project, name: 'nuevo', updated: '2026-01-01' },
        ],
      },
    });
    expect(html.indexOf('nuevo')).toBeLessThan(html.indexOf('viejo'));
  });
});

describe('Contact + página de inicio', () => {
  it('Contact incluye el enlace mailto', async () => {
    const html = await container.renderToString(Contact);
    expect(html).toContain(`mailto:${profile.email}`);
  });

  it('la home contiene las secciones hero, proyectos, habilidades y contacto', async () => {
    const html = await container.renderToString(IndexPage);
    for (const id of ['hero-title', 'proyectos', 'habilidades', 'contacto']) {
      expect(html).toContain(`id="${id}"`);
    }
  });
});
