'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  backgroundImage?: string;
  fullHeight?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  fullHeight = true,
}: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${
        fullHeight ? 'min-h-screen' : 'min-h-[500px] sm:min-h-[600px]'
      } flex items-center justify-center`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60 z-10" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {subtitle && (
          <motion.p
            variants={itemVariants}
            className="text-accent font-semibold text-lg mb-4"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-white mb-6 leading-tight"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {(primaryCTA || secondaryCTA) && (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="px-8 py-4 bg-accent hover:bg-accent-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto"
              >
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary font-semibold rounded-lg transition-all duration-300 w-full sm:w-auto"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll indicator */}
      {fullHeight && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white text-center">
            <p className="text-sm mb-2">Scroll to explore</p>
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      )}
    </section>
  );
}
