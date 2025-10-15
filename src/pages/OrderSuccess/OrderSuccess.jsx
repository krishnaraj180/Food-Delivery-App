import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Clock, MapPin, Phone } from 'lucide-react';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state;

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  if (!orderData) {
    return null;
  }

  const deliveryPartner = {
    name: 'Mike Johnson',
    phone: '+1 (555) 987-6543',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    vehicle: 'Honda Motorcycle',
    rating: 4.8,
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 md:pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Placed Successfully!</h1>
          <p className="text-gray-600">Thank you for your order. We're preparing your delicious meal.</p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="border-b pb-4 mb-4">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Order Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Order ID:</span>
                <span className="font-medium ml-2">{orderData.orderId}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Items:</span>
                <span className="font-medium ml-2">{orderData.items}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-medium ml-2">${orderData.total}</span>
              </div>
              <div>
                <span className="text-gray-600">Payment:</span>
                <span className="font-medium ml-2 text-green-600">Paid</span>
              </div>
            </div>
          </div>

          {/* Order Status */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order Status</h3>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle size={16} className="text-white" />
                </div>
                <span className="text-xs text-gray-600">Confirmed</span>
              </div>
              <div className="flex-1 h-1 bg-orange-200 mx-2">
                <div className="h-full bg-orange-500 w-1/3"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mb-2">
                  <Clock size={16} className="text-white" />
                </div>
                <span className="text-xs text-gray-600">Preparing</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <MapPin size={16} className="text-gray-400" />
                </div>
                <span className="text-xs text-gray-400">On the way</span>
              </div>
              <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle size={16} className="text-gray-400" />
                </div>
                <span className="text-xs text-gray-400">Delivered</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 text-orange-700">
              <Clock size={16} />
              <span className="font-medium">Estimated delivery time: 25-30 minutes</span>
            </div>
          </div>
        </div>

        {/* Delivery Partner Info */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Your Delivery Partner</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={deliveryPartner.image}
                alt={deliveryPartner.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{deliveryPartner.name}</h4>
                <p className="text-sm text-gray-600">{deliveryPartner.vehicle}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <div className="flex text-yellow-400">
                    {'★'.repeat(Math.floor(deliveryPartner.rating))}
                  </div>
                  <span className="text-sm text-gray-600">{deliveryPartner.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-2">
              <a
                href={`tel:${deliveryPartner.phone}`}
                className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                <Phone size={16} />
                <span>Call</span>
              </a>
              <button className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                <MapPin size={16} />
                <span>Track</span>
              </button>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/profile"
            className="flex-1 bg-orange-500 text-white text-center py-3 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 font-medium"
          >
            View Order History
          </Link>
          <Link
            to="/"
            className="flex-1 bg-white text-orange-500 border border-orange-500 text-center py-3 rounded-full hover:bg-orange-50 transition-all font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;