import { connect } from 'react-redux';
// Components
import { SearchInput } from '../../UI/SearchInput/SearchInput';
// Icons
import Cart from '../../../assets/svgs/icon-cart.svg';
import User from '../../../assets/svgs/icon-user.svg';
import Menu from '../../../assets/img/menu-icon.PNG';
// Actions
import { openMenu } from '../../../redux/actions/menu';
import { showHomeSection } from '../../../redux/actions/products';

export const Component = ({ openMenu, showHomeSection }) => (
  <header className="header">
    <button className="header__menu" onClick={openMenu}>
      <img src={Menu} alt="Icono del menu"/>
    </button>
    <button onClick={showHomeSection}>
      <h1 className="header__title">CLOTHESSTORE</h1>
    </button>
    <section className="header__options">
      <div className="header__icon-cart">
        <img src={Cart} alt="Icono de un carrito de compras"/>
        <span>1</span>
      </div>
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
  showHomeSection() {
    dispatch(showHomeSection())
  },
});

export const Header = connect(null, mapDispatchToProps)(Component);