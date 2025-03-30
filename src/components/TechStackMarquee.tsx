"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const technologies = [
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'Tailwind CSS', icon: '/tech/tailwind.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'Firebase', icon: '/tech/firebase.svg' },
  { name: 'Vercel', icon: '/tech/vercel.svg' },
  { name: 'MongoDB', icon: '/tech/mongodb.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
  { name: 'Docker', icon: '/tech/docker.svg' },
  { name: 'AWS', icon: '/tech/aws.svg' },
  { name: 'GraphQL', icon: '/tech/graphql.svg' },
  { name: 'Redux', icon: '/tech/redux.svg' },
  { name: 'Jest', icon: '/tech/jest.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'CI/CD', icon: '/tech/cicd.svg' },
  { name: 'Web3', icon: '/tech/web3.svg' },
  { name: 'REST APIs', icon: '/tech/api.svg' },
  { name: 'SEO', icon: '/tech/seo.svg' },
  { name: 'PWA', icon: '/tech/pwa.svg' },
];

const TechStackMarquee = () => {
  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-6 sm:py-8 md:py-12">
      <div className="relative flex">
        {/* First set of items */}
        <motion.div 
          className="flex items-center space-x-4 sm:space-x-8 md:space-x-12"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 30, // Slower on mobile for better readability
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-max"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, 32px"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Duplicate set of items for seamless loop */}
        <motion.div 
          className="flex items-center space-x-4 sm:space-x-8 md:space-x-12"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 min-w-max"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                  loading="lazy"
                  sizes="(max-width: 640px) 24px, (max-width: 768px) 28px, 32px"
                />
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 30s;
          }
        }
        @media (min-width: 641px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
};

export default TechStackMarquee; 