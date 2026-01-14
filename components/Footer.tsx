import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 block">
              gTech<span className="text-blue-600">.</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              The one-stop shop for all your Google-themed needs. Built for testing, designed for fun.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Apparel</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Accessories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 gTech Store. This is a demo site.
          </p>
          <div className="flex space-x-6">
            {/* Social icons placeholders */}
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
            <div className="w-5 h-5 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
    </footer>
  );
}
