import { useState, type FormEvent } from 'react';
import { X, Plus, Minus, Trash2, Send, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const updateField = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'مطلوب';
    if (!form.lastName.trim()) newErrors.lastName = 'مطلوب';
    if (!form.phone.trim()) newErrors.phone = 'مطلوب';
    else if (!/^0?\d{9,10}$/.test(form.phone.replace(/\s/g, ''))) newErrors.phone = 'رقم غير صالح';
    if (!form.address.trim()) newErrors.address = 'مطلوب';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const buildWhatsAppUrl = (): string => {
    const phone = '213780506079';
    const orderLines = items
      .map(
        item =>
          `- ${item.product.name} x${item.quantity} = ${(item.product.price * item.quantity).toLocaleString()} د.ج`
      )
      .join('\n');

    const message = `مرحبا! أود تقديم طلبية من Janella Skin:\n\n${orderLines}\n\nالمجموع: ${totalPrice.toLocaleString()} د.ج\n\nمعلومات العميل:\nالاسم: ${form.firstName} ${form.lastName}\nالهاتف: ${form.phone}\nالعنوان: ${form.address}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;

    const url = buildWhatsAppUrl();
    window.open(url, '_blank');
    clearCart();
    setForm({ firstName: '', lastName: '', phone: '', address: '' });
    closeCart();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-full sm:w-[420px] bg-white shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-brand-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center">
                <ShoppingBag size={18} />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-lg">سلة التسوق</h2>
                <p className="text-gray-400 text-xs font-latin">Shopping Cart</p>
              </div>
            </div>
            <button
              onClick={closeCart}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="إغلاق"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center mb-4">
                  <ShoppingBag size={32} className="text-brand-300" />
                </div>
                <p className="text-gray-500 font-medium mb-1">السلة فارغة</p>
                <p className="text-gray-400 text-sm font-latin">Your cart is empty</p>
              </div>
            ) : (
              <div className="p-4 space-y-3">
                {items.map(item => (
                  <div
                    key={item.product.id}
                    className="flex gap-4 p-4 bg-brand-50/50 rounded-xl border border-brand-100/40"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug truncate">
                        {item.product.name}
                      </h3>
                      <p className="text-brand-500 text-xs font-latin mt-0.5">
                        {item.product.nameFr}
                      </p>
                      <p className="text-gray-900 font-bold text-sm mt-2">
                        {(item.product.price * item.quantity).toLocaleString()} د.ج
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-100 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-sm font-semibold text-gray-900 w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-full bg-white border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-100 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="mr-auto p-1.5 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="حذف"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Order Form + Footer */}
          {items.length > 0 && (
            <div className="border-t border-brand-100 bg-white">
              {/* Total */}
              <div className="px-6 py-4 flex items-center justify-between bg-brand-50/50">
                <span className="text-gray-600 font-medium">المجموع</span>
                <span className="text-xl font-bold text-gray-900">
                  {totalPrice.toLocaleString()} د.ج
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 space-y-3">
                <p className="text-sm font-semibold text-gray-900 mb-1">
                  معلومات الطلب
                  <span className="text-gray-400 text-xs font-latin mr-2">Order Info</span>
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="الاسم *"
                      value={form.firstName}
                      onChange={e => updateField('firstName', e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition-colors ${
                        errors.firstName ? 'border-red-300 bg-red-50/30' : 'border-gray-200'
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="اللقب *"
                      value={form.lastName}
                      onChange={e => updateField('lastName', e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition-colors ${
                        errors.lastName ? 'border-red-300 bg-red-50/30' : 'border-gray-200'
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="رقم الهاتف *"
                    value={form.phone}
                    onChange={e => updateField('phone', e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition-colors font-latin ${
                      errors.phone ? 'border-red-300 bg-red-50/30' : 'border-gray-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <textarea
                    placeholder="العنوان الكامل *"
                    value={form.address}
                    onChange={e => updateField('address', e.target.value)}
                    rows={2}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm bg-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-brand-300 transition-colors resize-none ${
                      errors.address ? 'border-red-300 bg-red-50/30' : 'border-gray-200'
                    }`}
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3.5 rounded-xl font-semibold
                             hover:bg-green-600 active:scale-[0.98] transition-all duration-200
                             shadow-lg shadow-green-200/50 mt-2"
                >
                  <Send size={18} />
                  اطلبي الآن عبر واتساب
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
