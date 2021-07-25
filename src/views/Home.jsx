// Components
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { Hero } from '../components/Hero/Hero';
import { Products } from '../components/Products/Products';
import { Footer } from '../components/Footer/Footer';

export const HomeView = () => (
  <>
    <Header />
    <Menu />
    <main>
      <Hero />
      <Products />
    </main>
    <Footer />
  </>
)