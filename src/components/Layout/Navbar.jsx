import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, User, Home, Search } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const { user, logout } = useAuth();
  const cartItemsCount = getCartItemsCount();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">FE</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Foodie's Express</span>
            </Link>

            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Hi, {user.name}</span>
                  <button
                    onClick={logout}
                    className="text-sm text-red-600 hover:text-red-700 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
        <div className="grid grid-cols-5 h-16">
          <Link
            to="/"
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              isActive('/') ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Home size={20} />
            <span className="text-xs">Home</span>
          </Link>

          <Link
            to="/search"
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              isActive('/search') ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Search size={20} />
            <span className="text-xs">Search</span>
          </Link>

          <Link
            to="/favorites"
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              isActive('/favorites') ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <Heart size={20} />
            <span className="text-xs">Favorites</span>
          </Link>

          <Link
            to="/cart"
            className={`flex flex-col items-center justify-center space-y-1 relative transition-colors ${
              isActive('/cart') ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <ShoppingBag size={20} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
            <span className="text-xs">Cart</span>
          </Link>

          <Link
            to="/profile"
            className={`flex flex-col items-center justify-center space-y-1 transition-colors ${
              isActive('/profile') ? 'text-orange-500' : 'text-gray-600'
            }`}
          >
            <User size={20} />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 h-12">
            <Link
              to="/"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <Home size={16} />
              <span>Home</span>
            </Link>

            <Link
              to="/search"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/search') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <Search size={16} />
              <span>Search</span>
            </Link>

            <Link
              to="/favorites"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/favorites') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <Heart size={16} />
              <span>Favorites</span>
            </Link>

            <Link
              to="/cart"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md relative transition-colors ${
                isActive('/cart') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <ShoppingBag size={16} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
              <span>Cart</span>
            </Link>

            <Link
              to="/profile"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                isActive('/profile') 
                  ? 'text-orange-500 bg-orange-50' 
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <User size={16} />
              <span>Profile</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;