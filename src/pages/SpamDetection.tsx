import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import { useApi } from '../hooks/useApi';

export const SpamDetection = () => {
  const [message, setMessage] = useState('');
  const { predict, loading, error, result } = useApi('/predict/spam');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await predict({ message });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-12 w-12 text-green-500 mr-4" />
            <h1 className="text-4xl font-bold">Spam Detection</h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                required
                placeholder="Enter the message to analyze..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
            >
              {loading ? 'Analyzing...' : 'Check Message'}
            </button>

            {error && (
              <p className="mt-4 text-red-600 text-center">{error}</p>
            )}

            {result && (
              <div className="mt-6 p-4 bg-gray-50 rounded-md">
                <h3 className="text-xl font-semibold mb-2">Analysis Result</h3>
                <p className="text-gray-700">
                  Classification: <span className="font-bold">{result.prediction}</span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}