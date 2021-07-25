import { CartHeader } from '../components/Layout/CartHeader/CartHeader';
import { Footer } from '../components/Layout/Footer/Footer';

export const CartLayout = ({ children }) => (
  <>
    <CartHeader />
    {children}
    <Footer />
  </>
)