'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessProps {
  steps: ProcessStep[];
}

export default function Process({ steps }: ProcessProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {steps.map((item, index) => (
        <div key={item.step} className="relative">
          {/* Connecting line */}
          {index < steps.length - 1 && (
            <div className="absolute left-12 top-32 w-1 h-16 bg-gradient-to-b from-accent to-transparent hidden lg:block" />
          )}

          <motion.div variants={itemVariants} className="flex gap-6 lg:gap-8">
            {/* Step Number */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-primary-800 flex items-center justify-center text-white shadow-lg">
                <span className="text-3xl font-poppins font-bold">
                  {String(item.step).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 pt-2">
              <h3 className="text-2xl font-poppins font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>

            {/* Check icon */}
            <motion.div
              className="hidden lg:flex items-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle size={32} className="text-accent" />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
