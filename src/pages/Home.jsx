import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaGithub, FaDownload } from "react-icons/fa";
import "./styles/Home.css";
import TypingText from "../components/ui/TypingText";
import profile from '../assets/profile.png'
import Modal from '../components/ui/Modal'

export default function Home({ id }) {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // Lógica para descargar el CV
    const link = document.createElement('a');
    link.href = '/cv_Dominguez_Bueno_David_sin_datos_personales.pdf';
    link.download = 'cv_Dominguez_Bueno_David_sin_datos_personales.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false); // Cierra el modal después de la descarga
  };
  const handleGoToContact = () => {
    setIsModalOpen(false); // Primero, cierra el modal
    const contactSection = document.getElementById('contact'); // Obtiene la sección por su ID
    if (contactSection) {
      // Realiza un scroll suave a la sección de contacto
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id={id} className='home'>
      <div className='home-container'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className='header'
        >
          <h2 className='greeting'>
            {t("home.greeting")} {t("home.name")}
          </h2>

                    <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='avatar-container'
          >
            <img src={profile} alt='Avatar de David' className='avatar-img' />
          </motion.div>

          <TypingText text={t("home.intro_cita")} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='home-contain'
        >
          <p>{t("home.paragraph")}</p>
          <div className='mis-enlaces'>
            <a
              href='https://github.com/idavid80'
              className='btn-primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='btn-icon' />
              {t("projects.view_code")}
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className='descargar_cv'
            >
              {t("home.cta_cv")}
            </button>
          </div>
        </motion.div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t("home.modal_cv_title")}
      >
        <p>{t("home.modal_cv_message")}</p>
        <div className="modal-actions">
          <button onClick={handleDownload} className="btn-primary">
            <FaDownload className="btn-icon" />
            {t("home.modal_cv_download_btn")}
          </button>
          <button
            onClick={handleGoToContact} // Llama a la nueva función de scroll
            className="descargar_cv"
          >
            {t("home.modal_cv_contact_btn")}
          </button>
        </div>
      </Modal>
    </section>
  );
}
