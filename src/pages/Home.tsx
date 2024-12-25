import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Experience the Power of ML
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Access state-of-the-art machine learning models through our intuitive platform
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/chd-detection" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-semibold ml-2">CHD Detection</h3>
              </div>
              <p className="text-gray-600">
                Analyze heart disease risk factors with our advanced prediction model
              </p>
            </div>
          </Link>

          <Link to="/spam-detection" className="transform hover:scale-105 transition-transform">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-green-500" />
                <h3 className="text-xl font-semibold ml-2">Spam Detection</h3>
              </div>
              <p className="text-gray-600">
                Identify spam messages using our sophisticated text analysis model
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}