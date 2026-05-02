'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import Process from '@/components/Process';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle } from 'lucide-react';

const serviceData = {
  title: 'Study Abroad',
  description: 'Get admission to top universities across USA, UK, Canada, Australia, and more',
  benefits: [
    'Expert guidance on university selection and applications',
    'Complete documentation and visa support',
    'Interview preparation and coaching',
    'Scholarship and financial aid assistance',
    'Pre-departure briefing and orientation',
    'Ongoing support during your studies',
  ],
  process: [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Free consultation to understand your profile and aspirations.',
    },
    {
      step: 2,
      title: 'Profile Assessment',
      description: 'Comprehensive evaluation of academics and career goals.',
    },
    {
      step: 3,
      title: 'University Selection',
      description: 'Personalized list of universities matching your profile.',
    },
    {
      step: 4,
      title: 'Application Support',
      description: 'Guidance on essays, documents, and application submission.',
    },
    {
      step: 5,
      title: 'Visa Processing',
      description: 'Complete visa documentation and interview preparation.',
    },
    {
      step: 6,
      title: 'Pre-Departure',
      description: 'Final guidance on accommodation, travel, and settling abroad.',
    },
  ],
};

export default function ServicePage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title={serviceData.title}
        description={serviceData.description}
        primaryCTA={{
          label: 'Schedule Consultation',
          href: '#form',
        }}
        fullHeight={false}
      />

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-8">Why Choose Our Service?</h2>
              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle size={24} className="text-accent mt-1" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-700">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
            >
              <h3 className="heading-3 mb-6">Did You Know?</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span>98% success rate in university admissions</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span>Average scholarship: 40% of total fees</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">⏱️</span>
                  <span>Average processing time: 3-4 months</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-2xl">🌍</span>
                  <span>Placements in 25+ countries</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Our Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Step-by-step guidance to your success
            </motion.p>
          </div>
          <Process steps={serviceData.process} />
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Success Stories
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                university: 'MIT',
                program: 'Computer Science',
                year: 2023,
              },
              {
                name: 'Arjun Kumar',
                university: 'Cambridge University',
                program: 'Engineering',
                year: 2023,
              },
              {
                name: 'Sneha Desai',
                university: 'Stanford',
                program: 'Business',
                year: 2024,
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10"
              >
                <p className="text-4xl mb-4">✨</p>
                <h3 className="font-poppins font-bold text-primary mb-2">
                  {story.name}
                </h3>
                <p className="text-gray-700 font-semibold mb-1">
                  {story.university}
                </p>
                <p className="text-gray-600 text-sm mb-3">{story.program}</p>
                <p className="text-accent font-semibold text-sm">Class of {story.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form" className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-2xl mx-auto">
          <LeadForm
            title="Ready to Start Your Journey?"
            description="Fill the form below and our experts will contact you soon."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
