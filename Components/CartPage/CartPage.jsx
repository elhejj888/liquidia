import React, { useState, useEffect } from 'react';
import { ArrowLeft, Shield, Timer, MapPin, Trash2, Plus, Minus, ShoppingBag, Star, CheckCircle, CreditCard, Truck, Gift } from 'lucide-react';

const CartPage = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes for cart
  const [activities, setActivities] = useState([
    { id: 1, user: "Saida M.", action: "just checked out", time: "5s ago", location: "Rabat" },
    { id: 2, user: "Hassan B.", action: "saved 1,200 MAD", time: "23s ago", location: "Fez" },
    { id: 3, user: "Amina K.", action: "completed order", time: "1m ago", location: "Casablanca" }
  ]);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Designer Leather Handbag - Premium Collection",
      originalPrice: 1200,
      salePrice: 299,
      quantity: 1,
      image: "lv1.png",
      seller: "Fashion Boutique Casa",
      inStock: 2
    },
    {
      id: 2,
      title: "Luxury Watch - Swiss Movement",
      originalPrice: 2500,
      salePrice: 649,
      quantity: 1,
      image: "lv2.png",
      seller: "TimeKeepers Marrakech",
      inStock: 1
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

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
        action: ["just checked out", "saved 950 MAD", "completed order", "grabbed deal"][Math.floor(Math.random() * 4)],
        time: "now",
        location: ["Casablanca", "Rabat", "Fez", "Tangier", "Marrakech"][Math.floor(Math.random() * 5)]
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 2)]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const updateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, Math.min(item.inStock, item.quantity + change)) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SAVE10') {
      setPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.salePrice * item.quantity), 0);
  const originalTotal = cartItems.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
  const promoDiscount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 500 ? 0 : 35;
  const total = subtotal - promoDiscount + shipping;
  const totalSavings = originalTotal - subtotal + promoDiscount;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = timeLeft < 180;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
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
              <span className="text-green-400 text-sm font-medium">Secure Cart</span>
            </div>
          </div>
        </header>

        {/* Empty Cart */}
        <div className="relative z-10 flex items-center justify-center min-h-[80vh] p-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-orange-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h1>
            <p className="text-gray-400 mb-8 max-w-md">
              Looks like you haven't added any amazing deals to your cart yet. 
              Browse our flash sales and grab some incredible savings!
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

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
          <div className="flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1">
            <ShoppingBag className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm font-medium">{cartItems.length} Items</span>
          </div>
          <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Secure Cart</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Cart Timer */}
          <div className={`bg-gradient-to-r p-4 rounded-xl border-2 transition-all mb-8 ${
            isUrgent 
              ? 'from-red-600/20 to-orange-600/20 border-red-500/50 animate-pulse' 
              : 'from-orange-500/20 to-red-500/20 border-orange-500/30'
          }`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Timer className={`w-5 h-5 ${isUrgent ? 'text-red-400' : 'text-orange-400'}`} />
                <span className="font-bold text-white">Items reserved in your cart</span>
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
              {isUrgent ? '⚠️ Hurry! Complete checkout before items return to sale!' : 'Complete your purchase to secure these deals'}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">Your Cart ({cartItems.length} items)</h2>
                
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div key={item.id} className="bg-slate-800/50 rounded-xl p-4 border border-orange-500/10">
                      <div className="flex items-start space-x-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-400 text-sm mb-2">by {item.seller}</p>
                          
                          <div className="flex items-center space-x-2 mb-3">
                            <span className="text-xl font-bold text-emerald-400">{item.salePrice} MAD</span>
                            <span className="text-sm text-gray-400 line-through">{item.originalPrice} MAD</span>
                            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                              {Math.round((1 - item.salePrice / item.originalPrice) * 100)}% OFF
                            </span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-2 bg-slate-700 rounded-lg">
                                <button 
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="p-2 hover:bg-slate-600 rounded-lg transition-colors"
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="w-4 h-4 text-orange-400" />
                                </button>
                                <span className="px-3 py-1 text-white font-bold">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="p-2 hover:bg-slate-600 rounded-lg transition-colors"
                                  disabled={item.quantity >= item.inStock}
                                >
                                  <Plus className="w-4 h-4 text-orange-400" />
                                </button>
                              </div>
                              <span className="text-sm text-gray-400">
                                {item.inStock} in stock
                              </span>
                            </div>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promo Code */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <h3 className="font-bold text-white mb-4">Have a Promo Code?</h3>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter promo code"
                    className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none"
                  />
                  <button 
                    onClick={applyPromoCode}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-bold transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <div className="mt-3 flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Promo code applied! 10% off</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 sticky top-6">
                <h3 className="text-xl font-bold text-white mb-6">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span>{subtotal} MAD</span>
                  </div>
                  
                  {promoApplied && (
                    <div className="flex justify-between text-green-400">
                      <span>Promo Discount</span>
                      <span>-{promoDiscount.toFixed(0)} MAD</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `${shipping} MAD`}</span>
                  </div>
                  
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-xl font-bold text-white mb-2">
                      <span>Total</span>
                      <span>{total.toFixed(0)} MAD</span>
                    </div>
                    <div className="text-sm text-emerald-400 font-bold">
                      You save {totalSavings.toFixed(0)} MAD ({Math.round((totalSavings / originalTotal) * 100)}%)
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <button 
                    onClick={() => setShowCheckoutModal(true)}
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-105"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                    <CreditCard className="w-4 h-4" />
                    <span>Secure payment with SSL encryption</span>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Truck className="w-4 h-4 text-green-400" />
                    <span>Free shipping on orders over 500 MAD</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Gift className="w-4 h-4 text-blue-400" />
                    <span>Gift wrapping available</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-300">
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>30-day return guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Ready to Checkout! 🚀</h2>
            <p className="text-white/80 mb-6">
              You're about to save {totalSavings.toFixed(0)} MAD on this amazing order!
            </p>
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition-all"
              >
                Continue Shopping
              </button>
              <button 
                onClick={() => setShowCheckoutModal(false)}
                className="flex-1 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition-all"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;