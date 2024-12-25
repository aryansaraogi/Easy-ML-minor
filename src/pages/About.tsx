import React from 'react';
import { Lightbulb, Users, Lock } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">About Our Platform</h1>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8">
            Our ML Platform brings the power of machine learning to your fingertips. We provide easy access to sophisticated ML models through a simple, intuitive interface.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lightbulb className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">Simple interface designed for both beginners and experts</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-gray-600">Built with feedback from our active user community</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Lock className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure</h3>
              <p className="text-gray-600">Your data is protected with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}