import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import './styles/Contact.css';

export default function Contact({ id }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

   const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
       const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus({ type: "success", message: t("contact.success") });
      } else {
        setStatus({ type: "error", message: data.error || t("contact.error") });
      }
    } catch (err) {
      setStatus({ type: "error", message: t("contact.conection") });
    }
  };
    // Desaparece automáticamente después de 4 segundos
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 3000);
    return () => clearTimeout(timer);
  }, [status]);

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

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="contact-form"
        >
          <input type="text" name="name" placeholder={t("contact.name")} value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder={t("contact.email")} value={formData.email} onChange={handleChange} />
          <textarea name="message" placeholder={t("contact.message")} value={formData.message} onChange={handleChange} rows="5" />
          <button type="submit">{t("contact.send")}</button>
        </motion.form>
      </div>
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`status-toggle ${status.type}`}
          >
            <span>{status.message}</span>
            <button className="close-btn" onClick={() => setStatus(null)}>&times;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
