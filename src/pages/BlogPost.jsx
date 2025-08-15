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


/*import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';

// Ajusta a la carpeta real donde tienes los .md
const allPosts = import.meta.glob('../post/*.md', { query: '?raw', eager: true });

export default function BlogPost() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [content, setContent] = useState('');

  const post = posts.find((p) => p.id === id);

  useEffect(() => {
    if (post) {
      // Normalizamos el idioma para evitar es-ES, en-GB, etc.
      console.log(i18n.language)
      const lang = i18n.language.split('-')[0];
      const postKey = `../post/${id}-${lang}.md`;

      if (allPosts[postKey]) {
        setContent(allPosts[postKey]);
      } else {
        // Fallback a inglés si no existe el idioma actual
        const fallbackKey = `../post/${id}-en.md`;
        setContent(allPosts[fallbackKey] || 'Content not found.');
      }
    }
  }, [id, i18n.language, post]);

  if (!post) {
    return (
      <div className="py-16 text-center">
        <p>Post not found.</p>
        <Link to="/blog" className="text-primary-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <article className="py-16 max-w-3xl mx-auto px-4">
      <img src={post.image} alt={post.title[i18n.language]} className="rounded-lg mb-6" />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title[i18n.language]}</h1>
      <p className="text-gray-400 text-sm mb-8">{post.date}</p>
      <ReactMarkdown className="prose dark:prose-invert max-w-none">
        {content}
      </ReactMarkdown>
    </article>
  );
}
*/