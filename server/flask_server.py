from flask import Flask, request, jsonify
import utility
import numpy as np
import cv2 as cv
import base64
 
app = Flask(__name__)

@app.route('/solve', methods=['GET', 'POST'])
def solve_equation():
    b64img = request.form['image_data']

    encoded_data = b64img.split(',')[1]
    nparr = np.frombuffer(base64.b64decode(encoded_data), np.uint8)
    img = cv.imdecode(nparr, cv.IMREAD_COLOR)

    response = jsonify({
        'solution': utility.main_pipeline(img)
        })

    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__=="__main__":
    print("Starting FastAPI Server!")
    app.run()
 