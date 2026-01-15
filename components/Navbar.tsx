'use client';

import { useCart } from '@/context/CartContext';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              gTech<span className="text-blue-600">.</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">New Arrivals</Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">Apparel</Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">Accessories</Link>
            <Link href="#" className="text-gray-600 hover:text-black transition-colors">Collectibles</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-black transition-colors"
              id="nav-cart-btn"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-blue-600 rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link href="#" className="block py-2 text-gray-600 font-medium">New Arrivals</Link>
              <Link href="#" className="block py-2 text-gray-600 font-medium">Apparel</Link>
              <Link href="#" className="block py-2 text-gray-600 font-medium">Accessories</Link>
              <Link href="#" className="block py-2 text-gray-600 font-medium">Collectibles</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </>
  );
}
