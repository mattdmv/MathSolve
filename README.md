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

## Project step
1. **Initial analysis and preprocessing of the dataset**
    
2. **Data augmentation to handle imbalance of the dataset**
    
3. **Model building**
