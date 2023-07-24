function Card({ image, title, content }) {
  return (
    <li className="concept">
    <img src={image} alt="TODO: TITLE" />
    <h2>{title}</h2>
    <p>{content}</p>
    </li>
  );
}

export default Card;