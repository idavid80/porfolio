import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../ui/ThemeToggle';
import idavid80 from "../../assets/icons/idavid80.svg";
import logo from "../../assets/icons/logo.png";
import dark_logo from "../../assets/icons/dark_logo.png";
import './Navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();
  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = React.useMemo(() => [
    { id: 'home', text: t('nav.home') },
    { id: 'about', text: t('nav.about') },
    { id: 'projects', text: t('nav.projects') },
    { id: 'blog', text: t('nav.blog') },
    { id: 'contact', text: t('nav.contact')},
  ], [t]);

  const scrollToSection = (id) => {
    const performScroll = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const navbar = document.querySelector('.navbar');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const top = section.offsetTop - navbarHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    };

    // Si no estamos en la página principal, navegamos a "/" primero
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => performScroll(), 50); // espera que se rendericen secciones
    } else {
      performScroll();
    }

    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let current = 'home';
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPos) {
          current = link.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href= {import.meta.env.VITE_URL}>
            <img
              src={theme === 'dark' ? dark_logo : logo}
              alt="Logo"
              width={50}
            />
          </a>

        </div>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.text}
            </button>
          ))}
        </div>

        <div className="navbar-controls">
          <button onClick={switchLang} className="lang-toggle">
            {i18n.language}
          </button>
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
          >
            {link.text}
          </button>
        ))}
      </div>
    </nav>
  );
}
