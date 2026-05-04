import { Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-brand-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-latin">JS</span>
            </div>
            <div>
              <span className="font-bold text-lg">Janella Skin</span>
              <p className="text-gray-400 text-xs font-latin">Skincare Naturelle</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-brand-300 transition-colors">من نحن</a>
            <a href="#products" className="hover:text-brand-300 transition-colors">منتجاتنا</a>
            <a href="#contact" className="hover:text-brand-300 transition-colors">تواصل معنا</a>
          </div>

          {/* Contact */}
          <div className="text-sm text-gray-400 font-latin text-center md:text-left">
            <p>contact@janellaskin.com</p>
            <p className="text-gray-500 text-xs mt-1">+213 780 506 079</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p className="font-latin">
            &copy; {year} Janella Skin. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            صُنع بكل
            <Heart size={12} className="text-brand-400" />
            في الجزائر
          </p>
        </div>
      </div>
    </footer>
  );
}
