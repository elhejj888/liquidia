

const Header = () => {
  return (
    <header className="relative z-10 p-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">%</span>
        </div>
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
          LIQUIDIA
        </span>
      </div>
      
      <nav className="hidden md:flex space-x-8 text-xl ">
        <a href="/products" className="hover:text-orange-400 transition-colors">Deals</a>
        <a href="/categories" className="hover:text-orange-400 transition-colors">Categories</a>
        <a href="/subscriptionPlans" className="hover:text-orange-400 transition-colors">Sell</a>
      </nav>

      <div className="flex space-x-4">
        <a href="/login" className="px-4 py-2 border border-orange-400 rounded-lg hover:bg-orange-400 hover:text-white transition-all">
          Login
        </a>
        <a href="/login" className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all">
          Join Now
        </a>
      </div>
    </header>
  );
};
export default Header;