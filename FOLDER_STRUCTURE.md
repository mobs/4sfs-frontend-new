# 4SFS Frontend - Folder Structure

## Overview
This document outlines the folder structure for the 4SFS (For Sure Funds) finance and investment website. The structure is designed to be scalable, maintainable, and follows Next.js 14 App Router best practices.

## Project Structure

```
4sfs-frontend/
├── app/                                # Next.js 14 App Router
│   ├── (auth)/                        # Auth group routes
│   │   ├── login/
│   │   └── register/
│   ├── (main)/                        # Main app routes
│   │   ├── buy-properties/           # Buy properties section
│   │   │   ├── residential/
│   │   │   ├── commercial/
│   │   │   └── premium/
│   │   ├── sell-properties/          # Sell properties section
│   │   ├── home-loans/               # Home loans section
│   │   ├── insurance/                # Insurance section
│   │   │   ├── health/
│   │   │   ├── life/
│   │   │   ├── vehicle/
│   │   │   └── general/
│   │   ├── insights/                 # Insights & articles
│   │   ├── blogs/                    # Blog section
│   │   └── contact/                  # Contact page
│   ├── api/                          # API routes
│   │   ├── mail/
│   │   └── submit/
│   ├── layout.js                     # Root layout
│   ├── page.js                       # Home page
│   └── globals.css                   # Global styles
│
├── components/                        # Reusable components
│   ├── features/                     # Feature-specific components
│   │   ├── Home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── FeaturedProperties.jsx
│   │   │   ├── ServiceCards.jsx
│   │   │   └── Homepage.jsx
│   │   ├── Properties/
│   │   │   ├── PropertyCard.jsx
│   │   │   ├── PropertyFilter.jsx
│   │   │   ├── PropertyList.jsx
│   │   │   └── PropertyDetails.jsx
│   │   ├── Loans/
│   │   │   ├── EMICalculator.jsx
│   │   │   ├── LoanForm.jsx
│   │   │   └── LoanComparison.jsx
│   │   ├── Insurance/
│   │   │   ├── InsuranceCard.jsx
│   │   │   ├── QuoteForm.jsx
│   │   │   └── CompareInsurance.jsx
│   │   └── Blogs/
│   │       ├── BlogCard.jsx
│   │       ├── BlogList.jsx
│   │       └── BlogDetail.jsx
│   │
│   ├── layout/                       # Layout components
│   │   ├── Navbar.jsx               # Main navigation
│   │   ├── Footer.jsx               # Footer
│   │   ├── Sidebar.jsx              # Sidebar (if needed)
│   │   ├── PrivacyPolicy.jsx        # Privacy policy
│   │   └── ThankYou.jsx             # Thank you page
│   │
│   └── ui/                           # Reusable UI components
│       ├── Button.jsx               # Button component
│       ├── Input.jsx                # Input component
│       ├── Select.jsx               # Select dropdown
│       ├── Heading.jsx              # Heading component
│       ├── Circle.jsx               # Circle component
│       ├── Card.jsx                 # Card component
│       ├── Modal/                   # Modal component
│       ├── Tooltip.jsx              # Tooltip
│       ├── Badge.jsx                # Badge component
│       ├── Tabs.jsx                 # Tabs component
│       ├── Accordion.jsx            # Accordion
│       └── RouteHandler/            # Route handler
│
├── constants/                        # All constants and configurations
│   ├── navigation.js                # Navigation items, footer links
│   ├── colors.js                    # Color constants
│   ├── site.js                      # Site-wide config
│   ├── blogs.js                     # Blog data
│   ├── properties.js                # Property types, features
│   ├── insurance.js                 # Insurance types, plans
│   └── loans.js                     # Loan types, rates
│
├── hooks/                            # Custom React hooks
│   ├── useMediaQuery.js            # Responsive hooks
│   ├── useScroll.js                # Scroll detection
│   ├── useDebounce.js              # Debounce hook
│   └── useForm.js                  # Form handling
│
├── lib/                              # Utility libraries
│   ├── utils.js                    # Utility functions
│   ├── validations.js              # Form validations
│   ├── api.js                      # API utilities
│   └── formatters.js               # Data formatters
│
├── services/                         # External services
│   ├── APIService.js               # API service
│   ├── GTMService.js               # Google Tag Manager
│   └── AnalyticsService.js         # Analytics
│
├── styles/                           # Additional styles
│   └── globals.css                 # Global styles
│
├── public/                           # Static assets
│   ├── images/                     # Images
│   ├── icons/                      # Icons
│   ├── fonts/                      # Custom fonts
│   └── logo-*.png                  # Logos
│
├── utils/                            # Utility functions
│   └── constants.js                # Utility constants
│
└── Configuration Files
    ├── next.config.js              # Next.js configuration
    ├── tailwind.config.js          # Tailwind CSS config
    ├── jsconfig.json               # JavaScript config
    ├── package.json                # Dependencies
    └── README.md                   # Project documentation
```

## Key Principles

### 1. Component Organization
- **features/**: Feature-specific components grouped by domain
- **layout/**: Layout components used across multiple pages
- **ui/**: Generic, reusable UI components (atoms/molecules)

### 2. Constants Management
All hardcoded values are stored in the `constants/` directory:
- Navigation items and links
- Color schemes (synced with Tailwind config)
- Site-wide configuration
- Business data (properties, loans, insurance)

### 3. No Hardcoding
- All text, links, and configurations come from constants
- Colors use Tailwind classes referencing config
- Images and icons are properly organized in public/
- API endpoints and keys in environment variables

### 4. Scalability
- Modular component structure
- Feature-based organization
- Easy to add new sections
- Clear separation of concerns

### 5. Type Safety (Recommended)
Consider migrating to TypeScript for:
- Better IDE support
- Catch errors at compile time
- Self-documenting code

## Best Practices

### Component Creation
```javascript
// ✅ Good - With proper imports from constants
import { COLORS } from '@/constants/colors';
import { NAV_ITEMS } from '@/constants/navigation';

// ❌ Bad - Hardcoded values
const color = '#093819';
const navItems = ['Home', 'About'];
```

### Styling
```javascript
// ✅ Good - Using Tailwind config colors
className="bg-primary text-white hover:bg-secondary"

// ❌ Bad - Hardcoded colors
style={{ backgroundColor: '#093819' }}
```

### File Naming
- Components: PascalCase (e.g., `PropertyCard.jsx`)
- Utilities: camelCase (e.g., `formatPrice.js`)
- Constants: camelCase (e.g., `navigation.js`)
- Pages: lowercase with hyphens (Next.js convention)

## Future Enhancements

### Recommended Additions
1. **contexts/** - React Context for global state
2. **store/** - Redux/Zustand for complex state management
3. **middleware/** - API middleware
4. **types/** - TypeScript type definitions
5. **tests/** - Unit and integration tests
6. **docs/** - Additional documentation

### Performance Optimization
- Lazy loading for images
- Code splitting for routes
- Memoization for expensive operations
- Server components where possible (Next.js 14)

### SEO & Analytics
- Structured data for properties
- Open Graph tags
- Analytics tracking
- Sitemap generation

## Migration Notes

### From Old Structure to New
1. Move all hardcoded navigation to `constants/navigation.js`
2. Extract colors to `constants/colors.js`
3. Organize components by feature
4. Create reusable UI components
5. Implement custom hooks for common logic

## Contributing

When adding new features:
1. Create constants first
2. Build reusable components
3. Follow the established patterns
4. Document complex logic
5. Test responsiveness
6. Ensure accessibility

## Support

For questions or improvements to this structure, contact the development team.

---

**Last Updated**: November 2025  
**Version**: 1.0.0

