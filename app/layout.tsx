import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'gTech Store',
  description: 'A dummy e-commerce store for Google Tag Manager testing, featuring Google-themed products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <GoogleTagManager gtmId="GTM-PRW3P2DX" />
      <body suppressHydrationWarning className="antialiased">
        <CartProvider>
          <Navbar />
          <CartDrawer />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
