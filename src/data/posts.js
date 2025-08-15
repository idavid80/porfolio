import brain from "../assets/projects/brain.jpeg";
import python from "../assets/projects/python_2.jpg";

export const posts = [
  {
    id: 'bigdata-2025',
    title: {
      en: 'Specialisation in AI and Big Data',
      es: 'Especializacón IA y Big-Data'
    },
    date: '2025-08-10',
    excerpt: {
      en: 'Laboratory exercises I have completed during the official course on Artificial Intelligence and Big Data.',
      es: 'Ejercicios de laboratorios que he realizado durante el curso oficial de Inteligencia Artificial y Big Data.'
    },
    image: brain
  },
  {
    id: 'computer-vision-2024',
    title: {
      en: 'Computer vision',
      es: 'Visión artificial'
    },
    date: '2024-12-15',
    excerpt: {
      en: 'Five practical examples of computer vision for real-time object detection. Utilise Ultralytics powerful YOLOv8 model for object recognition and the OpenCV library for image processing and real-time video capture.',
      es: 'Cinco ejemplos prácticos de visión artificial para la detección de objetos en tiempo real. Utiliza el potente modelo YOLOv8 de Ultralytics para el reconocimiento de objetos y la biblioteca OpenCV para el procesamiento de imágenes y la captura de video en tiempo real..'
    },
    image: python
  }
];
