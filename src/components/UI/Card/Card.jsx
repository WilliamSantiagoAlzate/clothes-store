import Cart from '../../../assets/img/cart-icon.PNG';

export const Card = ({
  image,
  title,
  price,
  salePrice,
  discount
}) => (
  <article className="card">
    <main className="card__main">
      {salePrice &&
        <div className="card__discount">
          -{Math.round(discount)}%
        </div>
      }
      <img src={image} alt={title} className="card__image" />
    </main>
    <footer className="card__footer">
      <section className="card__title">
        <p>{title}</p>
      </section>
      <div>
        <section className="card__price-container">
          <p className="card__price">${new Intl.NumberFormat().format(price)}</p>
          {salePrice && <p className="card__sale-price">${new Intl.NumberFormat().format(salePrice)}</p>}
        </section>
        <button className="card__button">
          <img src={Cart} alt="Icono de carro de compras" />
          Agregar al carrito
        </button>
      </div>
    </footer>
  </article>
)