import React from 'react';
import { ArrowLeft, Shield } from 'lucide-react';

const PurchaseHeader = ({ onBack }) => {
  return (
    <header className="relative z-10 p-6 flex justify-between items-center border-b border-orange-500/20 bg-slate-900/50 backdrop-blur-lg">
      <div className="flex items-center space-x-4">
        <button 
          onClick={onBack}
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
          <span className="text-green-400 text-sm font-medium">Secure Checkout</span>
        </div>
      </div>
    </header>
  );
};
export default PurchaseHeader;