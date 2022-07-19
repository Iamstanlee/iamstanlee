export type Project = {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  website?: string;
  appstore?: string;
  playstore?: string;
};

export const projects: Project[] = [
  {
    name: 'Expense Bud',
    description: 'An app to keep of track your expenses and stay on top of your game with detailed insights 🚀',
    technologies: ['Flutter'],
    github: 'https://github.com/Iamstanlee/expense_bud',
    playstore: 'https://play.google.com/store/apps/details?id=com.app.expense_bud',
  },
  {
    name: 'Kivifood (user)',
    description: 'An app allowing users to order food from the comfort of their homes',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
    github: 'https://github.com/Iamstanlee/expense_bud',
    playstore: 'https://play.google.com/store/apps/details?id=com.kivifood.app',
    appstore: 'https://apps.apple.com/us/app/kivi-food/id1588631598',
  },
  {
    name: 'Kivifood (business)',
    description: 'An app allowing businesses to manage their food orders, receive payments and manage their inventory',
    technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
    playstore: 'https://play.google.com/store/apps/details?id=com.kivifood.vendor',
    appstore: 'https://apps.apple.com/us/app/kivifood-vendor/id1588656247',
  },
  {
    name: 'Linkfy Text',
    description:
      'A lightweight flutter package to linkify texts containing urls, emails and hashtags like twitter does',
    technologies: ['Flutter'],
    github: 'https://github.com/Iamstanlee/linkfy_text',
  },
  {
    name: 'Safebox Energy',
    description: 'An ecommerce app for safebox energy',
    technologies: ['ReactJS'],
    website: 'https://safeboxenergy.com',
  },
];
