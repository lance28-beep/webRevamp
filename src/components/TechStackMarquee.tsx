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
    <div className="w-full overflow-hidden bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="relative flex">
        {/* First set of items */}
        <motion.div 
          className="flex items-center space-x-12"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={`first-${index}`}
              className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-8 h-8">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="object-contain"
                  loading="lazy"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Duplicate set of items for seamless loop */}
        <motion.div 
          className="flex items-center space-x-12"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={`second-${index}`}
              className="flex items-center space-x-3 px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-8 h-8">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={32}
                  height={32}
                  className="object-contain"
                  loading="lazy"
                  sizes="32px"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TechStackMarquee; 