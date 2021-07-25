import { Header } from '../components/Layout/Header/Header';
import { Menu } from '../components/Layout/Menu/Menu';
import { Footer } from '../components/Layout/Footer/Footer';

export const Layout = ({ children }) => (
  <>
    <Header />
    <Menu />
    {children}
    <Footer />
  </>
)