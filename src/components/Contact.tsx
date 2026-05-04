import { Instagram, Music2, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-500 text-xs font-latin tracking-[0.2em] uppercase mb-3">
            Contactez-nous
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            تواصلي معنا
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            تابعينا على شبكاتنا الاجتماعية للبقاء على اطلاع بآخر العروض والنصائح
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Instagram */}
          <a
            href="https://instagram.com/janella.skincare"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 bg-gradient-to-br from-brand-50 to-white rounded-2xl border border-brand-100/60 hover:border-brand-300 hover:shadow-lg hover:shadow-brand-100/40 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-400 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
              <Instagram size={26} />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">انستغرام</p>
              <p className="text-brand-500 text-sm font-latin">@janella.skincare</p>
            </div>
          </a>

          {/* TikTok */}
          <div className="group flex items-center gap-5 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200/60 hover:border-gray-300 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white shadow-md">
              <Music2 size={26} />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">تيك توك</p>
              <p className="text-gray-400 text-sm font-latin">قريباً / Bientôt</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/212780506079"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-medium
                       hover:bg-green-600 active:scale-[0.97] transition-all duration-200
                       shadow-lg shadow-green-200/50 hover:shadow-green-300/50"
          >
            <MessageCircle size={22} />
            تواصلي عبر واتساب
            <span className="text-white/70 text-sm font-latin">WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
