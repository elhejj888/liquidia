import React from 'react';
import { Thermometer } from 'lucide-react';
const DealTemperature = ({ discount }) => {
  const getTemperature = (discount) => {
    if (discount >= 80) return { level: 'BLAZING', color: 'text-red-400', bg: 'bg-red-500/20', icon: '🔥' };
    if (discount >= 60) return { level: 'HOT', color: 'text-orange-400', bg: 'bg-orange-500/20', icon: '⚡' };
    if (discount >= 40) return { level: 'WARM', color: 'text-yellow-400', bg: 'bg-yellow-500/20', icon: '💫' };
    return { level: 'COOL', color: 'text-blue-400', bg: 'bg-blue-500/20', icon: '❄️' };
  };

  const temp = getTemperature(discount);

  return (
    <div className={`inline-flex items-center space-x-2 ${temp.bg} border border-current/30 rounded-full px-3 py-1`}>
      <Thermometer className={`w-4 h-4 ${temp.color}`} />
      <span className={`text-sm font-bold ${temp.color}`}>{temp.icon} {temp.level}</span>
    </div>
  );
};
export default DealTemperature;