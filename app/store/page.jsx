'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Star, MapPin, Calendar, Eye, Clock, ShoppingBag, TrendingUp, Award, Filter, Grid, List, Heart, Share2, MessageCircle, Phone, Mail, Globe, Verified, Crown, Flame, Gift, Truck, RefreshCw, ChevronDown } from 'lucide-react';

const StorePage = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('ending-soon');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showContactModal, setShowContactModal] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  // Store data
  const store = {
    name: "Fashion Boutique Casa",
    description: "Premium fashion and luxury accessories from authentic international brands. Specializing in liquidation deals from high-end fashion houses.",
    avatar: "FBC",
    coverImage: "store-cover.jpg",
    rating: 4.8,
    totalReviews: 1247,
    totalSales: 3450,
    memberSince: "January 2022",
    location: "Casablanca, Morocco",
    verified: true,
    badges: ["Top Seller", "Fast Shipping", "Verified Store"],
    followers: 8934,
    responseTime: "< 1 hour",
    shippingTime: "1-3 days",
    returnPolicy: "30 days",
    languages: ["Arabic", "French", "English"]
  };

  // Store statistics
  const storeStats = {
    totalProducts: 234,
    activeDeals: 89,
    totalSavings: "2.3M MAD",
    averageDiscount: 72,
    successfulOrders: 3450,
    repeatCustomers: 78,
    onTimeDelivery: 96,
    customerSatisfaction: 4.8
  };

  // Store products
  const products = [
    {
      id: 1,
      title: "Designer Italian Leather Handbag",
      originalPrice: 1800,
      salePrice: 399,
      category: "handbags",
      image: "lv1.png",
      timeLeft: 3420,
      viewers: 156,
      discount: 78,
      stock: 3,
      condition: "New with tags",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Swiss Watch Collection",
      originalPrice: 4500,
      salePrice: 1299,
      category: "watches",
      image: "lv2.png",
      timeLeft: 1890,
      viewers: 89,
      discount: 71,
      stock: 1,
      condition: "Like new",
      featured: true
    },
    {
      id: 3,
      title: "Designer Silk Scarf Set",
      originalPrice: 650,
      salePrice: 189,
      category: "accessories",
      image: "lv3.png",
      timeLeft: 5670,
      viewers: 34,
      discount: 71,
      stock: 5,
      condition: "New",
      featured: false
    },
    {
      id: 4,
      title: "Premium Sunglasses Collection",
      originalPrice: 890,
      salePrice: 249,
      category: "accessories",
      image: "lv1.png",
      timeLeft: 2340,
      viewers: 67,
      discount: 72,
      stock: 8,
      condition: "New with box",
      featured: false
    },
    {
      id: 5,
      title: "Vintage Designer Wallet",
      originalPrice: 420,
      salePrice: 119,
      category: "accessories",
      image: "lv2.png",
      timeLeft: 4560,
      viewers: 23,
      discount: 72,
      stock: 2,
      condition: "Excellent",
      featured: false
    },
    {
      id: 6,
      title: "Limited Edition Jewelry Set",
      originalPrice: 2200,
      salePrice: 649,
      category: "jewelry",
      image: "lv3.png",
      timeLeft: 1230,
      viewers: 91,
      discount: 70,
      stock: 1,
      condition: "New",
      featured: true
    }
  ];

  // Store categories
  const categories = [
    { id: 'all', name: 'All Products', count: 234 },
    { id: 'handbags', name: 'Handbags', count: 67 },
    { id: 'watches', name: 'Watches', count: 45 },
    { id: 'jewelry', name: 'Jewelry', count: 38 },
    { id: 'accessories', name: 'Accessories', count: 84 }
  ];

  // Recent reviews
  const recentReviews = [
    {
      id: 1,
      customer: "Amina K.",
      rating: 5,
      comment: "Amazing quality and fast shipping! The handbag is exactly as described.",
      date: "2 days ago",
      verified: true,
      product: "Designer Leather Handbag"
    },
    {
      id: 2,
      customer: "Omar B.",
      rating: 5,
      comment: "Great communication and the watch arrived in perfect condition.",
      date: "1 week ago",
      verified: true,
      product: "Swiss Watch"
    },
    {
      id: 3,
      customer: "Fatima M.",
      rating: 4,
      comment: "Good quality products, will order again!",
      date: "2 weeks ago",
      verified: true,
      product: "Silk Scarf Set"
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m`;
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
          <button className="p-2 hover:bg-orange-500/20 rounded-lg transition-all">
            <Share2 className="w-5 h-5 text-orange-400" />
          </button>
          <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Verified Store</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Store Header */}
        <div className="relative h-64 bg-gradient-to-r from-slate-800 to-slate-700">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-xl flex items-center justify-center text-2xl font-bold border-4 border-white/20">
                    {store.avatar}
                  </div>
                  {store.verified && (
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <Verified className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-white">{store.name}</h1>
                    <div className="flex space-x-2">
                      {store.badges.map((badge, index) => (
                        <span key={index} className="bg-orange-500/20 border border-orange-500/30 rounded-full px-2 py-1 text-xs text-orange-400 font-medium">
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-gray-300 mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-bold">{store.rating}</span>
                      <span>({store.totalReviews.toLocaleString()} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ShoppingBag className="w-4 h-4" />
                      <span>{store.totalSales.toLocaleString()} sales</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{store.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 max-w-2xl">{store.description}</p>
                </div>
                
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`px-6 py-3 rounded-lg font-bold transition-all flex items-center space-x-2 ${
                      isFollowing 
                        ? 'bg-slate-600 text-white hover:bg-slate-500' 
                        : 'bg-orange-500 text-white hover:bg-orange-600'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFollowing ? 'fill-current' : ''}`} />
                    <span>{isFollowing ? 'Following' : 'Follow'}</span>
                  </button>
                  <button 
                    onClick={() => setShowContactModal(true)}
                    className="px-6 py-3 bg-slate-700 text-white rounded-lg font-bold hover:bg-slate-600 transition-all flex items-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Info Bar */}
        <div className="bg-slate-800/50 backdrop-blur-lg border-b border-orange-500/20 p-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{store.followers.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{store.responseTime}</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{store.shippingTime}</div>
                <div className="text-gray-400 text-sm">Shipping</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{store.returnPolicy}</div>
                <div className="text-gray-400 text-sm">Returns</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex space-x-1 mb-8 bg-slate-800/30 rounded-xl p-1">
              {[
                { id: 'products', label: 'Products', count: storeStats.activeDeals },
                { id: 'about', label: 'About Store' },
                { id: 'reviews', label: 'Reviews', count: store.totalReviews },
                { id: 'policies', label: 'Policies' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <span className="font-medium">{tab.label}</span>
                  {tab.count && <span className="text-xs opacity-60">({tab.count})</span>}
                </button>
              ))}
            </div>

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div>
                {/* Controls */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Filter className="w-4 h-4 text-gray-400" />
                      <select 
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:border-orange-400 focus:outline-none"
                      >
                        {categories.map(cat => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name} ({cat.count})
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all ${
                          viewMode === 'grid' ? 'bg-orange-500/20 text-orange-400' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <Grid className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-all ${
                          viewMode === 'list' ? 'bg-orange-500/20 text-orange-400' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        <List className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:border-orange-400 focus:outline-none"
                  >
                    <option value="ending-soon">Ending Soon</option>
                    <option value="highest-discount">Highest Discount</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                {/* Featured Products */}
                {selectedCategory === 'all' && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                      <Crown className="w-5 h-5 text-orange-400" />
                      <span>Featured Deals</span>
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {products.filter(p => p.featured).map(product => (
                        <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all group cursor-pointer">
                          <div className="relative mb-4">
                            <img 
                              src={product.image} 
                              alt={product.title}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            
                            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              {product.discount}% OFF
                            </div>
                            
                            <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                              <Eye className="w-3 h-3" />
                              <span>{product.viewers}</span>
                            </div>
                            
                            <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <Clock className="w-3 h-3" />
                              <span>{formatTime(product.timeLeft)}</span>
                            </div>

                            <div className="absolute bottom-2 right-2 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                              Featured
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors">
                              {product.title}
                            </h4>
                            
                            <div className="flex items-center space-x-2">
                              <span className="text-xl font-bold text-emerald-400">{product.salePrice} MAD</span>
                              <span className="text-sm text-gray-400 line-through">{product.originalPrice} MAD</span>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm text-gray-400">
                              <span>{product.condition}</span>
                              <span>{product.stock} left</span>
                            </div>
                            
                            <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all transform group-hover:scale-105">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* All Products */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name}
                  </h3>
                </div>

                <div className={`grid gap-6 ${
                  viewMode === 'grid' 
                    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                    : 'grid-cols-1'
                }`}>
                  {filteredProducts.map(product => (
                    <div key={product.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all group cursor-pointer">
                      <div className="relative mb-4">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          {product.discount}% OFF
                        </div>
                        
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{product.viewers}</span>
                        </div>
                        
                        <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatTime(product.timeLeft)}</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-bold text-white group-hover:text-orange-400 transition-colors">
                          {product.title}
                        </h4>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-emerald-400">{product.salePrice} MAD</span>
                          <span className="text-sm text-gray-400 line-through">{product.originalPrice} MAD</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm text-gray-400">
                          <span>{product.condition}</span>
                          <span>{product.stock} left</span>
                        </div>
                        
                        <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all transform group-hover:scale-105">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Tab */}
            {activeTab === 'about' && (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Store Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Calendar className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-400">Member since:</span>
                        <span className="text-white font-medium">{store.memberSince}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-400">Location:</span>
                        <span className="text-white font-medium">{store.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-orange-400" />
                        <span className="text-gray-400">Languages:</span>
                        <span className="text-white font-medium">{store.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Store Description</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {store.description} We work directly with luxury brands and authorized dealers to bring you authentic, 
                      high-quality fashion items at incredible prices. Our team carefully inspects every item to ensure authenticity and quality.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Store Statistics</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Products</span>
                        <span className="text-white font-bold">{storeStats.totalProducts}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Active Deals</span>
                        <span className="text-orange-400 font-bold">{storeStats.activeDeals}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Total Savings</span>
                        <span className="text-green-400 font-bold">{storeStats.totalSavings}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Avg. Discount</span>
                        <span className="text-purple-400 font-bold">{storeStats.averageDiscount}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Performance</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">On-time Delivery</span>
                        <span className="text-green-400 font-bold">{storeStats.onTimeDelivery}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Repeat Customers</span>
                        <span className="text-blue-400 font-bold">{storeStats.repeatCustomers}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Satisfaction</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-yellow-400 font-bold">{storeStats.customerSatisfaction}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-white mb-6">Recent Reviews</h3>
                    <div className="space-y-6">
                      {recentReviews.map(review => (
                        <div key={review.id} className="border-b border-gray-700 pb-6 last:border-b-0">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                                {review.customer.charAt(0)}
                              </div>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-bold text-white">{review.customer}</span>
                                  {review.verified && (
                                    <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                                      <Verified className="w-3 h-3" />
                                      <span>Verified</span>
                                    </div>
                                  )}
                                </div>
                                <div className="flex items-center space-x-2">
                                  <div className="flex space-x-1">
                                    {[1,2,3,4,5].map(i => (
                                      <Star key={i} className={`w-4 h-4 ${i <= review.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                                    ))}
                                  </div>
                                  <span className="text-gray-400 text-sm">{review.date}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 mb-2">{review.comment}</p>
                          <div className="text-sm text-orange-400">Product: {review.product}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Rating Breakdown</h3>
                    <div className="space-y-3">
                      {[5,4,3,2,1].map(rating => {
                        const percentage = rating === 5 ? 78 : rating === 4 ? 18 : rating === 3 ? 3 : rating === 2 ? 1 : 0;
                        return (
                          <div key={rating} className="flex items-center space-x-3">
                            <div className="flex items-center space-x-1 w-12">
                              <span className="text-white text-sm">{rating}</span>
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            </div>
                            <div className="flex-1 bg-slate-700 rounded-full h-2">
                              <div 
                                className="bg-yellow-400 h-2 rounded-full"
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-gray-400 text-sm w-10">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <div className="text-3xl font-bold text-white">{store.rating}</div>
                      <div className="text-gray-400">out of 5 stars</div>
                      <div className="text-sm text-gray-500 mt-1">{store.totalReviews.toLocaleString()} total reviews</div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Review Categories</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Product Quality</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">4.9</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Shipping Speed</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">4.7</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Communication</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">4.8</span>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">As Described</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white">4.9</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Policies Tab */}
            {activeTab === 'policies' && (
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Truck className="w-6 h-6 text-blue-400" />
                      <h3 className="text-xl font-bold text-white">Shipping Policy</h3>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <p><strong>Processing Time:</strong> 1-2 business days</p>
                      <p><strong>Shipping Time:</strong> 1-3 business days within Morocco</p>
                      <p><strong>Free Shipping:</strong> Orders over 500 MAD</p>
                      <p><strong>Express Shipping:</strong> Same day delivery available in Casablanca</p>
                      <p><strong>International:</strong> Available to select countries (5-10 days)</p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <RefreshCw className="w-6 h-6 text-green-400" />
                      <h3 className="text-xl font-bold text-white">Return Policy</h3>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <p><strong>Return Window:</strong> 30 days from delivery</p>
                      <p><strong>Condition:</strong> Items must be unused with original tags</p>
                      <p><strong>Return Shipping:</strong> Free for defective items</p>
                      <p><strong>Refund Time:</strong> 3-5 business days after receiving return</p>
                      <p><strong>Exchange:</strong> Available for size/color changes</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-6 h-6 text-purple-400" />
                      <h3 className="text-xl font-bold text-white">Authenticity Guarantee</h3>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <p><strong>Verification Process:</strong> Every item is authenticated by experts</p>
                      <p><strong>Guarantee:</strong> 100% authentic or full refund</p>
                      <p><strong>Documentation:</strong> Certificate of authenticity included</p>
                      <p><strong>Expert Team:</strong> 10+ years experience in luxury goods</p>
                      <p><strong>Insurance:</strong> All shipments fully insured</p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                    <div className="flex items-center space-x-3 mb-4">
                      <Gift className="w-6 h-6 text-red-400" />
                      <h3 className="text-xl font-bold text-white">Additional Services</h3>
                    </div>
                    <div className="space-y-3 text-gray-300">
                      <p><strong>Gift Wrapping:</strong> Luxury packaging available (+25 MAD)</p>
                      <p><strong>Personal Shopping:</strong> Concierge service for VIP customers</p>
                      <p><strong>Layaway:</strong> Reserve items with 50% deposit</p>
                      <p><strong>Price Match:</strong> We match legitimate competitor prices</p>
                      <p><strong>VIP Program:</strong> Exclusive access to new arrivals</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-orange-500/20 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Contact {store.name}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-medium text-white">Send Message</div>
                  <div className="text-sm text-gray-400">Chat directly with the store</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Phone className="w-5 h-5 text-green-400" />
                <div>
                  <div className="font-medium text-white">Call Store</div>
                  <div className="text-sm text-gray-400">Response time: {store.responseTime}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer">
                <Mail className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="font-medium text-white">Email Store</div>
                  <div className="text-sm text-gray-400">For detailed inquiries</div>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 pt-6">
              <button 
                onClick={() => setShowContactModal(false)}
                className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorePage;