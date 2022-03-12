# libraries imports
from fastapi import FastAPI, UploadFile, File
import uvicorn
import pickle
import utility

# create the app object
app = FastAPI()

# load the model
#pickle_in = open ('/artifacts/model.pickle', 'rb')
#model = pickle.load(pickle_in)

@app.post('/solve')
async def solve_equation(file: UploadFile = File(...)):
    image_data = file

    response = utility.main_pipeline(image_data)

    return {'solution': response}

if __name__=="__main__":
    print("Starting FastAPI Server!")
    uvicorn.run(app, host='localhost', port=8000)