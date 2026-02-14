import {blogPosts} from '~/data/blog';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './articles.scss';

interface ArticlesProps {
    activeMenu: (arg: number) => void;
}

export default function Articles(props: ArticlesProps) {
    useEffect(() => {
        props.activeMenu(2);
    }, []);

    return (
        <div className="articles">
            <div className="articles_container">
                <h3>#articles</h3>
                <div className="posts">
                    {blogPosts.map((post, idx) => (
                        <Link to={`/articles/${post.slug}`} key={post.slug} className="post_link">
                            <section className="post">
                                <p className="post_title">
                                    {`0${idx} — `}{post.title}
                                </p>
                                <span className="post_date">{new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</span>
                                <article className="post_summary">
                                    <p>{post.summary}</p>
                                </article>
                                <div className="post_tags">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </section>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="go_button_container">
                <Link to="/projects">
                    <button>
                        <b>➜ </b>Projects
                    </button>
                </Link>
            </div>
        </div>
    );
}
