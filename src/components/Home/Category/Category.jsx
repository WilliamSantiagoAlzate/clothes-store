export const Category = ({ image, title, alt }) => (
  <article className="category">
    <img src={image} alt={alt} className="category__image" />
    <h4 className="category__title">{title}</h4>
  </article>
)