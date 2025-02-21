import React from 'react';
import { Link } from 'react-router-dom';
import { Cake, Star, Award, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?auto=format&fit=crop&q=80"
            alt="Bakery showcase"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">Welcome to Biva's Bakery</h1>
            <p className="text-xl mb-8">Indulge in our handcrafted cakes and pastries, made with love and the finest ingredients.</p>
            <Link to="/menu" className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition">
              View Our Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <Cake className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
            <p className="text-gray-600">Baked fresh every morning using premium ingredients</p>
          </div>
          <div className="text-center p-6">
            <Star className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
            <p className="text-gray-600">Premium ingredients and expert craftsmanship</p>
          </div>
          <div className="text-center p-6">
            <Clock className="w-12 h-12 mx-auto mb-4 text-amber-500" />
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick delivery to your doorstep</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Cakes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Chocolate Dream",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80",
                price: "$35"
              },
              {
                name: "Berry Bliss",
                image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80",
                price: "$40"
              },
              {
                name: "Vanilla Cloud",
                image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80",
                price: "$30"
              }
            ].map((cake, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img src={cake.image} alt={cake.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cake.name}</h3>
                  <p className="text-amber-500 font-bold">{cake.price}</p>
                  <button className="mt-4 w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}