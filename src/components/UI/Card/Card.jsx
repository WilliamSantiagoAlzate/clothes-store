import { connect } from 'react-redux';
// Icons
import Cart from '../../../assets/img/cart-icon.PNG';
// Actions
import { addItem, removeItem } from '../../../redux/actions/cart';

export const Component = ({
  addItem,
  removeItem,
  productsIds,
  showRemoveButton,
  product
}) => (
  <article className="card">
    <main className="card__main">
      {product.original_price &&
        <div className="card__discount">
          -{Math.round(100 - ((100 * product.price) / product.original_price))}%
        </div>
      }
      <img src={product.thumbnail} alt={product.title} className="card__image" />
    </main>
    <footer className="card__footer">
      <section className="card__title">
        <p>{product.title}</p>
      </section>
      <div>
        <section className="card__price-container">
          <p className="card__price">
            ${new Intl.NumberFormat().format(product.price)}
          </p>
          {product.original_price && 
            <p className="card__sale-price">
              ${new Intl.NumberFormat().format(product.original_price)}
            </p>
          }
        </section>
        {showRemoveButton ?
          <button className="card__button card__button--remove" onClick={() => removeItem(product.id)}>
            Eliminar del carrito
          </button>
          :
          productsIds.includes(product.id) ?
            <button className="card__button card__button--added">
              Agregado al carrito
            </button>
            :
            <button className="card__button" onClick={() => addItem(product)}>
              <img src={Cart} alt="Icono de carro de compras" />
              Agregar al carrito
            </button>
        }
      </div>
    </footer>
  </article>
)

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  addItem(product) {
    dispatch(addItem({ product }))
  },
  removeItem(productId) {
    dispatch(removeItem({ productId }))
  },
});

// Map state from global state to component props
const mapStateToProps = state => ({
  productsIds: state.cart.productsIds,
});

export const Card = connect(mapStateToProps, mapDispatchToProps)(Component);