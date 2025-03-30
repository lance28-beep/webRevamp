'use client';

import { motion } from 'framer-motion';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="container mx-auto px-4">
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Blog
            </h1>
            
            <div className="relative w-24 h-24 mx-auto">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-4xl">
                📝
              </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Coming Soon
            </p>
            
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              We're preparing insightful articles about web design, development tips, 
              and inspiring website transformations. Stay tuned!
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/#submit-project"
                className="inline-block px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Submit Your Project
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 