import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8" />
            <span className="text-xl font-bold">EasyML</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-indigo-200 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-indigo-200 transition-colors">About</Link>
            <Link to="/suggestion" className="hover:text-indigo-200 transition-colors">Suggestion</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}