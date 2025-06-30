import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react'; // Assuming you have lucide-react installed

const SocialProofSection = ({ product }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    { name: "Aicha L.", location: "Casablanca", text: "Amazing quality for this price! Saved 800 MAD", rating: 5 },
    { name: "Mohamed K.", location: "Rabat", text: "Fast delivery, exactly as described. Highly recommend!", rating: 5 },
    { name: "Sara M.", location: "Marrakech", text: "Best deal I've found. Will definitely buy again!", rating: 5 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
      <div className="flex items-center space-x-2 mb-4">
        <Star className="w-5 h-5 text-yellow-400 fill-current" />
        <span className="font-bold text-white">What buyers say</span>
        <div className="flex space-x-1">
          {[1,2,3,4,5].map(i => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>
        <span className="text-yellow-400 text-sm">(4.9/5)</span>
      </div>
      
      <div className="relative overflow-hidden h-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-500 ${
              index === currentTestimonial ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
            }`}
          >
            <p className="text-gray-300 mb-2">"{testimonial.text}"</p>
            <div className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-orange-400">{testimonial.name}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{testimonial.location}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentTestimonial ? 'bg-orange-400' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default SocialProofSection;