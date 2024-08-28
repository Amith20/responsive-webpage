// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-purple-700">ShopDigest</h1>
          <div className="ml-4 hidden md:block">
            <select className="text-sm text-black border-none">
              <option>Shopify</option>
            </select>
          </div>
        </div>
        <nav className="hidden md:flex space-x-16 text-sm">
          <a href="#" className="text-black hover:underline">Features</a>
          <a href="#" className="text-black hover:underline">Marketplace</a>
          <a href="#" className="text-black hover:underline">Company</a>
          <a href="#" className="text-black hover:underline">Team</a>
          <a href="#" className="text-black hover:underline">Contact</a>
        </nav>
        <div className="flex space-x-2">
          <button className="text-purple-700 border border-purple-700 px-4 py-2 rounded-md hidden sm:block">Login</button>
          <button className="bg-purple-700 text-white px-4 py-2 rounded-md hidden sm:block">Add post ➔</button>
        </div>
        <div className="md:hidden">
          <button className="text-black">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
