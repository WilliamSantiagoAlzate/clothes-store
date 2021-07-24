// Icons
import Search from '../../assets/svgs/Icon ionic-ios-search.svg';

export const SearchInput = () => {
  return (
    <div className="search-input">
      <input type="text" placeholder="Buscar aquí producto" />
      <div className="search-input__icon">
        <img src={Search} alt="Icono de lupa" />
      </div>
    </div>
  )
}