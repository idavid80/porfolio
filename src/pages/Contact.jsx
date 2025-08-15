import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ContactForm from "../components/contact/ContactForm";
import './styles/Contact.css'

export default function ContactSection({ id }) {
  const { t } = useTranslation();

  return (
    <section id={id} className="contact">
      <div className="contact-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="contact-title"
        >
          {t("contact.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="contact-subtitle"
        >
          {t("contact.subtitle")}
        </motion.p>

        <ContactForm />
      </div>
    </section>
  );
}
