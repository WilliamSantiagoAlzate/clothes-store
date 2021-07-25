import { useEffect } from "react";
import { connect } from "react-redux";
// Components
import { Carousel } from '../Carousel/Carousel';
import { Card } from '../Card/Card';
import { Spinner } from '../Spinner/Spinner';
// Actions
import { getProducts } from '../../redux/actions/products';

export const Component = ({ getProducts, products, loadingProducts }) => {
  // Get products
  useEffect(() => {
    getProducts();
  }, [getProducts])

  return (
    <section className="products">
      <h5 className="products__title">PRODUCTOS MÁS BUSCADOS</h5>
      {loadingProducts ? <Spinner color="black" /> :
        <Carousel>
          {products.map(product => (
            <div key={product.id}>
              <div className="products__content">
                <Card
                  title={product.title}
                  image={product.thumbnail}
                  price={product.price}
                  salePrice={product.original_price ? product.original_price : null}
                  discount={100 - ((100 * product.price) / product.original_price)}
                />
              </div>
            </div>

          ))}
        </Carousel>
      }
    </section>
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  getProducts() {
    dispatch(getProducts())
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  products: state.products.products,
  loadingProducts: state.products.loadingProducts,
});

export const Products = connect(mapStateToProps, mapDispatchToProps)(Component);