import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, Plus, Heart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { addToCart, favorites, toggleFavorite } = useCart();

  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'chinese', name: 'Chinese', icon: '🥡' },
    { id: 'indian', name: 'Indian', icon: '🍛' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' },
  ];

  const restaurants = [
    {
      id: '1',
      name: 'Pizza Palace',
      image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
      rating: 4.5,
      deliveryTime: '25-30',
      category: 'pizza',
      tags: ['Italian', 'Fast Food'],
    },
    {
      id: '2',
      name: 'Burger Kingdom',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      rating: 4.2,
      deliveryTime: '20-25',
      category: 'burger',
      tags: ['American', 'Fast Food'],
    },
    {
      id: '3',
      name: 'Spice Garden',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
      rating: 4.7,
      deliveryTime: '30-35',
      category: 'indian',
      tags: ['Indian', 'Spicy'],
    },
    {
      id: '4',
      name: 'Dragon Wok',
      image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
      rating: 4.3,
      deliveryTime: '25-30',
      category: 'chinese',
      tags: ['Chinese', 'Asian'],
    },
  ];

  const popularDishes = [
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

  const handleAddToCart = (dish) => {
    addToCart(dish);
  };

  const handleToggleFavorite = (dishId) => {
    toggleFavorite(dishId);
  };

  const filteredRestaurants = selectedCategory === 'All' 
    ? restaurants 
    : restaurants.filter(restaurant => restaurant.category === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Delicious Food, Delivered Fast
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Order from your favorite restaurants and get it delivered to your doorstep
            </p>
            
            {/* Location */}
            <div className="flex items-center justify-center space-x-2 bg-white bg-opacity-20 rounded-lg px-4 py-2 max-w-md mx-auto">
              <MapPin size={20} />
              <span>Delivering to Chennai , CHE</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories */}
        <div className="py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Food Categories</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex-shrink-0 flex flex-col items-center space-y-2 p-4 rounded-xl transition-all ${
                  selectedCategory === category.name
                    ? 'bg-orange-500 text-white transform scale-105'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm font-medium whitespace-nowrap">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Dishes */}
        <div className="pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map((dish) => (
              <div key={dish.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all transform hover:scale-105">
                <div className="relative">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handleToggleFavorite(dish.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                      favorites.includes(dish.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart size={16} fill={favorites.includes(dish.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{dish.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{dish.restaurantName}</p>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{dish.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">${dish.price}</span>
                    <button
                      onClick={() => handleAddToCart(dish)}
                      className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors transform hover:scale-110"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurants */}
        <div className="pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Restaurants Near You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <Link 
                key={restaurant.id} 
                to={`/restaurant/${restaurant.id}`}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all transform hover:scale-105"
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span>{restaurant.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{restaurant.deliveryTime} min</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {restaurant.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Delivery Information */}
        <div className="pb-8">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl text-white p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Fast & Reliable Delivery</h2>
              <p className="text-lg opacity-90 mb-6">
                Get your favorite food delivered in 30 minutes or less
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Quick Delivery</h3>
                  <p className="opacity-90">30 minutes or less</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Real-time Tracking</h3>
                  <p className="opacity-90">Track your order live</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Top Quality</h3>
                  <p className="opacity-90">Fresh & delicious food</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;