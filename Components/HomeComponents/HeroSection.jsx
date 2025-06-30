import React from 'react';
import { ShoppingBag, ArrowRight, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-4 py-2 mb-6">
        <Zap className="w-4 h-4 text-yellow-400" />
        <span className="text-sm">Live Flash Deals • Save up to 80%</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Where Amazing
        <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent block">
          Deals Flow
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Discover premium products at liquidation prices. 
        <span className="text-orange-400"> Limited time. Limited stock.</span> 
        Unlimited savings.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <a href='/products' className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
          <ShoppingBag className="w-5 h-5" />
          <span>Start Shopping</span>
          <ArrowRight className="w-5 h-5" />
        </a>
        <a href='/subscriptionPlans' className="px-8 py-4 border-2 border-orange-400 rounded-xl text-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all">
          Sell Your Stock
        </a>
      </div>
    </div>
  );
};
export default HeroSection;
