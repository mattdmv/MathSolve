# MathSolve
MathSolve is an AI based application which took inspiration from Photomath app. The goal of this demo project was to build a model that would recognize handwritten digits and symbols formulated in a mathematical equation from the picture. Then, the application should be able to solve equation from the picture and give a user the final result.

## Dataset
Dataset was taken from https://www.kaggle.com/sagyamthapa/handwritten-math-symbols.

This dataset contains over 9000 handwritten digits and arithmetic operators.

In total there are 19 classes present in the dataset:

- Digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
- Operators: plus, minus, multiplication, division, decimal, equals
- Variables: x, y, z

Most images are of resolution 400x400 pixels. Some may be 155x155.

## Project steps
1. Initial analysis and preprocessing of the dataset, ata augmentation to handle imbalance of the dataset.
    
2. Digits and math symbols classification model building and evaluation.
    
3. Building and testing pipeline for handling mathematical equation from picture (using OpenCV thresholding to find contours on image, make bounding
boxes around digits and symbols, crop bounding boxes from image, sort equation, classify digits and finally solve given equation).

4. Make the UI with HTML, TailwindCSS and Javascript.

5. Write Flask application API endpoint for solving given equations.

6. Deploy application to AWS EC2 instance.

## Tools used in this project:

    - Python
    - Numpy and OpenCV for data cleaning and processing
    - Matplotlib & Seaborn for data visualization
    - Sklearn (train and test split)
    - Tensorflow and Keras for model building
    - Jupyter notebook, Visual Studio Code as IDE
    - Python flask for http server
    - nginx as a reverse proxy server
    - HTML/Tailwindcss/Javascript for UI
    - Amazon AWS EC2 instance for deployment


## How this app works
**Example of addition operation**
![67+32 good](https://user-images.githubusercontent.com/65426301/161382532-dcfd57b7-079e-461d-91ad-89bdb5a68b24.gif)

**Example of subtraction operation**
![67-32 good](https://user-images.githubusercontent.com/65426301/161382553-23b018be-fff3-4638-91eb-97131f16cb37.gif)

**Example of exponentiation (only exponentiation of single digit numbers is available for now)**
![5na3 good](https://user-images.githubusercontent.com/65426301/161382623-b7fb92d9-c9ae-4c63-9317-64a76d2d1bde.gif)
