import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { posts } from "../../data/posts";
import "./styles/BlogSidebar.css";

export default function BlogSidebar() {
  const { id } = useParams();
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <button className="toggle-sidebar" onClick={() => setOpen(!open)}>
        ☰ {i18n.language.startsWith("es") ? "Posts" : "Posts"}
      </button>

      <aside className={`blog-sidebar ${open ? "open" : ""}`}>
        <nav className="sidebar-content">
          <h3>{i18n.language.startsWith("es") ? "Entradas recientes" : "Recent posts"}</h3>
          <ul>
            {sortedPosts.map((postItem) => (
              <li key={postItem.id} className={postItem.id === id ? "active" : ""}>
                <Link to={`/blog/${postItem.id}`}>
                  <span className="sidebar-date">{postItem.date}</span> —{" "}
                  <span>{postItem.title[i18n.language] || postItem.title.en}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
