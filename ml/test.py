import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from PIL import Image
import cv2
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import numpy as np

def displayimg(path):
  img = mpimg.imread(path)
  plt.imshow(img)
  plt.axis('off')
  plt.show()
def process_after_save(filepath):
  img = Image.open(filepath)
  img.thumbnail((300,300))
  img.save(filepath)
  m,n = img.size
  target_size = (300, 300)
  if (m!=300)or(n!=300):
    if m>n:
      target_size = (m,m)
    else:
      target_size = (n,n)
  else:
    return;
  image = cv2.imread(filepath)
  vertical_padding = (target_size[0] - image.shape[0]) // 2
  horizontal_padding = (target_size[1] - image.shape[1]) // 2

  padded_image = cv2.copyMakeBorder(image, vertical_padding, vertical_padding, horizontal_padding, horizontal_padding, cv2.BORDER_CONSTANT)
  cv2.imwrite(filepath,padded_image)


def process_before_model(image_path):
    img = load_img(image_path, target_size=(300, 300), color_mode='grayscale')
    img_array = img_to_array(img)
    img_array /= 255.0  # Normalize pixel values to between 0 and 1
    return img_array

def exposed_func(filepath,modelpath):
  process_after_save(filepath)
  img=load_img(filepath)
  finarr = process_before_model(filepath)
  model = load_model(modelpath)
  val = model.predict(finarr)
  return val
