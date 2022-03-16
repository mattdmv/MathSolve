# libraries imports
from fastapi import FastAPI, UploadFile, File
import cv2 as cv
import uvicorn
import utility
import numpy as np

# create the app object
app = FastAPI()

@app.post('/solve')
async def solve_equation(file: UploadFile = File(...)):
    content = await file.read()
    nparr = np.fromstring(content, np.uint8)
    img = cv.imdecode(nparr, cv.IMREAD_COLOR)

    response = utility.main_pipeline(img)

    return {'Solution': response}

if __name__=="__main__":
    print("Starting FastAPI Server!")
    uvicorn.run(app, host='localhost', port=8000)