'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import CountryCarousel from '@/components/CountryCarousel';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import StatsCounter from '@/components/StatsCounter';
import EMICalculator from '@/components/EMICalculator';
import Process from '@/components/Process';

import servicesData from '@/data/services.json';
import countriesData from '@/data/countries.json';
import testimonialsData from '@/data/testimonials.json';
import statsData from '@/data/stats.json';
import processData from '@/data/process.json';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Your Gateway to Global Education & Career"
        subtitle="Welcome to AbilisPath"
        description="Get expert guidance for study abroad, MBBS, placement, and scholarships from India's leading education consultancy."
        primaryCTA={{
          label: 'Free Consultation',
          href: '#contact',
        }}
        secondaryCTA={{
          label: 'Explore Services',
          href: '#services',
        }}
        fullHeight={true}
      />

      {/* Stats Section */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Proven Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Join thousands of students who have successfully achieved their
              dreams with our expert guidance.
            </motion.p>
          </div>
          <StatsCounter stats={statsData.stats} columns={4} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full mb-4"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Comprehensive Education Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We provide end-to-end guidance for every step of your educational
              journey.
            </motion.p>
          </div>
          <ServicesGrid services={servicesData.services} columns={4} />
        </div>
      </section>

      {/* Countries Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4"
            >
              Study Destinations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Global Study Opportunities
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Explore top universities and educational programs across the world.
            </motion.p>
          </div>
          <CountryCarousel countries={countriesData.countries} />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-white mb-8">Why Choose AbilisPath?</h2>
              <div className="space-y-4">
                {[
                  'Expert guidance from experienced consultants',
                  'Personalized counseling and mentorship',
                  'Proven track record of successful placements',
                  'Access to premium universities worldwide',
                  'Complete documentation and visa support',
                  'Affordable and transparent pricing',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <p className="text-lg">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h3 className="text-2xl font-poppins font-bold mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                To empower students with world-class education and career
                opportunities by providing expert guidance, transparent support,
                and personalized mentorship throughout their academic journey.
              </p>
              <h3 className="text-2xl font-poppins font-bold mb-6">
                Our Vision
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                To be the trusted partner of choice for students seeking global
                education, enabling them to achieve their dreams and make a
                meaningful impact in the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-accent/10 text-accent font-semibold rounded-full mb-4"
            >
              Our Process
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Your Journey to Success
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We guide you through every step of your educational journey.
            </motion.p>
          </div>
          <Process steps={processData.process} />
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <EMICalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full mb-4"
            >
              Student Success Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Hear from Our Students
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Real stories from students who achieved their dreams with
              AbilisPath.
            </motion.p>
          </div>
          <Testimonials testimonials={testimonialsData.testimonials} />
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="contact" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <LeadForm
              title="Start Your Journey Today"
              description="Get in touch with our education experts for personalized guidance."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
