import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './styles/About.css';

const skills = [
  "React", "Node.js", "Python", "TensorFlow", "Docker",
  "PostgreSQL", "MongoDB", "AWS", "Kubernetes", "Git",
  "Pandas", "Scikit-learn"
];

export default function About({ id }) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className="about"
    >
      <div className="about-container">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="about-title"
        >
          {t('about.title')}
        </motion.h2>

        {/* Biografía */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bio"
        >
          {t('about.bio')}
        </motion.p>

        {/* Skills */}
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="skills-title"
        >
          {t('about.skills_title')}
        </motion.h3>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.05 }
            }
          }}
          className="card-skills"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="skills"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
