'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Timer, MapPin, Search, Filter, Grid, List, Star, Eye, Clock, Zap, TrendingUp, ChevronDown, ChevronRight } from 'lucide-react';

const CategoriesPage = () => {
  const [timeLeft, setTimeLeft] = useState(850);
  const [activities, setActivities] = useState([
    { id: 1, user: "Rajae K.", action: "bought electronics", time: "8s ago", location: "Casablanca" },
    { id: 2, user: "Khalid M.", action: "saved 2,100 MAD", time: "25s ago", location: "Marrakech" },
    { id: 3, user: "Nadia B.", action: "grabbed fashion deal", time: "1m ago", location: "Rabat" }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('ending-soon');
  const [showFilters, setShowFilters] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});

  // Main categories with extensive subcategories
  const categories = {
    fashion: {
      name: "Fashion & Apparel",
      icon: "👗",
      color: "from-pink-500 to-rose-600",
      deals: 2847,
      subcategories: [
        "Women's Clothing", "Men's Clothing", "Kids & Baby", "Shoes & Footwear", 
        "Handbags & Accessories", "Jewelry & Watches", "Sunglasses", "Lingerie & Underwear",
        "Sportswear", "Traditional Wear", "Plus Size", "Maternity Wear"
      ]
    },
    electronics: {
      name: "Electronics & Tech",
      icon: "📱",
      color: "from-blue-500 to-indigo-600",
      deals: 1923,
      subcategories: [
        "Smartphones & Tablets", "Laptops & Computers", "Gaming & Consoles", "Audio & Headphones",
        "Cameras & Photography", "Smart Home", "Wearable Tech", "TV & Entertainment",
        "Accessories & Cables", "Software & Apps", "Drones & RC", "Virtual Reality"
      ]
    },
    home: {
      name: "Home & Garden",
      icon: "🏠",
      color: "from-green-500 to-emerald-600",
      deals: 1654,
      subcategories: [
        "Furniture", "Home Decor", "Kitchen & Dining", "Bedding & Bath",
        "Lighting", "Garden & Outdoor", "Tools & Hardware", "Organization & Storage",
        "Appliances", "Rugs & Carpets", "Wall Art", "Home Security"
      ]
    },
    beauty: {
      name: "Beauty & Personal Care",
      icon: "💄",
      color: "from-purple-500 to-violet-600",
      deals: 1287,
      subcategories: [
        "Skincare", "Makeup & Cosmetics", "Hair Care", "Fragrances & Perfumes",
        "Personal Hygiene", "Nail Care", "Men's Grooming", "Bath & Body",
        "Oral Care", "Health Supplements", "Medical Devices", "Wellness Products"
      ]
    },
    automotive: {
      name: "Automotive & Motors",
      icon: "🚗",
      color: "from-red-500 to-orange-600",
      deals: 892,
      subcategories: [
        "Car Parts & Accessories", "Motorcycles & Scooters", "Car Electronics", "Tires & Wheels",
        "Car Care & Detailing", "Tools & Equipment", "Interior Accessories", "Exterior Accessories",
        "Performance Parts", "Classic Car Parts", "Commercial Vehicles", "Boats & Marine"
      ]
    },
    sports: {
      name: "Sports & Outdoors",
      icon: "⚽",
      color: "from-orange-500 to-amber-600",
      deals: 1156,
      subcategories: [
        "Fitness Equipment", "Outdoor Recreation", "Team Sports", "Water Sports",
        "Winter Sports", "Athletic Apparel", "Sports Nutrition", "Cycling",
        "Running & Athletics", "Golf", "Martial Arts", "Camping & Hiking"
      ]
    },
    books: {
      name: "Books & Education",
      icon: "📚",
      color: "from-indigo-500 to-blue-600",
      deals: 743,
      subcategories: [
        "Fiction & Literature", "Non-Fiction", "Educational Books", "Children's Books",
        "Comics & Graphic Novels", "Art & Design", "Cooking & Food", "Travel Guides",
        "Self-Help & Motivation", "Business & Economics", "Science & Technology", "Religious Books"
      ]
    },
    toys: {
      name: "Toys & Games",
      icon: "🧸",
      color: "from-yellow-500 to-orange-500",
      deals: 967,
      subcategories: [
        "Action Figures & Collectibles", "Board Games & Puzzles", "Educational Toys", "Electronic Toys",
        "Dolls & Accessories", "Building Sets", "Arts & Crafts", "Outdoor Play",
        "Baby & Toddler Toys", "Remote Control", "Musical Instruments", "Party Supplies"
      ]
    },
    food: {
      name: "Food & Beverages",
      icon: "🍽️",
      color: "from-green-500 to-teal-600",
      deals: 634,
      subcategories: [
        "Gourmet Food", "Organic Products", "International Cuisine", "Beverages & Drinks",
        "Snacks & Confectionery", "Health Foods", "Spices & Seasonings", "Coffee & Tea",
        "Wine & Spirits", "Baby Food", "Pet Food", "Dietary Supplements"
      ]
    },
    pets: {
      name: "Pets & Animals",
      icon: "🐕",
      color: "from-brown-500 to-amber-600",
      deals: 523,
      subcategories: [
        "Dog Supplies", "Cat Supplies", "Bird Supplies", "Fish & Aquarium",
        "Small Animals", "Pet Food & Treats", "Pet Health & Medicine", "Pet Toys",
        "Pet Grooming", "Pet Training", "Pet Travel", "Reptile Supplies"
      ]
    },
    art: {
      name: "Art & Collectibles",
      icon: "🎨",
      color: "from-violet-500 to-purple-600",
      deals: 412,
      subcategories: [
        "Original Artwork", "Prints & Posters", "Sculptures", "Antiques & Vintage",
        "Collectible Cards", "Coins & Currency", "Stamps", "Memorabilia",
        "Handmade Items", "Craft Supplies", "Musical Instruments", "Photography Equipment"
      ]
    },
    business: {
      name: "Business & Industrial",
      icon: "🏭",
      color: "from-slate-500 to-gray-600",
      deals: 789,
      subcategories: [
        "Office Supplies", "Industrial Equipment", "Restaurant Equipment", "Medical Supplies",
        "Construction Materials", "Packaging & Shipping", "Safety Equipment", "Lab Equipment",
        "Cleaning Supplies", "Printing Equipment", "Warehouse Equipment", "Professional Services"
      ]
    }
  };

  // Sample deals data
  const deals = [
    {
      id: 1,
      title: "Designer Italian Leather Handbag Collection",
      originalPrice: 1800,
      salePrice: 399,
      category: "fashion",
      image: "lv1.png",
      timeLeft: 3420,
      viewers: 156,
      seller: "Milano Fashion House",
      location: "Casablanca",
      rating: 4.8,
      sold: 23
    },
    {
      id: 2,
      title: "Apple iPhone 14 Pro Max - Unlocked",
      originalPrice: 15000,
      salePrice: 8999,
      category: "electronics",
      image: "lv2.png",
      timeLeft: 1890,
      viewers: 289,
      seller: "TechHub Morocco",
      location: "Rabat",
      rating: 4.9,
      sold: 45
    },
    {
      id: 3,
      title: "Modern Scandinavian Dining Set",
      originalPrice: 4500,
      salePrice: 1299,
      category: "home",
      image: "lv3.png",
      timeLeft: 5670,
      viewers: 78,
      seller: "Nordic Home Design",
      location: "Marrakech",
      rating: 4.7,
      sold: 12
    },
    {
      id: 4,
      title: "Professional DSLR Camera Kit",
      originalPrice: 8500,
      salePrice: 3499,
      category: "electronics",
      image: "lv1.png",
      timeLeft: 2340,
      viewers: 134,
      seller: "Photo Pro Store",
      location: "Fez",
      rating: 4.8,
      sold: 31
    },
    {
      id: 5,
      title: "Luxury Skincare Complete Set",
      originalPrice: 890,
      salePrice: 249,
      category: "beauty",
      image: "lv2.png",
      timeLeft: 4560,
      viewers: 92,
      seller: "Beauty Palace",
      location: "Tangier",
      rating: 4.6,
      sold: 67
    },
    {
      id: 6,
      title: "Professional Fitness Equipment Bundle",
      originalPrice: 3200,
      salePrice: 899,
      category: "sports",
      image: "lv3.png",
      timeLeft: 1230,
      viewers: 45,
      seller: "FitLife Equipment",
      location: "Casablanca",
      rating: 4.5,
      sold: 19
    }
  ];

  const filteredDeals = selectedCategory === 'all' 
    ? deals 
    : deals.filter(deal => deal.category === selectedCategory);

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Activity feed effect
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        user: ["Ahmed K.", "Fatima M.", "Sarah L.", "Omar T.", "Youssef R."][Math.floor(Math.random() * 5)],
        action: ["bought electronics", "saved 1,200 MAD", "grabbed fashion deal", "completed purchase"][Math.floor(Math.random() * 4)],
        time: "now",
        location: ["Casablanca", "Rabat", "Fez", "Tangier", "Marrakech"][Math.floor(Math.random() * 5)]
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 2)]);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
  };

  const toggleCategory = (categoryKey) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = timeLeft < 300;

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
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search deals..."
              className="bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none w-64"
            />
          </div>
          <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Secure Shopping</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Flash Sale Timer */}
          <div className={`bg-gradient-to-r p-4 rounded-xl border-2 transition-all mb-8 ${
            isUrgent 
              ? 'from-red-600/20 to-orange-600/20 border-red-500/50 animate-pulse' 
              : 'from-orange-500/20 to-red-500/20 border-orange-500/30'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Timer className={`w-5 h-5 ${isUrgent ? 'text-red-400' : 'text-orange-400'}`} />
                <span className="font-bold text-white">Flash Sale ends in</span>
              </div>
              
              <div className="flex items-center space-x-1 text-2xl font-mono">
                <span className={`px-2 py-1 rounded ${isUrgent ? 'bg-red-500' : 'bg-orange-500'} text-white`}>
                  {String(minutes).padStart(2, '0')}
                </span>
                <span className="text-white">:</span>
                <span className={`px-2 py-1 rounded ${isUrgent ? 'bg-red-500' : 'bg-orange-500'} text-white`}>
                  {String(seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Live Activity Display */}
            {activities.length > 0 && (
              <div className="flex items-center justify-center py-2 mb-2 bg-black/20 rounded-lg border border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium text-white text-sm">{activities[0].user}</span>
                  <span className="text-gray-300 text-sm">{activities[0].action}</span>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center space-x-1 text-gray-400">
                    <MapPin className="w-3 h-3" />
                    <span className="text-sm">{activities[0].location}</span>
                    <span className="text-xs">({activities[0].time})</span>
                  </div>
                </div>
              </div>
            )}
            
            <p className={`text-sm ${isUrgent ? 'text-red-300' : 'text-orange-300'}`}>
              {isUrgent ? '⚠️ Final hours! Grab these deals before they expire!' : 'Thousands of deals ending soon - don\'t miss out!'}
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 sticky top-6">
                <h2 className="text-xl font-bold text-white mb-6">Categories</h2>
                
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      selectedCategory === 'all' 
                        ? 'bg-orange-500/20 border border-orange-500/30 text-orange-400' 
                        : 'hover:bg-slate-800/50 text-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">🔥 All Deals</span>
                      <span className="text-sm opacity-60">12,847</span>
                    </div>
                  </button>

                  {Object.entries(categories).map(([key, category]) => (
                    <div key={key}>
                      <button
                        onClick={() => {
                          setSelectedCategory(key);
                          toggleCategory(key);
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-all ${
                          selectedCategory === key 
                            ? 'bg-orange-500/20 border border-orange-500/30 text-orange-400' 
                            : 'hover:bg-slate-800/50 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span>{category.icon}</span>
                            <span className="font-medium text-sm">{category.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs opacity-60">{category.deals}</span>
                            <ChevronRight 
                              className={`w-3 h-3 transition-transform ${
                                expandedCategories[key] ? 'rotate-90' : ''
                              }`} 
                            />
                          </div>
                        </div>
                      </button>
                      
                      {expandedCategories[key] && (
                        <div className="ml-4 mt-2 space-y-1">
                          {category.subcategories.map((sub, index) => (
                            <button
                              key={index}
                              className="block w-full text-left p-2 text-xs text-gray-400 hover:text-orange-400 hover:bg-slate-800/30 rounded"
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Quick Filters */}
                <div className="mt-8">
                  <h3 className="font-bold text-white mb-4">Quick Filters</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-slate-800/30 rounded">
                      🔥 Ending in 1 hour
                    </button>
                    <button className="w-full text-left p-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-slate-800/30 rounded">
                      💎 90%+ Off deals
                    </button>
                    <button className="w-full text-left p-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-slate-800/30 rounded">
                      ⭐ Highest rated
                    </button>
                    <button className="w-full text-left p-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-slate-800/30 rounded">
                      📍 Near you
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Deals */}
            <div className="lg:col-span-3">
              {/* Category Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white">
                      {selectedCategory === 'all' ? 'All Categories' : categories[selectedCategory]?.name}
                    </h1>
                    <p className="text-gray-400">
                      {filteredDeals.length} deals available • Updated every minute
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
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
                    
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:border-orange-400 focus:outline-none"
                    >
                      <option value="ending-soon">Ending Soon</option>
                      <option value="highest-discount">Highest Discount</option>
                      <option value="newest">Newest First</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="most-viewed">Most Viewed</option>
                    </select>
                  </div>
                </div>

                {/* Active Filters */}
                {selectedCategory !== 'all' && (
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400">Active filters:</span>
                    <span className="bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-xs text-orange-400 flex items-center space-x-1">
                      <span>{categories[selectedCategory]?.name}</span>
                      <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:text-white">×</button>
                    </span>
                  </div>
                )}
              </div>

              {/* Deals Grid/List */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredDeals.map(deal => (
                  <div key={deal.id} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-orange-500/20 hover:border-orange-500/40 transition-all group cursor-pointer">
                    <div className="relative mb-4">
                      <img 
                        src={deal.image} 
                        alt={deal.title}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      
                      {/* Badges */}
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {Math.round((1 - deal.salePrice / deal.originalPrice) * 100)}% OFF
                      </div>
                      
                      <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{deal.viewers}</span>
                      </div>
                      
                      <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{formatTime(deal.timeLeft)}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                        {deal.title}
                      </h3>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-emerald-400">{deal.salePrice} MAD</span>
                        <span className="text-sm text-gray-400 line-through">{deal.originalPrice} MAD</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <span>by {deal.seller}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3" />
                          <span>{deal.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className={`w-3 h-3 ${i <= Math.floor(deal.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-400">({deal.rating})</span>
                        </div>
                        <span className="text-xs text-gray-400">{deal.sold} sold</span>
                      </div>
                      <a href='/purchase'>
                      <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all transform group-hover:scale-105">
                        Grab This Deal
                      </button></a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8">
                <button className="bg-slate-800/50 border border-orange-500/30 text-orange-400 px-8 py-3 rounded-xl font-bold hover:bg-orange-500/20 transition-all">
                  Load More Deals
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CategoriesPage;