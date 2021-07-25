import { connect } from 'react-redux';
// Icons
import Close from '../../../assets/svgs/Icon ionic-ios-close-circle-outline.svg';
// Actions
import { closeMenu } from '../../../redux/actions/menu';

export const Component = ({ menuClassName, closeMenu }) => (
  <nav className={menuClassName}>
    <div className="menu__icon">
      <button className="menu__button" onClick={closeMenu}>
        <img src={Close} alt="Icono en forma de x para cerrar menu" />
      </button>
    </div>
    <ul className="menu__container">
      <li className="menu__item">Hombre</li>
      <li className="menu__item">Mujer</li>
      <li className="menu__item">Junior</li>
      <li className="menu__item">Niños</li>
      <li className="menu__item">Accesorios</li>
      <li className="menu__item">Ofertas</li>
    </ul>
  </nav>
) 

// Map Redux actions with dispatch funcion to component props
const mapDispatchToProps = dispatch => ({
  closeMenu() {
    dispatch(closeMenu())
  }
});

// Map state from global state to component props
const mapStateToProps = state => ({
  menuClassName: state.menu.menuClassName
});

export const Menu = connect(mapStateToProps, mapDispatchToProps)(Component);