'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(10);
  const [rate, setRate] = useState(8);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);

  React.useEffect(() => {
    const p = principal * 100000;
    const r = rate / 12 / 100;
    const n = tenure * 12;

    if (r === 0) {
      setEmi(Math.round(p / n));
    } else {
      const emiAmount = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(Math.round(emiAmount));
    }
  }, [principal, rate, tenure]);

  const totalAmount = emi * tenure * 12;
  const interest = totalAmount - principal * 100000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-primary to-primary-800 rounded-2xl p-8 lg:p-12 text-white"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-white/20 p-3 rounded-lg">
          <Calculator size={28} />
        </div>
        <h2 className="text-3xl font-poppins font-bold">
          Education Loan EMI Calculator
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          {/* Loan Amount */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold">Loan Amount</label>
              <span className="text-2xl font-bold text-accent">
                ₹{principal}L
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-white/60 mt-2">
              <span>₹5L</span>
              <span>₹50L</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold">Interest Rate</label>
              <span className="text-2xl font-bold text-accent">{rate}%</span>
            </div>
            <input
              type="range"
              min="4"
              max="12"
              step="0.5"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-white/60 mt-2">
              <span>4%</span>
              <span>12%</span>
            </div>
          </div>

          {/* Tenure */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-lg font-semibold">Tenure</label>
              <span className="text-2xl font-bold text-accent">{tenure} yrs</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer accent-accent"
            />
            <div className="flex justify-between text-xs text-white/60 mt-2">
              <span>1 yr</span>
              <span>10 yrs</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 lg:p-8">
          <h3 className="text-xl font-poppins font-bold mb-8">
            Loan Breakdown
          </h3>

          <div className="space-y-4 mb-6">
            {/* Monthly EMI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-accent/20 border border-accent/30 rounded-lg p-4"
            >
              <p className="text-white/80 text-sm mb-1">Monthly EMI</p>
              <p className="text-4xl font-poppins font-bold text-accent">
                ₹{emi.toLocaleString()}
              </p>
            </motion.div>

            {/* Total Amount */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/20 rounded-lg p-4"
            >
              <p className="text-white/80 text-sm mb-1">Total Amount to Pay</p>
              <p className="text-2xl font-poppins font-bold">
                ₹{totalAmount.toLocaleString()}
              </p>
            </motion.div>

            {/* Interest */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/20 rounded-lg p-4"
            >
              <p className="text-white/80 text-sm mb-1">Total Interest</p>
              <p className="text-2xl font-poppins font-bold">
                ₹{interest.toLocaleString()}
              </p>
            </motion.div>
          </div>

          <div className="bg-white/10 rounded-lg p-4 text-sm text-white/80">
            <p>
              💡 <span className="font-semibold">Note:</span> This is an
              approximate calculation. Actual EMI may vary based on bank policies
              and additional charges.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
