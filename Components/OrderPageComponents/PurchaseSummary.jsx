import React, { useState } from 'react';
import { CheckCircle, CreditCard, Truck, Shield, Lock, Heart } from 'lucide-react';


const PurchaseSummary = ({ product, onPurchase }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const handlePurchase = () => {
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      onPurchase();
    }, 3000);
  };

  const savings = product.originalPrice - product.salePrice;
  const savingsPercentage = Math.round((savings / product.originalPrice) * 100);

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20 sticky top-6">
      <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
      
      {/* Product Summary */}
      <div className="flex items-center space-x-4 mb-6 p-4 bg-slate-800/50 rounded-lg">
        <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-lg" />
        <div className="flex-1">
          <h4 className="font-bold text-white">{product.title}</h4>
          <p className="text-gray-400 text-sm">{product.seller}</p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Original Price</span>
          <span className="text-gray-400 line-through">{product.originalPrice} MAD</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Discount ({savingsPercentage}%)</span>
          <span className="text-green-400 font-bold">-{savings} MAD</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Delivery</span>
          <span className="text-green-400">FREE</span>
        </div>
        <div className="border-t border-gray-600 pt-3">
          <div className="flex justify-between text-xl font-bold">
            <span className="text-white">Total</span>
            <span className="text-emerald-400">{product.salePrice} MAD</span>
          </div>
          <p className="text-green-400 text-sm">You save {savings} MAD!</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <h4 className="font-medium text-white mb-3">Payment Method</h4>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 p-3 border border-gray-600 rounded-lg hover:border-orange-400 transition-all cursor-pointer">
            <input 
              type="radio" 
              name="payment" 
              value="card" 
              checked={paymentMethod === 'card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-orange-500"
            />
            <CreditCard className="w-5 h-5 text-gray-400" />
            <span className="text-white">Credit/Debit Card</span>
          </label>
          <label className="flex items-center space-x-3 p-3 border border-gray-600 rounded-lg hover:border-orange-400 transition-all cursor-pointer">
            <input 
              type="radio" 
              name="payment" 
              value="cash" 
              checked={paymentMethod === 'cash'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="text-orange-500"
            />
            <Truck className="w-5 h-5 text-gray-400" />
            <span className="text-white">Cash on Delivery</span>
          </label>
        </div>
      </div>

      {/* Security Badges */}
      <div className="flex items-center justify-center space-x-4 mb-6 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
        <Shield className="w-5 h-5 text-green-400" />
        <span className="text-green-400 text-sm font-medium">SSL Secured</span>
        <Lock className="w-5 h-5 text-green-400" />
        <span className="text-green-400 text-sm font-medium">Safe Payment</span>
      </div>

      {/* Purchase Button */}
      <button
        onClick={handlePurchase}
        disabled={isProcessing}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform ${
          isProcessing
            ? 'bg-gray-600 cursor-not-allowed'
            : 'bg-gradient-to-r from-emerald-500 to-orange-500 hover:from-emerald-600 hover:to-orange-600 hover:scale-105 active:scale-95'
        } text-white flex items-center justify-center space-x-2`}
      >
        {isProcessing ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <CheckCircle className="w-5 h-5" />
            <span>Secure This Deal Now</span>
          </>
        )}
      </button>

      {/* Trust Indicators */}
      <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
        <div className="flex items-center space-x-1">
          <Truck className="w-3 h-3" />
          <span>2-3 days delivery</span>
        </div>
        <div className="flex items-center space-x-1">
          <Heart className="w-3 h-3" />
          <span>30-day return</span>
        </div>
        <div className="flex items-center space-x-1">
          <Shield className="w-3 h-3" />
          <span>Buyer protection</span>
        </div>
      </div>
    </div>
  );
};
export default PurchaseSummary;