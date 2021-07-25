import { connect } from 'react-redux';
// Components
import { Hero } from '../components/Home/Hero/Hero';
import { Products } from '../components/Home/Products/Products';
import { SearchedProducts } from '../components/Home/SearchedProducts/SearchedProducts';

export const View = ({ showSearchedProcutsSection }) => (
  <main>
    {showSearchedProcutsSection ?
      <SearchedProducts />
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

export const HomeView = connect(mapStateToProps, null)(View);