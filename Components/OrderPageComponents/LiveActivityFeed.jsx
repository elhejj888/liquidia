import React, { useState, useEffect } from 'react';
import { Users, MapPin } from 'lucide-react';
const LiveActivityFeed = () => {
  const [activities, setActivities] = useState([
    { id: 1, user: "Ahmed K.", action: "just purchased", time: "2s ago", location: "Casablanca" },
    { id: 2, user: "Fatima M.", action: "saved 850 MAD", time: "15s ago", location: "Rabat" },
    { id: 3, user: "Youssef B.", action: "grabbed last item", time: "1m ago", location: "Marrakech" }
  ]);

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

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-orange-500/20">
      <div className="flex items-center space-x-2 mb-3">
        <Users className="w-4 h-4 text-orange-400" />
        <span className="text-sm font-bold text-orange-400">Live Activity</span>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div 
            key={activity.id} 
            className={`flex items-center justify-between text-xs transition-all duration-500 ${
              index === 0 ? 'bg-orange-500/10 rounded-lg p-2' : 'p-1'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="font-medium text-white">{activity.user}</span>
              <span className="text-gray-400">{activity.action}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>{activity.location}</span>
              <span>•</span>
              <span>{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LiveActivityFeed;