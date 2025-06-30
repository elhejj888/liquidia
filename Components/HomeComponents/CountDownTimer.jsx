import React from 'react';
import { Clock } from 'lucide-react';
const CountdownTimer = ({ timeLeft }) => {
  return (
    <div className="flex items-center space-x-4 bg-red-500/20 border border-red-500/30 rounded-xl px-4 py-2">
      <Clock className="w-5 h-5 text-red-400" />
      <div className="flex space-x-1 text-lg font-mono">
      <span className="bg-red-500 px-2 py-1 rounded text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
      <span>:</span>
      <span className="bg-red-500 px-2 py-1 rounded text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
      <span>:</span>
      <span className="bg-red-500 px-2 py-1 rounded text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
    </div>
    </div>
  );
};
export default CountdownTimer;