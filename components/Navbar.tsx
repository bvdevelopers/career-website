'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { label: 'Study Abroad', href: '/services/study-abroad' },
    { label: 'Study India', href: '/services/study-india' },
    { label: 'MBBS Abroad', href: '/services/mbbs-abroad' },
    { label: 'MBBS India', href: '/services/mbbs-india' },
    { label: 'Placement', href: '/services/placement' },
    { label: 'Education Loan', href: '/services/education-loan' },
    { label: 'Scholarships', href: '/services/scholarships' },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="font-poppins font-bold text-xl text-primary hidden sm:inline">
              AbilisPath
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown size={18} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg py-2 mt-2"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/destinations" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Destinations
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link href="/contact" className="btn-primary">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-primary" />
            ) : (
              <Menu size={24} className="text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden bg-white border-t border-gray-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-4 space-y-2">
                <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-primary/5 rounded-lg">
                  Home
                </Link>
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-primary/5 rounded-lg">
                  About
                </Link>

                {/* Mobile Services */}
                <div className="space-y-2">
                  <button
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-primary/5 rounded-lg flex items-center justify-between"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === 'mobile-services' ? null : 'mobile-services'
                      )
                    }
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-1 pl-4"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-gray-600 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/destinations" className="block px-4 py-2 text-gray-700 hover:bg-primary/5 rounded-lg">
                  Destinations
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-primary/5 rounded-lg">
                  Contact
                </Link>
                <Link href="/contact" className="block btn-primary w-full text-center mt-4">
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
