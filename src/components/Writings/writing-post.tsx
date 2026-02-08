import {getPostBySlug} from '~/data/blog';
import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './writings.scss';

interface WritingPostProps {
    activeMenu: (arg: number) => void;
}

export default function WritingPost(props: WritingPostProps) {
    const {slug} = useParams<{slug: string}>();
    const post = getPostBySlug(slug);

    useEffect(() => {
        props.activeMenu(2);
    }, []);

    if (!post) {
        return (
            <div className="writings">
                <div className="writings_container">
                    <h2>Post not found</h2>
                    <Link to="/writings">← Back to writings</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="writings">
            <div className="writings_container">
                <Link to="/writings" className="back_link">← Back to writings</Link>
                <div className="post_header">
                    <h2>{post.title}</h2>
                    <span className="post_date">
                        {new Date(post.date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}
                    </span>
                    <div className="post_tags">
                        {post.tags.map(tag => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="post_content">
                    <ReactMarkdown>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </div>
            <div className="go_button_container">
                <Link to="/writings">
                    <button>
                        <b>➜ </b>Writings
                    </button>
                </Link>
            </div>
        </div>
    );
}
