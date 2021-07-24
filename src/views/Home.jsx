// Components
import { Header } from '../components/Header/Header';
import { Menu } from '../components/Menu/Menu';
import { Hero } from '../components/Hero/Hero';
import { Footer } from '../components/Footer/Footer';

export const HomeView = () => (
  <>
    <Header />
    <Menu />
    <main>
      <Hero />
    </main>
    <Footer />
  </>
)