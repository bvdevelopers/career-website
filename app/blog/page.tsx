'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Search, Clock, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Choose the Right University Abroad',
    excerpt:
      'A comprehensive guide to selecting the best university based on your profile, interests, and career goals.',
    category: 'Study Abroad',
    author: 'Arvind',
    date: '2024-01-15',
    readTime: 5,
    image: '🎓',
  },
  {
    id: 2,
    title: 'MBBS Abroad vs MBBS India - Which is Better?',
    excerpt:
      'Complete comparison of studying medicine abroad vs in India. Learn about costs, placements, and opportunities.',
    category: 'MBBS',
    author: 'Dr. Sharma',
    date: '2024-01-12',
    readTime: 7,
    image: '⚕️',
  },
  {
    id: 3,
    title: 'Top Scholarships for Indian Students 2024',
    excerpt:
      'Explore the best scholarship opportunities available for Indian students studying internationally.',
    category: 'Scholarships',
    author: 'Priya Singh',
    date: '2024-01-10',
    readTime: 6,
    image: '💰',
  },
  {
    id: 4,
    title: 'Visa Interview Tips - Study Abroad',
    excerpt:
      'Expert tips and strategies to ace your visa interview and increase your chances of approval.',
    category: 'Visa',
    author: 'Ananya',
    date: '2024-01-08',
    readTime: 5,
    image: '✈️',
  },
  {
    id: 5,
    title: 'Engineering Career Guide - Top Specializations',
    excerpt:
      'Understand the best engineering specializations and their career prospects in 2024.',
    category: 'Careers',
    author: 'Rohan Patel',
    date: '2024-01-05',
    readTime: 8,
    image: '🔧',
  },
  {
    id: 6,
    title: 'MBA After Engineering - Is It Worth It?',
    excerpt:
      'Should you pursue an MBA after engineering? Learn about ROI, placement, and career advancement.',
    category: 'Education',
    author: 'Arvind',
    date: '2024-01-02',
    readTime: 6,
    image: '📊',
  },
];

const categories = ['All', ...new Set(blogPosts.map((p) => p.category))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Education Insights & Tips"
        description="Expert advice and latest updates on education, careers, and global opportunities."
        fullHeight={false}
      />

      {/* Blog Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-12">
            {/* Search */}
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
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
          </div>

          {/* Blog Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden card-hover group cursor-pointer"
              >
                {/* Featured Image */}
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-48 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                  <p className="text-6xl">{post.image}</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="heading-4 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-4">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime} min
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-gray-400 mt-3">
                    {new Date(post.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-2xl font-poppins font-bold text-primary mb-2">
                No articles found
              </p>
              <p className="text-gray-600">
                Try adjusting your search or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
