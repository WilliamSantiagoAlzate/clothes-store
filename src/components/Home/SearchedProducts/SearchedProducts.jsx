import { connect } from "react-redux";
// Components
import { Spinner } from '../../UI/Spinner/Spinner';
import { Card } from '../../UI/Card/Card';

export const Component = ({
  searchedProducts,
  loadingSearchedProducts 
}) => (
  <section className="searched-products">
    {loadingSearchedProducts ? <Spinner color="black" /> :
      <section className="searched-products__container">
        {searchedProducts.map(product => (
          <div key={product.id} className="card__container">
            <Card product={product} />
          </div>
        ))}
      </section>
    }
  </section>
)

// Map state from global state to component props
const mapStateToProps = state => ({
  searchedProducts: state.products.searchedProducts,
  loadingSearchedProducts: state.products.loadingSearchedProducts,
});

export const SearchedProducts = connect(mapStateToProps, null)(Component);