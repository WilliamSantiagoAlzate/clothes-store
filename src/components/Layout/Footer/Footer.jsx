import { useState, useEffect } from 'react';
// Custom hooks
import { useWindowSize } from '../../../customHooks/useWindowSize';
// Icons
import Facebook from '../../../assets/svgs/facebook.svg';
import Twitter from '../../../assets/svgs/twitter.svg';
import Instagram from '../../../assets/svgs/instagram.svg';
import Youtube from '../../../assets/svgs/youtube.svg';

export const Footer = () => {
  const { width } = useWindowSize()
  const [collapsePolicy, setCollapsePolicy] = useState(true); 
  const [collapseAbout, setCollapseAbout] = useState(true);

  useEffect(() => {
    if (width < 1024) {
      setCollapsePolicy(true);
      setCollapseAbout(true);
    } else {
      setCollapsePolicy(false);
      setCollapseAbout(false);
    }
  }, [width])

  return (
    <footer className="footer">
      <section className="footer__container">
        <section className="footer__section">
          <div className="footer__title">
            <h5>POLÍTICAS</h5>
            <button onClick={() => setCollapsePolicy(!collapsePolicy)}>
              {collapsePolicy ? '+' : '-'}
            </button>
          </div>
          <ul className={collapsePolicy ? 'footer__list footer__list--collapsed' : 'footer__list'}>
            <li className="footer__item">Políticas de privacidad</li>
            <li className="footer__item">Políticas de cambio</li>
            <li className="footer__item">Políticas de envío</li>
            <li className="footer__item">Términos y condiciones</li>
            <li className="footer__item">Responsabilidad social</li>
          </ul>
        </section>
        <section className="footer__section">
          <div className="footer__title">
            <h5>SOBRE NOSOTROS</h5>
            <button onClick={() => setCollapseAbout(!collapseAbout)}>
              {collapseAbout ? '+' : '-'}
            </button>
          </div>
          <ul className={collapseAbout ? 'footer__list footer__list--collapsed' : 'footer__list'}>
            <li className="footer__item">Encuentra tu tienda</li>
            <li className="footer__item">Contáctanos</li>
            <li className="footer__item">Trabaja con nosotros</li>
          </ul>
        </section>
        <section className="footer__section">
          <div className="footer__title footer__title--social-media">
            <h5>SÍGUENOS EN:</h5>
          </div>
          <ul className="footer__social-media">
            <li className="footer__icon">
              <img src={Facebook} alt="Icono de Facebook" />
            </li>
            <li className="footer__icon">
              <img src={Twitter} alt="Icono de Twitter" />
            </li>
            <li className="footer__icon">
              <img src={Instagram} alt="Icono de Instagram" />
            </li>
            <li className="footer__icon">
              <img src={Youtube} alt="Icono de Youtube" />
            </li>
          </ul>
        </section>
      </section>
      <section className="copyright">
        <p>© Copyright Colombia. Todos los derechos reservados</p>
      </section>
    </footer>
  )
}