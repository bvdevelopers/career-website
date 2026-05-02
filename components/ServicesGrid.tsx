'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Service } from '@/lib/types';

interface ServicesGridProps {
  services: Service[];
  columns?: number;
}

export default function ServicesGrid({ services, columns = 4 }: ServicesGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const getIcon = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      GraduationCap: Icons.GraduationCap,
      BookOpen: Icons.BookOpen,
      Stethoscope: Icons.Stethoscope,
      Heart: Icons.Heart,
      Briefcase: Icons.Briefcase,
      DollarSign: Icons.DollarSign,
      Star: Icons.Star,
      Globe: Icons.Globe,
    };
    return iconMap[iconName] || Icons.Zap;
  };

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <motion.div
      className={`grid ${gridColsClass[columns as keyof typeof gridColsClass]} gap-6 lg:gap-8`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {services.map((service, index) => {
        const IconComponent = getIcon(service.icon);
        return (
          <motion.div
            key={service.id}
            variants={itemVariants}
          >
            <Link href={service.link}>
              <div
                className={`${service.color} p-8 rounded-2xl h-full cursor-pointer group card-hover`}
              >
                <div className="mb-6 inline-block p-4 bg-white rounded-xl group-hover:shadow-lg transition-all">
                  <IconComponent size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-poppins font-bold text-primary mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More
                  <Icons.ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
