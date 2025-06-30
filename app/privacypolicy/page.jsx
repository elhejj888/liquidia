'use client';
import React, { useState } from 'react';
import { ArrowLeft, Shield, Mail, Phone, MapPin, Clock, MessageCircle, FileText, Lock, Eye, Cookie, Scale, HelpCircle, Users, AlertTriangle, CheckCircle, Globe, Heart, Star, TrendingUp } from 'lucide-react';

const LegalPagesApp = () => {
  const [activePage, setActivePage] = useState('privacy');
  const [expandedSection, setExpandedSection] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const pages = [
    { id: 'privacy', title: 'Privacy Policy', icon: Lock },
    { id: 'terms', title: 'Terms of Service', icon: FileText },
    { id: 'cookies', title: 'Cookie Policy', icon: Cookie },
    { id: 'returns', title: 'Returns & Refunds', icon: Shield },
    { id: 'contact', title: 'Contact Us', icon: MessageCircle },
    { id: 'help', title: 'Help Center', icon: HelpCircle },
    { id: 'about', title: 'About Us', icon: Users }
  ];

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'privacy':
        return <PrivacyPolicyPage toggleSection={toggleSection} expandedSection={expandedSection} />;
      case 'terms':
        return <TermsOfServicePage toggleSection={toggleSection} expandedSection={expandedSection} />;
      case 'cookies':
        return <CookiePolicyPage toggleSection={toggleSection} expandedSection={expandedSection} />;
      case 'returns':
        return <ReturnsRefundsPage toggleSection={toggleSection} expandedSection={expandedSection} />;
      case 'contact':
        return <ContactPage contactForm={contactForm} setContactForm={setContactForm} handleContactSubmit={handleContactSubmit} />;
      case 'help':
        return <HelpCenterPage />;
      case 'about':
        return <AboutUsPage />;
      default:
        return <PrivacyPolicyPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center border-b border-orange-500/20 bg-slate-900/50 backdrop-blur-lg">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => window.history.back()}
            className="p-2 hover:bg-orange-500/20 rounded-lg transition-all hover:scale-110"
          >
            <ArrowLeft className="w-6 h-6 text-orange-400" />
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">%</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              LIQUIDIA
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Secure & Trusted</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 sticky top-6">
                <h2 className="text-xl font-bold text-white mb-6">Legal & Support</h2>
                <nav className="space-y-2">
                  {pages.map(page => {
                    const IconComponent = page.icon;
                    return (
                      <button
                        key={page.id}
                        onClick={() => setActivePage(page.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all flex items-center space-x-3 ${
                          activePage === page.id 
                            ? 'bg-orange-500/20 border border-orange-500/30 text-orange-400' 
                            : 'hover:bg-slate-800/50 text-gray-300 hover:text-white'
                        }`}
                      >
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium">{page.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              {renderPage()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

// Privacy Policy Page Component
const PrivacyPolicyPage = ({ toggleSection, expandedSection }) => {
  const sections = [
    {
      id: 'information-collection',
      title: 'Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This includes:
      
      • Personal information (name, email, phone number, address)
      • Payment information (processed securely through encrypted payment processors)
      • Shopping preferences and deal alerts settings
      • Communication preferences and feedback
      
      We also automatically collect certain information about your device and usage patterns to improve our services and provide personalized deals.`
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      content: `We use the information we collect to:
      
      • Process your orders and provide customer service
      • Send you deal alerts and promotional notifications (with your consent)
      • Personalize your shopping experience and recommend relevant deals
      • Improve our platform and develop new features
      • Prevent fraud and ensure platform security
      • Comply with legal obligations
      
      We do not sell your personal information to third parties for their marketing purposes.`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      content: `We may share your information in limited circumstances:
      
      • With sellers to fulfill your orders
      • With service providers who assist us in operating our platform
      • When required by law or to protect our rights
      • In connection with a business transfer or merger
      
      All third parties are bound by confidentiality agreements and data protection requirements.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information:
      
      • SSL encryption for all data transmission
      • Secure payment processing with PCI DSS compliance
      • Regular security audits and penetration testing
      • Access controls and employee training
      • Incident response procedures
      
      While we strive to protect your information, no method of transmission over the internet is 100% secure.`
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      content: `You have the right to:
      
      • Access, update, or delete your personal information
      • Opt out of marketing communications
      • Request a copy of your data
      • Lodge a complaint with data protection authorities
      • Withdraw consent where processing is based on consent
      
      To exercise these rights, please contact us using the information provided in our Contact section.`
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
      <div className="flex items-center space-x-3 mb-6">
        <Lock className="w-6 h-6 text-orange-400" />
        <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
      </div>
      
      <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
        <p className="text-blue-300 text-sm">
          <strong>Last Updated:</strong> December 15, 2024
        </p>
        <p className="text-gray-300 mt-2">
          This Privacy Policy explains how LIQUIDIA collects, uses, and protects your personal information when you use our marketplace platform.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map(section => (
          <div key={section.id} className="border border-gray-700 rounded-lg">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white">{section.title}</h3>
              <div className={`transform transition-transform ${expandedSection === section.id ? 'rotate-180' : ''}`}>
                ↓
              </div>
            </button>
            {expandedSection === section.id && (
              <div className="p-4 border-t border-gray-700 bg-slate-800/20">
                <div className="text-gray-300 whitespace-pre-line">{section.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Terms of Service Page Component
const TermsOfServicePage = ({ toggleSection, expandedSection }) => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: `By accessing and using LIQUIDIA, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.

      These terms apply to all users of the platform, including browsers, vendors, customers, merchants, and contributors of content.`
    },
    {
      id: 'platform-description',
      title: 'Platform Description',
      content: `LIQUIDIA is a flash sale and liquidation marketplace that connects buyers with sellers offering discounted merchandise. We facilitate transactions but are not a party to the actual sale between buyers and sellers.

      • We provide a platform for listing and discovering deals
      • Payment processing is handled through secure third-party providers
      • Shipping and fulfillment are managed by individual sellers
      • We may verify seller authenticity and product quality`
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      content: `To use certain features of our platform, you must create an account:

      • You must provide accurate and complete information
      • You are responsible for maintaining the security of your account
      • You must notify us immediately of any unauthorized use
      • One person or legal entity may not maintain more than one account
      • Accounts are non-transferable`
    },
    {
      id: 'prohibited-conduct',
      title: 'Prohibited Conduct',
      content: `Users may not:

      • Violate any laws or regulations
      • Infringe on intellectual property rights
      • List counterfeit or stolen items
      • Engage in fraudulent activities
      • Manipulate ratings or reviews
      • Interfere with platform operations
      • Harass other users
      • Use automated tools without permission`
    },
    {
      id: 'seller-obligations',
      title: 'Seller Obligations',
      content: `Sellers must:

      • Provide accurate product descriptions and images
      • Honor all sales and provide items as described
      • Ship items within specified timeframes
      • Maintain appropriate inventory levels
      • Comply with all applicable laws and regulations
      • Respond to customer inquiries promptly
      • Process returns according to stated policies`
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      content: `LIQUIDIA's liability is limited to the maximum extent permitted by law:

      • We are not liable for issues between buyers and sellers
      • We do not guarantee the accuracy of listings
      • We are not responsible for shipping delays or damages
      • Our total liability shall not exceed the fees paid to us
      • We provide the platform "as is" without warranties`
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
      <div className="flex items-center space-x-3 mb-6">
        <FileText className="w-6 h-6 text-orange-400" />
        <h1 className="text-3xl font-bold text-white">Terms of Service</h1>
      </div>
      
      <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
        <p className="text-orange-300 text-sm">
          <strong>Last Updated:</strong> December 15, 2024
        </p>
        <p className="text-gray-300 mt-2">
          These Terms of Service govern your use of the LIQUIDIA platform and services. Please read them carefully.
        </p>
      </div>

      <div className="space-y-4">
        {sections.map(section => (
          <div key={section.id} className="border border-gray-700 rounded-lg">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white">{section.title}</h3>
              <div className={`transform transition-transform ${expandedSection === section.id ? 'rotate-180' : ''}`}>
                ↓
              </div>
            </button>
            {expandedSection === section.id && (
              <div className="p-4 border-t border-gray-700 bg-slate-800/20">
                <div className="text-gray-300 whitespace-pre-line">{section.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Cookie Policy Page Component
const CookiePolicyPage = ({ toggleSection, expandedSection }) => {
  const cookieTypes = [
    {
      id: 'essential',
      title: 'Essential Cookies',
      description: 'Required for basic platform functionality',
      examples: 'Login sessions, shopping cart, security features',
      canDisable: false
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      description: 'Help us understand how users interact with our platform',
      examples: 'Page views, click tracking, user behavior analysis',
      canDisable: true
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and promotions',
      examples: 'Ad targeting, conversion tracking, social media integration',
      canDisable: true
    },
    {
      id: 'preferences',
      title: 'Preference Cookies',
      description: 'Remember your settings and customize your experience',
      examples: 'Language settings, display preferences, notification settings',
      canDisable: true
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
      <div className="flex items-center space-x-3 mb-6">
        <Cookie className="w-6 h-6 text-orange-400" />
        <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
      </div>
      
      <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
        <p className="text-purple-300 text-sm">
          <strong>Last Updated:</strong> December 15, 2024
        </p>
        <p className="text-gray-300 mt-2">
          This Cookie Policy explains how LIQUIDIA uses cookies and similar technologies to recognize you when you visit our platform.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">What are Cookies?</h2>
        <p className="text-gray-300 mb-4">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
          They are widely used to make websites work more efficiently and provide a better user experience.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Types of Cookies We Use</h2>
        <div className="grid gap-4">
          {cookieTypes.map(cookie => (
            <div key={cookie.id} className="bg-slate-800/30 border border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white">{cookie.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  cookie.canDisable 
                    ? 'bg-orange-500/20 text-orange-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {cookie.canDisable ? 'Optional' : 'Required'}
                </span>
              </div>
              <p className="text-gray-300 mb-2">{cookie.description}</p>
              <p className="text-gray-400 text-sm">
                <strong>Examples:</strong> {cookie.examples}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>
        <div className="bg-slate-800/30 border border-gray-700 rounded-lg p-4">
          <p className="text-gray-300 mb-4">
            You can control and manage cookies in various ways. Please note that removing or blocking cookies 
            can impact your user experience and parts of our website may no longer be fully accessible.
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Browser settings to block or delete cookies</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Cookie preference center (available in account settings)</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-gray-300">Opt-out tools provided by advertising networks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Returns & Refunds Page Component
const ReturnsRefundsPage = ({ toggleSection, expandedSection }) => {
  const policies = [
    {
      id: 'return-window',
      title: 'Return Window',
      content: `Standard Return Period: 30 days from delivery date
      
      Extended Return Periods:
      • Electronics: 14 days (due to rapid technology changes)
      • Fashion items: 30 days
      • Luxury goods: 30 days with authenticity verification
      • Custom or personalized items: Non-returnable (unless defective)
      
      The return window starts from the date of delivery, not purchase date.`
    },
    {
      id: 'return-conditions',
      title: 'Return Conditions',
      content: `Items must be returned in original condition:
      
      • Unused and unworn (for fashion items)
      • In original packaging with all accessories
      • With original tags and labels attached
      • Include proof of purchase
      
      Items NOT eligible for return:
      • Intimate or personal hygiene items
      • Perishable goods
      • Digital downloads
      • Gift cards
      • Items damaged by misuse`
    },
    {
      id: 'refund-process',
      title: 'Refund Process',
      content: `How refunds work:
      
      1. Initiate return request through your account
      2. Print prepaid return label (if eligible)
      3. Package item securely and ship
      4. We inspect the returned item
      5. Refund processed within 3-5 business days
      
      Refund methods:
      • Original payment method (preferred)
      • Store credit (faster processing)
      • Bank transfer (for international customers)`
    },
    {
      id: 'return-shipping',
      title: 'Return Shipping',
      content: `Return shipping costs:
      
      FREE return shipping for:
      • Defective or damaged items
      • Wrong item sent
      • Items not as described
      • Seller error
      
      Customer pays return shipping for:
      • Change of mind
      • Wrong size ordered
      • Color preference change
      
      We provide prepaid return labels for eligible returns.`
    },
    {
      id: 'exchanges',
      title: 'Exchanges',
      content: `Exchange policy:
      
      • Size exchanges: Free for fashion items (one exchange per order)
      • Color exchanges: Subject to availability
      • Model exchanges: Not available (return and repurchase)
      
      Exchange process:
      1. Contact customer service within 7 days of delivery
      2. We check availability of requested item
      3. Ship new item and provide return label for original
      4. No additional charges for size exchanges`
    }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-6 h-6 text-orange-400" />
        <h1 className="text-3xl font-bold text-white">Returns & Refunds</h1>
      </div>
      
      <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
        <p className="text-green-300 text-sm">
          <strong>30-Day Return Guarantee</strong>
        </p>
        <p className="text-gray-300 mt-2">
          We stand behind the quality of our products. If you're not completely satisfied, 
          return your purchase within 30 days for a full refund.
        </p>
      </div>

      <div className="space-y-4">
        {policies.map(policy => (
          <div key={policy.id} className="border border-gray-700 rounded-lg">
            <button
              onClick={() => toggleSection(policy.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-800/30 transition-colors"
            >
              <h3 className="text-lg font-bold text-white">{policy.title}</h3>
              <div className={`transform transition-transform ${expandedSection === policy.id ? 'rotate-180' : ''}`}>
                ↓
              </div>
            </button>
            {expandedSection === policy.id && (
              <div className="p-4 border-t border-gray-700 bg-slate-800/20">
                <div className="text-gray-300 whitespace-pre-line">{policy.content}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/20 rounded-lg">
        <h3 className="text-lg font-bold text-white mb-3">Need Help with a Return?</h3>
        <p className="text-gray-300 mb-4">
          Our customer service team is here to help you with any return or refund questions.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
          Start Return Process
        </button>
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = ({ contactForm, setContactForm, handleContactSubmit }) => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: 'Available 24/7',
      action: 'Start Chat',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: 'Response within 24 hours',
      action: 'Send Email',
      color: 'green'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri, 9 AM - 6 PM GMT',
      action: 'Call Now: +212 5XX-XXX-XXX',
      color: 'orange'
    }
  ];

  const officeLocations = [
    {
      city: 'Casablanca',
      address: '123 Hassan II Boulevard, Casablanca 20000',
      phone: '+212 5XX-XXX-XXX',
      hours: 'Mon-Fri: 9 AM - 6 PM'
    },
    {
      city: 'Rabat',
      address: '456 Mohammed V Avenue, Rabat 10000',
      phone: '+212 5XX-XXX-XXX',
      hours: 'Mon-Fri: 9 AM - 6 PM'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <div className="flex items-center space-x-3 mb-6">
          <MessageCircle className="w-6 h-6 text-orange-400" />
          <h1 className="text-3xl font-bold text-white">Contact Us</h1>
        </div>
        
        <p className="text-gray-300 mb-8">
          We're here to help! Choose the best way to reach our support team.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-slate-800/30 border border-gray-700 rounded-lg p-6 text-center hover:border-orange-500/30 transition-colors">
                <div className={`w-12 h-12 bg-${method.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-6 h-6 text-${method.color}-400`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{method.description}</p>
                <p className="text-gray-400 text-xs mb-4">{method.availability}</p>
                <button className={`bg-${method.color}-500 hover:bg-${method.color}-600 text-white px-4 py-2 rounded-lg font-bold transition-colors text-sm`}>
                  {method.action}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
        
        <form onSubmit={handleContactSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
              <input
                type="text"
                required
                value={contactForm.name}
                onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-gray-400 text-sm mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={contactForm.email}
                onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-400 text-sm mb-2">Category</label>
            <select
              value={contactForm.category}
              onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
            >
              <option value="general">General Inquiry</option>
              <option value="order">Order Support</option>
              <option value="technical">Technical Issue</option>
              <option value="seller">Seller Support</option>
              <option value="billing">Billing Question</option>
              <option value="partnership">Partnership Inquiry</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-400 text-sm mb-2">Subject *</label>
            <input
              type="text"
              required
              value={contactForm.subject}
              onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
              placeholder="Brief description of your inquiry"
            />
          </div>
          
          <div>
            <label className="block text-gray-400 text-sm mb-2">Message *</label>
            <textarea
              required
              rows={6}
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none resize-none"
              placeholder="Please provide as much detail as possible..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Office Locations */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <h2 className="text-2xl font-bold text-white mb-6">Our Offices</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {officeLocations.map((office, index) => (
            <div key={index} className="bg-slate-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-4">{office.city} Office</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-400 mt-0.5" />
                  <span className="text-gray-300">{office.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">{office.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">{office.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Help Center Page Component
const HelpCenterPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Topics', count: 24 },
    { id: 'account', name: 'Account & Profile', count: 6 },
    { id: 'orders', name: 'Orders & Payment', count: 8 },
    { id: 'shipping', name: 'Shipping & Delivery', count: 5 },
    { id: 'returns', name: 'Returns & Refunds', count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'account',
      question: 'How do I create an account?',
      answer: 'Click "Sign Up" in the top right corner, enter your email and create a password. You\'ll receive a verification email to activate your account.'
    },
    {
      id: 2,
      category: 'account',
      question: 'I forgot my password. How do I reset it?',
      answer: 'Click "Forgot Password" on the login page, enter your email address, and follow the instructions in the reset email we send you.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'How do I track my order?',
      answer: 'Log into your account and go to "My Orders". Click on the order you want to track to see real-time shipping updates.'
    },
    {
      id: 4,
      category: 'orders',
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard), PayPal, bank transfers, and mobile payment methods popular in Morocco.'
    },
    {
      id: 5,
      category: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 1-3 business days within Morocco. Express shipping (same-day in major cities) is available for an additional fee.'
    },
    {
      id: 6,
      category: 'shipping',
      question: 'Do you ship internationally?',
      answer: 'Yes, we ship to select countries. International shipping takes 5-10 business days. Check our shipping page for a list of supported countries.'
    },
    {
      id: 7,
      category: 'returns',
      question: 'How do I return an item?',
      answer: 'Go to "My Orders", find your order, and click "Return Item". Follow the prompts to print a return label and track your return status.'
    },
    {
      id: 8,
      category: 'returns',
      question: 'When will I receive my refund?',
      answer: 'Refunds are processed within 3-5 business days after we receive and inspect your returned item. The funds will appear in your original payment method.'
    }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs.filter(faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase()))
    : faqs.filter(faq => faq.category === selectedCategory && (faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || faq.answer.toLowerCase().includes(searchQuery.toLowerCase())));

  return (
    <div className="space-y-8">
      {/* Help Center Header */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <div className="flex items-center space-x-3 mb-6">
          <HelpCircle className="w-6 h-6 text-orange-400" />
          <h1 className="text-3xl font-bold text-white">Help Center</h1>
        </div>
        
        <p className="text-gray-300 mb-6">
          Find answers to frequently asked questions or search for specific topics.
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search for help topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-white focus:border-orange-400 focus:outline-none"
          />
          <HelpCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {faqCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-all flex items-center space-x-2 ${
                selectedCategory === category.id 
                  ? 'bg-orange-500/20 border border-orange-500/30 text-orange-400' 
                  : 'bg-slate-800/30 border border-gray-700 text-gray-300 hover:text-white'
              }`}
            >
              <span>{category.name}</span>
              <span className="text-xs opacity-60">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <h2 className="text-2xl font-bold text-white mb-6">
          {selectedCategory === 'all' ? 'Frequently Asked Questions' : faqCategories.find(c => c.id === selectedCategory)?.name}
        </h2>
        
        <div className="space-y-4">
          {filteredFaqs.map(faq => (
            <div key={faq.id} className="bg-slate-800/30 border border-gray-700 rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">No results found for "{searchQuery}"</div>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-3">Still need help?</h3>
        <p className="text-gray-300 mb-4">
          Can't find what you're looking for? Our support team is here to help you.
        </p>
        <div className="flex space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
            Contact Support
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
            Live Chat
          </button>
        </div>
      </div>
    </div>
  );
};

// About Us Page Component
const AboutUsPage = () => {
  const stats = [
    { label: 'Happy Customers', value: '500K+', icon: Users },
    { label: 'Total Savings', value: '50M MAD', icon: TrendingUp },
    { label: 'Partner Stores', value: '2,500+', icon: Star },
    { label: 'Cities Served', value: '15+', icon: MapPin }
  ];

  const team = [
    {
      name: 'Ahmed Benali',
      role: 'CEO & Founder',
      description: 'Former e-commerce executive with 15+ years experience in the Moroccan market.',
      image: 'AB'
    },
    {
      name: 'Fatima Idrissi',
      role: 'Chief Technology Officer',
      description: 'Tech leader specialized in marketplace platforms and mobile commerce.',
      image: 'FI'
    },
    {
      name: 'Youssef Amrani',
      role: 'Head of Operations',
      description: 'Operations expert focused on logistics and seller relations across Morocco.',
      image: 'YA'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with how it benefits our customers.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We ensure every transaction is secure and every product is authentic.'
    },
    {
      icon: TrendingUp,
      title: 'Value Creation',
      description: 'We help customers save money while helping businesses reach new markets.'
    },
    {
      icon: Globe,
      title: 'Local Focus',
      description: 'Built for Morocco, by Moroccans, understanding local needs and preferences.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* About Header */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <div className="flex items-center space-x-3 mb-6">
          <Users className="w-6 h-6 text-orange-400" />
          <h1 className="text-3xl font-bold text-white">About LIQUIDIA</h1>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Revolutionizing Flash Sales in Morocco</h2>
            <p className="text-gray-300 mb-4">
              Founded in 2022, LIQUIDIA has become Morocco's leading flash sale and liquidation marketplace. 
              We connect savvy shoppers with incredible deals from trusted sellers across the country.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to democratize access to high-quality products at unbeatable prices, 
              while helping businesses efficiently manage their inventory through liquidation sales.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="w-6 h-6 text-orange-400 mr-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
            <h3 className="text-xl font-bold text-white mb-4">Our Impact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Over 50 million MAD saved by customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">2,500+ partner businesses supported</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">500,000+ satisfied customers nationwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">15+ cities with active marketplaces</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <h2 className="text-2xl font-bold text-white mb-6">Our Values</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leadership Team */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
        <h2 className="text-2xl font-bold text-white mb-6">Leadership Team</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {member.image}
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
              <div className="text-orange-400 font-medium mb-3">{member.role}</div>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-3">Want to Learn More?</h3>
          <p className="text-gray-300 mb-4">
            Interested in partnering with us or have questions about our platform?
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
              Contact Us
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg font-bold transition-colors">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPagesApp;