export type Project = {
    name: string;
    description: string;
    technologies: Tech[];
    links: ProjectLink[];
};

type Tech = {
    name: string;
    badgeColor: string;
}

const flutter: Tech = {name: 'Flutter', badgeColor: '#0468d7'};
const react: Tech = {name: 'React', badgeColor: '#0a0a0a'};
const nextjs: Tech = {name: 'Nextjs', badgeColor: '#0a0a0a'};
const nodejs: Tech = {name: 'Nodejs', badgeColor: '#84BA64'};
const reactnative: Tech = {name: 'ReactNative', badgeColor: '#61dafb'};
const web3: Tech = {name: 'Web3', badgeColor: '#10a37f'};
const docker: Tech = {name: 'Docker', badgeColor: '#0468d7'};
const aws: Tech = {name: 'AWS', badgeColor: '#fb923c'};

type ProjectLink = {
    name: 'github' | 'web' | 'iOS' | 'android';
    url: string;
};

export const projects: Project[] = [
    {
        name: 'Relett',
        description: 'Seamless Property Management Platform for African Entrepreneurs.',
        technologies: [react, nextjs, nodejs],
        links: [
            {
                name: 'web',
                url: 'https://v2.relett.com',
            },
        ],
    },
    {
        name: 'FeastPass',
        description: 'Most flexible, community engagement and rewards platform helping local vendors boost in-store sales by engaging customers through experiences, content, and discounts.',
        technologies: [nextjs, reactnative, nodejs, docker, aws],
        links: [
            {
                name: 'web',
                url: 'https://www.feastpass.com',
            },
            {
                name: 'iOS',
                url: 'https://apps.apple.com/us/app/feastpass/id6648766795'
            },
            {
                name: 'android',
                url: 'https://play.google.com/store/apps/details?id=com.feastpass'
            },
        ],
    },
    {
        name: 'Expense Bud',
        description: 'Empowers users to track expenses and gain detailed insights, fostering better financial control and decision-making.',
        technologies: [flutter],
        links: [
            {
                name: 'github',
                url: 'https://github.com/iamstanlee/expense_bud',
            },
        ],
    },
    {
        name: 'Flutter Inapp inspector',
        description: 'A mini debug Flutter app hooked into a host app that inspects app performance, requests, and logs in real-time. Streamlines QA and design feedback by enabling teams to report issues directly to developers.',
        technologies: [flutter],
        links: [
            {
                name: 'github',
                url: 'https://github.com/Iamstanlee/flutter_inapp_inspector',
            },
        ],
    },
    {
        name: 'Pokedex',
        description: 'Pokedex App: Demonstrating Layered Architecture, Separation of Concerns, and Thorough Testing.',
        technologies: [flutter],
        links: [
            {
                name: 'github',
                url: 'https://github.com/iamstanlee/pokedex',
            },
        ],
    }, {
        name: 'Linkfy Text',
        description:
            'Lightweight Flutter package that can identify and convert URLs, emails, and hashtags in a text string into clickable links, similar to the way Twitter handles them.',
        technologies: [flutter],
        links: [
            {
                name: 'github',
                url: 'https://github.com/iamstanlee/linkfy_text',
            },
        ],
    },
    {
        name: 'Flipcoin',
        description: 'Instant crypto to fiat offramp platform, achieving over $50,000 in total processed volume (TPV)',
        technologies: [flutter, nodejs, docker, aws, web3],
        links: [
            {
                name: 'web',
                url: 'https://useflipcoin.com',
            },
            {
                name: 'android',
                url: 'https://play.google.com/store/apps/details?id=com.flipcoin'
            },
            {
                name: 'iOS',
                url: 'https://apps.apple.com/us/app/flipcoin/id6503160949'
            },
        ],
    },
];
