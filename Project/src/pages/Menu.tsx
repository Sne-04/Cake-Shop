import React from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Chocolate Dream Cake",
    description: "Rich chocolate layers with ganache filling",
    price: 35,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Berry Bliss",
    description: "Fresh berries with cream cheese frosting",
    price: 40,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Vanilla Cloud",
    description: "Light vanilla sponge with whipped cream",
    price: 30,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Red Velvet Dream",
    description: "Classic red velvet with cream cheese frosting",
    price: 38,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Lemon Sunshine",
    description: "Zesty lemon cake with citrus buttercream",
    price: 32,
    image: "https://images.unsplash.com/photo-1534766555764-ce878a5e3a2b?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Carrot Cake Delight",
    description: "Spiced carrot cake with nuts and cream cheese",
    price: 34,
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80"
  }
];

export default function Menu() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-amber-600">${product.price}</span>
                <button 
                  className="flex items-center space-x-2 bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}