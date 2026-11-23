export interface Project {
  name: string;
  description: string;
  language: string;
  url: string;
  /** ISO date (YYYY-MM-DD) of the last push */
  updated: string;
  /** Fixed "page" address on the zine sheet, e.g. P101 */
  page?: string;
  /** Honest, short status label shown as a sticker */
  status?: string;
}

export const profile = {
  handle: 'lhuachl',
  name: 'Alex Joshua Villegas Ibanez',
  role: 'Estudiante de sistemas',
  bio: 'Me gusta entender cómo funciona lo que uso: herramientas de reconocimiento, redes y ensamblador.',
  github: 'https://github.com/lhuachl',
  linkedin: 'https://www.linkedin.com/in/alex-joshua-villegas-ibanez-707830384/',
  email: 'lllhuachlll@gmail.com',
};

export const skills = [
  'Ruby',
  'TypeScript',
  'Assembly (NASM x86_64)',
  'Docker',
  'GitHub Actions',
  'Terraform',
  'Ansible',
];

export const projects: Project[] = [
  {
    name: 'carrier-cli',
    description:
      'Orquestador de herramientas de reconocimiento pasivo, escrito en Ruby. Coordina varias herramientas con sus flags para automatizar una fase repetitiva del reconocimiento.',
    language: 'Ruby',
    url: 'https://github.com/lhuachl/carrier-cli',
    updated: '2026-08-21',
    page: 'P101',
    status: 'joven',
  },
  {
    name: 'port_scan',
    description:
      'Escáner de puertos en TypeScript que aprovecha las ventajas del runtime de JavaScript.',
    language: 'TypeScript',
    url: 'https://github.com/lhuachl/port_scan',
    updated: '2026-08-21',
    page: 'P102',
    status: 'pequeño',
  },
  {
    name: 'little-bit-of-asm',
    description:
      'Repositorio donde aprendo ensamblador NASM x86_64 y comparto lo que voy aprendiendo.',
    language: 'Assembly',
    url: 'https://github.com/lhuachl/little-bit-of-asm',
    updated: '2026-08-21',
    page: 'P103',
    status: 'aprendiendo',
  },
];
