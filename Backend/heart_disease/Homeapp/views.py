import os
from django.shortcuts import render
import pickle
import pandas as pd
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#loading the pickle model
MODEL_PATH = os.path.join(BASE_DIR, 'Homeapp', 'models', 'heart_model.pkl')
with open(MODEL_PATH, 'rb') as f:
    loaded_model = pickle.load(f)

def make_prediction(input_data):
    input_df = pd.DataFrame([input_data])
    
    prediction = loaded_model.predict(input_df)
    return prediction[0] 

@csrf_exempt
def predict_heart_disease(request):
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request
            data = json.loads(request.body)
            
            # Extract the features (ensure this matches the input format)
            input_data = [
                data.get('age'),
                data.get('sex'),
                data.get('cp'),
                data.get('trestbps'),
                data.get('chol'),
                data.get('fbs'),
                data.get('restecg'),
                data.get('thalach'),
                data.get('exang'),
                data.get('oldpeak'),
                data.get('slope')
            ]
            
            result = make_prediction(input_data)
            
            # Convert prediction result to Python int before returning as JSON
            return JsonResponse({f'prediction': int(result)})
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)
