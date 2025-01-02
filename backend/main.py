from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

# Load models and other resources
logistic_model = joblib.load('logistic_regression_model.pkl')
imputer = joblib.load('imputer.pkl')
spam_classifier = joblib.load('spam_classifier_model.pkl')
vectorizer = joblib.load('tfidf_vectorizer.pkl')

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Root route to handle the home page
@app.route('/')
def home():
    return "Welcome to the ML Prediction API! Use /predict/chd or /predict/spam to get predictions."

# Placeholder for favicon requests
@app.route('/favicon.ico')
def favicon():
    return '', 204  # No content for favicon requests

# Predict endpoint for CHD prediction
@app.route('/predict/chd', methods=['POST'])
def predict_chd():
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
        prediction = logistic_model.predict(input_imputed)
        prediction_proba = logistic_model.predict_proba(input_imputed)

        # Map prediction to risk level
        risk_level = "High" if prediction[0] == 1 else "Low"
        
        # Prepare response
        response = {
            "Risk Level": risk_level,
            "Probability": f"{prediction_proba[0][1] * 100:.2f}%"  # Probability of having CHD
        }
        return jsonify(response), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Predict endpoint for Spam classification
@app.route('/predict/spam', methods=['POST'])
def classify_spam():
    try:
        # Get message from the request
        data = request.json
        message = data.get('message', '')

        # Vectorize the message and make prediction
        user_input_vectorized = vectorizer.transform([message])
        prediction = spam_classifier.predict(user_input_vectorized)
        result = "Spam" if prediction[0] == 1 else "Ham"

        return jsonify({'prediction': result}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 400

# Run the app
if __name__ == '__main__':
    app.run(debug=True, port=5000)  # You can use port 5000 for both models
