import React, { useState, useEffect } from 'react';
import { Truck, Shield, Lock, CreditCard, CheckCircle, Gift, ShoppingBag, Plus, Minus } from 'lucide-react';

const SmartCheckoutForm = ({ product, onPurchase }) => {
  const [currentStep, setCurrentStep] = useState(0); // Start at 0 for quantity selection
  const [isProcessing, setIsProcessing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Casablanca',
    // Payment
    paymentMethod: 'cod',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [errors, setErrors] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);

  const moroccanCities = [
    'Casablanca', 'Rabat', 'Fez', 'Marrakech', 'Agadir', 'Tangier', 
    'Meknes', 'Oujda', 'Kenitra', 'Tetouan', 'Safi', 'El Jadida'
  ];

  // Bulk discount logic
  const getBulkDiscount = (qty) => {
    if (qty >= 10) return 15; // 15% additional discount for 10+
    if (qty >= 5) return 10;  // 10% additional discount for 5+
    if (qty >= 3) return 5;   // 5% additional discount for 3+
    return 0;
  };

  const bulkDiscount = getBulkDiscount(quantity);
  const basePrice = product.salePrice * quantity;
  const bulkDiscountAmount = (basePrice * bulkDiscount) / 100;
  const finalPrice = basePrice - bulkDiscountAmount;
  const totalSavings = (product.originalPrice * quantity) - finalPrice;

  // Auto-save to localStorage
  useEffect(() => {
    const saved = localStorage.getItem('liquidia_checkout');
    if (saved) {
      const data = JSON.parse(saved);
      setFormData(data.formData || formData);
      setQuantity(data.quantity || 1);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('liquidia_checkout', JSON.stringify({ formData, quantity }));
  }, [formData, quantity]);

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Required';
      if (!formData.phone.trim()) newErrors.phone = 'Required';
      else if (!/^[0-9+\s-()]+$/.test(formData.phone)) newErrors.phone = 'Invalid phone';
      if (!formData.email.trim()) newErrors.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
      if (!formData.address.trim()) newErrors.address = 'Required';
    }
    
    if (step === 2 && formData.paymentMethod === 'card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Required';
      if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Required';
      if (!formData.cvv.trim()) newErrors.cvv = 'Required';
      if (!formData.cardName.trim()) newErrors.cardName = 'Required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (currentStep === 0 || validateStep(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      setIsProcessing(true);
      setTimeout(() => {
        localStorage.removeItem('liquidia_checkout');
        onPurchase();
      }, 3000);
    }
  };

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const updateQuantity = (newQty) => {
    if (newQty >= 1 && newQty <= product.stock) {
      setQuantity(newQty);
    }
  };

  const stepTitles = ['Select Quantity', 'Shipping', 'Payment', 'Review'];

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-orange-500/20 sticky top-6">
      {/* Header with current step and total */}
      <div className="p-4 border-b border-gray-700 bg-gradient-to-r from-orange-500/10 to-red-500/10">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-white">{stepTitles[currentStep]}</h3>
          <div className="text-right">
            <div className="text-sm text-gray-400">Total ({quantity} items)</div>
            <div className="text-2xl font-bold text-emerald-400">{finalPrice.toFixed(0)} MAD</div>
            {totalSavings > 0 && (
              <div className="text-green-400 text-xs">Save {totalSavings.toFixed(0)} MAD</div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center space-x-2">
          {[0, 1, 2, 3].map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                completedSteps.includes(step) ? 'bg-green-500 text-white' :
                currentStep === step ? 'bg-orange-500 text-white' :
                'bg-gray-600 text-gray-400'
              }`}>
                {completedSteps.includes(step) ? '✓' : step + 1}
              </div>
              {step < 3 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all ${
                  completedSteps.includes(step) ? 'bg-green-500' : 'bg-gray-600'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="p-6">
        {/* Step 0: Quantity Selection */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">How many do you want?</h4>
              <p className="text-gray-400">Choose your quantity to unlock bulk discounts</p>
            </div>

            {/* Stock indicator */}
            <div className="bg-slate-800/50 rounded-lg p-4 text-center">
              <div className="text-orange-400 font-bold text-lg">{product.stock} items available</div>
              <div className="text-gray-400 text-sm">Limited stock - act fast!</div>
            </div>

            {/* Large Quantity Selector */}
            <div className="flex justify-center">
              <div className="flex items-center bg-slate-800/50 rounded-2xl border-2 border-orange-500/30 p-2">
                <button
                  onClick={() => updateQuantity(quantity - 1)}
                  disabled={quantity <= 1}
                  className="p-4 text-orange-400 hover:bg-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl"
                >
                  <Minus className="w-6 h-6" />
                </button>
                
                <div className="px-8 py-4 bg-orange-500/20 mx-2 rounded-xl min-w-[120px] text-center">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
                    min="1"
                    max={product.stock}
                    className="w-full text-center bg-transparent text-white font-bold text-3xl focus:outline-none"
                  />
                  <div className="text-gray-400 text-xs mt-1">Quantity</div>
                </div>
                
                <button
                  onClick={() => updateQuantity(quantity + 1)}
                  disabled={quantity >= product.stock}
                  className="p-4 text-orange-400 hover:bg-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all rounded-xl"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Quick select buttons */}
            <div className="flex justify-center space-x-3">
              {[1, 3, 5, 10].filter(q => q <= product.stock).map(quickQty => (
                <button
                  key={quickQty}
                  onClick={() => updateQuantity(quickQty)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold transition-all ${
                    quantity === quickQty
                      ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                      : 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/40 border border-orange-500/30'
                  }`}
                >
                  {quickQty}
                </button>
              ))}
            </div>

            {/* Bulk Discount Incentives */}
            <div className="space-y-3">
              {quantity < 10 && (
                <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-4 text-center">
                  <div className="text-amber-400 font-medium">
                    💡 {quantity < 3 && 'Buy 3+ items and save 5% more!'}
                    {quantity >= 3 && quantity < 5 && 'Buy 5+ items and save 10% more!'}
                    {quantity >= 5 && quantity < 10 && 'Buy 10+ items and save 15% more!'}
                  </div>
                </div>
              )}

              {bulkDiscount > 0 && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <Gift className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-bold text-lg">
                      {bulkDiscount}% Bulk Discount Applied!
                    </span>
                  </div>
                  <p className="text-green-300 text-sm">
                    You save an extra {bulkDiscountAmount.toFixed(0)} MAD with {quantity} items
                  </p>
                </div>
              )}
            </div>

            {/* Price breakdown */}
            <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Unit price × {quantity}</span>
                <span className="text-white">{basePrice} MAD</span>
              </div>
              
              {bulkDiscount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">Bulk discount ({bulkDiscount}%)</span>
                  <span className="text-green-400">-{bulkDiscountAmount.toFixed(0)} MAD</span>
                </div>
              )}
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Delivery</span>
                <span className="text-green-400">FREE</span>
              </div>
              
              <div className="border-t border-gray-600 pt-2">
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-emerald-400">{finalPrice.toFixed(0)} MAD</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 1: Shipping Information */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <Truck className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Where should we deliver?</h4>
              <p className="text-gray-400">We'll deliver {quantity} items to your address</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  placeholder="First Name *"
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                    errors.firstName ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-orange-400'
                  }`}
                />
                {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name *"
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                    errors.lastName ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-orange-400'
                  }`}
                />
                {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                  errors.phone ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-orange-400'
                }`}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                  errors.email ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-orange-400'
                }`}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Full Address *"
                value={formData.address}
                onChange={(e) => updateField('address', e.target.value)}
                className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                  errors.address ? 'border-red-500 focus:border-red-400' : 'border-gray-600 focus:border-orange-400'
                }`}
              />
              {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
            </div>

            <div>
              <select
                value={formData.city}
                onChange={(e) => updateField('city', e.target.value)}
                className="w-full p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-orange-400 transition-all"
              >
                {moroccanCities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-green-400 mb-2">
                <Truck className="w-5 h-5" />
                <span className="font-medium">FREE Delivery to {formData.city}</span>
              </div>
              <p className="text-green-300 text-sm">
                Estimated delivery: {quantity > 5 ? '3-4' : '2-3'} business days
                {quantity > 5 && <span className="text-amber-300"><br/>(Large orders need extra preparation time)</span>}
              </p>
            </div>
          </div>
        )}

        {/* Step 2: Payment Method */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <CreditCard className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">How would you like to pay?</h4>
              <p className="text-gray-400">Choose your preferred payment method</p>
            </div>

            <div className="space-y-3">
              <label className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-orange-400 transition-all cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="cod" 
                  checked={formData.paymentMethod === 'cod'}
                  onChange={(e) => updateField('paymentMethod', e.target.value)}
                  className="text-orange-500"
                />
                <Truck className="w-6 h-6 text-orange-400" />
                <div className="flex-1">
                  <span className="text-white font-medium text-lg">Cash on Delivery</span>
                  <p className="text-gray-400 text-sm">Pay {finalPrice.toFixed(0)} MAD when you receive your order</p>
                </div>
                <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
                  RECOMMENDED
                </div>
              </label>

              <label className="flex items-center space-x-3 p-4 border border-gray-600 rounded-lg hover:border-orange-400 transition-all cursor-pointer">
                <input 
                  type="radio" 
                  name="payment" 
                  value="card" 
                  checked={formData.paymentMethod === 'card'}
                  onChange={(e) => updateField('paymentMethod', e.target.value)}
                  className="text-orange-500"
                />
                <CreditCard className="w-6 h-6 text-orange-400" />
                <div className="flex-1">
                  <span className="text-white font-medium text-lg">Credit/Debit Card</span>
                  <p className="text-gray-400 text-sm">Visa, Mastercard, CMI - Pay now securely</p>
                </div>
                <div className="flex space-x-1">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">V</div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">M</div>
                </div>
              </label>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className="space-y-4 mt-6 p-4 bg-slate-800/50 rounded-lg border border-orange-500/20">
                <h5 className="font-medium text-white mb-3">Card Details</h5>
                
                <div>
                  <input
                    type="text"
                    placeholder="Card Number *"
                    value={formData.cardNumber}
                    onChange={(e) => updateField('cardNumber', e.target.value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 '))}
                    maxLength="19"
                    className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                      errors.cardNumber ? 'border-red-500' : 'border-gray-600 focus:border-orange-400'
                    }`}
                  />
                  {errors.cardNumber && <p className="text-red-400 text-xs mt-1">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="MM/YY *"
                      value={formData.expiryDate}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, '');
                        if (value.length >= 2) {
                          value = value.substring(0, 2) + '/' + value.substring(2, 4);
                        }
                        updateField('expiryDate', value);
                      }}
                      maxLength="5"
                      className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                        errors.expiryDate ? 'border-red-500' : 'border-gray-600 focus:border-orange-400'
                      }`}
                    />
                    {errors.expiryDate && <p className="text-red-400 text-xs mt-1">{errors.expiryDate}</p>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="CVV *"
                      value={formData.cvv}
                      onChange={(e) => updateField('cvv', e.target.value.replace(/\D/g, ''))}
                      maxLength="4"
                      className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                        errors.cvv ? 'border-red-500' : 'border-gray-600 focus:border-orange-400'
                      }`}
                    />
                    {errors.cvv && <p className="text-red-400 text-xs mt-1">{errors.cvv}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Cardholder Name *"
                    value={formData.cardName}
                    onChange={(e) => updateField('cardName', e.target.value)}
                    className={`w-full p-3 bg-slate-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-all ${
                      errors.cardName ? 'border-red-500' : 'border-gray-600 focus:border-orange-400'
                    }`}
                  />
                  {errors.cardName && <p className="text-red-400 text-xs mt-1">{errors.cardName}</p>}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Order Review */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Almost done!</h4>
              <p className="text-gray-400">Review your order before confirming</p>
            </div>

            {/* Product Summary */}
            <div className="flex items-center space-x-4 p-4 bg-slate-800/50 rounded-lg">
              <img src={product.image} alt={product.title} className="w-16 h-16 object-cover rounded-lg" />
              <div className="flex-1">
                <h4 className="font-bold text-white">{product.title}</h4>
                <p className="text-gray-400 text-sm">{product.seller}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-orange-400 font-bold">Quantity: {quantity}</span>
                  {bulkDiscount > 0 && (
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold">
                      {bulkDiscount}% bulk discount
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h4 className="font-medium text-white mb-2">Delivering to:</h4>
              <p className="text-gray-300">{formData.firstName} {formData.lastName}</p>
              <p className="text-gray-300">{formData.address}</p>
              <p className="text-gray-300">{formData.city}</p>
              <p className="text-gray-300">{formData.phone}</p>
            </div>

            {/* Payment Method */}
            <div className="p-4 bg-slate-800/50 rounded-lg">
              <h4 className="font-medium text-white mb-2">Payment:</h4>
              <p className="text-gray-300">
                {formData.paymentMethod === 'cod' ? 'Cash on Delivery' : `Card ending in ${formData.cardNumber.slice(-4)}`}
              </p>
            </div>

            {/* Final Price Summary */}
            <div className="space-y-2 p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
              <div className="flex justify-between">
                <span className="text-gray-300">Product Price ({quantity}x)</span>
                <span className="text-gray-300">{basePrice} MAD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Original Discount</span>
                <span className="text-green-400">-{(product.originalPrice - product.salePrice) * quantity} MAD</span>
              </div>
              {bulkDiscount > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-300">Bulk Discount ({bulkDiscount}%)</span>
                  <span className="text-green-400">-{bulkDiscountAmount.toFixed(0)} MAD</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-gray-300">Delivery</span>
                <span className="text-green-400">FREE</span>
              </div>
              <div className="border-t border-gray-600 pt-2">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-emerald-400">{finalPrice.toFixed(0)} MAD</span>
                </div>
                <div className="text-right">
                  <span className="text-green-400 text-sm font-medium">
                    Total savings: {totalSavings.toFixed(0)} MAD!
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex space-x-3 mt-8">
          {currentStep > 0 && (
            <button
              onClick={prevStep}
              className="flex-1 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-orange-400 hover:text-orange-400 transition-all"
            >
              Back
            </button>
          )}
          
          {currentStep < 3 ? (
            <button
              onClick={nextStep}
              className="flex-1 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:from-orange-600 hover:to-red-700 transition-all font-medium text-lg"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isProcessing}
              className={`flex-1 py-4 rounded-lg font-bold transition-all flex items-center justify-center space-x-2 text-lg ${
                isProcessing
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-500 to-orange-500 hover:from-emerald-600 hover:to-orange-600 hover:scale-105'
              } text-white`}
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing {quantity} items...</span>
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  <span>Secure Order • {finalPrice.toFixed(0)} MAD</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">SSL Secured</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Safe Payment</span>
          </div>
          <div className="flex items-center space-x-2">
            <Truck className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Free Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default SmartCheckoutForm;