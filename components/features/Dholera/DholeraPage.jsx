'use client'
import React from 'react'
import HeroSection from './HeroSection'
import WhyDholeraSection from './WhyDholeraSection'
import FutureReadySection from './FutureReadySection'
import TPZonesSection from './TPZonesSection'
import LatestUpdatesSection from './LatestUpdatesSection'
import InvestmentOptionsSection from './InvestmentOptionsSection'
import WhyChoose4SFSection from './WhyChoose4SFSection'
import FAQSection from './FAQSection'
import ContactSection from './ContactSection'
import Separator from '@/components/ui/Separator'

const DholeraPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <Separator />
      
      <WhyDholeraSection />
      
      <Separator />
      
      <FutureReadySection />
      
      <Separator />
      
      <TPZonesSection />
      
      <Separator />
      
      <LatestUpdatesSection />
      
      <Separator />
      
      <InvestmentOptionsSection />
      
      <Separator />
      
      <WhyChoose4SFSection />
      
      <Separator />
      
      <FAQSection />
      
      <ContactSection />
    </div>
  )
}

export default DholeraPage

