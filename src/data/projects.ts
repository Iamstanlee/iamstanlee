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

const flutter: Tech = {name: 'flutter', badgeColor: '#0468d7'};
const nextjs: Tech = {name: 'nextjs', badgeColor: '#0a0a0a'};
const nodejs: Tech = {name: 'nodejs', badgeColor: '#84BA64'};
const cloudfunction: Tech = {name: 'cloud function', badgeColor: '#fb923c'};
const openai: Tech = {name: 'openai', badgeColor: '#10a37f'};
const reactnative: Tech = {name: 'reactnative', badgeColor: '#61dafb'};
const tailwind: Tech = {name: 'tailwind', badgeColor: '#38BDF8'};
const firebase: Tech = {name: 'firebase', badgeColor: '#fbbf24'};
const supabase: Tech = {name: 'supabase', badgeColor: '#84BA64'};
const web3: Tech = {name: 'web3', badgeColor: '#10a37f'};

type ProjectLink = {
    name: 'github' | 'web' | 'appstore' | 'playstore';
    url: string;
};

export const projects: Project[] = [
    {
        name: 'Flip3',
        description: 'A secure, permissionless and incentivised Peer-to-Peer crypto to fiat platform.',
        technologies: [flutter, nodejs, web3],
        links: [
            {
                name: 'web',
                url: 'https://flip3.xyz',
            },
            {
                name: 'playstore',
                url: 'https://play.google.com/store/apps/details?id=xyz.flip3'
            },
            {
                name: 'appstore',
                url: 'https://apps.apple.com/us/app/flip3/id6503160949'
            },
        ],
    },
    {
        name: 'Feastpass',
        description: 'FeastPass is the most flexible, community engagement and rewards platform helping local vendors boost in-store sales by engaging customers through experiences, content, and discounts.',
        technologies: [nextjs, reactnative, nodejs],
        links: [
            {
                name: 'web',
                url: 'https://www.feastpasshq.com',
            },
        ],
    },
    {
        name: 'Expense Bud',
        description: 'An app that helps users track their expenses and provides detailed insights to help them stay on top of their finances. 🚀',
        technologies: [flutter],
        links: [
            {
                name: 'playstore',
                url: 'https://play.google.com/store/apps/details?id=com.app.expense_bud',
            },
            {
                name: 'github',
                url: 'https://github.com/iamstanlee/expense_bud',
            },
        ],
    },
    {
        name: 'Pokedex',
        description: 'A Pokedex App: Demonstrating Layered Architecture, Separation of Concerns, and Thorough Testing.',
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
            'A lightweight Flutter package that can identify and convert URLs, emails, and hashtags in a text string into clickable links, similar to the way Twitter handles them.',
        technologies: [flutter],
        links: [
            {
                name: 'github',
                url: 'https://github.com/iamstanlee/linkfy_text',
            },
        ],
    }
];
