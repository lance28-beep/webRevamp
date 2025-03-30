"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white dark:from-gray-900 dark:via-purple-900/5 dark:to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#413a46_1px,transparent_1px)] dark:bg-[radial-gradient(#6b6b6b_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.15] dark:opacity-[0.07]"></div>
      </div>

      {/* Gradient Orbs with improved animation */}
      <motion.div 
        className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/30 dark:bg-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-pink-500/30 dark:bg-pink-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="content-container min-h-screen flex flex-col justify-center relative z-10">
        <div className="flex flex-col items-center text-center pt-20 md:pt-32 pb-8 md:pb-16 px-4">
          {/* Logo/Mascot with enhanced animation */}
          <motion.div 
            className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="animate-float">
              <Image
                src="/img/image-logo.png"
                alt="WEB Revamp Mascot"
                width={192}
                height={192}
                className="drop-shadow-xl"
                priority
                quality={90}
                sizes="(max-width: 768px) 128px, 192px"
              />
            </div>
          </motion.div>

          {/* Main Heading with enhanced animation */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#f26c1a] via-purple-600 to-pink-600 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            WEB Revamp
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-gray-300 mb-4 md:mb-6 max-w-2xl px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Your Gateway to Web Design Inspiration & Free Website Features
          </motion.p>

          <motion.div
            className="max-w-2xl mx-auto text-center mb-8 md:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-gray-300 mb-3 md:mb-4">
              Welcome to WEB Revamp - your go-to platform for web design inspiration and free website features! We showcase the best in web design while offering selected businesses and individuals the chance to get their websites designed and featured on our blog.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-gray-300">
              Submit your project for a chance to be featured and get a free professional website design that will inspire others. Perfect for students, businesses, and creative professionals looking to make their mark online.
            </p>
          </motion.div>

          {/* Features List with enhanced card design */}
          <motion.div 
            className="card backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 w-full max-w-2xl mb-8 md:mb-12 border border-gray-100 dark:border-gray-800 rounded-xl md:rounded-2xl shadow-xl p-4 md:p-8 mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              What We Offer
            </h2>
            <ul className="feature-list space-y-4 md:space-y-6">
              <motion.li 
                className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl md:text-3xl mt-1">✍️</span>
                <div>
                  <p className="text-base md:text-lg font-medium">Design Blog & Inspiration</p>
                  <p className="text-xs md:text-sm text-neutral-600 dark:text-gray-400">Weekly articles, tips, and showcases of amazing web designs</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl md:text-3xl mt-1">🎨</span>
                <div>
                  <p className="text-base md:text-lg font-medium">Free Website Design Program</p>
                  <p className="text-xs md:text-sm text-neutral-600 dark:text-gray-400">Selected projects get free professional website design</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl md:text-3xl mt-1">📚</span>
                <div>
                  <p className="text-base md:text-lg font-medium">Learning Resources</p>
                  <p className="text-xs md:text-sm text-neutral-600 dark:text-gray-400">Tutorials, code snippets, and design best practices</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-lg md:rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-2xl md:text-3xl mt-1">🤝</span>
                <div>
                  <p className="text-base md:text-lg font-medium">Community Features</p>
                  <p className="text-xs md:text-sm text-neutral-600 dark:text-gray-400">Get featured, share insights, and connect with other creators</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>

          {/* CTA Buttons with enhanced design */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 w-full max-w-2xl mx-auto mb-8 md:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Link href="#submit-project" className="w-full sm:flex-1">
              <motion.button 
                className="btn-primary w-full group whitespace-nowrap transform transition-all duration-300 hover:scale-105 active:scale-95 rounded-lg md:rounded-xl py-3 md:py-4 px-6 md:px-8 text-base md:text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Your Project
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none ml-1">
                  →
                </span>
              </motion.button>
            </Link>
            <Link href="#features" className="w-full sm:flex-1">
              <motion.button 
                className="btn-secondary w-full group whitespace-nowrap transform transition-all duration-300 hover:scale-105 active:scale-95 rounded-lg md:rounded-xl py-3 md:py-4 px-6 md:px-8 text-base md:text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none ml-1">
                  →
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Media Links with enhanced design */}
          <motion.div 
            className="social-links-container backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 p-2 sm:p-4 rounded-full border border-gray-100 dark:border-gray-800 shadow-lg mx-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <a 
              href="https://www.facebook.com/webRevamps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link group relative inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mx-1 sm:mx-2 transition-all duration-300 hover:-translate-y-1"
              aria-label="Facebook"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="social-icon w-4 h-4 sm:w-6 sm:h-6 transform transition-all duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com/webrevamp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link group relative inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mx-1 sm:mx-2 transition-all duration-300 hover:-translate-y-1"
              aria-label="Instagram"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="social-icon w-4 h-4 sm:w-6 sm:h-6 transform transition-all duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a 
              href="https://tiktok.com/@webrevamp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link group relative inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mx-1 sm:mx-2 transition-all duration-300 hover:-translate-y-1"
              aria-label="TikTok"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-800 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="social-icon w-4 h-4 sm:w-6 sm:h-6 transform transition-all duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
            <a 
              href="https://youtube.com/@webrevamp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link group relative inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mx-1 sm:mx-2 transition-all duration-300 hover:-translate-y-1"
              aria-label="YouTube"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="social-icon w-4 h-4 sm:w-6 sm:h-6 transform transition-all duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a 
              href="https://twitter.com/webrevamp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link group relative inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mx-1 sm:mx-2 transition-all duration-300 hover:-translate-y-1"
              aria-label="X (Twitter)"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="social-icon w-4 h-4 sm:w-6 sm:h-6 transform transition-all duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/webrevamp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link group relative inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 mx-1 sm:mx-2 transition-all duration-300 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <svg className="social-icon w-4 h-4 sm:w-6 sm:h-6 transform transition-all duration-300 group-hover:scale-125" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 