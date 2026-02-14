export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    summary: string;
    images: string[];
    content: string;
}

function parseFrontmatter(raw: string): BlogPost {
    const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (!match) return {slug: '', title: '', date: '', tags: [], summary: '', images: [], content: raw};

    const frontmatter = match[1];
    const content = match[2].trim();

    const get = (key: string): string => {
        const m = frontmatter.match(new RegExp(`^${key}:\\s*['"]?(.*?)['"]?\\s*$`, 'm'));
        return m ? m[1] : '';
    };

    const getArray = (key: string): string[] => {
        const m = frontmatter.match(new RegExp(`^${key}:\\s*\\[(.*)\\]`, 'm'));
        if (!m) return [];
        return m[1].split(',').map(s => s.trim().replace(/^['"]|['"]$/g, ''));
    };

    return {slug: '', title: get('title'), date: get('date'), tags: getArray('tags'), summary: get('summary'), images: getArray('images'), content};
}

const modules = import.meta.glob('./articles/*.mdx', {as: 'raw', eager: true});

export const blogPosts: BlogPost[] = Object.entries(modules)
    .map(([path, raw]) => {
        const slug = path.replace('./articles/', '').replace('.mdx', '');
        const post = parseFrontmatter(raw as string);
        post.slug = slug;
        return post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(p => p.slug === slug);
}
