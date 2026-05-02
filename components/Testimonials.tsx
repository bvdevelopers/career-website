'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
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
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {testimonials.map((testimonial) => (
        <motion.div
          key={testimonial.id}
          variants={itemVariants}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 lg:p-8 card-hover"
        >
          {/* Rating */}
          <div className="flex gap-1 mb-4">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star key={i} size={18} className="fill-accent text-accent" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 mb-6 leading-relaxed italic">
            &quot;{testimonial.text}&quot;
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
            <div className="text-3xl">{testimonial.image}</div>
            <div>
              <p className="font-poppins font-semibold text-primary">
                {testimonial.name}
              </p>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-xs text-gray-500">{testimonial.location}</p>
            </div>
          </div>

          {/* Service Tag */}
          <div className="mt-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {testimonial.service}
            </span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
