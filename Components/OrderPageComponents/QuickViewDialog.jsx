import React, { useState } from 'react';
import { X, Eye, Clock, ShoppingBag, Heart, Share2, MessageCircle,
  Star, Minus, Plus, MapPin, Shield, Truck, Award } from 'lucide-react';
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
export default QuickViewDialog;