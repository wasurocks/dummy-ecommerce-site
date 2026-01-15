'use client';

import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import AIImage from './AIImage';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="aspect-square relative bg-gray-100 rounded-2xl overflow-hidden mb-4">
        <AIImage
          prompt={product.image}
          alt={product.name}
          fill
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-900 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-black hover:text-white"
          aria-label={`Add ${product.name} to cart`}
          id={`add-to-cart-${product.id}`}
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      
      <div className="space-y-1">
        <p className="text-sm text-gray-500 font-medium">{product.category}</p>
        <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
}
