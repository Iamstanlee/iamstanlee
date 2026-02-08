import {blogPosts} from '~/data/blog';
import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './writings.scss';

interface WritingsProps {
    activeMenu: (arg: number) => void;
}

export default function Writings(props: WritingsProps) {
    useEffect(() => {
        props.activeMenu(2);
    }, []);

    return (
        <div className="writings">
            <div className="writings_container">
                <h3>Writings</h3>
                <div className="posts">
                    {blogPosts.map((post, idx) => (
                        <Link to={`/writings/${post.slug}`} key={post.slug} className="post_link">
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
