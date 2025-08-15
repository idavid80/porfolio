import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { posts } from '../data/posts';
import './styles/Blog.css';

export default function Blog({ id }) {
  const { t, i18n } = useTranslation();

  return (
    <section id={id} className="blog">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="blog-title"
      >
        {t('blog.title')}
      </motion.h2>

      {posts.length === 0 ? (
        <p className="no-posts">{t('blog.no_posts')}</p>
      ) : (
        <div className="blog-grid">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="blog-card"
            >
              <img
                src={post.image}
                alt={post.title[i18n.language]}
                className="blog-image"
              />
              <div className="blog-content">
                <h3 className="blog-post-title">{post.title[i18n.language]}</h3>
                <p className="blog-excerpt">{post.excerpt[i18n.language]}</p>
                <p className="blog-date">{post.date}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="blog-readmore"
                >
                  {t('blog.read_more')}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
