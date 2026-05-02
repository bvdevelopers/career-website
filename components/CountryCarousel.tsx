'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Country } from '@/lib/types';

interface CountryCarouselProps {
  countries: Country[];
}

export default function CountryCarousel({ countries }: CountryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 pb-4 scroll-smooth hide-scrollbar"
      >
        {countries.map((country, index) => (
          <motion.div
            key={country.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex-shrink-0 w-80"
          >
            <Link href={country.link}>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full card-hover">
                <div className="bg-gradient-to-r from-primary to-accent p-8 text-white text-center">
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <h3 className="text-2xl font-poppins font-bold">{country.name}</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">{country.universities}</p>
                      <p className="text-sm text-gray-600">Universities</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-accent">{country.studentsPlaced}</p>
                      <p className="text-sm text-gray-600">Students Placed</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    <span className="font-semibold">Programs:</span> {country.programs}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                    Explore {country.name}
                    <ChevronRight size={18} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 bg-primary hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all hover:-translate-x-8"
        aria-label="Scroll left"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 bg-primary hover:bg-primary-700 text-white p-3 rounded-full shadow-lg transition-all hover:translate-x-8"
        aria-label="Scroll right"
      >
        <ChevronRight size={24} />
      </button>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
