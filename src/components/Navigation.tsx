"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: { leading?: boolean; maxWait?: number } = {}
): T {
  let timeout: NodeJS.Timeout | null = null;
  let lastCallTime = 0;

  return ((...args: Parameters<T>) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCallTime;

    if (options.leading && !timeout) {
      func(...args);
      lastCallTime = now;
    }

    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      if (!options.leading) {
        func(...args);
      }
      timeout = null;
    }, wait);

    if (options.maxWait && timeSinceLastCall >= options.maxWait) {
      if (timeout) {
        clearTimeout(timeout);
      }
      func(...args);
      lastCallTime = now;
    }
  }) as T;
}

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isDarkMode, toggleDarkMode } = useTheme();
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Debounced scroll handler for better performance
  const handleScroll = useCallback(
    debounce(() => {
      setIsScrolled(window.scrollY > 20);
    }, 10, { leading: true, maxWait: 100 }),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll]);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Submit Project', path: '/#submit-project', isButton: true }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-8 h-8 md:w-10 md:h-10"
            >
              <Image
                src="/img/image-logo.png"
                alt="WEB Revamp Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.span
              className="hidden sm:block text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WEB Revamp
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.path}
                  className={`${
                    isActive(item.path)
                      ? 'text-purple-600 dark:text-purple-400 font-semibold'
                      : isScrolled 
                        ? 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'
                        : 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'
                  } transition-colors duration-200 relative group`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                      layoutId="underline"
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isScrolled 
                  ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200' 
                  : 'hover:bg-gray-100/10 text-gray-700 dark:text-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? '🌞' : '🌙'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled 
                ? 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200' 
                : 'hover:bg-gray-100/10 text-gray-700 dark:text-gray-200'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMobileMenuOpen ? "open" : "closed"}
              className="w-6 h-6 flex flex-col justify-center items-center"
            >
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 8 }
                }}
                className="w-6 h-0.5 bg-current block mb-1.5"
              />
              <motion.span
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
                className="w-6 h-0.5 bg-current block mb-1.5"
              />
              <motion.span
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -8 }
                }}
                className="w-6 h-0.5 bg-current block"
              />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90] md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
              {/* Menu */}
              <motion.div
                className="fixed top-0 right-0 h-screen w-64 bg-white dark:bg-gray-900 shadow-xl z-[110] md:hidden"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 20 }}
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="sticky top-0 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                      Menu
                    </span>
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-white"
                    >
                      ✕
                    </button>
                  </div>
                  
                  {/* Menu Items */}
                  <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                    {navItems.map((item) => (
                      <motion.div
                        key={item.path}
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          href={item.path}
                          className={`block ${
                            isActive(item.path)
                              ? 'text-purple-600 dark:text-purple-400 font-semibold'
                              : 'text-gray-700 dark:text-gray-200 hover:text-purple-600 dark:hover:text-purple-400'
                          } transition-colors duration-200 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                    <motion.button
                      onClick={() => {
                        toggleDarkMode();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 text-gray-700 dark:text-gray-200"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 