'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Search, Filter } from 'lucide-react';

const courses = [
  {
    id: 1,
    name: 'B.Tech Computer Science',
    category: 'Engineering',
    duration: '4 years',
    fees: '₹ 4,00,000 - 12,00,000',
    skills: ['Programming', 'Web Development', 'AI/ML'],
    jobs: 'Software Engineer, Data Scientist, Web Developer',
  },
  {
    id: 2,
    name: 'MBA - General',
    category: 'Management',
    duration: '2 years',
    fees: '₹ 10,00,000 - 25,00,000',
    skills: ['Leadership', 'Finance', 'Strategy'],
    jobs: 'Business Manager, Consultant, Entrepreneur',
  },
  {
    id: 3,
    name: 'MBBS',
    category: 'Medical',
    duration: '5.5 years',
    fees: '₹ 8,00,000 - 30,00,000',
    skills: ['Clinical Practice', 'Diagnosis', 'Surgery'],
    jobs: 'Doctor, Surgeon, Medical Researcher',
  },
  {
    id: 4,
    name: 'BCA - Computer Applications',
    category: 'IT',
    duration: '3 years',
    fees: '₹ 2,00,000 - 6,00,000',
    skills: ['Web Development', 'Database', 'Software Testing'],
    jobs: 'Web Developer, QA Engineer, Database Admin',
  },
  {
    id: 5,
    name: 'B.Sc Psychology',
    category: 'Science',
    duration: '3 years',
    fees: '₹ 1,50,000 - 4,00,000',
    skills: ['Research', 'Counseling', 'Analysis'],
    jobs: 'Clinical Psychologist, HR Professional, Researcher',
  },
  {
    id: 6,
    name: 'LLB - Law',
    category: 'Law',
    duration: '3-5 years',
    fees: '₹ 3,00,000 - 10,00,000',
    skills: ['Legal Research', 'Advocacy', 'Contract Law'],
    jobs: 'Lawyer, Judge, Legal Consultant',
  },
];

const categories = ['All', ...new Set(courses.map((c) => c.category))];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Explore Courses"
        description="Find the perfect course that matches your career aspirations."
        fullHeight={false}
      />

      {/* Courses Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-12">
            {/* Search */}
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search courses..."
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

          {/* Courses Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden card-hover group cursor-pointer"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-full mb-3">
                    {course.category}
                  </span>
                  <h3 className="heading-4 text-white mb-1">{course.name}</h3>
                  <p className="text-white/90 text-sm">
                    Duration: {course.duration}
                  </p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-2">Fees</p>
                    <p className="heading-4 text-primary">{course.fees}</p>
                  </div>

                  <div className="mb-6">
                    <p className="text-gray-600 text-sm mb-3">Skills Developed</p>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 text-sm mb-2">Career Paths</p>
                    <p className="text-gray-700 font-semibold text-sm">
                      {course.jobs}
                    </p>
                  </div>

                  <button className="w-full mt-6 btn-secondary">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-2xl font-poppins font-bold text-primary mb-2">
                No courses found
              </p>
              <p className="text-gray-600">
                Try adjusting your search or filters
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-2xl mx-auto">
          <LeadForm
            title="Get Course Recommendations"
            description="Let our experts recommend the perfect course based on your profile."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
