"use client";

import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import ConsentModal from './ConsentModal';
import { motion, AnimatePresence } from 'framer-motion';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    your_Name: '',
    email_address: '',
    'What_would_you_like_to_do?': 'Website Revamp',
    Business_Name: '',
    Current_Website_URL: '',
    Tell_us_more_about_your_project: '',
  });

  const [showConsentModal, setShowConsentModal] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [pendingSubmission, setPendingSubmission] = useState(false);

  useEffect(() => {
    // Initialize EmailJS only on the client side
    emailjs.init("1MPWDzeALq9L05koW");
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (formData['What_would_you_like_to_do?'] === 'Website Revamp' && !formData.Current_Website_URL) {
      toast.error('Please provide your current website URL for revamp requests.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    if (!hasConsented) {
      setPendingSubmission(true);
      setShowConsentModal(true);
      return;
    }

    await submitForm();
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    const loadingToast = toast.loading('Submitting your request...');

    try {
      const result = await emailjs.send(
        'service_itxfpq8',
        'template_imi9t6r',
        formData,
        {
          publicKey: '1MPWDzeALq9L05koW',
        }
      );

      if (result.status === 200) {
        toast.success('Your request has been submitted successfully!', {
          id: loadingToast,
          duration: 5000,
        });
        // Reset form
        setFormData({
          your_Name: '',
          email_address: '',
          'What_would_you_like_to_do?': 'Website Revamp',
          Business_Name: '',
          Current_Website_URL: '',
          Tell_us_more_about_your_project: '',
        });
        setHasConsented(false);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      toast.error('Failed to submit request. Please try again later.', {
        id: loadingToast,
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
      setPendingSubmission(false);
    }
  };

  const handleConsent = () => {
    setHasConsented(true);
    setShowConsentModal(false);
    if (pendingSubmission) {
      submitForm();
    }
  };

  // Get placeholder text based on request type
  const getPlaceholderText = () => {
    switch (formData['What_would_you_like_to_do?']) {
      case 'Website Revamp':
        return "Tell us what you'd like to improve in your current website, any specific features or design elements you want to change...";
      case 'New Website':
        return "Describe your vision for the new website, target audience, key features you need...";
      case 'UI/UX Consultation':
        return "Share your current UI/UX challenges, areas you want to improve, or specific user feedback you've received...";
      case 'General Inquiry':
        return "What questions do you have? We're here to help with any web development related inquiries...";
      default:
        return "Please describe your project requirements...";
    }
  };

  // Return null or loading state until client-side hydration is complete
  if (!isMounted) {
    return (
      <div className="min-h-[600px] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-400/20"></div>
          <div className="h-4 w-24 bg-blue-400/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section id="submit-project" className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-8 md:py-20">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Section Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-12"
            >
              <span className="inline-block px-3 py-1 md:px-4 md:py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs md:text-sm font-medium mb-4">
                Start Your Project
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Submit Your Project
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Let's transform your website into something extraordinary
              </p>
            </motion.div>

            {/* Enhanced Form */}
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="relative overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 p-4 md:p-8 lg:p-10 rounded-2xl shadow-xl dark:shadow-2xl-dark border border-gray-100 dark:border-gray-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-50"></div>
              
              <div className="relative space-y-4 md:space-y-6">
                {/* Form fields with improved mobile styling */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                >
                  <div>
                    <label htmlFor="your_Name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="your_Name"
                      name="your_Name"
                      value={formData.your_Name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email_address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email_address"
                      name="email_address"
                      value={formData.email_address}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                      placeholder="john@example.com"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label htmlFor="What_would_you_like_to_do?" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    What would you like to do?
                  </label>
                  <select
                    id="What_would_you_like_to_do?"
                    name="What_would_you_like_to_do?"
                    value={formData['What_would_you_like_to_do?']}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                  >
                    <option value="Website Revamp">Revamp My Website</option>
                    <option value="New Website">Create a New Website</option>
                    <option value="UI/UX Consultation">UI/UX Design Consultation</option>
                    <option value="General Inquiry">General Question/Inquiry</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="Business_Name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="Business_Name"
                    name="Business_Name"
                    value={formData.Business_Name}
                    onChange={handleChange}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                    placeholder="Your Company Name"
                  />
                </motion.div>

                <AnimatePresence>
                  {formData['What_would_you_like_to_do?'] === 'Website Revamp' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <label htmlFor="Current_Website_URL" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                        Current Website URL <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="Current_Website_URL"
                        name="Current_Website_URL"
                        value={formData.Current_Website_URL}
                        onChange={handleChange}
                        required
                        pattern="https?://.*"
                        placeholder="https://example.com"
                        className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="Tell_us_more_about_your_project" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2">
                    Tell us more about your project
                  </label>
                  <textarea
                    id="Tell_us_more_about_your_project"
                    name="Tell_us_more_about_your_project"
                    value={formData.Tell_us_more_about_your_project}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={getPlaceholderText()}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
                  ></textarea>
                </motion.div>

                <motion.div 
                  className="pt-2 md:pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full inline-flex items-center justify-center px-4 md:px-6 py-3 md:py-4 text-base md:text-lg font-medium rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-50 transition-opacity duration-200"></span>
                    <span className="relative flex items-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          {hasConsented ? 'Submit Request' : 'Continue'}
                          <svg className="ml-2 -mr-1 w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                  {!hasConsented && (
                    <p className="mt-2 text-xs md:text-sm text-center text-gray-500 dark:text-gray-400">
                      By continuing, you'll review our content sharing agreement
                    </p>
                  )}
                </motion.div>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      <ConsentModal
        isOpen={showConsentModal}
        onClose={() => {
          setShowConsentModal(false);
          setPendingSubmission(false);
        }}
        onAccept={handleConsent}
      />
    </>
  );
};

export default SubmissionForm; 