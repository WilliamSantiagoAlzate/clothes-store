// Custom hooks
import { useWindowSize } from '../../../customHooks/useWindowSize';
// Components
import { Category } from '../Category/Category';
// Images
import Kids from '../../../assets/img/categorias-destacadas-moda-infantil.png';
import Protection from '../../../assets/img/categorias-destacadas-proteccion.png';
import BannerDesktop from '../../../assets/img/banner-principal-desktop.png';
import BannerMobile from '../../../assets/img/banner-principal-mobile.png';

export const Hero = () => {
  const { width } = useWindowSize();

  return (
    <section className="hero">
      {width < 1024 ?
        <img src={BannerMobile} alt="Banner principal con información de descuentos" className="hero__image" />
        :
        <img src={BannerDesktop} alt="Banner principal con una chica que esta de compras e información de descuentos" className="hero__image" />
      }
      <section className="categories">
        <Category title="MODA INFANTIL" image={Kids} alt="Dos niños posando para una foto" />
        <Category title="PROTECCIÓN" image={Protection} alt="Una familia sentada en un parque" />
      </section>
    </section>
  )
}