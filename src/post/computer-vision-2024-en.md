# Computer Vision

Basic project on computer vision using **OpenCV**.  
Includes a folder called **YOLOv8** with five files for real-time object detection using Ultralytics.

## Requirements

Before running this project, make sure you have:

- Python 3.x
- OpenCV (`cv2`)
- Numpy (`numpy`)

Quick install:

```bash
pip install opencv-python opencv-python-headless numpy
```

Or install all project dependencies:

```bash
pip install -r requirements.txt
```

## How to Run

Clone the repository and run:

```bash
git clone https://github.com/idavid80/computer_vision.git
cd computer_vision
python file_name.py
```

## Main Files

### detectar_color.py

Captures video in real time, analyzes green color amount, and prints results to the console.  

**Features:**

- Capture from camera.
- Convert frames to grayscale.
- Calculate green color amount.
- Show video in real time.
- Exit with `q`.

### area_roi.py

Analyzes images, detects spots in a defined area, and calculates geometric properties.  

**Features:**

- Brightness and contrast adjustment.
- Interactive area selection with clicks.
- Spot detection.
- Calculate circle center, radius, and area.

### detectar_formas.py

Detects and classifies geometric shapes in images.  

**Features:**

- Edge detection with Canny.
- Shape classification: triangles, squares, rectangles, pentagons, hexagons, circles.
- Interactive visualization with labels.

### detectar_manchas.py

Detects spots or objects in images with contour filtering and interactive visualization.

### tracking_.py and tracking_rojo.py

Real-time object detection and tracking by color (green or red) using HSV space.

### video_detector_formas.py

Real-time geometric shape detection from camera video.

### video_rgb.py

Real-time visualization of R, G, B color channels per frame.

## Resources

- Tutorial used for shape detector: [omes-va.com](https://omes-va.com/detectando-figuras-geometricas-con-opencv-python/)
