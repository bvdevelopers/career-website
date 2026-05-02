'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface Stat {
  number: number;
  label: string;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
  columns?: number;
}

export default function StatsCounter({ stats, columns = 4 }: StatsCounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [displayNumbers, setDisplayNumbers] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!inView) return;

    const timers = stats.map((stat, index) => {
      const increment = Math.ceil(stat.number / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }

        setDisplayNumbers((prev) => {
          const newNumbers = [...prev];
          newNumbers[index] = current;
          return newNumbers;
        });
      }, 30);

      return timer;
    });

    return () => {
      timers.forEach((timer) => clearInterval(timer));
    };
  }, [inView, stats]);

  const gridColsClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

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

  return (
    <motion.div
      ref={ref}
      className={`grid ${gridColsClass[columns as keyof typeof gridColsClass]} gap-8`}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="text-center"
        >
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold text-primary mb-2">
            {displayNumbers[index]}{stat.suffix || ''}
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 font-medium">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
