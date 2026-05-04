import { ShoppingBag } from 'lucide-react';
import { useCart, type Product } from '../context/CartContext';

const products: Product[] = [
  {
    id: 1,
    name: 'كريم التلو للوجه - البشرة المختلطة',
    nameFr: 'Crème de Tallow - Peau Mixte',
    description: 'تركيبة خاصة للبشرة المختلطة تُوازن بين الترطيب وامتصاص الدهون. غنية بفيتامينات A و D و E لبشرة صحية ومتألقة.',
    descriptionFr: 'Formule spéciale pour peau mixte équilibrant hydratation et absorption des huiles. Riche en vitamines A, D et E.',
    price: 3500,
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    name: 'كريم التلو للوجه - البشرة الجافة',
    nameFr: 'Crème de Tallow - Peau Sèche',
    description: 'تركيبة مكثفة الترطيب مصممة خصيصاً للبشرة الجافة. تُغذّي البشرة بعمق وتُعيد لها نعومتها وحيويتها الطبيعية.',
    descriptionFr: 'Formule intensément hydratante conçue pour les peaux sèches. Nourrit la peau en profondeur.',
    price: 3500,
    image: 'https://media.istockphoto.com/id/1706804061/pt/foto/skin-care-routine-products.jpg?s=612x612&w=0&k=20&c=_ogaAZpWkwPc50uGMrXSSRg01D4q4QfTMWaE28m3qpQ=',
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat('ar-DZ', {
    style: 'decimal',
  }).format(price) + ' د.ج';
}

export default function Products() {
  const { addItem } = useCart();

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-cream-50 to-white">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-brand-500 text-xs font-latin tracking-[0.2em] uppercase mb-3">
            Nos Produits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            منتجاتنا
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            اكتشفي مجموعتنا من كريمات التلو الطبيعية المصنوعة بعناية لكل أنواع البشرة
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={() => addItem(product)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: () => void }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-brand-100/50 shadow-sm hover:shadow-xl hover:shadow-brand-100/30 transition-all duration-500">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-brand-600 text-xs font-latin font-semibold px-3 py-1.5 rounded-full">
          100% Natural
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {product.name}
          </h3>
          <p className="text-brand-400 text-xs font-latin mb-3">
            {product.nameFr}
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>
          <p className="text-gray-400 text-xs font-latin mt-2 leading-relaxed">
            {product.descriptionFr}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-brand-50">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              {formatPrice(product.price)}
            </span>
          </div>
          <button
            onClick={onAddToCart}
            className="inline-flex items-center gap-2 bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-medium
                       hover:bg-brand-600 active:scale-[0.97] transition-all duration-200
                       focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2"
          >
            <ShoppingBag size={16} />
            أضيفي للسلة
          </button>
        </div>
      </div>
    </div>
  );
}
