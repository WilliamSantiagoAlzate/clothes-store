import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Components
import { SearchInput } from '../../UI/SearchInput/SearchInput';
// Icons
import Cart from '../../../assets/svgs/icon-cart.svg';
import User from '../../../assets/svgs/icon-user.svg';
import Menu from '../../../assets/img/menu-icon.PNG';
// Actions
import { openMenu } from '../../../redux/actions/menu';

export const Component = ({ openMenu, cartProducts }) => (
  <header className="header">
    <button className="header__menu" onClick={openMenu}>
      <img src={Menu} alt="Icono del menu"/>
    </button>
    <h1 className="header__title">CLOTHESSTORE</h1>
    <section className="header__options">
      <Link to="/carrito">
        <div className="header__icon-cart">
          <img src={Cart} alt="Icono de un carrito de compras"/>
          <span>{cartProducts.length}</span>
        </div>
      </Link>
      <img src={User} alt="Icono de un usuario" className="header__icon-user" />
      <button className="header__button">Iniciar sesión</button>
    </section>
    <SearchInput />
  </header>
);

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  openMenu() {
    dispatch(openMenu())
  },
});

// Map state from global state to component props
const mapStateToProps = state => ({
  cartProducts: state.cart.cartProducts,
});

export const Header = connect(mapStateToProps, mapDispatchToProps)(Component);