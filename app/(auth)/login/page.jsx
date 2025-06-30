'use client';
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Mail, Lock, User, Phone, MapPin, Eye, EyeOff, CheckCircle, Star, Gift, Zap, Crown, Heart, Globe, Facebook, Chrome, Apple } from 'lucide-react';

const AuthPagesApp = () => {
  const [activePage, setActivePage] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activities, setActivities] = useState([
    { id: 1, user: "Amira K.", action: "saved 1,200 MAD", time: "5s ago", location: "Casablanca" },
    { id: 2, user: "Hassan M.", action: "joined VIP", time: "12s ago", location: "Rabat" },
    { id: 3, user: "Nadia B.", action: "grabbed flash deal", time: "28s ago", location: "Marrakech" }
  ]);

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [registerForm, setRegisterForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    city: '',
    agreeTerms: false,
    receiveOffers: true
  });

  // Live activity feed effect
  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        user: ["Ahmed K.", "Fatima M.", "Sarah L.", "Omar T.", "Youssef R.", "Khadija A."][Math.floor(Math.random() * 6)],
        action: ["saved 850 MAD", "joined VIP", "grabbed flash deal", "found amazing deal", "became member"][Math.floor(Math.random() * 5)],
        time: "now",
        location: ["Casablanca", "Rabat", "Fez", "Tangier", "Marrakech", "Agadir"][Math.floor(Math.random() * 6)]
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 2)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', loginForm);
    // Handle login logic
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registration attempt:', registerForm);
    // Handle registration logic
  };

  const moroccanCities = [
    'Casablanca', 'Rabat', 'Fez', 'Marrakech', 'Tangier', 'Agadir', 'Meknes', 'Oujda', 
    'Kenitra', 'Tetouan', 'Safi', 'Mohammedia', 'Khouribga', 'Beni Mellal', 'El Jadida'
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Flash Deal Alerts",
      description: "Get notified of deals before they go live"
    },
    {
      icon: Crown,
      title: "VIP Early Access",
      description: "Shop exclusive deals 24 hours early"
    },
    {
      icon: Gift,
      title: "Welcome Bonus",
      description: "100 MAD credit for new members"
    },
    {
      icon: Heart,
      title: "Wishlist Tracking",
      description: "Save items and get price drop alerts"
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
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Secure Login</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Marketing Content - Fixed */}
            <div className="space-y-8 lg:sticky lg:top-6 lg:self-start">
              {/* Hero Section */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                  Join Morocco's #1 
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent"> Flash Sale</span> Platform
                </h1>
                <p className="text-xl text-gray-300 mb-6">
                  Get exclusive access to premium deals with savings up to 90% off retail prices.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-orange-500/20">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-500/20 rounded-full flex items-center justify-center">
                          <IconComponent className="w-5 h-5 text-orange-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-sm">{benefit.title}</h3>
                          <p className="text-gray-400 text-xs">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Activity Feed */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-bold text-orange-400 text-sm">Live Activity</span>
                </div>
                
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <div 
                      key={activity.id} 
                      className={`flex items-center justify-between text-sm transition-all duration-500 ${
                        index === 0 ? 'bg-orange-500/10 rounded-lg p-3' : 'p-2'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-white">{activity.user}</span>
                        <span className="text-gray-400">{activity.action}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <MapPin className="w-3 h-3" />
                        <span>{activity.location}</span>
                        <span>•</span>
                        <span>{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-gray-400 text-sm">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-gray-400 text-sm">4.8/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400 text-sm">500K+ Users</span>
                </div>
              </div>
            </div>

            {/* Right Side - Auth Forms - Scrollable */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-orange-500/20 lg:min-h-fit">
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-8 bg-slate-800/30 rounded-xl p-1">
                <button
                  onClick={() => setActivePage('login')}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all font-medium ${
                    activePage === 'login' 
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActivePage('register')}
                  className={`flex-1 py-3 px-4 rounded-lg transition-all font-medium ${
                    activePage === 'register' 
                      ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' 
                      : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Login Form */}
              {activePage === 'login' && (
                <div>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome Back!</h2>
                    <p className="text-gray-400">Sign in to access exclusive deals</p>
                  </div>

                  {/* Social Login */}
                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Facebook className="w-5 h-5" />
                      <span>Continue with Facebook</span>
                    </button>
                    <button className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Chrome className="w-5 h-5" />
                      <span>Continue with Google</span>
                    </button>
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-slate-900 text-gray-400">or continue with email</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={loginForm.email}
                          onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={loginForm.password}
                          onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-12 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Enter your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={loginForm.rememberMe}
                          onChange={(e) => setLoginForm({...loginForm, rememberMe: e.target.checked})}
                          className="w-4 h-4 text-orange-500 bg-slate-800 border-slate-600 rounded focus:ring-orange-400"
                        />
                        <span className="text-gray-400 text-sm">Remember me</span>
                      </label>
                      <button type="button" className="text-orange-400 hover:text-orange-300 text-sm transition-colors">
                        Forgot password?
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleLogin}
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
                    >
                      Sign In
                    </button>
                  </div>

                  <div className="text-center mt-6">
                    <span className="text-gray-400">Don't have an account? </span>
                    <button 
                      onClick={() => setActivePage('register')}
                      className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                    >
                      Sign up for free
                    </button>
                  </div>
                </div>
              )}

              {/* Registration Form */}
              {activePage === 'register' && (
                <div>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
                    <p className="text-gray-400">Join thousands of smart shoppers</p>
                  </div>

                  {/* Welcome Bonus */}
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Gift className="w-6 h-6 text-green-400" />
                      <div>
                        <div className="font-bold text-green-400">Welcome Bonus!</div>
                        <div className="text-green-300 text-sm">Get 100 MAD credit when you sign up</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Registration */}
                  <div className="space-y-3 mb-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Facebook className="w-5 h-5" />
                      <span>Sign up with Facebook</span>
                    </button>
                    <button className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                      <Chrome className="w-5 h-5" />
                      <span>Sign up with Google</span>
                    </button>
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-slate-900 text-gray-400">or create account with email</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">First Name</label>
                        <input
                          type="text"
                          required
                          value={registerForm.firstName}
                          onChange={(e) => setRegisterForm({...registerForm, firstName: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Ahmed"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                        <input
                          type="text"
                          required
                          value={registerForm.lastName}
                          onChange={(e) => setRegisterForm({...registerForm, lastName: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Benali"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          required
                          value={registerForm.email}
                          onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            required
                            value={registerForm.phone}
                            onChange={(e) => setRegisterForm({...registerForm, phone: e.target.value})}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                            placeholder="+212 6XX-XXXXXX"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">City</label>
                        <select
                          required
                          value={registerForm.city}
                          onChange={(e) => setRegisterForm({...registerForm, city: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                        >
                          <option value="">Select City</option>
                          {moroccanCities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={registerForm.password}
                          onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-12 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Create a strong password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          required
                          value={registerForm.confirmPassword}
                          onChange={(e) => setRegisterForm({...registerForm, confirmPassword: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-12 pr-12 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Confirm your password"
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          required
                          checked={registerForm.agreeTerms}
                          onChange={(e) => setRegisterForm({...registerForm, agreeTerms: e.target.checked})}
                          className="w-4 h-4 mt-1 text-orange-500 bg-slate-800 border-slate-600 rounded focus:ring-orange-400"
                        />
                        <span className="text-gray-400 text-sm">
                          I agree to the <button type="button" className="text-orange-400 hover:text-orange-300 transition-colors">Terms of Service</button> and <button type="button" className="text-orange-400 hover:text-orange-300 transition-colors">Privacy Policy</button>
                        </span>
                      </label>
                      
                      <label className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          checked={registerForm.receiveOffers}
                          onChange={(e) => setRegisterForm({...registerForm, receiveOffers: e.target.checked})}
                          className="w-4 h-4 mt-1 text-orange-500 bg-slate-800 border-slate-600 rounded focus:ring-orange-400"
                        />
                        <span className="text-gray-400 text-sm">
                          I want to receive exclusive deals and offers via email
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
                    >
                      Create Account
                    </button>
                  </div>

                  <div className="text-center mt-6">
                    <span className="text-gray-400">Already have an account? </span>
                    <button 
                      onClick={() => setActivePage('login')}
                      className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                    >
                      Sign in here
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthPagesApp;