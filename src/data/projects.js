// src/data/projects.js
import wineAppImg from "../assets/projects/wineapp.png";
import marvelImg from "../assets/projects/the-bridge.png";
import aiImg from "../assets/projects/ai.jpg";
import dashboardImg from "../assets/projects/Tree_conection.jpeg";

export const projectsData = [
  {
    id: 1,
    titleKey: "projects.wine_app.title",
    descriptionKey: "projects.wine_app.description",
    stack: ["Flutter", "Python", "MongoDB"],
    category: "App",
    image: wineAppImg,
    demoLink: "https://www.canva.com/design/DAGHb6A1mdY/jxqFCNtxgbbWAZ8ekCSxvQ/edit",
    codeLink: "https://github.com/idavid80/Proyecto_TFC",
    iframe: "https://foil-creek-c56.notion.site/ebd/22ed0a3946df81688e6dc5bb868c9b75"
  },
  {
    id: 2,
    titleKey: "projects.marvel_web.title",
    descriptionKey: "projects.marvel_web.description",
    stack: ["React Vite", "Firebase", "MongoDB", "ExpressJs"],
    category: "Web",
    image: marvelImg,
    demoLink: "https://youtu.be/ZKiWECYqbhc",
    codeLink: "https://www.canva.com/design/DAGHb6A1mdY/jxqFCNtxgbbWAZ8ekCSxvQ/edit",
    iframe: "https://foil-creek-c56.notion.site/ebd/22ed0a3946df81c4bdebdac89dae6b46"
  },
  {
    id: 3,
    titleKey: "projects.ai_bd.title",
    descriptionKey: "projects.ai_bd.description",
    stack: ["Python", "TensorFlow", "Keras"],
    category: "AI",
    image: aiImg,
    demoLink: "#",
    codeLink: "https://github.com/idavid80/Especializacion-IA-y-Big-Data",
    iframe: "https://foil-creek-c56.notion.site/ebd/22ed0a3946df81c59946c8244ac14b13"
  },
  {
    id: 4,
    titleKey: "projects.bd_dashboard.title",
    descriptionKey: "projects.bd_dashboard.description",
    stack: ["Scikit-learn", "Folium", "Seaborn"],
    category: "Big Data",
    image: dashboardImg,
    demoLink: "#",
    codeLink: "https://github.com/idavid80/DataScience",
    iframe: "https://foil-creek-c56.notion.site/ebd/24fd0a3946df807faaf8cef8b854f775"
  }
];
