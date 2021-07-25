import { connect } from 'react-redux';
// Components
import { Hero } from '../components/Home/Hero/Hero';
import { Products } from '../components/Home/Products/Products';
import { SearchedProducts } from '../components/Home/SearchedProducts/SearchedProducts';
// Actions
import { showHomeSection } from '../redux/actions/products';

export const View = ({ showSearchedProcutsSection, showHomeSection }) => (
  <main>
    {showSearchedProcutsSection ?
      <>
        <div className="cart__button-container">
          <button className="cart__back-button" onClick={showHomeSection}>VOLVER</button>
        </div>
        <SearchedProducts />
      </>
      :
      <>
        <Hero />
        <Products />
      </>
    }
  </main>
)

// Map state from global state to component props
const mapStateToProps = state => ({
  showSearchedProcutsSection: state.products.showSearchedProcutsSection,
});

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  showHomeSection() {
    dispatch(showHomeSection())
  },
});

export const HomeView = connect(mapStateToProps, mapDispatchToProps)(View);