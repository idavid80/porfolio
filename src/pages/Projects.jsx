import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { projectsData } from "../data/projects";
import Modal from "../components/ui/Modal";
import { FaGithub } from "react-icons/fa";
import { FiEye, FiInfo } from "react-icons/fi";
import "./styles/Projects.css";

export default function Projects({ id }) {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { key: "All", label: t("projects.filter_all") },
    { key: "Web", label: t("projects.filter_web") },
    { key: "App", label: t("projects.filter_app") },
    { key: "AI", label: t("projects.filter_ai") },
    { key: "Big Data", label: t("projects.filter_bigdata") },
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section
      id={id}
      className="projects"
    >
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="projects-title"
        >
          {t("projects.title")}
        </motion.h2>

        {/* Filtros */}
        <div className="projects-filters">
          {categories.map(({ key, label }) => (
            <motion.button
              key={key}
              onClick={() => setFilter(key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`filter-btn ${filter === key ? "active" : ""}`}
            >
              {label}
            </motion.button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <motion.div layout className="projects-grid">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="project-card"
              >
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-content">
                  <h3 className="project-title">{t(project.titleKey)}</h3>
                  <p className="project-desc">{t(project.descriptionKey)}</p>
                  <div className="project-stack">
                    {project.stack.map((tech) => (
                      <span key={tech} className="project-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn demo"
                      >
                        <FiEye className="btn-icon" />
                        {t("projects.view_demo")}
                      </a>
                    )}
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn code"
                      >
                        <FaGithub className="btn-icon" />
                        {t("projects.view_code")}
                      </a>
                    )}
                    {project.iframe && (
                      <button
                        onClick={() => setActiveProject(project)}
                        className="project-btn info"
                      >
                        <FiInfo className="btn-icon" />
                        {t("projects.more_info")}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <Modal
          isOpen={activeProject !== null}
          onClose={() => setActiveProject(null)}
          title={activeProject?.titleKey ? t(activeProject.titleKey) : ""}
        >
          <iframe src={activeProject?.iframe} title={activeProject?.titleKey}></iframe>
        </Modal>
      </div>
    </section>
  );
}
