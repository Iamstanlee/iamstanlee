export type Project = {
  name: string;
  description: string;
  technologies: string[];
  links: ProjectLink[];
};

type ProjectLink = {
  name: 'github' | 'website' | 'appstore' | 'playstore';
  url: string;
};

export const projects: Project[] = [
  {
    name: 'Expense Bud',
    description: 'An app that helps users track their expenses and provides detailed insights to help them stay on top of their finances. 🚀',
    technologies: ['Flutter'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/Iamstanlee/expense_bud',
      },
      {
        name: 'playstore',
        url: 'https://play.google.com/store/apps/details?id=com.app.expense_bud',
      },
    ],
  },
  {
    name: 'Kivifood',
    description: 'An app that enables users to order food for delivery or pickup from local restaurants from the convenience of their own homes.',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
    links: [
      {
        name: 'playstore',
        url: 'https://play.google.com/store/apps/details?id=com.kivifood.app',
      },
      {
        name: 'appstore',
        url: 'https://apps.apple.com/us/app/kivi-food/id1588631598',
      },
    ],
  },
  {
    name: 'Kivifood (vendor app)',
    description: 'An app that allows businesses to easily manage food orders, accept payments, and keep track of their inventory.',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
    links: [
      {
        name: 'playstore',
        url: 'https://play.google.com/store/apps/details?id=com.kivifood.vendor',
      },
      {
        name: 'appstore',
        url: 'https://apps.apple.com/us/app/kivifood-vendor/id1588656247',
      },
    ],
  },
  {
    name: 'Linkfy Text',
    description:
      'A lightweight Flutter package that can identify and convert URLs, emails, and hashtags in a text string into clickable links, similar to the way Twitter handles them.',
    technologies: ['Flutter'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/Iamstanlee/linkfy_text',
      },
    ],
  },
  {
    name: 'Pokedex',
    description: 'A Pokedex App: Demonstrating Layered Architecture, Separation of Concerns, and Thorough Testing.',
    technologies: ['Flutter'],
    links: [
      {
        name: 'github',
        url: 'https://github.com/iamstanlee/pokedex',
      },
    ],
  },
];
