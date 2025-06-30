const InventoryHeartbeat = ({ stock }) => {
  const getHeartbeat = (stock) => {
    if (stock <= 3) return { hearts: '♥', color: 'text-red-400', pulse: 'animate-pulse' };
    if (stock <= 7) return { hearts: '♥♥', color: 'text-orange-400', pulse: 'animate-pulse' };
    return { hearts: '♥♥♥', color: 'text-green-400', pulse: '' };
  };

  const heartbeat = getHeartbeat(stock);

  return (
    <div className={`inline-flex items-center space-x-1 ${heartbeat.color} ${heartbeat.pulse}`}>
      <span className="text-lg">{heartbeat.hearts}</span>
      <span className="text-sm font-medium">{stock} left</span>
    </div>
  );
};
export default InventoryHeartbeat;