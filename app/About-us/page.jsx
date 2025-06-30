'use client';
import React, { useState } from 'react';
import { ArrowLeft, Shield, Users, Target, Award, Zap, Globe, Heart, TrendingUp, CheckCircle, Star, MapPin, Calendar, Clock, Handshake, Eye, Lock } from 'lucide-react';

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState('story');

  // Company stats
  const stats = [
    { label: "Total Savings Generated", value: "47M MAD", icon: TrendingUp, color: "text-green-400" },
    { label: "Happy Customers", value: "89,000+", icon: Heart, color: "text-red-400" },
    { label: "Partner Stores", value: "2,500+", icon: Users, color: "text-blue-400" },
    { label: "Deals Created", value: "156K+", icon: Zap, color: "text-orange-400" }
  ];

  // Team members
  const team = [
    {
      name: "Youssef Benali",
      role: "Founder & CEO",
      image: "YB",
      bio: "Former e-commerce executive with 15+ years in retail technology. Passionate about democratizing access to premium products.",
      linkedin: "#"
    },
    {
      name: "Fatima Al-Rashid",
      role: "Chief Technology Officer",
      image: "FR",
      bio: "Tech innovator specializing in marketplace platforms and AI-driven pricing algorithms.",
      linkedin: "#"
    },
    {
      name: "Ahmed Kasmi",
      role: "Head of Operations",
      image: "AK",
      bio: "Supply chain expert ensuring authentic products and efficient logistics across Morocco.",
      linkedin: "#"
    },
    {
      name: "Nadia Benjelloun",
      role: "Customer Success Director",
      image: "NB",
      bio: "Customer experience specialist focused on building trust and satisfaction in every interaction.",
      linkedin: "#"
    }
  ];

  // Values
  const values = [
    {
      icon: Shield,
      title: "Authenticity First",
      description: "Every product is verified by our expert team. We guarantee 100% authentic merchandise or your money back."
    },
    {
      icon: Heart,
      title: "Customer Obsession",
      description: "Your satisfaction is our priority. We go above and beyond to ensure every deal exceeds your expectations."
    },
    {
      icon: Handshake,
      title: "Transparency",
      description: "Clear pricing, honest descriptions, and open communication. No hidden fees, no surprises."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly improving our platform with cutting-edge technology to bring you the best deals faster."
    }
  ];

  // Milestones
  const milestones = [
    {
      year: "2022",
      title: "LIQUIDIA Founded",
      description: "Started with a vision to democratize access to premium products in Morocco",
      icon: "🚀"
    },
    {
      year: "2022",
      title: "First 100 Stores",
      description: "Onboarded our first partner stores and launched the beta platform",
      icon: "🏪"
    },
    {
      year: "2023",
      title: "1M MAD in Savings",
      description: "Reached our first million in customer savings milestone",
      icon: "💰"
    },
    {
      year: "2023",
      title: "Mobile App Launch",
      description: "Launched iOS and Android apps with push notifications for flash deals",
      icon: "📱"
    },
    {
      year: "2024",
      title: "AI-Powered Recommendations",
      description: "Introduced machine learning for personalized deal discovery",
      icon: "🤖"
    },
    {
      year: "2024",
      title: "International Expansion",
      description: "Began shipping to select countries across North Africa and Europe",
      icon: "🌍"
    },
    {
      year: "2025",
      title: "47M MAD in Total Savings",
      description: "Celebrating incredible savings generated for our community",
      icon: "🎉"
    }
  ];

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
        
        <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
          <Shield className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-medium">Trusted Platform</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 p-6 pt-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Democratizing Access to 
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"> Premium Products</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We believe everyone deserves access to authentic, high-quality products at incredible prices. 
            LIQUIDIA connects you with premium deals from trusted sellers across Morocco and beyond.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="relative z-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex space-x-1 mb-8 bg-slate-800/30 rounded-xl p-1">
            {[
              { id: 'story', label: 'Our Story', icon: Target },
              { id: 'team', label: 'Our Team', icon: Users },
              { id: 'values', label: 'Our Values', icon: Heart },
              { id: 'journey', label: 'Our Journey', icon: TrendingUp }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                  activeSection === tab.id 
                    ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Our Story */}
          {activeSection === 'story' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">The LIQUIDIA Story</h2>
                <div className="space-y-6 text-gray-300">
                  <p className="text-lg leading-relaxed">
                    LIQUIDIA was born from a simple observation: premium products shouldn't be accessible only to the wealthy. 
                    Our founder, Youssef Benali, noticed that high-quality merchandise was being liquidated or sold at significant 
                    discounts, but these deals were hard to find and often limited to insiders.
                  </p>
                  
                  <p className="leading-relaxed">
                    In 2022, we set out to change that. We built a platform that connects conscious consumers with authentic 
                    premium products at incredible prices. From luxury fashion to cutting-edge electronics, we partner with 
                    authorized dealers, outlet stores, and brands directly to bring you deals you can trust.
                  </p>
                  
                  <p className="leading-relaxed">
                    Today, LIQUIDIA has generated over 47 million MAD in savings for our customers across Morocco. 
                    We're not just a marketplace – we're a community of smart shoppers who believe in the power of great deals.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
                <blockquote className="text-lg text-orange-400 italic mb-6">
                  "To democratize access to premium products by creating the most trusted marketplace for 
                  authentic deals in Morocco and beyond."
                </blockquote>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">100% authentic products guaranteed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Transparent pricing with no hidden fees</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Supporting local and international sellers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Building a community of smart shoppers</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Our Team */}
          {activeSection === 'team' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  The passionate individuals behind LIQUIDIA, working every day to bring you the best deals and experience.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {member.image}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <div className="text-orange-400 font-medium mb-3">{member.role}</div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                      Connect on LinkedIn
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
                <p className="text-gray-400 mb-6">
                  We're always looking for passionate individuals who want to revolutionize how people shop for premium products.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105">
                  View Open Positions
                </button>
              </div>
            </div>
          )}

          {/* Our Values */}
          {activeSection === 'values' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  These principles guide every decision we make and every feature we build.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-orange-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-3 gap-8">
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 text-center">
                  <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Quality Assurance</h4>
                  <p className="text-gray-400 text-sm">Every product goes through our rigorous quality check process</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 text-center">
                  <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Global Reach</h4>
                  <p className="text-gray-400 text-sm">Connecting Moroccan shoppers with worldwide premium brands</p>
                </div>
                
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 text-center">
                  <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-white mb-2">Secure Platform</h4>
                  <p className="text-gray-400 text-sm">Bank-level security protecting your data and transactions</p>
                </div>
              </div>
            </div>
          )}

          {/* Our Journey */}
          {activeSection === 'journey' && (
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Our Journey</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  From startup to Morocco's leading deal marketplace - here's how we got here.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-600 hidden md:block"></div>
                
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start space-x-6">
                      <div className="hidden md:flex w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-full items-center justify-center text-lg flex-shrink-0 relative z-10">
                        {milestone.icon}
                      </div>
                      
                      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-bold">
                            {milestone.year}
                          </span>
                          <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Saving?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of smart shoppers who've already saved millions on LIQUIDIA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105">
                Browse Deals Now
              </button>
              <button className="border border-orange-500/30 text-orange-400 px-8 py-3 rounded-xl font-bold hover:bg-orange-500/20 transition-all">
                Download Our App
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;