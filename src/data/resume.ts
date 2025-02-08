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

export type Recommendation = {
    user: Recommender;
    feedback: string;
};

type Recommender = {
    name: string;
    role: string;
    profilePicUrl: string;
    linkedInUrl: string;
}

type Tagline = {
    icon: string;
    title: string;
    text: string;
}


export interface Resume {
    name: string;
    title: string;
    intro: string;
    taglines?: Tagline[];
    workExperiences: WorkExperience[];
    skills: Skill[];
    educations: Education[];
    languages: Language[];
    hobbies: string[];
    recommendations?: Recommendation[];
}

const name = 'Stanley Akpama';

const title = 'Software Engineer';

const intro = "Experienced full-stack software engineer with 5+ years of expertise in designing and developing scalable, high-performance products that drive business growth and deliver exceptional user experiences.";

const taglines: Tagline[] = [
    {
        icon: 'fa-rocket',
        title: 'Outcome & Product Driven',
        text: 'I make sure my work drives value for users and businesses.',
    },
    {
        icon: 'fa-check',
        title: 'Gets shit done',
        text: 'I am adept at meeting tight deadlines and delivering high-quality results.',
    },
    {
        icon: 'fa-users',
        title: 'Team Player',
        text: 'I thrive in collaborative environments, working effectively with stakeholders.',
    }
]

const workExperiences: WorkExperience[] = [
    {
        company: 'FeastPass',
        companyUrl: 'https://www.feastpasshq.com/',
        role: 'Software Engineer',
        startDate: 'MAR 2024',
        endDate: 'FEB 2025',
        achievements: [
            'Led the end-to-end development of FeastPass\'s mobile and web platforms, delivering a seamless food discovery and discount experience using ReactNative, React, Next.js, and Node.js.',
            'Architected scalable backend solutions with Node.js and Express.js, implementing RESTful APIs to power high-performance mobile and web applications.',
            'Optimised deployment pipelines with Docker, achieving faster, reliable application releases and ensuring consistent performance across production and staging environments.',
            'Enhanced user engagement by designing and implementing responsive, intuitive UI/UX for both mobile and web platforms, improving user retention metrics by 70%.\n' +
            'Implemented robust application performance monitoring and logging systems using Sentry & Betterstack, enabling proactive issue detection, reducing downtime by 99%, and ensuring a smooth user experience.',
            'Collaborated with cross-functional teams to deliver A/B testing, feature rollouts, and bug fixes, ensuring high-quality releases and improving customer satisfaction ratings by 30%.',
        ],
    },
    {
        company: 'Bayzat',
        companyUrl: 'https://www.bayzat.com/',
        role: 'Software Engineer',
        startDate: 'AUG 2022',
        endDate: 'MAY 2024',
        achievements: [
            'Spearheaded the implementation of a comprehensive 360-degree performance management feature, empowering employees to undergo thorough reviews and receive actionable feedback for continuous professional development.',
            'Optimized authentication flow through meticulous improvement and refactoring, while implementing Magic Link authentication to enhance user experience and drive lead generation.',
            'Innovated and refined multiple features such as Payroll, Loan Requests, Company Surveys & Employee Engagement, and Third-party Service Integrations, which significantly elevated customer satisfaction levels.',
            'Collaborated effectively with team members to implement a scalable architecture, best practices and 100% migration of legacy code to null-safety and modern standards. Resulting in improved performance and enhanced development experience.',
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
            'Pioneered the first successful version of the OurPass business app, empowering over 10000 businesses to seamlessly process online and offline payments.',
            'Collaborated with a cross-functional team in the development and implementation of EMV(Europay, Mastercard, and Visa standard) card payment processing and additional value-added services for OurPass point-of-sale app.',
            'Worked closely with product owners to identify, plan, and deliver new features, such as QR payments, point-of-sale integration, and improved onboarding and verification process.',
            'Implemented a scalable architecture and added automated tests to improve code quality, resulting in a reduction in bug reports and customer turnover (churn rate).',
            'Set up and managed CI/CD pipeline and deployments.',
        ],
    },
    {
        company: 'Kivifood',
        role: 'Cofounder/Software Engineer',
        startDate: 'APR 2021',
        endDate: 'MAR 2022',
        achievements: [
            'Managed a team of 4 people and led the development of a food delivery product for merchants and customers',
            'Developed a simple alerting system integrated with Slack which allowed us to distribute incident information to both customers and the operations team, increasing the efficiency of our day-to-day operations',
            'Implemented an image optimization pipeline that resizes, compresses, and caching images via CDN. Which increased app performance by 67%.',
            'Set up and managed CI/CD pipeline and deployments.',
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
        body: ['Javascript/Typescript', 'Dart', 'Swift', 'Solidity'],
    },
    {
        title: 'Mobile',
        body: ['Flutter', 'React native', 'Swift UI'],
    },
    {
        title: 'Frontend',
        body: ['HTML/CSS', 'Reactjs', 'Nextjs', 'Ethers.js'],
    },
    {
        title: 'Tooling',
        body: ['Xcode', 'Android studio', 'Git/Github', 'Codemagic', 'Fastlane', 'Hardhat', 'Foundry'],
    },
    {
        title: 'Others',
        body: ['NodeJS', 'Docker', 'Postgresql', 'Graphql', 'Firebase', 'Ethereum'],
    },
];

const educations: Education[] = [
    {
        title: 'B.Eng Computer Engineering at University Of Benin, Nigeria',
        startDate: 'JAN 2018',
        endDate: 'JAN 2022',
        relevant: [
            'Software Engineering',
            'Computer Networks',
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
        level: 'LEARNING :)',
    },
];

const hobbies = ['Music', 'Gaming'];

const recommendations: Recommendation[] = [
    {
        user: {
            name: 'Adie Akuffo-Afful',
            role: 'CEO at FeastPass',
            profilePicUrl: '/review1.png',
            linkedInUrl: 'https://linkedin.com/in/adieakuffo'
        },
        feedback: 'I\'ve worked with Stanley for the last 7 months, having witnessed his talent rise to a leader who was instrumental throughout our product development. During our project, he took initiative on many team tasks and was pivotal in hitting their deadlines. His product analysis was spot on. Stanley\'s personability, drive, and product development skills make him an amazing addition to any team.'
    },
    {
        user: {
            name: 'M. Tarık Yurt',
            role: 'VP of Engineering at Bayzat',
            profilePicUrl: '/review2.png',
            linkedInUrl: 'https://www.linkedin.com/in/mtyurt'
        },
        feedback: 'We had a good time with Stanley in Bayzat during his tenure. He was part of the mobile team developing Bayzat\'s Flutter based mobile application. He is self sufficient, doesn\'t need much of a managing, he can accomplish given tasks without overseeing. His mobile development skills were on-par with Bayzat\'s multi-module complex structure.',
    },
    {
        user: {
            name: 'Jeffrey Adu-Donkor',
            role: 'Product Designer',
            profilePicUrl: '/review3.png',
            linkedInUrl: 'https://linkedin.com/in/jeffreyafrane'
        },
        feedback: 'Stanley\'s ability to translate design concepts into seamless, functional experiences was exceptional. His attention to detail, communication skills, and willingness to iterate made him an invaluable partner in our product development process.'
    },
];

export const resume: Resume = {
    name,
    title,
    intro,
    taglines,
    workExperiences,
    skills,
    educations,
    languages,
    hobbies,
    recommendations
};
