'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Clock, TrendingDown, ArrowRight, Zap, Eye, Heart, ShoppingBag } from 'lucide-react';

const LiquidiaHomepage = () => {
  const [currentDeal, setCurrentDeal] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });

  // Fake deals data for demonstration
  const flashDeals = [
    { id: 1, title: "Designer Handbag", originalPrice: 1200, salePrice: 299, discount: 75, viewers: 124, stock: 3 },
    { id: 2, title: "Smartphone Case Set", originalPrice: 150, salePrice: 45, discount: 70, viewers: 89, stock: 7 },
    { id: 3, title: "Winter Jacket", originalPrice: 800, salePrice: 199, discount: 75, viewers: 156, stock: 2 }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Rotate deals every 3 seconds
  useEffect(() => {
    const dealRotator = setInterval(() => {
      setCurrentDeal(prev => (prev + 1) % flashDeals.length);
    }, 3000);

    return () => clearInterval(dealRotator);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">%</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            LIQUIDIA
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-blue-400 transition-colors">Deals</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Categories</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Sell</a>
        </nav>

        <div className="flex space-x-4">
          <button className="px-4 py-2 border border-purple-400 rounded-lg hover:bg-purple-400 hover:text-white transition-all">
            Login
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all">
            Join Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Live Flash Deals • Save up to 80%</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Where Amazing
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Deals Flow
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover premium products at liquidation prices. 
              <span className="text-blue-400"> Limited time. Limited stock.</span> 
              Unlimited savings.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Start Shopping</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border-2 border-purple-400 rounded-xl text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all">
                Sell Your Stock
              </button>
            </div>
          </div>

          {/* Flash Deal Showcase */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center space-x-2">
                <Zap className="w-6 h-6 text-yellow-400" />
                <span>Flash Deal Alert</span>
              </h2>
              
              {/* Live Countdown */}
              <div className="flex items-center space-x-4 bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-2">
                <Clock className="w-5 h-5 text-red-400" />
                <div className="flex space-x-1 text-lg font-mono">
                  <span className="bg-red-500 px-2 py-1 rounded text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span>:</span>
                  <span className="bg-red-500 px-2 py-1 rounded text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span>:</span>
                  <span className="bg-red-500 px-2 py-1 rounded text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* Current Deal Display */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">{flashDeals[currentDeal].title}</h3>
                
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-green-400">{flashDeals[currentDeal].salePrice} MAD</span>
                  <span className="text-xl text-gray-400 line-through">{flashDeals[currentDeal].originalPrice} MAD</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold">
                    -{flashDeals[currentDeal].discount}%
                  </span>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{flashDeals[currentDeal].viewers} watching</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <span>Only {flashDeals[currentDeal].stock} left!</span>
                  </div>
                </div>

                <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Grab This Deal</span>
                </button>
              </div>

              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Product Image</span>
                </div>
                
                {/* Floating deal indicators */}
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  HOT DEAL
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  VERIFIED
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">50K+</div>
              <div className="text-gray-300">Happy Buyers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">1.2M+</div>
              <div className="text-gray-300">Products Sold</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">75%</div>
              <div className="text-gray-300">Average Savings</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LiquidiaHomepage;