'use client';
import React, { useState, useEffect } from 'react';
import AnimatedBackground from './AnimatedBackground';
import Header from './Header';
import HeroSection from './HeroSection';
import FlashDealCard from './FlashDealCard';
import SocialProof from './SocialProof';
import { ChevronDown } from 'lucide-react';
import PurchaseQueue from './PurchaseQueue';
import FOMONotification from './FOMONotification';
import Footer from './Footer';
import CountdownTimer from './CountDownTimer';
import PriceDropAnimation from './PriceDropAnimation';  

const LiquidiaHomepage = () => {
  const [currentDeal, setCurrentDeal] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 });
  const [notifications, setNotifications] = useState([]);

  const flashDeals = [
    { id: 1, title: "Designer Handbag", originalPrice: 1200, salePrice: 299, discount: 75, viewers: 124, stock: 3, image: "/handbag.png" },
    { id: 2, title: "Smartphone Case Set", originalPrice: 150, salePrice: 45, discount: 70, viewers: 89, stock: 7, image: "/phones.png" },
    { id: 3, title: "Winter Jacket", originalPrice: 800, salePrice: 199, discount: 75, viewers: 156, stock: 2, image: "/winter.png" }
  ];

  const fomoMessages = [
    { message: "Fatima just saved 850 MAD on Winter Collection!", location: "Casablanca", timeAgo: "2m ago" },
    { message: "Ahmed bought 2 Designer Bags - 1 left!", location: "Rabat", timeAgo: "1m ago" },
    { message: "Aicha saved 1,200 MAD today!", location: "Marrakech", timeAgo: "3m ago" },
    { message: "Youssef grabbed the last Phone Case!", location: "Fez", timeAgo: "30s ago" },
    { message: "Nadia just cleared 3 items from cart!", location: "Tangier", timeAgo: "45s ago" }
  ];

  // FOMO Notifications System
  useEffect(() => {
    const showRandomNotification = () => {
      const randomMessage = fomoMessages[Math.floor(Math.random() * fomoMessages.length)];
      const notificationId = Date.now();
      
      setNotifications(prev => [...prev, { ...randomMessage, id: notificationId }]);
      
      // Auto remove after 4 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== notificationId));
      }, 4000);
    };

    const notificationTimer = setInterval(showRandomNotification, 6000);
    showRandomNotification(); // Show first one immediately

    return () => clearInterval(notificationTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dealRotator = setInterval(() => {
      setCurrentDeal(prev => (prev + 1) % flashDeals.length);
    }, 3000);

    return () => clearInterval(dealRotator);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white overflow-hidden">
      <AnimatedBackground />
      
      {/* FOMO Notifications */}
      {notifications.map((notification) => (
        <FOMONotification
          key={notification.id}
          notification={notification}
          onClose={() => setNotifications(prev => prev.filter(n => n.id !== notification.id))}
        />
      ))}
      
      <Header />
      
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <HeroSection />
          <FlashDealCard deal={flashDeals[currentDeal]} timeLeft={timeLeft} />
          <SocialProof />
          
          <div className="flex justify-center mt-16">
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Integration */}
      <Footer />
      
      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default LiquidiaHomepage;