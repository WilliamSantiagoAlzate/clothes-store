import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Icons
import Search from '../../../assets/svgs/Icon ionic-ios-search.svg';
// Actions
import { searchProducts } from '../../../redux/actions/products';

export const Component = ({
  showSearchedProcutsSection, 
  searchProducts 
}) => {
  const [keyWord, setKeyWord] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyWord) {
      searchProducts(keyWord);
    }
  }

  useEffect(() => {
    if (!showSearchedProcutsSection) {
      setKeyWord('');
    }
  }, [showSearchedProcutsSection])

  return (
    <form className="search-input" onSubmit={onSubmit}>
      <input 
        type="text" 
        placeholder="Buscar aquí producto" 
        value={keyWord} 
        onChange={({ target }) => setKeyWord(target.value)}
      />
      <button className="search-input__button" type="submit">
        <img src={Search} alt="Icono de lupa" />
      </button>
    </form>
  )
}

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  searchProducts(keyWord) {
    dispatch(searchProducts({ keyWord }))
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  showSearchedProcutsSection: state.products.showSearchedProcutsSection,
});

export const SearchInput = connect(mapStateToProps, mapDispatchToProps)(Component);