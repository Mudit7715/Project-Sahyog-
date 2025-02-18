import React, { useState } from 'react';

const Dashboard = () => {
  const [isMarketplaceOpen, setIsMarketplaceOpen] = useState(false);

  // Function to handle Live Chat redirect
  const handleLiveChat = () => {
    window.open('https://projectsahyoglivechat-production.up.railway.app/', '_blank'); // Replace with your live chat HTML URL
  };

  // Function to handle Business Directory redirect
  const handleBusinessDirectory = () => {
    window.open('https://f2c4-45-112-144-64.ngrok-free.app/', '_blank'); // Replace with your business directory HTML URL
  };

  const handleMarketplace = () => {
    setIsMarketplaceOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex justify-between items-center p-6 bg-gray-800">
        <h1 className="text-xl font-bold">सहयोग</h1>
        <ul className="flex space-x-8">
          <li className="hover:underline cursor-pointer">Features</li>
          <li className="hover:underline cursor-pointer">Customers</li>
          <li className="hover:underline cursor-pointer">Pricing</li>
          <li className="hover:underline cursor-pointer">Contact</li>
        </ul>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            YB
          </div>
        </div>
      </nav>

      <div className="px-10 py-6">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Live Chat Button */}
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={handleLiveChat}
          >
            <h3 className="text-2xl font-bold">LIVE CHAT</h3>
            <div className="text-4xl">💬</div>
          </div>

          {/* Business Directory Button */}
          <div
            className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={handleBusinessDirectory}
          >
            <h3 className="text-2xl font-bold">BUSINESS DIRECTORY</h3>
            <div className="text-4xl">👥</div>
          </div>

          {/* Marketplace Button */}
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={handleMarketplace}
          >
            <h3 className="text-2xl font-bold">MARKETPLACE</h3>
            <div className="text-4xl">🌐</div>
          </div>
        </div>

        {/* Revenue and Order Value Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white text-black p-6 rounded-lg">
            <h3>Revenue</h3>
            <p className="text-2xl">₹2,107</p>
            <p className="text-red-500">-1.18% From last month</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3>AVG. Order Value</h3>
            <p className="text-2xl">₹770.21</p>
            <p className="text-green-500">+3.16% From last month</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3>Overall Sales</h3>
            <p className="text-2xl">₹348,253.65</p>
            <p className="text-green-500">+13.02% This month</p>
          </div>
        </div>
      </div>

      {/* Fullscreen Popup for Marketplace */}
      {isMarketplaceOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-lg w-full h-full flex flex-col">
            <h2 className="text-2xl font-bold mb-4">Marketplace</h2>
            <div className="flex-grow">
              <p>The Marketplace is under construction...</p>
            </div>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsMarketplaceOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
