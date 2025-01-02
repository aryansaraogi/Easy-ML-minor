from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd

# Load the pre-trained model and imputer
model = joblib.load('logistic_regression_model.pkl')
imputer = joblib.load('imputer.pkl')

# Initialize Flask app
app = Flask(__name__)

# Root route to handle the home page
@app.route('/')
def home():
    return "Welcome to the ML Prediction API! Use the /predict endpoint to get predictions.", 200

# Placeholder for favicon requests
@app.route('/favicon.ico')
def favicon():
    return '', 204  # No content for favicon requests

# Predict endpoint to handle POST requests
@app.route('/predict/chd', methods=['POST'])
def predict():
    try:
        # Parse JSON request data
        input_data = request.json
        print("Received data:", input_data)  # Debugging log

        # Validate input data
        if not input_data:
            return jsonify({'error': 'No input data provided'}), 400

        # Convert input JSON to DataFrame
        input_df = pd.DataFrame([input_data])  # Convert dict to single-row DataFrame

        # Handle NaN values using the imputer
        input_imputed = imputer.transform(input_df)

        # Make predictions
        prediction = model.predict(input_imputed)
        prediction_proba = model.predict_proba(input_imputed)

        # Prepare response
        response = {
            "prediction": int(prediction[0]),  # Convert NumPy integer to Python int
            "prediction_probability": {
                "no_chd": float(prediction_proba[0][0]),
                "chd": float(prediction_proba[0][1])
            }
        }
        return jsonify(response), 200

    except Exception as e:
        # Return error message
        return jsonify({'error': str(e)}), 400


# Run the app
if __name__ == '__main__':
    app.run(debug=True)
