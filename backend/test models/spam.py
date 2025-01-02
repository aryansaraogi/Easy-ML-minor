from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes and origins
CORS(app)

# Load the trained model and vectorizer
import joblib
classifier_log = joblib.load('spam_classifier_model.pkl')
vectorizer = joblib.load('tfidf_vectorizer.pkl')

@app.route('/')
def home():
    return "Welcome to the Spam Classifier API. Use the /classify endpoint to classify messages."

@app.route('/predict/spam', methods=['POST'])
def classify():
    data = request.json
    message = data.get('message', '')
    user_input_vectorized = vectorizer.transform([message])
    prediction = classifier_log.predict(user_input_vectorized)
    result = "Spam" if prediction[0] == 1 else "Ham"
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(debug=True)
