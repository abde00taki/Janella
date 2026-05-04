import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'من نحن', labelFr: 'À propos' },
    { href: '#products', label: 'منتجاتنا', labelFr: 'Produits' },
    { href: '#contact', label: 'تواصل معنا', labelFr: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-400 to-brand-500 flex items-center justify-center shadow-md group-hover:shadow-brand-200 transition-shadow">
              <span className="text-white font-bold text-sm font-latin">JS</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-bold text-lg tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Janella
              </span>
              <span className={`text-[10px] font-latin tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-brand-500' : 'text-brand-200'}`}>
                Skin
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-500 ${
                  scrolled ? 'text-gray-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Cart + Mobile Menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={openCart}
              className={`relative p-2.5 rounded-full transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? 'bg-brand-50 text-brand-600 hover:bg-brand-100'
                  : 'bg-white/15 text-white hover:bg-white/25'
              }`}
              aria-label="فتح السلة"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -left-1 w-5 h-5 bg-brand-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-[scaleIn_0.2s_ease-out]">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2.5 rounded-full transition-all ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md border-t border-brand-100 px-4 py-4 space-y-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-brand-600 hover:bg-brand-50 rounded-xl transition-colors text-sm font-medium"
            >
              <span>{link.label}</span>
              <span className="text-gray-400 text-xs font-latin mr-2">{link.labelFr}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
