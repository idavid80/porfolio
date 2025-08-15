import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import './styles/BlogPost.css';
import remarkGfm from 'remark-gfm'
// Importamos todos los .md de la carpeta post/
const allPosts = import.meta.glob('../post/*.md', { query: '?raw', eager: true });

export default function BlogPost() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [content, setContent] = useState('');

  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (post) {
      const lang = i18n.language.split('-')[0]; // normaliza idioma: 'es-ES' → 'es'
      const postKey = `../post/${id}-${lang}.md`;

      if (allPosts[postKey]) {
        setContent(allPosts[postKey].default); // ✅ usamos .default
      } else {
        const fallbackKey = `../post/${id}-en.md`;
        setContent(allPosts[fallbackKey]?.default || 'Content not found.');
      }
    }
  }, [id, i18n.language, post]);

  if (!post) {
    return (
      <div className="blogpost-error">
        <p>Post not found.</p>
        <Link to="/blog" className="text-primary-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <article className="blogpost-article">
      <img src={post.image} alt={post.title[i18n.language]} />
      {/* <h1 className="blogpost-title">{post.title[i18n.language]}</h1> */}
      <p className="blogpost-date">{post.date}</p>
      <div className="blogpost-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
