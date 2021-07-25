import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Import icons
import PrevArrowIcon from '../../assets/svgs/prev-arrow.svg';
import NextArrowIcon from '../../assets/svgs/next-arrow.svg';

const PrevArrow = ({ onClick }) => (
  <button
    className="prev-arrow-button"
    onClick={onClick}
  >
    <img src={PrevArrowIcon} alt="Icono de flecha" />
  </button>
)

const NextArrow = ({ onClick }) => (
  <button
    className="next-arrow-button"
    onClick={onClick}
  >
    <img src={NextArrowIcon} alt="Icono de flecha" />
  </button>
)

export const Carousel = ({ children }) => (
  <Slider
    arrows={true}
    dots={false}
    infinite={true}
    speed={500}
    slidesToShow={3}
    slidesToScroll={3}
    nextArrow={<NextArrow />}
    prevArrow={<PrevArrow />}
    responsive={[{
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]}
  >
    {children}
  </Slider>
)
