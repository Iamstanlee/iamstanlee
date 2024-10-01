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
const docker: Tech = {name: 'docker', badgeColor: '#0468d7'};
const aws: Tech = {name: 'aws', badgeColor: '#fb923c'};

type ProjectLink = {
    name: 'github' | 'web' | 'iOS' | 'android';
    url: string;
};

export const projects: Project[] = [
    {
        name: 'FeastPass',
        description: 'FeastPass is the most flexible, community engagement and rewards platform helping local vendors boost in-store sales by engaging customers through experiences, content, and discounts.',
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
        name: 'Suki AI',
        description: 'Your knowledge base, Back in one scroll.',
        technologies: [reactnative, nodejs, docker],
        links: [
            {
                name: 'web',
                url: 'https://getsuki.xyz',
            },
            {
                name: 'iOS',
                url: 'https://apps.apple.com/us/app/sukiai/id6503160949'
            },
            {
                name: 'android',
                url: 'https://play.google.com/store/apps/details?id=com.sukiai'
            },
        ],
    },
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
                name: 'android',
                url: 'https://play.google.com/store/apps/details?id=xyz.flip3'
            },
            {
                name: 'iOS',
                url: 'https://apps.apple.com/us/app/flip3/id6503160949'
            },
        ],
    },
    {
        name: 'Expense Bud',
        description: 'An app that helps users track their expenses and provides detailed insights to help them stay on top of their finances. 🚀',
        technologies: [flutter],
        links: [
            {
                name: 'android',
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
