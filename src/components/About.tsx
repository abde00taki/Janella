import { Leaf, Shield, Droplets, Heart } from 'lucide-react';

const benefits = [
  {
    icon: Leaf,
    title: 'مكونات طبيعية 100%',
    titleFr: '100% Ingrédients Naturels',
    desc: 'صُنع من دهن البقر العضوي المغذي بدون أي مواد كيميائية أو حافظات',
    descFr: 'Fabriqué à partir de graisse de bœuf biologique nutritive, sans produits chimiques ni conservateurs',
  },
  {
    icon: Shield,
    title: 'حماية عميقة للبشرة',
    titleFr: 'Protection Profonde',
    desc: 'يُشكّل حاجزاً طبيعياً يحمي البشرة من العوامل البيئية القاسية',
    descFr: 'Forme une barrière naturelle protégeant la peau des agressions environnementales',
  },
  {
    icon: Droplets,
    title: 'ترطيب مكثف',
    titleFr: 'Hydratation Intense',
    desc: 'يُرطّب البشرة بعمق ويحافظ على توازن الدهون الطبيعية',
    descFr: 'Hydrate la peau en profondeur et maintient l\'équilibre naturel des lipides',
  },
  {
    icon: Heart,
    title: 'مناسب للبشرة الحساسة',
    titleFr: 'Adapté aux Peaux Sensibles',
    desc: 'تركيبة لطيفة لا تُسبب تهيج البشرة، مثالية لجميع أنواع البشرة',
    descFr: 'Formule douce sans irritation, idéale pour tous les types de peau',
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-brand-500 text-xs font-latin tracking-[0.2em] uppercase mb-3">
            Pourquoi le Tallow?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            لماذا التلو؟
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            التلو هو دهن حيواني نقي يُستخدم منذ آلاف السنين في العناية بالبشرة.
            تركيبته الفريدة تشبه الزيوت الطبيعية التي تُنتجها بشرتنا، مما يجعله المرطب المثالي.
          </p>
          <p className="text-gray-400 text-sm font-latin mt-2 max-w-xl mx-auto">
            Le tallow est une graisse animale pure utilisée depuis des millénaires pour les soins de la peau.
            Sa composition unique ressemble aux huiles naturelles de notre peau.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group relative bg-gradient-to-br from-brand-50/80 to-white p-7 sm:p-8 rounded-2xl border border-brand-100/60 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-100/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                  <benefit.icon size={22} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-400 text-xs font-latin mb-3">
                    {benefit.titleFr}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                  <p className="text-gray-400 text-xs font-latin mt-2 leading-relaxed">
                    {benefit.descFr}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 bg-gradient-to-r from-brand-500 to-brand-600 rounded-2xl p-8 sm:p-10 text-center text-white">
          <p className="text-xl sm:text-2xl font-bold mb-2">
            التلو: سر الجمال الذي عرفته الأجيال
          </p>
          <p className="text-white/80 font-latin text-sm">
            Le Tallow : Le secret de beauté transmis par les générations
          </p>
        </div>
      </div>
    </section>
  );
}
