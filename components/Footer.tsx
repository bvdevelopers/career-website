'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-4">AbilisPath</h3>
            <p className="text-white/80 mb-4">
              Your gateway to global education and career opportunities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services/study-abroad" className="text-white/80 hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/study-abroad" className="text-white/80 hover:text-accent transition-colors">
                  Study Abroad
                </Link>
              </li>
              <li>
                <Link href="/services/mbbs-abroad" className="text-white/80 hover:text-accent transition-colors">
                  MBBS Abroad
                </Link>
              </li>
              <li>
                <Link href="/services/placement" className="text-white/80 hover:text-accent transition-colors">
                  Placement
                </Link>
              </li>
              <li>
                <Link href="/services/scholarships" className="text-white/80 hover:text-accent transition-colors">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link href="/services/education-loan" className="text-white/80 hover:text-accent transition-colors">
                  Education Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-poppins font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={20} className="mt-1 flex-shrink-0 text-accent" />
                <div>
                  <p className="text-white/80">9360492275</p>
                  <p className="text-white/80">8939669211</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="mt-1 flex-shrink-0 text-accent" />
                <p className="text-white/80">info@abilispath.com</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-accent" />
                <p className="text-white/80 text-sm">
                  No.769, S72, Spencer Plaza, Anna Salai, Chennai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              &copy; {currentYear} AbilisPath. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
