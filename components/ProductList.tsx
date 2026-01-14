'use client';

import { products } from '@/lib/data';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-500 max-w-xl">
              Explore our curated collection of high-quality swag and accessories.
            </p>
          </div>
          <a href="#" className="hidden md:block text-blue-600 font-medium hover:underline">
            View All Products &rarr;
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View All Products &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
