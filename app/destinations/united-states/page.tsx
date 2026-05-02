'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { MapPin, Users, Briefcase, DollarSign } from 'lucide-react';

// This is a template for dynamic country pages
// In production, you'd fetch actual data for each country

const countryData = {
  name: 'United States',
  flag: '🇺🇸',
  description: 'Home to world-renowned universities and endless opportunities.',
  overview: `The United States offers exceptional quality education with cutting-edge research facilities and world-class faculty. With over 4,000 higher education institutions, students have diverse choices across all fields of study. US degrees are recognized globally and open doors to international career opportunities.`,
  
  universities: [
    { rank: 1, name: 'MIT', city: 'Cambridge, Massachusetts' },
    { rank: 2, name: 'Stanford University', city: 'Stanford, California' },
    { rank: 3, name: 'Harvard University', city: 'Cambridge, Massachusetts' },
    { rank: 4, name: 'Yale University', city: 'New Haven, Connecticut' },
    { rank: 5, name: 'Princeton University', city: 'Princeton, New Jersey' },
  ],

  courses: [
    'Computer Science & Engineering',
    'Business Administration (MBA)',
    'Medicine & Health Sciences',
    'Physics & Mathematics',
    'Chemistry & Biological Sciences',
    'Economics',
    'Law',
    'Psychology',
  ],

  cost: {
    tuition: '$25,000 - $60,000',
    accommodation: '$10,000 - $20,000',
    other: '$5,000 - $10,000',
    total: '$40,000 - $90,000',
    period: 'per year',
  },

  visa: {
    type: 'F-1 Visa',
    processing: '3-4 weeks',
    requirements: [
      'Acceptance letter from university',
      'Proof of financial support',
      'Valid passport',
      'Medical examination',
      'English proficiency (TOEFL/IELTS)',
      'Interview at US Embassy',
    ],
  },

  highlights: [
    'World-class universities',
    'Strong employment opportunities',
    'Optional Practical Training (OPT)',
    'Diverse student community',
    'Advanced research opportunities',
    'English-speaking country',
  ],
};

export default function CountryPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title={countryData.name}
        subtitle={countryData.flag}
        description={countryData.description}
        primaryCTA={{
          label: 'Schedule Consultation',
          href: '#form',
        }}
        fullHeight={false}
      />

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {countryData.overview}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Why Study in {countryData.name}?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countryData.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all p-6 card-hover"
              >
                <p className="text-4xl mb-4">⭐</p>
                <p className="text-lg font-semibold text-primary">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Top Universities
          </motion.h2>

          <div className="space-y-4">
            {countryData.universities.map((uni, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10 flex items-center gap-6"
              >
                <div className="text-3xl font-poppins font-bold text-primary bg-white rounded-lg w-16 h-16 flex items-center justify-center">
                  #{uni.rank}
                </div>
                <div>
                  <h3 className="heading-4">{uni.name}</h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={16} />
                    {uni.city}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Popular Courses
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {countryData.courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md p-6 card-hover text-center"
              >
                <p className="text-4xl mb-4">📚</p>
                <p className="font-semibold text-primary">{course}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Cost of Study
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { icon: Briefcase, label: 'Tuition', amount: countryData.cost.tuition },
              { icon: Users, label: 'Accommodation', amount: countryData.cost.accommodation },
              { icon: DollarSign, label: 'Other Expenses', amount: countryData.cost.other },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{item.label}</p>
                  <p className="heading-4">{item.amount}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-white text-center"
          >
            <p className="text-lg mb-2">Total Cost ({countryData.cost.period})</p>
            <p className="heading-2 text-white">{countryData.cost.total}</p>
          </motion.div>
        </div>
      </section>

      {/* Visa Information */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Visa Information
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="heading-4 mb-6">Visa Type</h3>
              <p className="text-2xl font-poppins font-bold text-primary mb-4">
                {countryData.visa.type}
              </p>
              <p className="text-gray-600">
                Required for international students pursuing full-time studies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="heading-4 mb-6">Processing Time</h3>
              <p className="text-2xl font-poppins font-bold text-accent mb-4">
                {countryData.visa.processing}
              </p>
              <p className="text-gray-600">
                Typical processing time from application to approval.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="heading-4 mb-6">Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                {countryData.visa.requirements.slice(0, 3).map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section id="form" className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom max-w-2xl mx-auto">
          <LeadForm
            title={`Study in ${countryData.name}`}
            description="Get expert guidance to study in your dream destination."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
