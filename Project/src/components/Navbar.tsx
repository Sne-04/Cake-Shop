import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Cake } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Cake className="h-8 w-8 text-amber-500" />
            <span className="font-bold text-xl">Biva's Bakery</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-amber-500">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-amber-500">Menu</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-amber-500">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/auth" className="text-gray-700 hover:text-amber-500">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}