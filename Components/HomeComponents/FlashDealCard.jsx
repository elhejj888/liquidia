import React, { useState, useEffect } from 'react';
import { Zap, Eye, TrendingDown, Heart, ArrowRight, Sparkles } from 'lucide-react';
import CountdownTimer from './CountDownTimer';
import PurchaseQueue from './PurchaseQueue';
const FlashDealCard = ({ deal, timeLeft, isChanging }) => {
  const [currentDeal, setCurrentDeal] = useState(deal);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle deal transitions
  useEffect(() => {
    if (deal.id !== currentDeal.id) {
      setIsTransitioning(true);
      setImageLoaded(false);
      
      // Start transition
      setTimeout(() => {
        setCurrentDeal(deal);
      }, 300); // Half way through transition
      
      // End transition
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }
  }, [deal, currentDeal.id]);

  // Animated price component
  const AnimatedPrice = ({ price, isOld = false }) => (
    <span 
      className={`
        transition-all duration-500 ease-out transform
        ${isTransitioning ? 'scale-90 opacity-0 translate-y-4' : 'scale-100 opacity-100 translate-y-0'}
        ${isOld ? 'text-xl text-gray-400 line-through' : 'text-4xl font-bold text-emerald-400'}
      `}
    >
      {price} MAD
    </span>
  );

  // Animated discount badge
  const AnimatedDiscount = ({ discount }) => (
    <span 
      className={`
        bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold
        transition-all duration-500 ease-out transform
        ${isTransitioning ? 'scale-0 rotate-180 opacity-0' : 'scale-100 rotate-0 opacity-100'}
      `}
    >
      -{discount}%
    </span>
  );

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-orange-500/20 p-8 mb-16 shadow-2xl shadow-orange-500/10 transition-all duration-500">
      {/* Header with transition effect */}
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-2xl font-bold flex items-center space-x-2 transition-all duration-300 ${isTransitioning ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}`}>
          <Zap className={`w-6 h-6 text-amber-400 transition-transform duration-300 ${isTransitioning ? 'rotate-12' : 'rotate-0'}`} />
          <span>Flash Deal Alert</span>
          {isTransitioning && <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />}
        </h2>
        <CountdownTimer timeLeft={timeLeft} />
      </div>

      {/* Purchase Queue */}
      <PurchaseQueue dealTitle={currentDeal.title} />

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Product Info Side */}
        <div className="space-y-4">
          {/* Product Title with slide transition */}
          <div className="overflow-hidden">
            <h3 className={`
              text-3xl font-bold transition-all duration-500 ease-out transform
              ${isTransitioning ? 'translate-y-full opacity-0' : 'translate-x-0 opacity-100'}
            `}>
              {currentDeal.title}
            </h3>
          </div>
          
          {/* Price Section with staggered animations */}
          <div className="flex items-center space-x-4 min-h-[3rem]">
            <AnimatedPrice price={currentDeal.salePrice} />
            <AnimatedPrice price={currentDeal.originalPrice} isOld={true} />
            <AnimatedDiscount discount={currentDeal.discount} />
          </div>

          {/* Stats with smooth updates */}
          <div className={`
            flex items-center space-x-6 text-sm text-gray-300 transition-all duration-400
            ${isTransitioning ? 'opacity-50 translate-y-2' : 'opacity-100 translate-y-0'}
          `}>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span className="transition-all duration-300">
                {currentDeal.viewers} watching
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingDown className="w-4 h-4 text-red-400" />
              <span className={`transition-all duration-300 ${currentDeal.stock <= 3 ? 'text-red-400 animate-pulse' : ''}`}>
                Only {currentDeal.stock} left!
              </span>
            </div>
          </div>

          {/* CTA Button with hover and transition effects */}
          <a href='/purchase' >
          <button className={`
            w-full md:w-auto px-8 py-3 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-xl font-semibold 
            hover:from-emerald-600 hover:to-orange-600 transition-all transform hover:scale-105 
            flex items-center justify-center space-x-2 group
            ${isTransitioning ? 'opacity-70 scale-95' : 'opacity-100 scale-100'}
          `}>
            <Heart className="w-5 h-5 group-hover:animate-pulse" />
            <span>Grab This Deal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button></a>
        </div>

        {/* Product Image Side */}
        <div className="relative">
          {/* Main Image Container with transition overlay */}
          <div className="relative w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl overflow-hidden">
            {/* Transition overlay */}
            <div className={`
              absolute inset-0 z-10 bg-gradient-to-r from-orange-500/30 to-red-500/30 
              transition-opacity duration-300
              ${isTransitioning ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-lg font-bold animate-pulse">
                  Loading next deal...
                </div>
              </div>
            </div>

            {/* Product Image */}
            <img 
              src={currentDeal.image} 
              alt={currentDeal.title} 
              className={`
                w-full h-full object-cover rounded-xl transition-all duration-500 ease-out transform
                ${isTransitioning ? 'scale-110 opacity-30 blur-sm' : 'scale-100 opacity-100 blur-0'}
                ${!imageLoaded ? 'opacity-0' : 'opacity-100'}
              `}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
          
          {/* Floating Badges with enhanced animations */}
          <div className={`
            absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold 
            animate-pulse transition-all duration-500 transform
            ${isTransitioning ? 'rotate-12 scale-90' : 'rotate-0 scale-100'}
          `}>
            HOT DEAL
          </div>
          
          <div className={`
            absolute -bottom-4 -left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold
            transition-all duration-500 transform
            ${isTransitioning ? '-rotate-12 scale-90' : 'rotate-0 scale-100'}
          `}>
            VERIFIED
          </div>

          {/* New Deal Indicator */}
          {isTransitioning && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold animate-bounce">
                🎉 NEW DEAL
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FlashDealCard;