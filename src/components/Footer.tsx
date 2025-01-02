import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Easyml </h3>
            <p className="text-gray-400">Making ML accessible to everyone</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EasyML Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}