'use client';
import React, { useState, useRef } from 'react';
import { ArrowLeft, Shield, Upload, Camera, X, Plus, Minus, Eye, MapPin, Calendar, Clock, Star, CheckCircle, AlertTriangle, Info, DollarSign, Package, Truck, Award, Zap, Heart, Globe } from 'lucide-react';

const ProductListingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 1: Informations de base
    title: '',
    category: '',
    subcategory: '',
    brand: '',
    condition: '',
    description: '',
    
    // Étape 2: Images
    images: [],
    
    // Étape 3: Prix et inventaire
    originalPrice: '',
    salePrice: '',
    quantity: 1,
    minQuantity: 1,
    
    // Étape 4: Expédition et localisation
    location: '',
    shippingType: 'seller',
    shippingCost: '',
    freeShippingThreshold: '',
    returnPolicy: '30',
    
    // Étape 5: Timing et promotion
    listingDuration: '7',
    startTime: 'immediate',
    scheduledDate: '',
    featuredListing: false,
    urgencyBadge: false,
    
    // Étape 6: Garanties et authentification
    authenticity: false,
    warranty: '',
    serialNumber: '',
    purchaseReceipt: false
  });

  const [dragActive, setDragActive] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const fileInputRef = useRef(null);

  const steps = [
    { id: 1, title: 'Informations Produit', icon: Package, completed: false },
    { id: 2, title: 'Photos', icon: Camera, completed: false },
    { id: 3, title: 'Prix & Stock', icon: DollarSign, completed: false },
    { id: 4, title: 'Expédition', icon: Truck, completed: false },
    { id: 5, title: 'Publication', icon: Zap, completed: false },
    { id: 6, title: 'Vérification', icon: Award, completed: false }
  ];

  const categories = {
    'Mode & Vêtements': ['Femmes', 'Hommes', 'Enfants', 'Chaussures', 'Accessoires', 'Bijoux'],
    'Électronique': ['Smartphones', 'Ordinateurs', 'Audio', 'Photo/Vidéo', 'Gaming', 'Accessoires'],
    'Maison & Jardin': ['Meubles', 'Décoration', 'Cuisine', 'Jardin', 'Bricolage', 'Électroménager'],
    'Beauté & Santé': ['Cosmétiques', 'Parfums', 'Soins', 'Fitness', 'Bien-être'],
    'Sport & Loisirs': ['Vêtements Sport', 'Équipements', 'Outdoor', 'Fitness'],
    'Auto & Moto': ['Pièces Auto', 'Accessoires', 'Moto', 'Vélo']
  };

  const conditions = [
    { value: 'new', label: 'Neuf avec étiquettes', description: 'Jamais porté/utilisé, étiquettes d\'origine' },
    { value: 'like-new', label: 'Comme neuf', description: 'Excellent état, utilisé très peu' },
    { value: 'excellent', label: 'Excellent état', description: 'Très bon état, signes d\'usage minimes' },
    { value: 'good', label: 'Bon état', description: 'État correct, quelques signes d\'usage' },
    { value: 'fair', label: 'État moyen', description: 'Défauts visibles mais fonctionnel' }
  ];

  const moroccanCities = [
    'Casablanca', 'Rabat', 'Fès', 'Marrakech', 'Tanger', 'Agadir', 
    'Meknès', 'Oujda', 'Kénitra', 'Tétouan', 'Safi', 'Mohammedia'
  ];

  // Gestion des images
  const handleImageUpload = (files) => {
    const fileArray = Array.from(files);
    fileArray.forEach(file => {
      if (file.type.startsWith('image/') && formData.images.length < 8) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFormData(prev => ({
            ...prev,
            images: [...prev.images, {
              id: Date.now() + Math.random(),
              url: e.target.result,
              file: file,
              isPrimary: prev.images.length === 0
            }]
          }));
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (imageId) => {
    setFormData(prev => {
      const newImages = prev.images.filter(img => img.id !== imageId);
      // Si l'image principale est supprimée, désigner la première comme principale
      if (newImages.length > 0 && !newImages.some(img => img.isPrimary)) {
        newImages[0].isPrimary = true;
      }
      return { ...prev, images: newImages };
    });
  };

  const setPrimaryImage = (imageId) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.map(img => ({
        ...img,
        isPrimary: img.id === imageId
      }))
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files) {
      handleImageUpload(e.dataTransfer.files);
    }
  };

  // Calculs automatiques
  const discountPercentage = formData.originalPrice && formData.salePrice 
    ? Math.round((1 - formData.salePrice / formData.originalPrice) * 100)
    : 0;

  const estimatedCommission = formData.salePrice * 0.15; // 15% commission
  const estimatedEarnings = formData.salePrice - estimatedCommission;

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Formulaire soumis:', formData);
    // Logique de soumission
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
          <button 
            onClick={() => setPreviewMode(!previewMode)}
            className="flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-lg px-4 py-2 hover:bg-blue-500/30 transition-all"
          >
            <Eye className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400">Prévisualiser</span>
          </button>
          <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Vente Sécurisée</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isActive = currentStep === step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      isActive 
                        ? 'bg-orange-500/20 border border-orange-500/30 text-orange-400' 
                        : isCompleted
                          ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                          : 'bg-slate-800/30 border border-gray-700 text-gray-400'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        isActive 
                          ? 'bg-orange-500/30' 
                          : isCompleted
                            ? 'bg-green-500/30'
                            : 'bg-slate-700'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <IconComponent className="w-4 h-4" />
                        )}
                      </div>
                      <span className="font-medium text-sm hidden md:block">{step.title}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-px mx-2 ${isCompleted ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Publier votre produit</h1>
              <p className="text-gray-400">Étape {currentStep} sur {steps.length} - {steps[currentStep - 1]?.title}</p>
            </div>
          </div>

          {/* Form Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-orange-500/20">
                
                {/* Étape 1: Informations Produit */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Informations du produit</h2>
                      
                      {/* Titre */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">
                          Titre du produit *
                          <span className="text-xs text-gray-500 ml-2">(Soyez descriptif et précis)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Ex: Sac à main en cuir italien - Marque premium"
                          maxLength="80"
                        />
                        <div className="text-xs text-gray-500 mt-1">{formData.title.length}/80 caractères</div>
                      </div>

                      {/* Catégorie */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Catégorie *</label>
                          <select
                            value={formData.category}
                            onChange={(e) => setFormData({...formData, category: e.target.value, subcategory: ''})}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          >
                            <option value="">Sélectionner une catégorie</option>
                            {Object.keys(categories).map(cat => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Sous-catégorie *</label>
                          <select
                            value={formData.subcategory}
                            onChange={(e) => setFormData({...formData, subcategory: e.target.value})}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                            disabled={!formData.category}
                          >
                            <option value="">Sélectionner</option>
                            {formData.category && categories[formData.category]?.map(subcat => (
                              <option key={subcat} value={subcat}>{subcat}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Marque */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Marque</label>
                        <input
                          type="text"
                          value={formData.brand}
                          onChange={(e) => setFormData({...formData, brand: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Ex: Louis Vuitton, Samsung, IKEA..."
                        />
                      </div>

                      {/* État */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">État du produit *</label>
                        <div className="space-y-3">
                          {conditions.map(condition => (
                            <label key={condition.value} className="flex items-start space-x-3 cursor-pointer">
                              <input
                                type="radio"
                                name="condition"
                                value={condition.value}
                                checked={formData.condition === condition.value}
                                onChange={(e) => setFormData({...formData, condition: e.target.value})}
                                className="mt-1 text-orange-500 focus:ring-orange-400"
                              />
                              <div>
                                <div className="font-medium text-white">{condition.label}</div>
                                <div className="text-sm text-gray-400">{condition.description}</div>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Description */}
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">
                          Description détaillée *
                          <span className="text-xs text-gray-500 ml-2">(Mentionnez défauts, dimensions, matériaux...)</span>
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          rows={6}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none resize-none"
                          placeholder="Décrivez votre produit en détail : matériaux, dimensions, état, accessoires inclus, historique d'utilisation..."
                          maxLength="1000"
                        />
                        <div className="text-xs text-gray-500 mt-1">{formData.description.length}/1000 caractères</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 2: Images */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">Photos du produit</h2>
                      <p className="text-gray-400 mb-6">Ajoutez jusqu'à 8 photos. La première sera votre photo principale.</p>
                      
                      {/* Zone de upload */}
                      <div
                        className={`border-2 border-dashed rounded-xl p-8 text-center transition-all mb-6 ${
                          dragActive 
                            ? 'border-orange-400 bg-orange-500/10' 
                            : 'border-gray-600 hover:border-orange-400'
                        }`}
                        onDragEnter={(e) => { e.preventDefault(); setDragActive(true); }}
                        onDragLeave={(e) => { e.preventDefault(); setDragActive(false); }}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                      >
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-bold text-white mb-2">Glissez vos photos ici</h3>
                        <p className="text-gray-400 mb-4">ou cliquez pour parcourir</p>
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                          Choisir des fichiers
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e.target.files)}
                          className="hidden"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                          Formats acceptés: JPG, PNG, WebP (max 5MB par photo)
                        </p>
                      </div>

                      {/* Photos uploadées */}
                      {formData.images.length > 0 && (
                        <div>
                          <h3 className="font-bold text-white mb-4">Photos ajoutées ({formData.images.length}/8)</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {formData.images.map(image => (
                              <div key={image.id} className="relative group">
                                <img
                                  src={image.url}
                                  alt="Product"
                                  className="w-full h-32 object-cover rounded-lg"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                                  {!image.isPrimary && (
                                    <button
                                      onClick={() => setPrimaryImage(image.id)}
                                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg text-xs"
                                    >
                                      Principal
                                    </button>
                                  )}
                                  <button
                                    onClick={() => removeImage(image.id)}
                                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                                  >
                                    <X className="w-4 h-4" />
                                  </button>
                                </div>

                                {/* Badge principal */}
                                {image.isPrimary && (
                                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                                    Principal
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Conseils photos */}
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mt-6">
                        <div className="flex items-start space-x-3">
                          <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-blue-400 mb-2">Conseils pour de meilleures photos</h4>
                            <ul className="text-sm text-blue-300 space-y-1">
                              <li>• Utilisez un éclairage naturel</li>
                              <li>• Montrez tous les angles du produit</li>
                              <li>• Incluez une photo avec étiquette/emballage si neuf</li>
                              <li>• Photographiez les défauts éventuels</li>
                              <li>• Évitez les photos floues ou sombres</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 3: Prix et inventaire */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Prix et inventaire</h2>
                      
                      {/* Prix */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            Prix d'origine (MAD) *
                            <span className="text-xs text-gray-500 ml-2">(Prix magasin/neuf)</span>
                          </label>
                          <input
                            type="number"
                            value={formData.originalPrice}
                            onChange={(e) => setFormData({...formData, originalPrice: e.target.value})}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                            placeholder="1200"
                            min="1"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            Votre prix de vente (MAD) *
                            <span className="text-xs text-gray-500 ml-2">(Prix final pour l'acheteur)</span>
                          </label>
                          <input
                            type="number"
                            value={formData.salePrice}
                            onChange={(e) => setFormData({...formData, salePrice: e.target.value})}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                            placeholder="299"
                            min="1"
                          />
                        </div>
                      </div>

                      {/* Calculs automatiques */}
                      {formData.originalPrice && formData.salePrice && (
                        <div className="bg-slate-800/50 rounded-lg p-4 mb-6">
                          <h4 className="font-bold text-white mb-3">Aperçu financier</h4>
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-red-400">{discountPercentage}%</div>
                              <div className="text-gray-400">Réduction</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-orange-400">{estimatedCommission.toFixed(0)} MAD</div>
                              <div className="text-gray-400">Commission LIQUIDIA (15%)</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-400">{estimatedEarnings.toFixed(0)} MAD</div>
                              <div className="text-gray-400">Vos gains estimés</div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Quantité */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">Quantité disponible *</label>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => setFormData({...formData, quantity: Math.max(1, formData.quantity - 1)})}
                              className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            >
                              <Minus className="w-4 h-4 text-orange-400" />
                            </button>
                            <input
                              type="number"
                              value={formData.quantity}
                              onChange={(e) => setFormData({...formData, quantity: parseInt(e.target.value) || 1})}
                              className="w-20 bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white text-center focus:border-orange-400 focus:outline-none"
                              min="1"
                            />
                            <button
                              onClick={() => setFormData({...formData, quantity: formData.quantity + 1})}
                              className="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                            >
                              <Plus className="w-4 h-4 text-orange-400" />
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-gray-400 text-sm mb-2">
                            Quantité minimum par commande
                            <span className="text-xs text-gray-500 ml-2">(Optionnel)</span>
                          </label>
                          <input
                            type="number"
                            value={formData.minQuantity}
                            onChange={(e) => setFormData({...formData, minQuantity: parseInt(e.target.value) || 1})}
                            className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                            min="1"
                            max={formData.quantity}
                          />
                        </div>
                      </div>

                      {/* Prix conseillé */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-green-400 mb-2">Prix recommandé</h4>
                            <p className="text-sm text-green-300">
                              Pour cette catégorie, les produits avec 60-75% de réduction se vendent 3x plus vite. 
                              Votre réduction actuelle de {discountPercentage}% est {discountPercentage >= 60 ? 'excellente' : 'correcte'}.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 4: Expédition */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Expédition et localisation</h2>
                      
                      {/* Localisation */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Votre ville *</label>
                        <select
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                        >
                          <option value="">Sélectionner votre ville</option>
                          {moroccanCities.map(city => (
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>

                      {/* Type d'expédition */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Méthode d'expédition *</label>
                        <div className="space-y-3">
                          <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="shippingType"
                              value="seller"
                              checked={formData.shippingType === 'seller'}
                              onChange={(e) => setFormData({...formData, shippingType: e.target.value})}
                              className="mt-1 text-orange-500 focus:ring-orange-400"
                            />
                            <div>
                              <div className="font-medium text-white">J'expédie moi-même</div>
                              <div className="text-sm text-gray-400">Vous gérez l'emballage et l'expédition</div>
                            </div>
                          </label>
                          
                          <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="shippingType"
                              value="liquidia"
                              checked={formData.shippingType === 'liquidia'}
                              onChange={(e) => setFormData({...formData, shippingType: e.target.value})}
                              className="mt-1 text-orange-500 focus:ring-orange-400"
                            />
                            <div>
                              <div className="font-medium text-white">LIQUIDIA s'occupe de tout</div>
                              <div className="text-sm text-gray-400">Service premium - On récupère et expédie pour vous</div>
                            </div>
                          </label>
                          
                          <label className="flex items-start space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="shippingType"
                              value="pickup"
                              checked={formData.shippingType === 'pickup'}
                              onChange={(e) => setFormData({...formData, shippingType: e.target.value})}
                              className="mt-1 text-orange-500 focus:ring-orange-400"
                            />
                            <div>
                              <div className="font-medium text-white">Remise en main propre uniquement</div>
                              <div className="text-sm text-gray-400">Idéal pour les articles volumineux</div>
                            </div>
                          </label>
                        </div>
                      </div>

                      {/* Frais d'expédition */}
                      {formData.shippingType === 'seller' && (
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">Frais d'expédition (MAD)</label>
                            <input
                              type="number"
                              value={formData.shippingCost}
                              onChange={(e) => setFormData({...formData, shippingCost: e.target.value})}
                              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                              placeholder="35"
                              min="0"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-gray-400 text-sm mb-2">
                              Gratuit à partir de (MAD)
                              <span className="text-xs text-gray-500 ml-2">(Optionnel)</span>
                            </label>
                            <input
                              type="number"
                              value={formData.freeShippingThreshold}
                              onChange={(e) => setFormData({...formData, freeShippingThreshold: e.target.value})}
                              className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                              placeholder="500"
                              min="0"
                            />
                          </div>
                        </div>
                      )}

                      {/* Politique de retour */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Politique de retour</label>
                        <select
                          value={formData.returnPolicy}
                          onChange={(e) => setFormData({...formData, returnPolicy: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                        >
                          <option value="7">7 jours</option>
                          <option value="14">14 jours</option>
                          <option value="30">30 jours (Recommandé)</option>
                          <option value="none">Aucun retour</option>
                        </select>
                      </div>

                      {/* Info expédition */}
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Truck className="w-5 h-5 text-blue-400 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-blue-400 mb-2">Conseils expédition</h4>
                            <ul className="text-sm text-blue-300 space-y-1">
                              <li>• Les acheteurs préfèrent la livraison gratuite</li>
                              <li>• Intégrez les frais dans votre prix si possible</li>
                              <li>• Une politique de retour flexible augmente la confiance</li>
                              <li>• Le service LIQUIDIA est plus cher mais sans effort</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 5: Publication */}
                {currentStep === 5 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Paramètres de publication</h2>
                      
                      {/* Durée de l'annonce */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Durée de l'annonce</label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { value: '3', label: '3 jours', price: 'Gratuit', popular: false },
                            { value: '7', label: '7 jours', price: 'Gratuit', popular: true },
                            { value: '14', label: '14 jours', price: '+10 MAD', popular: false }
                          ].map(option => (
                            <label key={option.value} className={`relative cursor-pointer rounded-lg border-2 p-4 text-center transition-all ${
                              formData.listingDuration === option.value
                                ? 'border-orange-500 bg-orange-500/10'
                                : 'border-gray-600 hover:border-gray-500'
                            }`}>
                              <input
                                type="radio"
                                name="listingDuration"
                                value={option.value}
                                checked={formData.listingDuration === option.value}
                                onChange={(e) => setFormData({...formData, listingDuration: e.target.value})}
                                className="sr-only"
                              />
                              {option.popular && (
                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">
                                  Populaire
                                </div>
                              )}
                              <div className="font-bold text-white">{option.label}</div>
                              <div className="text-sm text-gray-400">{option.price}</div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Heure de publication */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Quand publier ?</label>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="startTime"
                              value="immediate"
                              checked={formData.startTime === 'immediate'}
                              onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                              className="text-orange-500 focus:ring-orange-400"
                            />
                            <span className="text-white">Publier immédiatement</span>
                          </label>
                          
                          <label className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="radio"
                              name="startTime"
                              value="scheduled"
                              checked={formData.startTime === 'scheduled'}
                              onChange={(e) => setFormData({...formData, startTime: e.target.value})}
                              className="text-orange-500 focus:ring-orange-400"
                            />
                            <span className="text-white">Programmer la publication</span>
                          </label>
                        </div>
                        
                        {formData.startTime === 'scheduled' && (
                          <div className="mt-3">
                            <input
                              type="datetime-local"
                              value={formData.scheduledDate}
                              onChange={(e) => setFormData({...formData, scheduledDate: e.target.value})}
                              className="bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                            />
                          </div>
                        )}
                      </div>

                      {/* Options premium */}
                      <div className="space-y-4">
                        <h3 className="font-bold text-white">Options premium</h3>
                        
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.featuredListing}
                            onChange={(e) => setFormData({...formData, featuredListing: e.target.checked})}
                            className="mt-1 text-orange-500 focus:ring-orange-400"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-white">Annonce mise en avant</span>
                              <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-bold">+25 MAD</span>
                            </div>
                            <div className="text-sm text-gray-400">3x plus de visibilité dans les résultats</div>
                          </div>
                        </label>
                        
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.urgencyBadge}
                            onChange={(e) => setFormData({...formData, urgencyBadge: e.target.checked})}
                            className="mt-1 text-orange-500 focus:ring-orange-400"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-white">Badge "Deal Chaud" 🔥</span>
                              <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">+15 MAD</span>
                            </div>
                            <div className="text-sm text-gray-400">Attire l'attention avec un badge spécial</div>
                          </div>
                        </label>
                      </div>

                      {/* Meilleur moment */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-green-400 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-green-400 mb-2">Meilleur moment pour publier</h4>
                            <p className="text-sm text-green-300">
                              Les jeudis et vendredis entre 18h-21h génèrent 40% plus de vues. 
                              Évitez les lundis matins et les weekends après-midi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Étape 6: Vérification */}
                {currentStep === 6 && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-6">Authentification et garanties</h2>
                      
                      {/* Authentification */}
                      <div className="mb-6">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.authenticity}
                            onChange={(e) => setFormData({...formData, authenticity: e.target.checked})}
                            className="mt-1 text-orange-500 focus:ring-orange-400"
                          />
                          <div>
                            <div className="font-medium text-white">Je certifie l'authenticité du produit</div>
                            <div className="text-sm text-gray-400">
                              Obligatoire pour les marques de luxe. Augmente la confiance des acheteurs.
                            </div>
                          </div>
                        </label>
                      </div>

                      {/* Garantie */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">Garantie restante</label>
                        <select
                          value={formData.warranty}
                          onChange={(e) => setFormData({...formData, warranty: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                        >
                          <option value="">Aucune garantie</option>
                          <option value="6months">6 mois</option>
                          <option value="1year">1 an</option>
                          <option value="2years">2 ans</option>
                          <option value="more">Plus de 2 ans</option>
                        </select>
                      </div>

                      {/* Numéro de série */}
                      <div className="mb-6">
                        <label className="block text-gray-400 text-sm mb-2">
                          Numéro de série
                          <span className="text-xs text-gray-500 ml-2">(Pour l'électronique/luxe)</span>
                        </label>
                        <input
                          type="text"
                          value={formData.serialNumber}
                          onChange={(e) => setFormData({...formData, serialNumber: e.target.value})}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-orange-400 focus:outline-none"
                          placeholder="Ex: ABC123456789"
                        />
                      </div>

                      {/* Facture d'achat */}
                      <div className="mb-6">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.purchaseReceipt}
                            onChange={(e) => setFormData({...formData, purchaseReceipt: e.target.checked})}
                            className="mt-1 text-orange-500 focus:ring-orange-400"
                          />
                          <div>
                            <div className="font-medium text-white">J'ai la facture d'achat originale</div>
                            <div className="text-sm text-gray-400">
                              Renforce la crédibilité et facilite les retours
                            </div>
                          </div>
                        </label>
                      </div>

                      {/* Badge de confiance */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <Award className="w-6 h-6 text-green-400" />
                          <div>
                            <h4 className="font-bold text-green-400">Badge de confiance</h4>
                            <p className="text-sm text-green-300">
                              Votre annonce obtiendra un badge "Vendeur vérifié" si vous complétez toutes les vérifications.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="flex justify-between pt-8 border-t border-gray-700">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      currentStep === 1
                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Précédent
                  </button>
                  
                  {currentStep < steps.length ? (
                    <button
                      onClick={nextStep}
                      className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-700 transition-all"
                    >
                      Suivant
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-bold hover:from-green-600 hover:to-emerald-700 transition-all transform hover:scale-105"
                    >
                      Publier mon produit
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar - Preview & Tips */}
            <div className="space-y-6">
              {/* Aperçu carte produit */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-lg font-bold text-white mb-4">Aperçu de votre annonce</h3>
                
                {formData.images.length > 0 && (
                  <div className="relative mb-4">
                    <img
                      src={formData.images.find(img => img.isPrimary)?.url || formData.images[0]?.url}
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    {discountPercentage > 0 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                        -{discountPercentage}%
                      </div>
                    )}
                  </div>
                )}
                
                <h4 className="font-bold text-white mb-2 line-clamp-2">
                  {formData.title || 'Titre de votre produit'}
                </h4>
                
                {formData.salePrice && (
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg font-bold text-emerald-400">{formData.salePrice} MAD</span>
                    {formData.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{formData.originalPrice} MAD</span>
                    )}
                  </div>
                )}
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{formData.location || 'Votre ville'}</span>
                  <span>{formData.condition || 'État'}</span>
                </div>
              </div>

              {/* Conseils */}
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-lg font-bold text-white mb-4">💡 Conseils pour vendre plus vite</h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Photos de qualité</div>
                      <div className="text-gray-400">Ajoutez 5-8 photos sous différents angles</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Prix compétitif</div>
                      <div className="text-gray-400">60-75% de réduction attire plus d'acheteurs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Description détaillée</div>
                      <div className="text-gray-400">Mentionnez défauts, dimensions, matériaux</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-medium text-white">Répondez rapidement</div>
                      <div className="text-gray-400">Les acheteurs préfèrent les vendeurs réactifs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistiques motivation */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4">📈 Vos chances de succès</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-300">Visibilité estimée</span>
                    <span className="font-bold text-white">
                      {formData.featuredListing ? 'Élevée' : 'Normale'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-green-300">Temps de vente moyen</span>
                    <span className="font-bold text-white">
                      {discountPercentage >= 60 ? '2-3 jours' : '5-7 jours'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-green-300">Intérêt prévu</span>
                    <span className="font-bold text-white">
                      {formData.images.length >= 5 ? 'Fort' : 'Moyen'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListingForm;