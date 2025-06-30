'use client';
import React, { useState, useEffect } from 'react';
import { 
  Search, Filter, Grid, List, ChevronDown, Heart, Eye, Clock, 
  TrendingDown, Zap, MapPin, Star, ArrowRight, SlidersHorizontal,
  X, ShoppingBag, Thermometer, Users, Plus, Minus, Shield, Truck, Award, Share2, MessageCircle
} from 'lucide-react';

// Header Component for Listing Page
const ListingHeader = () => {
  return (
    <header className="relative z-10 p-6 flex justify-between items-center border-b border-orange-500/20">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">%</span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          LIQUIDIA
        </span>
      </div>
      
      <nav className="hidden text-xl md:flex space-x-8">
        <a href="/products" className="text-orange-400 font-medium">Deals</a>
        <a href="/categories" className="hover:text-orange-400 transition-colors">Categories</a>
        <a href="/subscriptionPlans" className="hover:text-orange-400 transition-colors">Sell</a>
      </nav>

      <div className="flex space-x-4">
        <div className="relative">
            <a href='/cart' className="flex items-center relative">
          <ShoppingBag className="w-8 h-8 text-gray-300 hover:text-orange-400 cursor-pointer transition-colors" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
            3
          </span></a>
        </div>
        <a href='/profile' className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all">
          Account
        </a>
      </div>
    </header>
  );
};

// FOMO Notification for Listing Page
const FOMONotification = ({ notification, onClose }) => {
  return (
    <div className="fixed top-24 right-4 z-50 bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-3 rounded-xl shadow-2xl border border-emerald-400/30 animate-slide-in-right max-w-xs">
      <div className="flex items-start space-x-2">
        <div className="flex-shrink-0">
          <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-3 h-3" />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-medium text-xs">{notification.message}</p>
          <div className="flex items-center space-x-1 mt-1">
            <MapPin className="w-2 h-2" />
            <span className="text-xs opacity-80">{notification.location}</span>
          </div>
        </div>
        <button onClick={onClose} className="text-white/60 hover:text-white text-sm">×</button>
      </div>
    </div>
  );
};

// Quick View Dialog Component
const QuickViewDialog = ({ product, isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorited, setIsFavorited] = useState(false);

  const images = [product?.image, product?.image, product?.image]; // Mock multiple images

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 border border-orange-500/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">Quick View</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {/* Left Column - Images */}
          <div>
            {/* Main Image */}
            <div className="relative mb-4">
              <img 
                src={images[selectedImage]} 
                alt={product.title}
                className="w-full h-96 object-cover rounded-xl"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔥 HOT DEAL
              </div>
              
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                -{product.discount}% OFF
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{product.viewers} watching</span>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{product.timeLeft}</span>
              </div>
            </div>

            {/* Image Thumbnails */}
            <div className="flex space-x-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedImage ? 'border-orange-400' : 'border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">{product.title}</h1>
              <div className="flex items-center space-x-4 text-gray-400 mb-4">
                <span>by {product.seller}</span>
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{product.location}</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-400 text-sm">(4.8) • 247 reviews</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-slate-700/50 rounded-xl p-4">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl font-bold text-emerald-400">{product.salePrice} MAD</span>
                <span className="text-xl text-gray-400 line-through">{product.originalPrice} MAD</span>
              </div>
              <div className="text-sm text-emerald-300">
                You save {product.originalPrice - product.salePrice} MAD ({product.discount}%)
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-orange-400 font-medium">Only {product.stock} left in stock!</span>
              </div>
              <span className="text-gray-400 text-sm">Hurry up!</span>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-bold text-white mb-3">Product Features:</h3>
              <div className="space-y-2">
                {['Authentic brand guarantee', 'Free shipping', '30-day return policy', 'Secure payment'].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="font-bold text-white mb-3">Quantity:</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-slate-700 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    <Minus className="w-4 h-4 text-orange-400" />
                  </button>
                  <span className="px-4 py-2 text-white font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-slate-600 rounded-lg transition-colors"
                  >
                    <Plus className="w-4 h-4 text-orange-400" />
                  </button>
                </div>
                <span className="text-gray-400 text-sm">Max {product.stock} items</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full bg-gradient-to-r from-emerald-500 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart - {(product.salePrice * quantity).toLocaleString()} MAD</span>
              </button>
              
              <div className="grid grid-cols-3 gap-3">
                <button 
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`py-3 rounded-lg font-medium transition-all flex items-center justify-center space-x-2 ${
                    isFavorited 
                      ? 'bg-red-500 text-white' 
                      : 'bg-slate-700 text-gray-300 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
                  <span className="hidden sm:inline">Save</span>
                </button>
                
                <button className="py-3 bg-slate-700 text-gray-300 hover:bg-blue-500 hover:text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2">
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Share</span>
                </button>
                
                <button className="py-3 bg-slate-700 text-gray-300 hover:bg-green-500 hover:text-white rounded-lg font-medium transition-all flex items-center justify-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">Ask</span>
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
              <div className="text-center">
                <Shield className="w-6 h-6 text-green-400 mx-auto mb-1" />
                <div className="text-xs text-gray-400">Secure Payment</div>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                <div className="text-xs text-gray-400">Fast Shipping</div>
              </div>
              <div className="text-center">
                <Award className="w-6 h-6 text-purple-400 mx-auto mb-1" />
                <div className="text-xs text-gray-400">Authenticity</div>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-slate-700/30 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <span className="text-orange-400 font-bold">{product.seller.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white">{product.seller}</h4>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="flex space-x-1">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-400">(4.8) • 1,247 sales</span>
                  </div>
                </div>
                <button className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition-all">
                  View Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Search and Filter Bar
const SearchFilterBar = ({ searchTerm, setSearchTerm, activeFilters, setActiveFilters, viewMode, setViewMode }) => {
  const [showFilters, setShowFilters] = useState(false);

  const filterOptions = {
    category: ['Fashion', 'Electronics', 'Home', 'Sports', 'Beauty'],
    discount: ['70%+', '60-69%', '50-59%', '40-49%'],
    price: ['Under 100 MAD', '100-500 MAD', '500-1000 MAD', '1000+ MAD'],
    location: ['Casablanca', 'Rabat', 'Marrakech', 'Fez', 'Tangier']
  };

  const toggleFilter = (type, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type]?.includes(value) 
        ? prev[type].filter(v => v !== value)
        : [...(prev[type] || []), value]
    }));
  };

  const clearAllFilters = () => {
    setActiveFilters({});
  };

  const activeFilterCount = Object.values(activeFilters).flat().length;

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border-b border-orange-500/20 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Search Bar */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search clearance deals..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-orange-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-all"
            />
          </div>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-3 rounded-xl border transition-all flex items-center space-x-2 ${
              showFilters ? 'bg-orange-500 border-orange-500 text-white' : 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="flex border border-orange-500/30 rounded-lg overflow-hidden">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 transition-all ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-orange-400'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 transition-all ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-orange-400'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {activeFilterCount > 0 && (
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-sm text-gray-400">Active filters:</span>
            {Object.entries(activeFilters).map(([type, values]) =>
              values.map(value => (
                <span
                  key={`${type}-${value}`}
                  className="bg-orange-500/20 border border-orange-500/30 text-orange-400 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
                >
                  <span>{value}</span>
                  <button
                    onClick={() => toggleFilter(type, value)}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))
            )}
            <button
              onClick={clearAllFilters}
              className="text-red-400 hover:text-red-300 text-sm underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Filter Panels */}
        {showFilters && (
          <div className="grid md:grid-cols-4 gap-4 mt-4 p-4 bg-slate-700/30 rounded-xl border border-orange-500/20">
            {Object.entries(filterOptions).map(([type, options]) => (
              <div key={type}>
                <h3 className="font-medium text-orange-400 mb-2 capitalize">{type}</h3>
                <div className="space-y-2">
                  {options.map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={activeFilters[type]?.includes(option) || false}
                        onChange={() => toggleFilter(type, option)}
                        className="rounded border-gray-600 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-300">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Deal Temperature Gauge
const DealTemperature = ({ discount }) => {
  const getTemperature = (discount) => {
    if (discount >= 80) return { level: 'BLAZING', color: 'text-red-400', bg: 'bg-red-500/20', icon: '🔥' };
    if (discount >= 60) return { level: 'HOT', color: 'text-orange-400', bg: 'bg-orange-500/20', icon: '⚡' };
    if (discount >= 40) return { level: 'WARM', color: 'text-yellow-400', bg: 'bg-yellow-500/20', icon: '💫' };
    return { level: 'COOL', color: 'text-blue-400', bg: 'bg-blue-500/20', icon: '❄️' };
  };

  const temp = getTemperature(discount);

  return (
    <div className={`inline-flex items-center space-x-1 ${temp.bg} border border-current/30 rounded-full px-2 py-1`}>
      <span className="text-xs">{temp.icon}</span>
      <span className={`text-xs font-bold ${temp.color}`}>{temp.level}</span>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, viewMode, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  if (viewMode === 'list') {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-orange-500/20 p-4 hover:border-orange-400/40 transition-all group">
        <div className="flex items-center space-x-4">
          <div className="relative flex-shrink-0">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="absolute -top-2 -right-2">
              <DealTemperature discount={product.discount} />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors">
              {product.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{product.seller} • {product.location}</p>
            
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-emerald-400">{product.salePrice} MAD</span>
              <span className="text-gray-400 line-through">{product.originalPrice} MAD</span>
              <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                -{product.discount}%
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-end space-y-2">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Eye className="w-4 h-4" />
              <span>{product.viewers}</span>
            </div>
            <div className="text-sm text-red-400">
              {product.stock} left
            </div>
            <button 
              onClick={() => onQuickView(product)}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-orange-600 transition-all"
            >
              Quick View
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-orange-500/20 p-4 hover:border-orange-400/40 transition-all group hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-black/50 rounded-lg transition-opacity duration-300 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button 
            onClick={() => onQuickView(product)}
            className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Quick View
          </button>
        </div>

        {/* Top badges */}
        <div className="absolute top-2 left-2">
          <DealTemperature discount={product.discount} />
        </div>
        
        <div className="absolute top-2 right-2">
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className={`p-2 rounded-full transition-all ${
              isFavorited ? 'bg-red-500 text-white' : 'bg-black/50 text-white hover:bg-red-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Stock indicator */}
        {product.stock <= 3 && (
          <div className="absolute bottom-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
            Only {product.stock} left!
          </div>
        )}
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors line-clamp-2">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{product.seller}</span>
          <div className="flex items-center space-x-1">
            <MapPin className="w-3 h-3" />
            <span>{product.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-emerald-400">{product.salePrice} MAD</span>
            <span className="text-sm text-gray-400 line-through">{product.originalPrice} MAD</span>
          </div>
          <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            -{product.discount}%
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>{product.viewers} watching</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{product.timeLeft}</span>
          </div>
        </div>

        <a href='/purchase' className="w-full py-3 bg-gradient-to-r from-emerald-500 to-orange-500 rounded-lg font-medium hover:from-emerald-600 hover:to-orange-600 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
          <ShoppingBag className="w-4 h-4" />
          <span>Grab Deal</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

// Main Listing Page Component
const ListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({});
  const [viewMode, setViewMode] = useState('grid');
  const [notifications, setNotifications] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  // Mock products data
  const products = [
    { id: 1, title: "Designer Leather Handbag", originalPrice: 1200, salePrice: 299, discount: 75, viewers: 124, stock: 3, image: "/handbag.png", seller: "Fashion Store", location: "Casablanca", timeLeft: "2h 15m", category: "Fashion" },
    { id: 2, title: "Smartphone Case Bundle (5 pieces)", originalPrice: 150, salePrice: 45, discount: 70, viewers: 89, stock: 7, image: "/phones.png", seller: "Tech Hub", location: "Rabat", timeLeft: "4h 30m", category: "Electronics" },
    { id: 3, title: "Winter Jacket - Premium Brand", originalPrice: 800, salePrice: 199, discount: 75, viewers: 156, stock: 2, image: "/winter.png", seller: "Outdoor Gear", location: "Marrakech", timeLeft: "1h 45m", category: "Fashion" },
    { id: 4, title: "Bluetooth Headphones", originalPrice: 400, salePrice: 120, discount: 70, viewers: 78, stock: 5, image: "/headphones.png", seller: "Audio World", location: "Fez", timeLeft: "3h 20m", category: "Electronics" },
    { id: 5, title: "Home Decor Set", originalPrice: 300, salePrice: 90, discount: 70, viewers: 45, stock: 8, image: "/decor.png", seller: "Home Style", location: "Tangier", timeLeft: "5h 10m", category: "Home" },
    { id: 6, title: "Sports Running Shoes", originalPrice: 600, salePrice: 180, discount: 70, viewers: 167, stock: 4, image: "/runners.png", seller: "Sports Center", location: "Casablanca", timeLeft: "2h 55m", category: "Sports" }
  ];

  const fomoMessages = [
    { message: "Sarah just bought 2 handbags!", location: "Casablanca", timeAgo: "1m ago" },
    { message: "Ahmed saved 750 MAD on electronics!", location: "Rabat", timeAgo: "2m ago" },
    { message: "Only 1 jacket left in Marrakech!", location: "Marrakech", timeAgo: "30s ago" }
  ];

  // FOMO Notifications
  useEffect(() => {
    const showRandomNotification = () => {
      const randomMessage = fomoMessages[Math.floor(Math.random() * fomoMessages.length)];
      const notificationId = Date.now();
      
      setNotifications(prev => [...prev, { ...randomMessage, id: notificationId }]);
      
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notificationId));
      }, 3000);
    };

    const notificationTimer = setInterval(showRandomNotification, 5000);
    showRandomNotification();

    return () => clearInterval(notificationTimer);
  }, []);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !activeFilters.category?.length || activeFilters.category.includes(product.category);
    const matchesLocation = !activeFilters.location?.length || activeFilters.location.includes(product.location);
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setIsQuickViewOpen(false);
    setQuickViewProduct(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* FOMO Notifications */}
      {notifications.map((notification) => (
        <FOMONotification
          key={notification.id}
          notification={notification}
          onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
        />
      ))}

      {/* Quick View Dialog */}
      <QuickViewDialog 
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
      />

      <ListingHeader />
      <SearchFilterBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {/* Results Section */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-white mb-2">
                Clearance Deals
                <span className="text-orange-400 ml-2">({filteredProducts.length} items)</span>
              </h1>
              <p className="text-gray-400">Limited time offers with up to 80% savings</p>
            </div>

            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-700 border border-orange-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-orange-400"
              >
                <option value="newest">Newest First</option>
                <option value="discount">Highest Discount</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="ending-soon">Ending Soon</option>
              </select>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'space-y-4'
          }`}>
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                viewMode={viewMode} 
                onQuickView={handleQuickView}
              />
            ))}
          </div>

          {/* Load More */}
          <div className="flex justify-center mt-12">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl font-semibold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105 flex items-center space-x-2">
              <span>Load More Deals</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ListingPage;