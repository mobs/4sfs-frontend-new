'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram, 
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight
} from 'react-icons/fa';
import { 
  QUICK_LINKS, 
  POPULAR_LOCATIONS, 
  SERVICES, 
  CONTACT_INFO, 
  NAV_ITEMS 
} from '@/constants/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaYoutube
  };

  const SOCIAL_LINKS = [
    { name: 'Facebook', href: 'https://facebook.com/4sfs', icon: 'FaFacebook' },
    { name: 'Twitter', href: 'https://twitter.com/4sfs', icon: 'FaTwitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/4sfs', icon: 'FaLinkedin' },
    { name: 'Instagram', href: 'https://instagram.com/4sfs', icon: 'FaInstagram' },
    { name: 'YouTube', href: 'https://youtube.com/4sfs', icon: 'FaYoutube' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-darkgray text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-14">
                <Image
                  src="/logo-white.png"
                  alt="4SFS Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted partner in real estate, finance, and insurance solutions. 
              We make investment decisions simple and secure.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="text-lg" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Our Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors duration-200 flex items-center group"
                  >
                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaPhone className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-sm text-gray-300 hover:text-secondary transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm text-gray-300">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaClock className="text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Working Hours</p>
                  <p className="text-sm text-gray-300">
                    {CONTACT_INFO.workingHours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Popular Locations */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <h3 className="text-lg font-semibold mb-4 text-secondary">Popular Locations</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {POPULAR_LOCATIONS.map((location) => (
              <Link
                key={location.label}
                href={location.href}
                className="text-sm text-gray-300 hover:text-secondary transition-colors duration-200"
              >
                {location.label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates on properties, loans, and investment insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-secondary transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300 text-center md:text-left">
              © {currentYear} 4SFS - For Sure Funds. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                href="/privacy-policy" 
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                href="/terms" 
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link 
                href="/disclaimer" 
                className="text-gray-300 hover:text-secondary transition-colors"
              >
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

