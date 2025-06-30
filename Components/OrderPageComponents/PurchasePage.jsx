import React, { useState } from 'react';
import PurchaseHeader from './PurchaseHeader';
import UrgencyTimer from './UrgencyTimer';
import SocialProofSection from './SocialProofSection';
import PurchaseSummary from './PurchaseSummary';
import LiveActivityFeed from './LiveActivityFeed';
import SmartCheckoutForm from './SmartCheckoutForm';

import { Eye, MapPin, CheckCircle, Star } from 'lucide-react';



const PurchasePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Mock product data
  const product = {
    id: 1,
    title: "Designer Leather Handbag - Premium Collection",
    originalPrice: 1200,
    salePrice: 299,
    discount: 75,
    seller: "Fashion Boutique Casa",
    location: "Casablanca",
    images: ["lv1.png", "lv2.png", "lv3.png"],
    viewers: 89,
    stock: 2,
    features: [
      "Genuine Italian leather",
      "Premium gold hardware",
      "Multiple compartments",
      "Dust bag included",
      "1-year warranty"
    ]
  };

  const handlePurchase = () => {
    setShowSuccessModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <PurchaseHeader onBack={() => window.history.back()} />

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Urgency Timer */}
          <div className="mb-8">
            <UrgencyTimer />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Product Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Product Images */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <div className="relative">
                  <img 
                    src={product.images[currentImageIndex]} 
                    alt={product.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  
                  {/* Hot Deal Badge */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    🔥 HOT DEAL
                  </div>
                  
                  {/* Stock Warning */}
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Only {product.stock} left!
                  </div>
                  
                  {/* Viewers Count */}
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{product.viewers} watching</span>
                  </div>
                </div>

                {/* Image Thumbnails */}
                <div className="flex space-x-2 mt-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex ? 'border-orange-400' : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-white mb-2">{product.title}</h1>
                    <div className="flex items-center space-x-4 text-gray-400">
                      <span>by {product.seller}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{product.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-emerald-400">{product.salePrice} MAD</span>
                      <span className="text-xl text-gray-400 line-through">{product.originalPrice} MAD</span>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full font-bold">
                      Save {product.discount}%
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-bold text-white mb-3">What you get:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seller Info */}
                <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                      <span className="text-orange-400 font-bold">FB</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{product.seller}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          {[1,2,3,4,5].map(i => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">(4.8) • 1,247 sales</span>
                      </div>
                    </div>
                  </div>
                  <a href='/store' className="px-4 py-2 border border-orange-400 text-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition-all">
                    View Store
                  </a>
                </div>
              </div>

              {/* Social Proof */}
              <SocialProofSection product={product} />
            </div>

            {/* Right Column - Purchase Summary & Live Activity */}
            <div className="space-y-6">
              <SmartCheckoutForm product={product} onPurchase={handlePurchase} />
            </div>
          </div>
        </div>
      </main>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-emerald-500 to-blue-600 text-white rounded-2xl p-8 max-w-md w-full text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Deal Secured! 🎉</h2>
            <p className="text-white/80 mb-6">
              Congratulations! You've saved {product.originalPrice - product.salePrice} MAD on this amazing deal.
            </p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3 bg-white/20 hover:bg-white/30 rounded-xl font-bold transition-all"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchasePage;