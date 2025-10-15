import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, Star } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Favorites = () => {
  const { favorites, toggleFavorite, addToCart } = useCart();

  // Mock data for favorite items
  const allItems = [
    {
      id: '1',
      name: 'Margherita Pizza',
      price: 12.99,
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
      rating: 4.6,
    },
    {
      id: '2',
      name: 'Classic Burger',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      restaurantId: '2',
      restaurantName: 'Burger Kingdom',
      rating: 4.4,
    },
    {
      id: '3',
      name: 'Chicken Biryani',
      price: 15.99,
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
      restaurantId: '3',
      restaurantName: 'Spice Garden',
      rating: 4.8,
    },
    {
      id: '4',
      name: 'Sweet & Sour Chicken',
      price: 11.99,
      image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
      restaurantId: '4',
      restaurantName: 'Dragon Wok',
      rating: 4.3,
    },
  ];

  const favoriteItems = allItems.filter(item => favorites.includes(item.id));

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleToggleFavorite = (itemId) => {
    toggleFavorite(itemId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Favorites</h1>
          <p className="text-gray-600">Your most loved dishes from various restaurants</p>
        </div>

        {favoriteItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No favorites yet</h2>
            <p className="text-gray-600 mb-8">Start adding dishes to your favorites by clicking the heart icon</p>
            <Link
              to="/"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Explore Restaurants</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all transform hover:scale-105">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handleToggleFavorite(item.id)}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <Heart size={16} fill="currentColor" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.restaurantName}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${item.price}</span>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-110"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {favoriteItems.length > 0 && (
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl text-white p-8">
              <h2 className="text-2xl font-bold mb-4">Love these dishes?</h2>
              <p className="text-lg opacity-90 mb-6">
                Add them all to your cart and enjoy a feast!
              </p>
              <button
                onClick={() => favoriteItems.forEach(item => handleAddToCart(item))}
                className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 font-medium"
              >
                Add All to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;