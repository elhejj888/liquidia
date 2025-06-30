'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Crown, Star, Zap, Eye, Bell, TrendingUp, Users, Building2, Handshake, BarChart3, Clock, CheckCircle, X, Mail, Phone, Calendar, Globe, Award, Target, Rocket, Gift, Heart, MessageCircle, PieChart, Briefcase, Factory } from 'lucide-react';

const PremiumSubscriptionPage = () => {
  const [activeTab, setActiveTab] = useState('premium');
  const [selectedPlan, setSelectedPlan] = useState('vip');
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactType, setContactType] = useState('seller');

  // Premium subscription plans
  const subscriptionPlans = [
    {
      id: 'basic',
      name: 'Deal Seeker',
      price: { monthly: 29, yearly: 290 },
      popular: false,
      icon: Bell,
      color: 'blue',
      description: 'Perfect for casual shoppers who want early access to deals',
      features: [
        'Daily deal alerts via email',
        '24-hour early access to flash sales',
        'Basic price tracking on 10 items',
        'Weekly newsletter with curated deals',
        'Standard customer support',
        'Mobile app access',
        'Deal history tracking'
      ],
      limits: {
        priceAlerts: 10,
        earlyAccess: '24 hours',
        support: 'Standard',
        customization: 'Basic'
      }
    },
    {
      id: 'vip',
      name: 'VIP Insider',
      price: { monthly: 79, yearly: 790 },
      popular: true,
      icon: Crown,
      color: 'orange',
      description: 'Ideal for serious deal hunters who want maximum savings',
      features: [
        'Everything in Deal Seeker',
        'Instant SMS + Push notifications',
        '48-hour early access to flash sales',
        'Advanced price tracking on unlimited items',
        'Personalized deal recommendations',
        'Priority customer support',
        'Exclusive VIP-only deals',
        'Price drop guarantees',
        'Deal concierge service',
        'Monthly savings report'
      ],
      limits: {
        priceAlerts: 'Unlimited',
        earlyAccess: '48 hours',
        support: 'Priority',
        customization: 'Advanced'
      }
    },
    {
      id: 'enterprise',
      name: 'Business Pro',
      price: { monthly: 199, yearly: 1990 },
      popular: false,
      icon: Building2,
      color: 'purple',
      description: 'For businesses and bulk buyers who need commercial features',
      features: [
        'Everything in VIP Insider',
        'Bulk purchase alerts',
        'Business account management',
        'Volume discount negotiations',
        'Dedicated account manager',
        'Custom integration APIs',
        'Business expense tracking',
        'Team member access (up to 5 users)',
        'Quarterly business reviews',
        'Custom reporting dashboard'
      ],
      limits: {
        priceAlerts: 'Unlimited',
        earlyAccess: '72 hours',
        support: 'Dedicated',
        customization: 'Full'
      }
    }
  ];

  // Business services
  const businessServices = [
    {
      id: 'liquidation',
      title: 'Inventory Liquidation',
      icon: Factory,
      color: 'green',
      description: 'Let us help you clear excess inventory quickly and profitably',
      features: [
        'Professional inventory assessment',
        'Optimal pricing strategy',
        'Marketing campaign creation',
        'Customer base access (500K+ users)',
        'Real-time sales analytics',
        'Payment processing & logistics'
      ],
      pricing: 'Commission-based: 15-25%',
      timeline: '2-4 weeks setup',
      minValue: '50,000 MAD minimum inventory value'
    },
    {
      id: 'marketplace',
      title: 'Marketplace Partnership',
      icon: Handshake,
      color: 'blue',
      description: 'Become an official LIQUIDIA partner seller with exclusive benefits',
      features: [
        'Verified seller badge',
        'Featured placement in searches',
        'Marketing support & promotion',
        'Advanced seller dashboard',
        'Priority customer support',
        'Cross-platform advertising'
      ],
      pricing: 'Reduced fees: 8-12%',
      timeline: '1-2 weeks approval',
      minValue: 'Minimum 50 monthly transactions'
    },
    {
      id: 'white-label',
      title: 'White-Label Solution',
      icon: Globe,
      color: 'purple',
      description: 'Launch your own flash sale platform powered by our technology',
      features: [
        'Complete platform customization',
        'Your branding & domain',
        'Full admin dashboard',
        'Payment gateway integration',
        'Mobile app development',
        'Ongoing technical support'
      ],
      pricing: 'Starting at 15,000 MAD/month',
      timeline: '8-12 weeks development',
      minValue: 'Enterprise clients only'
    },
    {
      id: 'consulting',
      title: 'E-commerce Consulting',
      icon: BarChart3,
      color: 'orange',
      description: 'Strategic consulting to optimize your online sales performance',
      features: [
        'Market analysis & research',
        'Pricing strategy optimization',
        'Customer behavior insights',
        'Conversion rate optimization',
        'Digital marketing strategy',
        'Performance tracking setup'
      ],
      pricing: '2,500 MAD/day consulting',
      timeline: 'Flexible engagement',
      minValue: 'Minimum 5-day engagement'
    }
  ];

  // Success stories
  const successStories = [
    {
      company: 'Fashion Outlet Marrakech',
      industry: 'Retail Fashion',
      challenge: '2M MAD excess winter inventory',
      solution: 'Liquidation service',
      result: '85% inventory cleared in 3 weeks',
      savings: '1.7M MAD recovered',
      testimonial: 'LIQUIDIA helped us turn a potential loss into a profitable clearance. Their customer base is incredibly engaged.'
    },
    {
      company: 'TechHub Electronics',
      industry: 'Electronics',
      challenge: 'Seasonal product overstock',
      solution: 'Marketplace partnership',
      result: '200% increase in monthly sales',
      savings: '40% reduction in holding costs',
      testimonial: 'The verified seller program brought us credibility and customers we never could have reached alone.'
    },
    {
      company: 'Moroccan Artisan Collective',
      industry: 'Handicrafts',
      challenge: 'Limited online presence',
      solution: 'White-label platform',
      result: 'Own branded marketplace launched',
      savings: '60% increase in profit margins',
      testimonial: 'Having our own platform while leveraging their technology was the perfect solution for our collective.'
    }
  ];

  const handleSubscription = (planId) => {
    console.log(`Subscribing to ${planId} plan with ${billingCycle} billing`);
    // Handle subscription logic
  };

  const openContactModal = (type) => {
    setContactType(type);
    setShowContactModal(true);
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
          <div className="flex items-center space-x-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1">
            <Crown className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Premium Services</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Unlock Premium 
              <span className="bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text text-transparent"> Benefits</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get exclusive access to deals, business services, and partnership opportunities that maximize your savings and grow your business.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-1 bg-slate-800/30 rounded-xl p-1">
              <button
                onClick={() => setActiveTab('premium')}
                className={`flex items-center space-x-2 py-3 px-6 rounded-lg transition-all font-medium ${
                  activeTab === 'premium' 
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Crown className="w-4 h-4" />
                <span>Premium Subscriptions</span>
              </button>
              <button
                onClick={() => setActiveTab('business')}
                className={`flex items-center space-x-2 py-3 px-6 rounded-lg transition-all font-medium ${
                  activeTab === 'business' 
                    ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Business Services</span>
              </button>
            </div>
          </div>

          {/* Premium Subscriptions Tab */}
          {activeTab === 'premium' && (
            <div className="space-y-12">
              {/* Billing Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-slate-800/30 rounded-xl p-1 flex items-center space-x-1">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`py-2 px-4 rounded-lg transition-all ${
                      billingCycle === 'monthly' 
                        ? 'bg-orange-500/20 text-orange-400' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`py-2 px-4 rounded-lg transition-all flex items-center space-x-2 ${
                      billingCycle === 'yearly' 
                        ? 'bg-orange-500/20 text-orange-400' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <span>Yearly</span>
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-bold">Save 20%</span>
                  </button>
                </div>
              </div>

              {/* Subscription Plans */}
              <div className="grid lg:grid-cols-3 gap-8">
                {subscriptionPlans.map(plan => {
                  const IconComponent = plan.icon;
                  const price = plan.price[billingCycle];
                  const isSelected = selectedPlan === plan.id;
                  
                  return (
                    <div 
                      key={plan.id} 
                      className={`relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border transition-all cursor-pointer ${
                        plan.popular 
                          ? 'border-orange-500/40 ring-2 ring-orange-500/20' 
                          : isSelected 
                            ? 'border-purple-500/40 ring-2 ring-purple-500/20'
                            : 'border-orange-500/20 hover:border-orange-500/40'
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                            Most Popular
                          </div>
                        </div>
                      )}
                      
                      <div className="text-center mb-6">
                        <div className={`w-16 h-16 bg-${plan.color}-500/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className={`w-8 h-8 text-${plan.color}-400`} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                        
                        <div className="mb-4">
                          <div className="text-4xl font-bold text-white">
                            {price} <span className="text-lg text-gray-400">MAD</span>
                          </div>
                          <div className="text-gray-400 text-sm">per {billingCycle === 'monthly' ? 'month' : 'year'}</div>
                          {billingCycle === 'yearly' && (
                            <div className="text-green-400 text-sm font-medium">
                              Save {Math.round((1 - (price / 12) / plan.price.monthly) * 100)}% vs monthly
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => handleSubscription(plan.id)}
                        className={`w-full py-3 rounded-lg font-bold transition-all ${
                          plan.popular
                            ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700'
                            : isSelected
                              ? 'bg-purple-500 text-white hover:bg-purple-600'
                              : 'bg-slate-700 text-white hover:bg-slate-600'
                        }`}
                      >
                        {isSelected ? 'Selected Plan' : 'Choose Plan'}
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Features Comparison */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Plan Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-4 px-4 text-gray-400">Features</th>
                        {subscriptionPlans.map(plan => (
                          <th key={plan.id} className="text-center py-4 px-4 text-white">{plan.name}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4 text-gray-300">Price Alerts</td>
                        <td className="py-4 px-4 text-center text-gray-400">10 items</td>
                        <td className="py-4 px-4 text-center text-green-400">Unlimited</td>
                        <td className="py-4 px-4 text-center text-green-400">Unlimited</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4 text-gray-300">Early Access</td>
                        <td className="py-4 px-4 text-center text-gray-400">24 hours</td>
                        <td className="py-4 px-4 text-center text-orange-400">48 hours</td>
                        <td className="py-4 px-4 text-center text-purple-400">72 hours</td>
                      </tr>
                      <tr className="border-b border-gray-800">
                        <td className="py-4 px-4 text-gray-300">Customer Support</td>
                        <td className="py-4 px-4 text-center text-gray-400">Standard</td>
                        <td className="py-4 px-4 text-center text-orange-400">Priority</td>
                        <td className="py-4 px-4 text-center text-purple-400">Dedicated</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 text-gray-300">API Access</td>
                        <td className="py-4 px-4 text-center text-gray-400">-</td>
                        <td className="py-4 px-4 text-center text-gray-400">-</td>
                        <td className="py-4 px-4 text-center text-green-400">✓</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Business Services Tab */}
          {activeTab === 'business' && (
            <div className="space-y-12">
              {/* Services Grid */}
              <div className="grid lg:grid-cols-2 gap-8">
                {businessServices.map(service => {
                  const IconComponent = service.icon;
                  return (
                    <div key={service.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className={`w-12 h-12 bg-${service.color}-500/20 rounded-full flex items-center justify-center`}>
                          <IconComponent className={`w-6 h-6 text-${service.color}-400`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{service.title}</h3>
                          <p className="text-gray-400">{service.description}</p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="bg-slate-800/30 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-1 gap-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Pricing:</span>
                            <span className="text-white font-medium">{service.pricing}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Timeline:</span>
                            <span className="text-white font-medium">{service.timeline}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Requirements:</span>
                            <span className="text-white font-medium">{service.minValue}</span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => openContactModal(service.id)}
                        className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all"
                      >
                        Get Started
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Success Stories */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-8 text-center">Success Stories</h3>
                
                <div className="grid lg:grid-cols-3 gap-6">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-slate-800/30 rounded-lg p-6 border border-gray-700">
                      <div className="mb-4">
                        <h4 className="font-bold text-white mb-1">{story.company}</h4>
                        <div className="text-orange-400 text-sm mb-2">{story.industry}</div>
                        <div className="text-gray-400 text-sm mb-3">
                          <strong>Challenge:</strong> {story.challenge}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="text-green-400 font-bold text-lg">{story.result}</div>
                        <div className="text-emerald-300 text-sm">{story.savings}</div>
                      </div>
                      
                      <blockquote className="text-gray-300 text-sm italic">
                        "{story.testimonial}"
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/20 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Partner with LIQUIDIA?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Join hundreds of businesses that have successfully leveraged our platform to increase sales, 
                  clear inventory, and reach new customers across Morocco.
                </p>
                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={() => openContactModal('general')}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  >
                    Schedule Consultation
                  </button>
                  <button 
                    onClick={() => openContactModal('partnership')}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-3 rounded-lg font-bold transition-colors"
                  >
                    Partnership Inquiry
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-orange-500/20 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Contact Our Team</h3>
              <button 
                onClick={() => setShowContactModal(false)}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                    placeholder="Company name"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                    placeholder="+212 6XX-XXXXXX"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Service Interest</label>
                <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none">
                  <option>Inventory Liquidation</option>
                  <option>Marketplace Partnership</option>
                  <option>White-Label Solution</option>
                  <option>E-commerce Consulting</option>
                  <option>Premium Subscription</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message *</label>
                <textarea
                  rows={4}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none resize-none"
                  placeholder="Tell us about your needs and goals..."
                ></textarea>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-bold transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowContactModal(false)}
                  className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumSubscriptionPage;