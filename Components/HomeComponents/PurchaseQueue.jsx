import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

const PurchaseQueue = ({ dealTitle }) => {
  const [queueProgress, setQueueProgress] = useState(0);
  const [currentBuyer, setCurrentBuyer] = useState(0);
  
  const queueColors = [
    'bg-orange-400', 'bg-amber-400', 'bg-red-400', 'bg-yellow-400', 
    'bg-emerald-400', 'bg-blue-400', 'bg-purple-400', 'bg-pink-400'
  ];

  const buyerNames = [
    'Ahmed M.', 'Fatima K.', 'Youssef B.', 'Aicha L.', 'Omar T.', 
    'Nadia S.', 'Hassan R.', 'Malika Z.', 'Karim F.', 'Zineb A.'
  ];

  useEffect(() => {
    const queueTimer = setInterval(() => {
      setQueueProgress(prev => (prev + 0.4) % 100);
      
      // Change buyer every 2 seconds
      if (queueProgress % 20 === 0) {
        setCurrentBuyer(prev => (prev + 1) % buyerNames.length);
      }
    }, 100);

    return () => clearInterval(queueTimer);
  }, [queueProgress]);

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-orange-500/20">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-orange-400" />
          <span className="text-sm font-medium">Live Purchase Queue</span>
        </div>
        <div className="text-xs text-gray-400">
          {buyerNames[currentBuyer]} is purchasing...
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-gray-400">
          <span>People in queue for "{dealTitle}"</span>
          <span>{Math.floor(Math.random() * 50) + 20} waiting</span>
        </div>
        
        {/* Queue visualization */}
        <div className="relative h-6 bg-slate-700 rounded-full overflow-hidden">
          <div className="absolute inset-0 flex">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-full ${queueColors[i % queueColors.length]} opacity-70 border-r border-slate-600`}
                style={{
                  transform: `translateX(-${queueProgress * 5}%)`,
                  transition: 'transform 0.1s ease-out'
                }}
              />
            ))}
          </div>
          
          {/* Progress indicator */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xs font-bold text-white drop-shadow-lg">
              Processing...
            </div>
          </div>
        </div>
        
        <div className="text-xs text-green-400 font-medium">
          ✓ {Math.floor(Math.random() * 200) + 100} people purchased today
        </div>
      </div>
    </div>
  );
};
export default PurchaseQueue;