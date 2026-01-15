'use client';

import { motion } from 'motion/react';
import { Button } from './ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>New Collection 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Tech that <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Moves You.
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 max-w-lg leading-relaxed">
              Discover the latest Google-themed apparel, accessories, and collectibles. Designed for developers, by developers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="shadow-lg shadow-blue-500/20">
                Shop Now
              </Button>
              <Button size="lg" variant="outline">
                View Lookbook
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                Official Merch
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                24/7 Support
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[500px] w-full hidden md:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-violet-100 rounded-[2rem] transform rotate-3" />
            <div className="absolute inset-0 bg-gray-100 rounded-[2rem] overflow-hidden transform -rotate-3 shadow-2xl">
               <Image
                src="/images/hero.png"
                alt="Hero Image"
                fill
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg max-w-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  G
                </div>
                <div>
                  <p className="font-bold text-gray-900">Google Cloud Hoodie</p>
                  <p className="text-sm text-gray-500">Best Seller 🔥</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
