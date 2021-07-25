import { connect } from "react-redux";
// Helpers
import { getTotalToPay } from '../../helpers/getTotalToPay';
// Components
import { Card } from '../UI/Card/Card';

export const Component = ({ cartProducts }) => (
  cartProducts.length > 0 ?
    <>
      <section className="cart__total">
        <p>
          Total a pagar:
          ${new Intl.NumberFormat().format(getTotalToPay(cartProducts))}
        </p>
      </section>
      <section className="cart__container">
        {cartProducts.map(product => (
          <div key={product.id} className="card__container">
            <Card
              product={product}
              showRemoveButton
            />
          </div>
        ))}
      </section>
    </>
  :
  <section className="no-items">
    <p className="no-items__description">No cuentas con productos en el carrito, puedes agregar productos desde la sección de productos más buscados o utilizando la barra de consulta de productos.</p>
  </section>
)

// Map state from global state to component props
const mapStateToProps = state => ({
  cartProducts: state.cart.cartProducts,
});

export const Cart = connect(mapStateToProps, null)(Component);