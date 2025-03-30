'use client';

import { useState, useEffect } from 'react';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

const ConsentModal = ({ isOpen, onClose, onAccept }: ConsentModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              📢 Content Sharing Agreement
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-medium text-purple-600 dark:text-purple-400 mb-2">
                🤝 Let's Grow Together!
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                By submitting your project, you agree to:
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-green-500">✓</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Allow us to showcase your project's transformation journey on our social media platforms
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-500">✓</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Share the development process and insights as educational content
                </p>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-purple-500">💫</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>In exchange, you'll receive:</strong>
                </p>
              </li>
              <li className="flex items-start ml-6">
                <span className="mr-2">•</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Free promotion across our social media channels
                </p>
              </li>
              <li className="flex items-start ml-6">
                <span className="mr-2">•</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Increased visibility in the web development community
                </p>
              </li>
              <li className="flex items-start ml-6">
                <span className="mr-2">•</span>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Backlinks and mentions in our content
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onAccept}
              className="flex-1 inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              I Agree & Continue
            </button>
            <button
              onClick={onClose}
              className="flex-1 inline-flex justify-center items-center px-4 py-2.5 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal; 