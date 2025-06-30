import React, { useEffect, useState } from 'react';
import { ShoppingBag, MapPin, Zap } from 'lucide-react';

const FOMONotification = ({ notification, onClose }) => {
  const [isExiting, setIsExiting] = useState(false);
  // New state to control the staggered entrance of content
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Trigger content animation shortly after the container appears
    const timer = setTimeout(() => {
      setIsContentVisible(true);
    }, 250); // Delay matches the initial phase of the container animation

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsExiting(true);
    // Wait for exit animation to complete before unmounting
    setTimeout(onClose, 500);
  };

  return (
    <>
      <style jsx>{`
        /* * REFINED ENTRANCE ANIMATION
         * A more subtle and springy bounce without the jarring rotation.
         * The cubic-bezier gives it a modern, smooth feel.
        */
        @keyframes subtleBounceIn {
          0% {
            transform: translateX(110%) scale(0.9);
            opacity: 0;
          }
          60% {
            transform: translateX(-5%) scale(1.05);
            opacity: 1;
          }
          100% {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        
        /* * SMOOTH EXIT ANIMATION
         * Fades out while shrinking and moving away, which is less abrupt.
        */
        @keyframes fadeOutAndShrink {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(0.8);
            opacity: 0;
          }
        }

        /* DYNAMIC PARTICLE ANIMATION */
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-50px);
            opacity: 0;
          }
        }

        .notification-enter {
          animation: subtleBounceIn 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        
        .notification-exit {
          animation: fadeOutAndShrink 0.5s ease-out forwards;
        }

        .icon-pulse {
          animation: iconPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes iconPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Base styles for staggered content */
        .stagger-item {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        /* Visible state for staggered content */
        .content-visible .stagger-item {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <div 
        className={`fixed top-24 right-6 z-50 bg-gradient-to-br from-emerald-400/80 via-blue-500/80 to-purple-600/80 text-white rounded-2xl shadow-2xl border border-white/20 backdrop-blur-lg max-w-sm min-w-96 transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.03] ${
          isExiting ? 'notification-exit' : 'notification-enter'
        }`}
      >
        {/* Glowing effect now pulses subtly */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl blur-md opacity-60 -z-10 animate-pulse"></div>
        
        <div className={`relative p-5 ${isContentVisible ? 'content-visible' : ''}`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-3 stagger-item" style={{transitionDelay: '100ms'}}>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-bold text-yellow-200 uppercase tracking-wider">Live Activity</span>
            </div>
            <button 
              onClick={handleClose}
              className="flex-shrink-0 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 group"
            >
              <span className="text-white text-2xl font-light">×</span>
            </button>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 stagger-item" style={{transitionDelay: '200ms'}}>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center icon-pulse border-2 border-white/30">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <p 
                className="font-bold text-lg leading-tight text-white mb-2 stagger-item" 
                style={{transitionDelay: '300ms'}}
              >
                {notification.message}
              </p>
              
              <div 
                className="flex items-center space-x-3 text-sm text-white/80 stagger-item" 
                style={{transitionDelay: '400ms'}}
              >
                <div className="flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-emerald-200" />
                  <span className="font-medium">{notification.location}</span>
                </div>
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
                <span className="font-light">{notification.timeAgo}</span>
              </div>
            </div>
          </div>

          {/* Progress bar with a more subtle pulse */}
          <div 
            className="mt-4 bg-white/10 rounded-full h-1.5 overflow-hidden stagger-item"
            style={{transitionDelay: '500ms'}}
          >
            <div className="bg-gradient-to-r from-yellow-300 to-orange-400 h-full rounded-full animate-pulse" style={{width: '75%'}}></div>
          </div>

          {/* More dynamic floating particles */}
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-yellow-300 rounded-full" style={{animation: 'floatUp 3s ease-out infinite'}}></div>
          <div className="absolute top-0 right-1/4 w-px h-px bg-white rounded-full" style={{animation: 'floatUp 4s ease-in infinite reverse'}}></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-emerald-300 rounded-full" style={{animation: 'floatUp 2.5s ease-in-out infinite'}}></div>
        </div>
      </div>
    </>
  );
};

export default FOMONotification;