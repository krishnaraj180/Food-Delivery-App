import React, { useState } from 'react';
import { User, Phone, Mail, MapPin, Clock, Star, ChevronRight, Edit } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Profile = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  // Mock order history
  const orderHistory = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 24.99,
      items: ['Margherita Pizza', 'Garlic Bread'],
      restaurant: 'Pizza Palace',
    },
    {
      id: 'ORD-002',
      date: '2024-01-12',
      status: 'Delivered',
      total: 18.50,
      items: ['Classic Burger', 'Fries'],
      restaurant: 'Burger Kingdom',
    },
    {
      id: 'ORD-003',
      date: '2024-01-10',
      status: 'Cancelled',
      total: 32.00,
      items: ['Chicken Biryani', 'Raita'],
      restaurant: 'Spice Garden',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'text-green-600 bg-green-50';
      case 'Cancelled':
        return 'text-red-600 bg-red-50';
      case 'Processing':
        return 'text-yellow-600 bg-yellow-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'orders', name: 'Orders', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* User Info Card */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                <button className="text-orange-500 hover:text-orange-600 transition-colors flex items-center space-x-1">
                  <Edit size={16} />
                  <span>Edit</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <User size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Full Name</p>
                    <p className="font-medium text-gray-900">{user?.name || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone size={24} className="text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone Number</p>
                    <p className="font-medium text-gray-900">{user?.mobile || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">{user?.email || 'Not provided'}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <MapPin size={24} className="text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="font-medium text-gray-900">123 Main Street, Chennai ,CHE.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Account Actions</h2>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium text-gray-900">Change Password</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium text-gray-900">Notification Settings</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <span className="font-medium text-gray-900">Privacy Settings</span>
                  <ChevronRight size={20} className="text-gray-400" />
                </button>
                
                <button 
                  onClick={logout}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-red-50 rounded-lg transition-colors text-red-600"
                >
                  <span className="font-medium">Sign Out</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order History</h2>
              
              {orderHistory.length === 0 ? (
                <div className="text-center py-8">
                  <Clock size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No orders yet</h3>
                  <p className="text-gray-600">When you place orders, they'll appear here</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-900">{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.restaurant}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                            {order.status}
                          </span>
                          <p className="text-sm text-gray-600 mt-1">{order.date}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">Items: {order.items.join(', ')}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900">${order.total}</span>
                        <div className="flex space-x-2">
                          <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                            View Details
                          </button>
                          {order.status === 'Delivered' && (
                            <button className="text-gray-500 hover:text-gray-600 text-sm font-medium flex items-center space-x-1">
                              <Star size={14} />
                              <span>Rate</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;