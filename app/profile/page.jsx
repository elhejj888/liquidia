'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, User, MapPin, Calendar, Star, TrendingUp, ShoppingBag, Gift, Award, Eye, Clock, Edit, Settings, Bell, Heart, Zap, Target, Crown, Flame } from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showEditModal, setShowEditModal] = useState(false);

  // Mock user data
  const user = {
    name: "Ahmed Benali",
    email: "ahmed.b***@gmail.com",
    joinDate: "March 2023",
    location: "Casablanca, Morocco",
    avatar: "AB",
    membershipLevel: "Gold Hunter",
    verifiedBuyer: true,
    totalOrders: 47,
    totalSaved: 23450,
    averageRating: 4.8,
    dealPreferences: ["Fashion", "Electronics", "Home"],
    lastActive: "2 hours ago"
  };

  // Statistics data
  const stats = {
    totalPurchases: 47,
    totalSavings: 23450,
    averageDiscount: 68,
    favoriteCategory: "Fashion & Apparel",
    bestDeal: 1850,
    currentStreak: 12,
    wishlistItems: 23,
    reviewsWritten: 18
  };

  // Recent activity
  const recentActivity = [
    {
      id: 1,
      type: "purchase",
      item: "Designer Leather Handbag",
      amount: 299,
      saved: 901,
      date: "2 days ago",
      status: "delivered"
    },
    {
      id: 2,
      type: "review",
      item: "Swiss Movement Watch",
      rating: 5,
      date: "1 week ago",
      status: "published"
    },
    {
      id: 3,
      type: "saved",
      item: "Scandinavian Dining Set",
      saved: 3201,
      date: "1 week ago",
      status: "watching"
    },
    {
      id: 4,
      type: "purchase",
      item: "Professional Camera Kit",
      amount: 3499,
      saved: 5001,
      date: "2 weeks ago",
      status: "delivered"
    }
  ];

  // Achievement badges
  const achievements = [
    {
      id: 1,
      name: "Deal Hunter",
      description: "Found 50+ amazing deals",
      icon: "🎯",
      earned: true,
      progress: 47,
      target: 50
    },
    {
      id: 2,
      name: "Super Saver",
      description: "Saved over 20,000 MAD",
      icon: "💰",
      earned: true,
      progress: 23450,
      target: 20000
    },
    {
      id: 3,
      name: "Review Master",
      description: "Write 25 helpful reviews",
      icon: "⭐",
      earned: false,
      progress: 18,
      target: 25
    },
    {
      id: 4,
      name: "Early Bird",
      description: "First to buy 10 flash deals",
      icon: "🐦",
      earned: true,
      progress: 12,
      target: 10
    },
    {
      id: 5,
      name: "Streak Master",
      description: "Shop for 30 consecutive days",
      icon: "🔥",
      earned: false,
      progress: 12,
      target: 30
    },
    {
      id: 6,
      name: "Category Explorer",
      description: "Purchase from 8 different categories",
      icon: "🗺️",
      earned: false,
      progress: 6,
      target: 8
    }
  ];

  // Favorite sellers
  const favoriteSellers = [
    {
      name: "Fashion Boutique Casa",
      purchases: 8,
      rating: 4.9,
      savings: 4500
    },
    {
      name: "TechHub Morocco",
      purchases: 6,
      rating: 4.8,
      savings: 6200
    },
    {
      name: "Nordic Home Design",
      purchases: 4,
      rating: 4.7,
      savings: 2100
    }
  ];

  // Shopping patterns
  const shoppingPatterns = {
    peakHours: "18:00 - 21:00",
    favoriteDay: "Saturday",
    averageOrderValue: 498,
    dealSuccessRate: 87,
    categoryDistribution: [
      { category: "Fashion", percentage: 35 },
      { category: "Electronics", percentage: 28 },
      { category: "Home", percentage: 20 },
      { category: "Beauty", percentage: 10 },
      { category: "Others", percentage: 7 }
    ]
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
            <Bell className="w-5 h-5 text-orange-400" />
          </button>
          <button 
            onClick={() => setShowEditModal(true)}
            className="flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 hover:bg-orange-500/30 transition-all"
          >
            <Edit className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">Edit Profile</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Profile Header */}
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 mb-8">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center text-3xl font-bold">
                    {user.avatar}
                  </div>
                  {user.verifiedBuyer && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Shield className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold text-white">{user.name}</h1>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                      <Crown className="w-3 h-3" />
                      <span>{user.membershipLevel}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{user.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Member since {user.joinDate}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-bold">{user.averageRating}</span>
                      <span className="text-gray-400 text-sm">buyer rating</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Zap className="w-4 h-4 text-orange-400" />
                      <span className="text-white font-bold">{stats.currentStreak}</span>
                      <span className="text-gray-400 text-sm">day streak</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Last active</div>
                <div className="text-white font-medium">{user.lastActive}</div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.totalPurchases}</div>
                  <div className="text-gray-400 text-sm">Total Orders</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.totalSavings.toLocaleString()} MAD</div>
                  <div className="text-gray-400 text-sm">Total Saved</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.averageDiscount}%</div>
                  <div className="text-gray-400 text-sm">Avg. Discount</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.bestDeal.toLocaleString()} MAD</div>
                  <div className="text-gray-400 text-sm">Best Single Deal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 mb-8 bg-slate-800/30 rounded-xl p-1">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'activity', label: 'Activity', icon: Clock },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
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
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Deal Preferences */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Deal Preferences</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.dealPreferences.map((pref, index) => (
                      <span key={index} className="bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-orange-400 text-sm">
                        {pref}
                      </span>
                    ))}
                    <button className="bg-slate-700/50 border border-slate-600 rounded-full px-3 py-1 text-gray-400 text-sm hover:text-white transition-colors">
                      + Add Category
                    </button>
                  </div>
                </div>

                {/* Favorite Sellers */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Favorite Sellers</h3>
                  <div className="space-y-4">
                    {favoriteSellers.map((seller, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                        <div>
                          <div className="font-bold text-white">{seller.name}</div>
                          <div className="text-gray-400 text-sm">{seller.purchases} purchases • {seller.savings.toLocaleString()} MAD saved</div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white font-bold">{seller.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-orange-500/20 border border-orange-500/30 text-orange-400 py-3 rounded-lg hover:bg-orange-500/30 transition-all flex items-center justify-center space-x-2">
                      <Heart className="w-4 h-4" />
                      <span>View Wishlist ({stats.wishlistItems})</span>
                    </button>
                    <button className="w-full bg-slate-700/50 border border-slate-600 text-gray-400 py-3 rounded-lg hover:text-white hover:bg-slate-600/50 transition-all flex items-center justify-center space-x-2">
                      <Bell className="w-4 h-4" />
                      <span>Deal Alerts</span>
                    </button>
                    <button className="w-full bg-slate-700/50 border border-slate-600 text-gray-400 py-3 rounded-lg hover:text-white hover:bg-slate-600/50 transition-all flex items-center justify-center space-x-2">
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </button>
                  </div>
                </div>

                {/* Shopping Insights */}
                <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                  <h3 className="text-xl font-bold text-white mb-4">Shopping Insights</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Peak Hours</span>
                      <span className="text-white">{shoppingPatterns.peakHours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Favorite Day</span>
                      <span className="text-white">{shoppingPatterns.favoriteDay}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Avg. Order</span>
                      <span className="text-white">{shoppingPatterns.averageOrderValue} MAD</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Success Rate</span>
                      <span className="text-green-400">{shoppingPatterns.dealSuccessRate}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
              <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        activity.type === 'purchase' ? 'bg-green-500/20' :
                        activity.type === 'review' ? 'bg-blue-500/20' : 'bg-orange-500/20'
                      }`}>
                        {activity.type === 'purchase' && <ShoppingBag className="w-5 h-5 text-green-400" />}
                        {activity.type === 'review' && <Star className="w-5 h-5 text-blue-400" />}
                        {activity.type === 'saved' && <Heart className="w-5 h-5 text-orange-400" />}
                      </div>
                      <div>
                        <div className="font-bold text-white">{activity.item}</div>
                        <div className="text-gray-400 text-sm">
                          {activity.type === 'purchase' && `Purchased for ${activity.amount} MAD • Saved ${activity.saved} MAD`}
                          {activity.type === 'review' && `Rated ${activity.rating} stars`}
                          {activity.type === 'saved' && `Could save ${activity.saved} MAD`}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-sm">{activity.date}</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        activity.status === 'delivered' ? 'bg-green-500/20 text-green-400' :
                        activity.status === 'published' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {activity.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map(achievement => (
                <div key={achievement.id} className={`bg-white/5 backdrop-blur-lg rounded-xl p-6 border transition-all ${
                  achievement.earned 
                    ? 'border-orange-500/40 bg-orange-500/5' 
                    : 'border-orange-500/20'
                }`}>
                  <div className="flex items-start space-x-4">
                    <div className={`text-3xl ${achievement.earned ? 'grayscale-0' : 'grayscale'}`}>
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-bold text-white">{achievement.name}</h4>
                        {achievement.earned && <Award className="w-4 h-4 text-orange-400" />}
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-400">Progress</span>
                          <span className="text-white">{achievement.progress}/{achievement.target}</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all ${
                              achievement.earned ? 'bg-orange-500' : 'bg-orange-500/60'
                            }`}
                            style={{ width: `${Math.min((achievement.progress / achievement.target) * 100, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Category Distribution</h3>
                <div className="space-y-4">
                  {shoppingPatterns.categoryDistribution.map((cat, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">{cat.category}</span>
                        <span className="text-white">{cat.percentage}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-orange-400 to-red-600 h-2 rounded-full"
                          style={{ width: `${cat.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-white mb-6">Savings Breakdown</h3>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                    <div className="text-3xl font-bold text-green-400">{stats.totalSavings.toLocaleString()} MAD</div>
                    <div className="text-green-300">Total Money Saved</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-xl font-bold text-white">{stats.averageDiscount}%</div>
                      <div className="text-gray-400 text-sm">Avg. Discount</div>
                    </div>
                    <div className="text-center p-3 bg-slate-800/30 rounded-lg">
                      <div className="text-xl font-bold text-white">{stats.bestDeal.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm">Best Deal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-orange-500/20 rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Edit Profile</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Display Name</label>
                <input
                  type="text"
                  defaultValue={user.name}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-orange-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Location</label>
                <input
                  type="text"
                  defaultValue={user.location}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-orange-400 focus:outline-none"
                />
              </div>
              <div className="flex space-x-3 pt-4">
                <button 
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={() => setShowEditModal(false)}
                  className="flex-1 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;