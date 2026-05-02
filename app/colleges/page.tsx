'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Search, Sliders, Star } from 'lucide-react';

const colleges = [
  {
    id: 1,
    name: 'Indian Institute of Technology (IIT) Delhi',
    type: 'Engineering',
    ranking: '#1',
    placement: '98%',
    avgPackage: '₹ 20 LPA',
  },
  {
    id: 2,
    name: 'Indian Institute of Management (IIM) Ahmedabad',
    type: 'Management',
    ranking: '#1',
    placement: '99%',
    avgPackage: '₹ 25 LPA',
  },
  {
    id: 3,
    name: 'All India Institute of Medical Sciences (AIIMS) Delhi',
    type: 'Medical',
    ranking: '#1',
    placement: '95%',
    avgPackage: '₹ 15 LPA',
  },
  {
    id: 4,
    name: 'Delhi University (North Campus)',
    type: 'General',
    ranking: '#5',
    placement: '85%',
    avgPackage: '₹ 8 LPA',
  },
  {
    id: 5,
    name: 'Manipal Academy of Higher Education',
    type: 'Multi-Discipline',
    ranking: '#8',
    placement: '92%',
    avgPackage: '₹ 12 LPA',
  },
  {
    id: 6,
    name: 'Nirma University',
    type: 'Engineering',
    ranking: '#12',
    placement: '88%',
    avgPackage: '₹ 10 LPA',
  },
];

const collegeTypes = ['All', 'Engineering', 'Medical', 'Management', 'General'];

export default function CollegesPage() {
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredColleges = colleges.filter((college) => {
    const matchesType = selectedType === 'All' || college.type === selectedType;
    const matchesSearch = college.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Find Your College"
        description="Explore top colleges across India with placement records and rankings."
        fullHeight={false}
      />

      {/* Colleges Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Search and Filters */}
          <div className="mb-12">
            {/* Search */}
            <div className="mb-6 relative">
              <Search className="absolute left-4 top-4 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search colleges..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>

            {/* Type Filter */}
            <div className="flex flex-wrap gap-3">
              {collegeTypes.map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedType === type
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Colleges List */}
          <div className="space-y-4">
            {filteredColleges.map((college, index) => (
              <motion.div
                key={college.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white border border-gray-200 rounded-xl hover:shadow-xl transition-all overflow-hidden group cursor-pointer card-hover"
              >
                <div className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    {/* College Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-3 mb-3">
                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                          {college.type}
                        </span>
                        <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                          Rank {college.ranking}
                        </span>
                      </div>
                      <h3 className="heading-4 mb-1 group-hover:text-primary transition-colors">
                        {college.name}
                      </h3>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600 text-sm mb-1">Placement</p>
                        <p className="heading-4 text-accent">{college.placement}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm mb-1">Avg. Package</p>
                        <p className="heading-4 text-primary">{college.avgPackage}</p>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-end">
                      <button className="btn-primary">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredColleges.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-2xl font-poppins font-bold text-primary mb-2">
                No colleges found
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
            title="Get College Recommendations"
            description="Tell us about your profile and we'll suggest the best colleges for you."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
