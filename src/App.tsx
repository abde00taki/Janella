import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Products />
        <Contact />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

export default App;
