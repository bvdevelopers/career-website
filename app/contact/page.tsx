'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/lib/config';

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <Hero
        title="Get in Touch"
        description="We'd love to hear from you. Reach out to our team for any inquiries."
        fullHeight={false}
      />

      {/* Contact Info Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Phone size={28} className="text-primary" />
              </div>
              <h3 className="heading-4 mb-3">Phone</h3>
              <div className="space-y-2">
                {siteConfig.phone.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="text-gray-700 hover:text-primary transition-colors block"
                  >
                    +91 {phone.replace(/(\d{4})(\d{4})(\d{3})/, '$1 $2 $3')}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Mail size={28} className="text-primary" />
              </div>
              <h3 className="heading-4 mb-3">Email</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-gray-700 hover:text-primary transition-colors block break-all"
              >
                {siteConfig.email}
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <MapPin size={28} className="text-primary" />
              </div>
              <h3 className="heading-4 mb-3">Location</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {siteConfig.address}
                <br />
                {siteConfig.location}
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 border border-primary/10 hover:border-primary/30 transition-all"
            >
              <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Clock size={28} className="text-primary" />
              </div>
              <h3 className="heading-4 mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Monday - Friday: 10 AM - 7 PM</p>
                <p>Saturday: 10 AM - 5 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-100 rounded-xl overflow-hidden h-96 mb-16"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8105896395217!2d80.24798!3d13.043098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267e2c5555555%3A0x123456789!2sSpencer%20Plaza%20Anna%20Salai%20Chennai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-2 mb-4"
            >
              Send us a Message
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Fill out the form below and we'll get back to you as soon as possible.
            </motion.p>
          </div>

          <LeadForm
            title=""
            description=""
            showMessage={true}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white border-t border-gray-100">
        <div className="container-custom max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-2 mb-12 text-center"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {[
              {
                q: 'How can I schedule a free consultation?',
                a: 'You can fill out our contact form or call us directly. We typically respond within 24 hours to schedule your consultation.',
              },
              {
                q: 'What is your consultation fee?',
                a: 'Initial consultation is completely free. We discuss your requirements and provide personalized guidance without any obligation.',
              },
              {
                q: 'Can I reach you on WhatsApp?',
                a: 'Yes! Use our WhatsApp button to chat with our team instantly for quick queries and support.',
              },
              {
                q: 'What are your payment options?',
                a: 'We accept all major payment methods including bank transfers, credit/debit cards, and online payment platforms.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6 border border-primary/10"
              >
                <h3 className="font-poppins font-bold text-primary mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-700">{faq.a}</p>
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
