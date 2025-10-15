import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Clock, MapPin, Plus, Minus, Heart, ArrowLeft } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const RestaurantDetail = () => {
  const { id } = useParams();
  const { addToCart, favorites, toggleFavorite, items, updateQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock restaurant data
  const restaurant = {
    id: '1',
    name: 'Pizza Palace',
    image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
    coverImage: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg',
    rating: 4.5,
    deliveryTime: '25-30',
    deliveryFee: 2.99,
    minimumOrder: 15.00,
    description: 'Authentic Italian pizzas made with fresh ingredients and traditional recipes.',
    address: '123 Main Street, Chennai, CHE',
    phone: '+1 (555) 123-4567',
    tags: ['Italian', 'Pizza', 'Fast Food'],
  }
  

  const menuCategories = ['All', 'Pizza', 'Appetizers', 'Salads', 'Desserts', 'Beverages'];

  const menuItems = [
    {
      id: '1',
      name: 'Margherita Pizza',
      description: 'Fresh tomato sauce, mozzarella cheese, and basil',
      price: 12.99,
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      category: 'Pizza',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
    },
    {
      id: '2',
      name: 'Pepperoni Pizza',
      description: 'Classic pepperoni with mozzarella cheese',
      price: 14.99,
      image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
      category: 'Pizza',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
    },
    {
      id: '3',
      name: 'Garlic Bread',
      description: 'Fresh baked bread with garlic butter',
      price: 6.99,
      image: 'https://images.pexels.com/photos/461378/pexels-photo-461378.jpeg',
      category: 'Appetizers',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
    },
    {
      id: '4',
      name: 'Caesar Salad',
      description: 'Romaine lettuce, croutons, parmesan cheese',
      price: 9.99,
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg',
      category: 'Salads',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
    },
    {
      id: '5',
      name: 'Tiramisu',
      description: 'Classic Italian dessert with coffee and mascarpone',
      price: 7.99,
      image: 'https://images.pexels.com/photos/6412571/pexels-photo-6412571.jpeg',
      category: 'Desserts',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
    },
    {
      id: '6',
      name: 'Italian Soda',
      description: 'Refreshing sparkling water with fruit syrup',
      price: 3.99,
      image: 'https://images.pexels.com/photos/1187766/pexels-photo-1187766.jpeg',
      category: 'Beverages',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
    },
  ];

  const getItemQuantity = (itemId) => {
    const item = items.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleToggleFavorite = (itemId) => {
    toggleFavorite(itemId);
  };

  const filteredMenuItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      {/* Header */}
      <div className="relative">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute top-4 left-4">
          <Link
            to="/"
            className="flex items-center justify-center w-10 h-10 bg-white rounded-full text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
          </Link>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h1>
              <p className="text-gray-600 mb-4">{restaurant.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="font-medium">{restaurant.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={16} />
                  <span>{restaurant.deliveryTime} min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin size={16} />
                  <span>Delivery fee: ${restaurant.deliveryFee}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {restaurant.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="text-sm text-gray-600">
                <p className="mb-1">
                  <strong>Address:</strong> {restaurant.address}
                </p>
                <p className="mb-1">
                  <strong>Phone:</strong> {restaurant.phone}
                </p>
                <p>
                  <strong>Minimum Order:</strong> ${restaurant.minimumOrder}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Menu Categories */}
        <div className="py-6">
          <div className="flex overflow-x-auto space-x-4 pb-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="pb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Menu</h2>
          <div className="space-y-4">
            {filteredMenuItems.map((item) => {
              const quantity = getItemQuantity(item.id);
              
              return (
                <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 md:h-32">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                        <button
                          onClick={() => handleToggleFavorite(item.id)}
                          className={`p-2 rounded-full transition-all ${
                            favorites.includes(item.id)
                              ? 'bg-red-500 text-white'
                              : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                          }`}
                        >
                          <Heart size={16} fill={favorites.includes(item.id) ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">${item.price}</span>
                        
                        <div className="flex items-center space-x-3">
                          {quantity > 0 ? (
                            <div className="flex items-center space-x-3 bg-orange-50 rounded-full px-4 py-2">
                              <button
                                onClick={() => handleUpdateQuantity(item.id, quantity - 1)}
                                className="text-orange-500 hover:text-orange-600 transition-colors"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="text-orange-600 font-medium w-8 text-center">{quantity}</span>
                              <button
                                onClick={() => handleUpdateQuantity(item.id, quantity + 1)}
                                className="text-orange-500 hover:text-orange-600 transition-colors"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleAddToCart(item)}
                              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center space-x-2"
                            >
                              <Plus size={16} />
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;