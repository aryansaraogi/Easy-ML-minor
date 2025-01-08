import React, { useState } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Suggestion = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    suggestion: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const serviceId = 'service_9hs1die';   // EmailJS Service ID
    const templateId = 'template_lvqr2zn'; //  EmailJS Template ID
    const publicKey = 'up7Peaw4yhzp7_HRq'; //  EmailJS Public Key

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);
      setStatus('success');
      setFormData({ name: '', subject: '', suggestion: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Share Your Suggestions</h1>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="suggestion" className="block text-gray-700 mb-2">Suggestion</label>
              <textarea
                id="suggestion"
                value={formData.suggestion}
                onChange={(e) => setFormData(prev => ({ ...prev, suggestion: e.target.value }))}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              {status === 'loading' ? (
                'Sending...'
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Suggestion
                </>
              )}
            </button>

            {status === 'success' && (
              <p className="mt-4 text-green-600 text-center">Thank you for your suggestion!</p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-red-600 text-center">Failed to send suggestion. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
