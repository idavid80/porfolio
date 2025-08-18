import React from "react";
import { useTranslation } from "react-i18next";
import { posts } from "../../data/posts";
import { Link } from "react-router-dom";
import BlogSidebar from "./BlogSidebar";
import "./styles/BlogMain.css";

export default function BlogMain() {
  const { i18n } = useTranslation();

  // Ordenar posts por fecha descendente
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="blogpage-container">
      <div className="blogpost-layout">
        <main className="blog-main-content">
          {sortedPosts.map((post) => (
            <article key={post.id} className="blogpost-card">
              <img src={post.image} alt={post.title[i18n.language]} />
              <h2 className="blogpost-title">{post.title[i18n.language]}</h2>
              <p className="blogpost-date">{post.date}</p>
              <p className="blogpost-description">{post.excerpt[i18n.language]}</p>
              <Link to={`/blog/${post.id}`} className="blog-readmore">
                {i18n.language.startsWith("es") ? "Leer más" : "Read more"}
              </Link>
            </article>
          ))}
        </main>

        <BlogSidebar />
      </div>
    </div>
  );
}
