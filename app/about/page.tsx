'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Award, Users, Target, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Student-Centric',
    description: 'We put students first in every decision and action we take.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in guidance, support, and outcomes.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'We believe in transparent and ethical practices always.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work together with students, families, and institutions.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly evolve our services to meet changing needs.',
  },
  {
    icon: Award,
    title: 'Accessibility',
    description: 'Quality guidance should be accessible to all students.',
  },
];

const team = [
  {
    name: 'Arvind',
    role: 'Founder & CEO',
    image: '👨‍💼',
    bio: 'With 15+ years of experience in education consultancy, Arvind founded AbilisPath with a vision to transform student aspirations into reality.',
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Services',
    image: '👩‍💼',
    bio: 'Expert in curriculum guidance with placements across 50+ universities globally.',
  },
  {
    name: 'Rohan Patel',
    role: 'MBBS Specialist',
    image: '👨‍🔬',
    bio: 'Specialized in MBBS admissions with 200+ successful placements in international medical schools.',
  },
  {
    name: 'Ananya Singh',
    role: 'Visa & Documentation',
    image: '👩‍⚖️',
    bio: 'Handles visa processing with 98% success rate and comprehensive documentation support.',
  },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="About AbilisPath"
        description="Leading education consultancy empowering students to achieve their global dreams."
        fullHeight={false}
      />

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                AbilisPath was founded by Arvind, an education enthusiast with 15+ years of
                experience in guiding students toward their dreams. Recognizing the gap between
                student aspirations and available guidance, he established AbilisPath in 2020.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                What started as a small consulting firm has now grown into a premier education
                consultancy, helping 5000+ students secure admissions and placements across
                prestigious institutions globally.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, AbilisPath stands as a testament to personalized guidance, transparent
                practices, and unwavering commitment to student success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10"
            >
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Founded</p>
                  <p className="text-2xl font-poppins font-bold text-primary">2020</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Students Guided</p>
                  <p className="text-2xl font-poppins font-bold text-accent">5000+</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Success Rate</p>
                  <p className="text-2xl font-poppins font-bold text-primary">98%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-2">Locations</p>
                  <p className="text-2xl font-poppins font-bold text-accent">1</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              These core principles guide everything we do.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 card-hover"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="heading-4 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Expert consultants dedicated to your success.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden card-hover"
              >
                <div className="bg-gradient-to-r from-primary to-accent p-8 text-center">
                  <p className="text-5xl mb-4">{member.image}</p>
                  <h3 className="heading-4 text-white">{member.name}</h3>
                  <p className="text-white/80 font-semibold">{member.role}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-800 text-white">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 text-white mb-12 text-center"
          >
            Milestones & Achievements
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: '2020', achievement: 'Founded AbilisPath' },
              { year: '2021', achievement: '1000+ Students Guided' },
              { year: '2022', achievement: '150+ Partner Universities' },
              { year: '2024', achievement: '5000+ Success Stories' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20"
              >
                <p className="text-accent text-sm font-semibold mb-2">
                  {item.year}
                </p>
                <p className="text-lg font-semibold">{item.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto">
          <LeadForm
            title="Join Our Community"
            description="Start your journey to success with AbilisPath today."
          />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
