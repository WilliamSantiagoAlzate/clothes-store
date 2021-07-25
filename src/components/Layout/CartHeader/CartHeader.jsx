// Icons
import User from '../../../assets/svgs/icon-user.svg';

export const CartHeader = () => (
  <header className="header header--cart">
    <h1 className="header__title">CLOTHESSTORE</h1>
    <section className="header__options">
      <img src={User} alt="Icono de un usuario" className="header__icon-user" />
      <button className="header__button">Iniciar sesión</button>
    </section>
  </header>
);
