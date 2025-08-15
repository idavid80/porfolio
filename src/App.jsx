// src/App.jsx
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog'; // Asumimos que esta es la lista/resumen de posts
import BlogPost from './pages/BlogPost'; // Esta es la página de detalle de un post
import Contact from './pages/Contact';
import './App.css'; // Mantenemos la importación de App.css para los estilos de layout

// Componente que contiene todas las secciones principales desplazables
function OnePageSections() {
  return (
    <>
      {/* Cada componente recibe un ID único que usaremos para el scroll */}
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Blog id="blog" /> {/* ID para la sección de lista de blog */}
      <Contact id="contact" />
    </>
  );
}

export default function App() {

  return (
    // Contenedor principal de la aplicación.
    <div className="app-container">
      {/* El Navbar se mantiene fuera de las rutas para que siempre esté visible. */}
      <Navbar />

      {/* El elemento 'main' contiene el contenido que cambia con las rutas. */}
      <main className="main-content">
        <Routes>
          {/* Ruta principal que renderiza todas las secciones en una sola página */}
          <Route path="/" element={<OnePageSections />} />

          {/* Ruta para las publicaciones individuales del blog (sigue siendo una página separada) */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Ruta para manejar páginas no encontradas (404) */}
          <Route path="*" element={<h1 className="text-center py-20 text-3xl font-bold dark:text-gray-200">404 - Page Not Found</h1>} />
        </Routes>
      </main>

      {/* Aquí podrías añadir un componente Footer si lo tuvieras. */}
    </div>
  );
}
/*import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Ya no necesitamos importar 'BrowserRouter as Router' aquí
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className="text-center py-20">404 - Page Not Found</h1>} />
        </Routes>
      </main>

    </div>
  );
}
*/
/*
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}*/