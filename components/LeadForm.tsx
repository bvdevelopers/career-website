'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, Loader } from 'lucide-react';

const leadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type LeadFormData = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  title?: string;
  description?: string;
  services?: string[];
  showMessage?: boolean;
}

export default function LeadForm({
  title = 'Get Free Consultation',
  description = 'Fill the form below and our experts will contact you soon.',
  services = [
    'Study Abroad',
    'Study India',
    'MBBS Abroad',
    'MBBS India',
    'Placement',
    'Education Loan',
    'Scholarships',
  ],
  showMessage = true,
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, send to your backend
      console.log('Form submitted:', data);

      setSubmitMessage({
        type: 'success',
        text: 'Thank you! We will contact you soon.',
      });

      reset();

      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
    >
      {title && (
        <h2 className="text-3xl font-poppins font-bold text-primary mb-2">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-gray-600 mb-8">{description}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Full Name *
            </label>
            <input
              type="text"
              {...register('name')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              placeholder="John Doe"
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Email *
            </label>
            <input
              type="email"
              {...register('email')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Phone and Service Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              {...register('phone')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              placeholder="9876543210"
              disabled={isSubmitting}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Service Interest *
            </label>
            <select
              {...register('service')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
              disabled={isSubmitting}
            >
              <option value="">Select a service</option>
              {services.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>
            )}
          </div>
        </div>

        {/* Message */}
        {showMessage && (
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Message *
            </label>
            <textarea
              {...register('message')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
              rows={4}
              placeholder="Tell us about your aspirations..."
              disabled={isSubmitting}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
        )}

        {/* Submit Message */}
        {submitMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-lg ${
              submitMessage.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {submitMessage.text}
          </motion.div>
        )}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-secondary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader size={20} className="animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Inquiry
            </>
          )}
        </motion.button>

        <p className="text-center text-sm text-gray-600">
          We respect your privacy. Your information is safe with us.
        </p>
      </form>
    </motion.div>
  );
}
