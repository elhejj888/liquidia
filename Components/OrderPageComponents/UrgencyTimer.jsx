import React, { useState, useEffect } from 'react';
import { Timer, MapPin } from 'lucide-react';

const UrgencyTimer = ({ initialTime = 900 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime); // 15 minutes
  const [activities, setActivities] = useState([
    { id: 1, user: "Ahmed K.", action: "just purchased", time: "2s ago", location: "Casablanca" },
    { id: 2, user: "Fatima M.", action: "saved 850 MAD", time: "15s ago", location: "Rabat" },
    { id: 3, user: "Youssef B.", action: "grabbed last item", time: "1m ago", location: "Marrakech" }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = {
        id: Date.now(),
        user: ["Ahmed K.", "Fatima M.", "Sarah L.", "Omar T."][Math.floor(Math.random() * 4)],
        action: ["just purchased", "saved 650 MAD", "grabbed deal"][Math.floor(Math.random() * 3)],
        time: "now",
        location: ["Casablanca", "Rabat", "Fez", "Tangier"][Math.floor(Math.random() * 4)]
      };
      
      setActivities(prev => [newActivity, ...prev.slice(0, 2)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isUrgent = timeLeft < 300; // Less than 5 minutes

  return (
    <div className={`bg-gradient-to-r p-4 rounded-xl border-2 transition-all ${
      isUrgent 
        ? 'from-red-600/20 to-orange-600/20 border-red-500/50 animate-pulse' 
        : 'from-orange-500/20 to-red-500/20 border-orange-500/30'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Timer className={`w-5 h-5 ${isUrgent ? 'text-red-400' : 'text-orange-400'}`} />
          <span className="font-bold text-white">Reserved for you</span>
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
        {isUrgent ? '⚠️ Hurry! Your reservation expires soon!' : 'Complete your purchase to secure this deal'}
      </p>
    </div>
  );
};

export default UrgencyTimer;