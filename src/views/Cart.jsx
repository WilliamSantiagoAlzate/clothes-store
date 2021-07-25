import { Link } from "react-router-dom";
// Components
import { Cart } from '../components/Cart/Cart';

export const CartView = () => (
  <main className="cart">
    <div className="cart__button-container">
      <Link className="cart__back-button" to="/">VOLVER</Link>
    </div>
    <h5 className="cart__title">MI CARRITO</h5>
    <Cart />
  </main>
)