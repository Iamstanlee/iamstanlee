export type WorkExperience = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    achievements: string[];
    companyUrl?: string;
    jobDescription?: string;
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
    'As a product-focused software engineer, I am dedicated to creating intuitive and user-friendly applications. My background in computer engineering and diverse industry experience has allowed me to develop a strong skill set in delivering high-quality software that addresses the needs of both users and businesses. I am constantly seeking opportunities for personal and professional growth, and strive to make a positive impact through my work.';

const workExperiences: WorkExperience[] = [
    {
        company: 'Bayzat',
        companyUrl: 'https://www.bayzat.com/',
        role: 'Software Engineer',
        startDate: 'AUG 2022',
        endDate: '',
        achievements: [
            'Developed and iterated on Bayzat’s mobile app features, including Payroll, Work Expense, Loan Request, Company Survey, Employee Engagement and Third-party Service Integrations, resulting in increased customer satisfaction.',
            'Collaborated effectively with team members to implement a scalable architecture, best practices and 100% migration of legacy code to null-safety., resulting in improved performance, faster load time.',
            'Proactively resolved user-facing issues in close collaboration with the customer success team, ensuring a seamless experience for customers.',
            'Implemented comprehensive test suites to ensure the accuracy, validity, and performance of work delivered.',
            'Authored clear and concise documentations to facilitate knowledge sharing among fellow engineers, enabling more efficient development processes.',
        ],
    },
    {
        company: 'OurPass',
        companyUrl: 'https://www.ourpass.co/',
        role: 'Lead Mobile Engineer',
        startDate: 'APR 2022',
        endDate: 'NOV 2022',
        achievements: [
            'Led development of OurPass business application enabling 4000+ businesses to receive online and offline payments.',
            'Collaborated with cross-functional team members in the development and implementation of EMV(Europay, Mastercard, and Visa standard) card payment processing and additional value-added services for OurPass point-of-sale application.',
            'Worked closely with product owners to identify, plan, and deliver new features, such as QR payments, point-of-sale integration, and improved onboarding and verification process.',
            'Implemented a scalable architecture and added automated tests to improve code quality, resulting in a reduction in bug reports and customer turnover (churn rate).',
            'Set up and managed the CI/CD pipeline and deployments.',
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
            'Improved our image load time by 67% by implementing an image optimization pipeline that resizes, compresses, and caches images.',
            'Set up and managed the CI/CD pipeline and deployments.',
        ],
    },
    {
        company: 'Gofast International Projects Ltd',
        role: 'Software Developer',
        startDate: 'JAN 2020',
        endDate: 'OCT 2020',
        achievements: [
            'Rebuilt the gofast mobile payment app, Implementing a new design, payment flow and overall architecture.',
            'Built an internal admin panel for tracking app metrics and KPIs such as Acquisition, Engagement, Payments & Transactions.',
            'Implemented a minimal support ticketing and dispute resolution system.',
        ],
    },
];

const skills: Skill[] = [
    {
        title: 'Languages',
        body: ['Dart', 'Kotlin', 'Swift', 'Typescript', 'Solidity'],
    },
    {
        title: 'Mobile',
        body: ['Flutter', 'React-native', 'Jetpack compose', 'SwiftUI'],
    },
    {
        title: 'Frontend',
        body: ['HTML/CSS', 'Reactjs', 'Nextjs', 'Tailwind', 'Ether.js', 'web3js'],
    },
    {
        title: 'Tooling',
        body: ['Xcode', 'Android studio', 'Git', 'Github action', 'Bitrise', 'Codemagic', 'Hardhat'],
    },
    {
        title: 'Others',
        body: ['REST API', 'Graphql', 'Firebase', 'Ethereum'],
    },
];

const educations: Education[] = [
    {
        title: 'B.Eng Computer Engineering at University Of Benin, Nigeria',
        startDate: 'JAN 2018',
        endDate: 'JAN 2022',
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
