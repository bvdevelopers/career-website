'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhatsAppButton from '@/components/WhatsAppButton';

const galleryItems = [
  { id: 1, title: 'Campus Tour', type: 'image', emoji: '🏫', category: 'Campus' },
  { id: 2, title: 'Student Life', type: 'image', emoji: '👥', category: 'Events' },
  { id: 3, title: 'Placement Event', type: 'image', emoji: '💼', category: 'Events' },
  { id: 4, title: 'Study Group', type: 'image', emoji: '📚', category: 'Academics' },
  { id: 5, title: 'Seminar', type: 'image', emoji: '🎤', category: 'Events' },
  { id: 6, title: 'Lab Work', type: 'image', emoji: '🔬', category: 'Academics' },
  { id: 7, title: 'Sports Day', type: 'image', emoji: '🏆', category: 'Events' },
  { id: 8, title: 'Alumni Meet', type: 'image', emoji: '🤝', category: 'Events' },
  { id: 9, title: 'Lecture Hall', type: 'image', emoji: '🎓', category: 'Campus' },
  { id: 10, title: 'Graduation', type: 'image', emoji: '🎉', category: 'Events' },
  { id: 11, title: 'Library', type: 'image', emoji: '📖', category: 'Campus' },
  { id: 12, title: 'Success Stories', type: 'image', emoji: '⭐', category: 'Academics' },
];

const videos = [
  {
    id: 1,
    title: 'Student Testimonial - MIT',
    thumbnail: '🎥',
    duration: '3:45',
  },
  {
    id: 2,
    title: 'Campus Life at Stanford',
    thumbnail: '🎬',
    duration: '5:20',
  },
  {
    id: 3,
    title: 'How to Apply Abroad',
    thumbnail: '📹',
    duration: '4:10',
  },
];

const categories = ['All', 'Campus', 'Academics', 'Events'];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const filteredItems = galleryItems.filter(
    (item) => selectedCategory === 'All' || item.category === selectedCategory
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Gallery"
        description="Explore our campus, events, and student success stories."
        fullHeight={false}
      />

      {/* Image Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16" layout>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.02 }}
                onClick={() => setSelectedItem(item.id)}
                className="group relative h-40 rounded-lg overflow-hidden cursor-pointer card-hover"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/40 group-hover:to-accent/40 transition-all">
                  <p className="text-6xl">{item.emoji}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div className="text-white">
                    <p className="font-semibold text-sm line-clamp-1">
                      {item.title}
                    </p>
                    <p className="text-xs text-white/80">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Featured Videos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-48 rounded-lg overflow-hidden cursor-pointer card-hover bg-black"
              >
                <div className="w-full h-full bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-all">
                  <p className="text-6xl">{video.thumbnail}</p>
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/40 transition-all">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="text-2xl">▶️</span>
                  </motion.div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                  <p className="font-semibold text-sm line-clamp-1">
                    {video.title}
                  </p>
                  <p className="text-xs text-gray-400">{video.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Photos' },
              { number: '50+', label: 'Videos' },
              { number: '100+', label: 'Events' },
              { number: '5000+', label: 'Moments' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-poppins font-bold text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
