# Visión Artificial

Proyecto básico sobre visión artificial utilizando **OpenCV**.  
Incluye una carpeta llamada **YOLOv8** con cinco archivos para detección de objetos en tiempo real usando Ultralytics.

## Requisitos

Antes de ejecutar este proyecto, asegúrate de tener:

- Python 3.x
- OpenCV (`cv2`)
- Numpy (`numpy`)

Instalación rápida:

```bash
pip install opencv-python opencv-python-headless numpy
```

O instala todas las dependencias del proyecto:

```bash
pip install -r requirements.txt
```

## Cómo ejecutar

Clona el repositorio y ejecuta:

```bash
git clone https://github.com/idavid80/computer_vision.git
cd computer_vision
python nombre_archivo.py
```

## Archivos principales

### detectar_color.py

Captura video en tiempo real, analiza la cantidad de verde y muestra resultados en consola.  

**Características:**

- Captura desde la cámara.
- Convierte fotogramas a escala de grises.
- Calcula cantidad de verde.
- Muestra video en tiempo real.
- Finaliza con `q`.

### area_roi.py

Analiza imágenes, detecta manchas en un área definida y calcula propiedades geométricas.  

**Funcionalidades:**

- Ajuste de brillo y contraste.
- Selección interactiva de área mediante clics.
- Detección de manchas.
- Cálculo de centro, radio y área de círculo.

### detectar_formas.py

Detecta y clasifica figuras geométricas en imágenes.  

**Características:**

- Detección de bordes con Canny.
- Clasificación de figuras: triángulos, cuadrados, rectángulos, pentágonos, hexágonos y círculos.
- Visualización interactiva con etiquetas.

### detectar_manchas.py

Detecta manchas u objetos en imágenes con filtrado de contornos y visualización interactiva.

### tracking_.py y tracking_rojo.py

Detección y seguimiento en tiempo real de objetos según color (verde o rojo) usando espacio HSV.

### video_detector_formas.py

Detección de formas geométricas en tiempo real desde la cámara.

### video_rgb.py

Visualización en tiempo real de los canales de color R, G, B de cada fotograma.

## Recursos

- Tutorial utilizado para detector de formas: [omes-va.com](https://omes-va.com/detectando-figuras-geometricas-con-opencv-python/)
