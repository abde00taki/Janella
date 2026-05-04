import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-800/60 to-brand-900/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/40 to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-brand-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cream-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <Sparkles size={14} className="text-brand-300" />
          <span className="text-white/90 text-xs font-latin tracking-wider uppercase">
            100% Natural Skincare
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          كريم التلو
          <br />
          <span className="text-brand-300">للبشرة الطبيعية</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-4 font-light leading-relaxed max-w-xl mx-auto">
          اكتشفي سر الجمال الطبيعي مع كريم التلو المصنوع من مكونات نقية 100%
        </p>

        <p className="text-sm text-white/60 font-latin mb-10">
          Crème de tallow 100% naturelle pour une peau éclatante
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#products" className="btn-primary text-base">
            تسوقي الآن
            <span className="mr-2 font-latin text-sm opacity-80">Shop Now</span>
          </a>
          <a href="#about" className="btn-secondary border-white/30 text-gray-900 hover:bg-white hover:text-black">
  اكتشفي المزيد
</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
