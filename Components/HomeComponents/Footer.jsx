import React, { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Clock, Shield, Star, Heart, Facebook, Instagram, Twitter, Youtube, Linkedin, ArrowUp, Crown, Building2, Users, FileText, HelpCircle, Zap, ShoppingBag, TrendingUp } from 'lucide-react';

// Footer Component
const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = {
    shopping: {
      title: 'Shopping',
      icon: ShoppingBag,
      links: [
        { name: 'All Categories', href: '/categories' },
        { name: 'Flash Sales', href: '/flash-sales' },
        { name: 'Today\'s Deals', href: '/deals' },
        { name: 'New Arrivals', href: '/new' },
        { name: 'Trending Now', href: '/trending' },
        { name: 'Best Sellers', href: '/bestsellers' }
      ]
    },
    account: {
      title: 'My Account',
      icon: Users,
      links: [
        { name: 'Sign In / Register', href: '/auth' },
        { name: 'My Profile', href: '/profile' },
        { name: 'Order History', href: '/orders' },
        { name: 'Wishlist', href: '/wishlist' },
        { name: 'Shopping Cart', href: '/cart' },
        { name: 'Track Orders', href: '/tracking' }
      ]
    },
    business: {
      title: 'Business',
      icon: Building2,
      links: [
        { name: 'Become a Seller', href: '/seller-signup' },
        { name: 'Premium Services', href: '/premium' },
        { name: 'Business Solutions', href: '/business' },
        { name: 'Bulk Orders', href: '/wholesale' },
        { name: 'API Integration', href: '/api' },
        { name: 'Partnership', href: '/partnership' }
      ]
    },
    support: {
      title: 'Support',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Returns & Refunds', href: '/returns' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Live Chat', href: '/chat' }
      ]
    },
    company: {
      title: 'Company',
      icon: FileText,
      links: [
        { name: 'About LIQUIDIA', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Press & Media', href: '/press' },
        { name: 'Investor Relations', href: '/investors' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Blog', href: '/blog' }
      ]
    },
    legal: {
      title: 'Legal',
      icon: Shield,
      links: [
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Authenticity Guarantee', href: '/authenticity' },
        { name: 'Intellectual Property', href: '/ip' },
        { name: 'Compliance', href: '/compliance' }
      ]
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/liquidia', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/liquidia', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/liquidia', color: 'hover:text-blue-300' },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/liquidia', color: 'hover:text-red-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/liquidia', color: 'hover:text-blue-500' }
  ];

  const quickStats = [
    { label: 'Happy Customers', value: '500K+', icon: Heart },
    { label: 'Total Savings', value: '50M MAD', icon: TrendingUp },
    { label: 'Partner Stores', value: '2,500+', icon: Star },
    { label: 'Cities Served', value: '15+', icon: MapPin }
  ];

  return (
    <footer className="relative bg-slate-900/95 backdrop-blur-lg border-t border-orange-500/20 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.1),transparent)]"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-b border-orange-500/20 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Never Miss a Deal</h3>
              <p className="text-gray-400">Get exclusive flash sale alerts and early access to the best deals</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                />
              </div>
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <div className="flex justify-center items-center space-x-6 mt-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-orange-400" />
                <span>Instant Alerts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Crown className="w-4 h-4 text-orange-400" />
                <span>VIP Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span>No Spam</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-slate-800/50 border-b border-orange-500/20 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="w-5 h-5 text-orange-400 mr-2" />
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {/* Company Info */}
              <div className="xl:col-span-2">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">%</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                    LIQUIDIA
                  </span>
                </div>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Morocco's premier flash sale marketplace. Discover authentic products at unbeatable prices 
                  from trusted sellers across the kingdom.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4 text-orange-400" />
                    <span>Casablanca, Morocco</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>+212 5XX-XXX-XXX</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>hello@liquidia.ma</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Clock className="w-4 h-4 text-purple-400" />
                    <span>24/7 Customer Support</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all ${social.color}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Footer Sections */}
              {Object.entries(footerSections).map(([key, section]) => {
                const IconComponent = section.icon;
                return (
                  <div key={key}>
                    <div className="flex items-center space-x-2 mb-4">
                      <IconComponent className="w-4 h-4 text-orange-400" />
                      <h4 className="font-bold text-white">{section.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-orange-400 transition-colors text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-t border-orange-500/20 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="font-bold text-white mb-2">Get the LIQUIDIA App</h4>
                <p className="text-gray-400 text-sm">Access exclusive mobile deals and notifications</p>
              </div>
              
              <div className="flex space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center text-xs font-bold">
                    📱
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </button>
                
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors">
                  <div className="w-6 h-6 bg-white rounded text-black flex items-center justify-center text-xs font-bold">
                    🤖
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="bg-slate-900 border-t border-slate-800 py-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 LIQUIDIA. All rights reserved. | Made with ❤️ in Morocco
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>4.8/5 Rating</span>
                </div>
                <div className="text-gray-500">•</div>
                <span className="text-gray-400">Available in Arabic, French & English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-full shadow-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
};
export default Footer;