import React, { useState } from 'react';
import { Search as SearchIcon, Filter, Star, Plus, Heart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');
  const { addToCart, favorites, toggleFavorite } = useCart();

  const categories = ['All', 'Pizza', 'Burgers', 'Chinese', 'Indian', 'Desserts', 'Beverages'];
  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Rating' },
    { value: 'delivery-time', label: 'Delivery Time' },
  ];

  // Mock data for search results
  const allItems = [
    {
      id: '1',
      name: 'Margherita Pizza',
      description: 'Fresh tomato sauce, mozzarella cheese, and basil',
      price: 12.99,
      image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
      rating: 4.6,
      category: 'Pizza',
      deliveryTime: '25-30',
    },
    {
      id: '2',
      name: 'Classic Burger',
      description: 'Beef patty with lettuce, tomato, and cheese',
      price: 8.99,
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg',
      restaurantId: '2',
      restaurantName: 'Burger Kingdom',
      rating: 4.4,
      category: 'Burgers',
      deliveryTime: '20-25',
    },
    {
      id: '3',
      name: 'Chicken Biryani',
      description: 'Fragrant rice with spiced chicken',
      price: 15.99,
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg',
      restaurantId: '3',
      restaurantName: 'Spice Garden',
      rating: 4.8,
      category: 'Indian',
      deliveryTime: '30-35',
    },
    {
      id: '4',
      name: 'Sweet & Sour Chicken',
      description: 'Crispy chicken with sweet and sour sauce',
      price: 11.99,
      image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg',
      restaurantId: '4',
      restaurantName: 'Dragon Wok',
      rating: 4.3,
      category: 'Chinese',
      deliveryTime: '25-30',
    },
    {
      id: '5',
      name: 'Pepperoni Pizza',
      description: 'Classic pepperoni with mozzarella cheese',
      price: 14.99,
      image: 'https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg',
      restaurantId: '1',
      restaurantName: 'Pizza Palace',
      rating: 4.5,
      category: 'Pizza',
      deliveryTime: '25-30',
    },
    {
      id: '6',
      name: 'Chocolate Cake',
      description: 'Rich chocolate layer cake',
      price: 6.99,
      image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
      restaurantId: '5',
      restaurantName: 'Sweet Treats',
      rating: 4.7,
      category: 'Desserts',
      deliveryTime: '15-20',
    },
  ];

  // Filter and sort items
  let filteredItems = allItems;

  if (searchQuery) {
    filteredItems = filteredItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.restaurantName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedCategory !== 'All') {
    filteredItems = filteredItems.filter(item => item.category === selectedCategory);
  }

  // Sort items
  filteredItems.sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'delivery-time':
        return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
      default:
        return 0;
    }
  });

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
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Search Food</h1>
          
          {/* Search Bar */}
          <div className="relative mb-6">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for food, restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            {/* Categories */}
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-500'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <Filter size={16} className="text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredItems.length} results found
            {searchQuery && <span> for "{searchQuery}"</span>}
            {selectedCategory !== 'All' && <span> in {selectedCategory}</span>}
          </p>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon size={40} className="text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No results found</h2>
            <p className="text-gray-600 mb-8">Try searching with different keywords or browse categories</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all transform hover:scale-105">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handleToggleFavorite(item.id)}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                      favorites.includes(item.id)
                        ? 'bg-red-500 text-white'
                        : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
                    }`}
                  >
                    <Heart size={16} fill={favorites.includes(item.id) ? 'currentColor' : 'none'} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.restaurantName}</p>
                  <p className="text-xs text-gray-500 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span>{item.rating}</span>
                    </div>
                    <span>{item.deliveryTime} min</span>
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
      </div>
    </div>
  );
};

export default Search;