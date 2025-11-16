import { 
  FaHome, 
  FaBuilding, 
  FaHandHoldingUsd, 
  FaShieldAlt, 
  FaLightbulb, 
  FaBlog, 
  FaPhoneAlt,
  FaStore,
  FaHospital,
  FaHeartbeat,
  FaUserShield,
  FaCar,
  FaUmbrella,
  FaPlane
} from 'react-icons/fa';

export const NAV_ITEMS = [
  { 
    label: 'Home', 
    href: '/',
    icon: FaHome
  },
  { 
    label: 'Buy Properties', 
    href: '/buy-properties',
    icon: FaBuilding,
    children: [
      { 
        label: 'Residential', 
        href: '/buy-properties/residential',
        children: [
          { label: 'Apartments', href: '/buy-properties/residential/apartments' },
          { label: 'Villas', href: '/buy-properties/residential/villas' },
          { label: 'Builder Floors', href: '/buy-properties/residential/builder-floors' },
          { label: 'Plots', href: '/buy-properties/residential/plots' }
        ]
      },
      { 
        label: 'Commercial', 
        href: '/buy-properties/commercial',
        children: [
          { label: 'Office Spaces', href: '/buy-properties/commercial/office-spaces' },
          { label: 'Retail Shops', href: '/buy-properties/commercial/retail-shops' },
          { label: 'Co-working Spaces', href: '/buy-properties/commercial/coworking' },
          { label: 'Showrooms', href: '/buy-properties/commercial/showrooms' }
        ]
      },
      { 
        label: 'Premium', 
        href: '/buy-properties/premium',
        children: [
          { label: 'Luxury Apartments', href: '/buy-properties/premium/luxury-apartments' },
          { label: 'Penthouses', href: '/buy-properties/premium/penthouses' },
          { label: 'Premium Villas', href: '/buy-properties/premium/villas' }
        ]
      }
    ]
  },
  { 
    label: 'Sell Properties', 
    href: '/sell-properties',
    icon: FaStore,
    children: [
      { label: 'List Your Property', href: '/sell-properties/list' },
      { label: 'Free Property Valuation', href: '/sell-properties/valuation' },
      { label: 'Sell Faster with Us', href: '/sell-properties/fast-sale' },
      { label: 'Owner Services', href: '/sell-properties/owner-services' }
    ]
  },
  { 
    label: 'Home Loans', 
    href: '/home-loans',
    icon: FaHandHoldingUsd,
    children: [
      { label: 'Home Purchase Loan', href: '/home-loans/purchase' },
      { label: 'Home Construction Loan', href: '/home-loans/construction' },
      { label: 'Plot Loan', href: '/home-loans/plot' },
      { label: 'Home Loan Balance Transfer', href: '/home-loans/balance-transfer' },
      { label: 'Loan Against Property', href: '/home-loans/loan-against-property' },
      { label: 'EMI Calculator', href: '/home-loans/emi-calculator' }
    ]
  },
  { 
    label: 'Insurance', 
    href: '/insurance',
    icon: FaShieldAlt,
    children: [
      { 
        label: 'Health Insurance', 
        href: '/insurance/health',
        icon: FaHospital,
        children: [
          { label: 'Individual Health Insurance', href: '/insurance/health/individual' },
          { label: 'Family Floater', href: '/insurance/health/family-floater' },
          { label: 'Senior Citizen Health', href: '/insurance/health/senior-citizen' },
          { label: 'Critical Illness', href: '/insurance/health/critical-illness' }
        ]
      },
      { 
        label: 'Life Insurance', 
        href: '/insurance/life',
        icon: FaUserShield,
        children: [
          { label: 'Term Insurance', href: '/insurance/life/term' },
          { label: 'Whole Life Insurance', href: '/insurance/life/whole-life' },
          { label: 'ULIP', href: '/insurance/life/ulip' },
          { label: 'Endowment Plans', href: '/insurance/life/endowment' }
        ]
      },
      { 
        label: 'Vehicle Insurance', 
        href: '/insurance/vehicle',
        icon: FaCar,
        children: [
          { label: 'Car Insurance', href: '/insurance/vehicle/car' },
          { label: 'Two Wheeler Insurance', href: '/insurance/vehicle/two-wheeler' },
          { label: 'Commercial Vehicle', href: '/insurance/vehicle/commercial' }
        ]
      },
      { 
        label: 'General Insurance', 
        href: '/insurance/general',
        icon: FaUmbrella,
        children: [
          { label: 'Home Insurance', href: '/insurance/general/home' },
          { label: 'Travel Insurance', href: '/insurance/general/travel' },
          { label: 'Personal Accident', href: '/insurance/general/personal-accident' }
        ]
      }
    ]
  },
  { 
    label: 'Insights', 
    href: '/insights',
    icon: FaLightbulb,
    children: [
      { label: 'Market Trends', href: '/insights/market-trends' },
      { label: 'Investment Guides', href: '/insights/investment-guides' },
      { label: 'Property News', href: '/insights/property-news' },
      { label: 'Expert Opinions', href: '/insights/expert-opinions' },
      { label: 'Research Reports', href: '/insights/research-reports' }
    ]
  },
  { 
    label: 'Blogs', 
    href: '/blogs',
    icon: FaBlog
  },
  { 
    label: 'Contact Us', 
    href: '/contact',
    icon: FaPhoneAlt
  }
];

// Quick Links for Footer
export const QUICK_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Careers', href: '/careers' },
  { label: 'Partner With Us', href: '/partners' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Sitemap', href: '/sitemap' }
];

// Popular Locations
export const POPULAR_LOCATIONS = [
  { label: 'Mumbai', href: '/locations/mumbai' },
  { label: 'Delhi NCR', href: '/locations/delhi-ncr' },
  { label: 'Bangalore', href: '/locations/bangalore' },
  { label: 'Hyderabad', href: '/locations/hyderabad' },
  { label: 'Pune', href: '/locations/pune' },
  { label: 'Chennai', href: '/locations/chennai' },
  { label: 'Kolkata', href: '/locations/kolkata' },
  { label: 'Ahmedabad', href: '/locations/ahmedabad' }
];

// Services for Footer
export const SERVICES = [
  { label: 'Property Valuation', href: '/services/valuation' },
  { label: 'Legal Assistance', href: '/services/legal' },
  { label: 'Home Inspection', href: '/services/inspection' },
  { label: 'Documentation Help', href: '/services/documentation' },
  { label: 'Registration Services', href: '/services/registration' },
  { label: 'Interior Design', href: '/services/interior-design' }
];

// Social Media Links
export const SOCIAL_LINKS = [
  { 
    name: 'Facebook', 
    href: 'https://facebook.com/4sfs', 
    icon: 'FaFacebook' 
  },
  { 
    name: 'Twitter', 
    href: 'https://twitter.com/4sfs', 
    icon: 'FaTwitter' 
  },
  { 
    name: 'LinkedIn', 
    href: 'https://linkedin.com/company/4sfs', 
    icon: 'FaLinkedin' 
  },
  { 
    name: 'Instagram', 
    href: 'https://instagram.com/4sfs', 
    icon: 'FaInstagram' 
  },
  { 
    name: 'YouTube', 
    href: 'https://youtube.com/4sfs', 
    icon: 'FaYoutube' 
  }
];

// Contact Info
export const CONTACT_INFO = {
  phone: '+91 1234567890',
  email: 'info@4sfs.com',
  address: '123 Finance Street, Business District, Mumbai - 400001, India',
  workingHours: 'Mon - Sat: 9:00 AM - 7:00 PM',
  support: 'support@4sfs.com'
};
