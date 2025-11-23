'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowRight, FaPhoneAlt, FaEnvelope, FaUser, FaRupeeSign } from 'react-icons/fa';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    purpose: null
  });

  const purposeOptions = [
    { value: 'residential', label: 'Residential' },
    { value: 'industrial', label: 'Industrial' },
    { value: 'commercial', label: 'Commercial' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="relative lg:h-screen overflow-hidden">
      {/* Full-screen Video Background - Desktop only */}
      <div className="absolute inset-0 hidden lg:block">
        {/* YouTube Video Embed */}
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/spf8TKGeAXg?autoplay=1&mute=1&loop=1&playlist=spf8TKGeAXg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Dholera Smart City"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={{ objectFit: 'cover' }}
        />
        
        {/* Overlay for better text readability and luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/85 via-secondary/60 to-secondary/40" />
      </div>

      {/* Mobile Video Section */}
      <div className="relative mt-12 lg:hidden w-full aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/spf8TKGeAXg?autoplay=1&mute=1&loop=1&playlist=spf8TKGeAXg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Dholera Smart City"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 to-secondary/50" />
      </div>

      {/* Content Container */}
      <div className="relative lg:h-full flex items-center justify-center lg:justify-end py-8 lg:py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center lg:justify-end">
          {/* Right Side - Floating Transparent Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-md"
          >
              <div className="relative">
                {/* Floating luxury glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl opacity-50 blur-xl"></div>
                
                {/* Form Card - Transparent Glass with Blur */}
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/20 p-8">
                  {/* Elegant header with H1 */}
                  <div className="mb-6 text-center">
                    {/* <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full mb-4"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                      </span>
                      <span className="text-xs font-bold text-white tracking-widest uppercase drop-shadow">Exclusive Opportunity</span>
                    </motion.div> */}
                    <h1 className="text-3xl font-bold md:text-white text-secondary mb-3 drop-shadow-lg">
                      Invest in Dholera <br/> Smart City
                    </h1>
                    <p className="md:text-white/90 text-secondary text-base drop-shadow font-medium">
                      Get Your Free Expert Consultation
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Input
                        icon={<FaUser className="text-secondary" />}
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="text-sm text-secondary placeholder-secondary"
                      />
                    </div>

                    <div className="relative">
                      <Input
                        icon={<FaPhoneAlt className="text-secondary" />}
                        placeholder="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="text-sm text-secondary placeholder-secondary"
                      />
                    </div>

                    <div className="relative">
                      <Input
                        icon={<FaEnvelope className="text-secondary" />}
                        placeholder="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="text-sm text-secondary placeholder-secondary"
                      />
                    </div>

                    <div className="relative">
                      <Input
                        icon={<FaRupeeSign className="text-secondary" />}
                        placeholder="Investment Budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        required
                        className="text-sm text-secondary placeholder-secondary"
                      />
                    </div>

                    <div className="relative">
                      <Select
                        placeholder="Investment Purpose"
                        options={purposeOptions}
                        value={formData.purpose}
                        onChange={(option) => setFormData({ ...formData, purpose: option })}
                        className="text-sm text-secondary placeholder-secondary"
                      />
                    </div>

                    <Button
                      variant="primary"
                      className="w-full py-4 text-base font-bold rounded-xl shadow-2xl hover:shadow-3xl group"
                    >
                      <span className="flex items-center justify-center">
                        Get Best Plots Now
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </form>

                  {/* Trust badges */}
                  {/* <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-center space-x-6 text-sm text-white">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center border border-white/30">
                          <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-semibold drop-shadow">Verified</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center border border-white/30">
                          <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="font-semibold drop-shadow">Secure</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>
      </div>
  
      {/* Bottom Scroll Indicator with luxury touch */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs text-white/80 uppercase tracking-[0.2em] font-semibold drop-shadow-lg">Explore More</span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2 bg-white/10 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full shadow-lg"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

