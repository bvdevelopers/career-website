'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919360492275';
  const message = encodeURIComponent(
    'Hello! I am interested in your education consultancy services. Can you please provide more information?'
  );
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:shadow-xl"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <MessageCircle size={28} />
      </motion.div>
    </motion.a>
  );
}
