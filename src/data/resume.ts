export type WorkExperience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  achievements: string[];
};

export type Skill = {
  title: string;
  body: string[];
};

export type Education = {
  title: string;
  startDate: string;
  endDate: string;
  relevant: string[];
};

export type Certification = {
  title: string;
  date: string;
};

export type Language = {
  name: string;
  level: string;
};

export interface Resume {
  name: string;
  title: string;
  intro: string;
  workExperiences: WorkExperience[];
  skills: Skill[];
  educations: Education[];
  languages: Language[];
  hobbies: string[];
}

const name = 'Stanley Akpama';

const title = 'Software Engineer';

const intro =
  "I'm a product minded software engineer with experience in mobile and frontend development,  I enjoy working on products that improve people's lives. I'm constantly looking for ways to make products better and more efficient, and I love working with a team to bring a product from concept to completion.";

const workExperiences: WorkExperience[] = [
  {
    company: 'OurPass',
    role: 'Mobile Engineer',
    startDate: 'APR 2022',
    endDate: '',
    achievements: [
      'Led development of OurPass Business App enabling 4000+ businesses to receive online and offline payments',
      'Setup and managed CI/CD pipeline and deployments',
      'Improved code quality by implementing a scalable architecture and adding automated tests, outcome: - Reduced bug reports and customer turnover(churn rate)',
      "Collaborated with product owners to identify, plan and deliver new features, Including but not limited to QR payment, POS integration, improved onboarding and verification process",
    ],
  },
  {
    company: 'Kivifood',
    role: 'Cofounder/Software Engineer',
    startDate: 'APR 2021',
    endDate: 'MAR 2022',
    achievements: [
      'Managed a team of 4 people and led the development of a food delivery product for merchants and customers',
      'Implemented a simple alerting system integrated with Slack which allowed us to distribute incident information to both customers and the operations team, increasing the efficiency of our day-to-day operations',
      'Integrated and setup CI/CD pipeline to automate testing and deployment to app stores',
      'Improved our image load time by 67% by implementing an image optimization pipeline that resizes, compresses, and caches images.',
    ],
  },
  {
    company: 'Uptone',
    role: 'Mobile Engineer',
    startDate: 'MAY 2021',
    endDate: 'JUNE 2021',
    achievements: ['Feature and UI implementation'],
  },
  {
    company: 'Gofast International Projects Ltd',
    role: 'Software Developer',
    startDate: 'JAN 2020',
    endDate: 'OCT 2020',
    achievements: [
      'Rebuilt the gofast mobile payment app, Implementing a new design, payment flow and overall architecture',
      'Built an internal admin panel for tracking app metrics and KPIs such as Acquisition, Engagement, Payments & Transactions',
      'Implemented a minimal support ticketing and dispute resolution system',
    ],
  },
];

const skills: Skill[] = [
  {
    title: 'Languages',
    body: ['Dart', 'Kotlin', 'JavaScript/TypeScript'],
  },
  {
    title: 'Mobile',
    body: ['Flutter', 'React Native', 'Jetpack Compose'],
  },
  {
    title: 'Frontend',
    body: ['HTML/CSS', 'React', 'Nextjs'],
  },
  {
    title: 'Tooling',
    body: ['Linux', 'Git', 'Github Action', 'Codemagic', 'Jenkins', 'Circle CI'],
  },
  {
    title: 'Others',
    body: ['REST API', 'Graphql', 'Firebase', 'GCP'],
  },
];

const educations: Education[] = [
  {
    title: 'B.Sc Computer Engineering at Universify of Benin, Edo state',
    startDate: 'JAN 2018',
    endDate: 'PRESENT',
    relevant: [
      'Introduction to Computing',
      'Data Structures and Algorithms',
      'Object Oriented Programming',
      'Telecommunication principles',
      'Computer Architecture and Organization',
    ],
  },
];

const languages: Language[] = [
  {
    name: 'English',
    level: 'PROFICIENT',
  },
  {
    name: 'Spanish',
    level: 'LEARNING',
  },
];

const hobbies = ['Music', 'Gaming'];

export const resume: Resume = {
  name,
  title,
  intro,
  workExperiences,
  skills,
  educations,
  languages,
  hobbies,
};
