// Components
import { SearchInput } from '../SearchInput/SearchInput';
// Icons
import Cart from '../../assets/svgs/icon-cart.svg';
import User from '../../assets/svgs/icon-user.svg';
import Menu from '../../assets/img/menu-icon.PNG';

export const Header = () => (
  <header className="header">
    <img src={Menu} alt="Icono del menu" className="header__menu"/>
    <h1 className="header__title">CLOTHESSTORE</h1>
    <div className="header__icon-cart">
      <img src={Cart} alt="Icono de un carrito de compras"/>
      <span>1</span>
    </div>
    <SearchInput />
    <img src={User} alt="Icono de un usuario" className="header__icon-user" />
    <button className="header__button">Iniciar sesión</button>
  </header>
);