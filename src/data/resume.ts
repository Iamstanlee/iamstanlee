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
        company: 'Rank (YC 22)',
        companyUrl: 'https://userank.com/',
        role: 'Mobile Lead',
        startDate: 'FEB 2025',
        endDate: "PRESENT",
        achievements: [
            "Led the end-to-end redevelopment of Rank’s mobile app, delivering a scalable and maintainable architecture that boosted developer velocity and product stability.",
            "Created a unified design system, improving UI consistency and reducing implementation time for new features by 30%.",
            "Developed a dynamic, backend-driven onboarding and KYC flow, increasing verification success rates and accelerating user onboarding.",
            "Enhanced core savings functionality, leading to a measurable uptick in active usage and retention.",
            "Increased test coverage to 50%, reducing regression bugs and supporting a faster, more reliable release cycle.",
            "Improved performance through strategic caching and optimized remote logging/analytics for better user issue tracking.",
            "Authored technical documentation and onboarding guides, reducing ramp-up time for new developers by 50%."
        ],
    },
    {
        company: 'FeastPass',
        companyUrl: 'https://www.feastpasshq.com/',
        role: 'Software Engineer',
        startDate: 'MAR 2024',
        endDate: 'FEB 2025',
        achievements: [
            "Built and maintained the mobile and web platforms using React Native, React, Next.js, and Node.js.",
            "Designed scalable backend systems with Express.js and Docker, improving performance and deployment reliability.",
            "Enhanced UI/UX across platforms, leading to a 70% improvement in user retention.",
            "Implemented performance monitoring and logging with Sentry & Betterstack, reducing downtime by 99%.",
            "Collaborated cross-functionally to deliver A/B tests, iterative feature rollouts, and customer-driven enhancements."
        ],
    },
    {
        company: 'Bayzat',
        companyUrl: 'https://www.bayzat.com/',
        role: 'Software Engineer (Mobile/Flutter)',
        startDate: 'AUG 2022',
        endDate: 'MAY 2024',
        achievements: [
            "Led the development of a 360-degree performance management system, empowering employee feedback and professional growth.",
            "Streamlined authentication flows, integrating Magic Link to improve UX and boost lead generation.",
            "Developed and optimized features including Payroll, Loans, Surveys, and Third-party integrations.",
            "Migrated legacy code to modern standards and null-safety, improving maintainability and app performance.",
            "Partnered with support teams to troubleshoot user issues, and implemented comprehensive testing and documentation practices."
        ],
    },
    {
        company: 'OurPass',
        companyUrl: 'https://www.ourpass.co/',
        role: 'Mobile Lead',
        startDate: 'APR 2022',
        endDate: 'NOV 2022',
        achievements: [
            "Delivered the first version of the OurPass Business App, enabling over 10,000 businesses to process online and offline payments.",
            "Developed EMV card payment processing and value-added services for the Point-of-Sale system.",
            "Led implementation of QR payments, improved onboarding, and verification workflows.",
            "Established scalable architecture and automated tests, cutting churn and improving code quality.",
            "Managed CI/CD setup and deployment workflows for mobile builds."
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
