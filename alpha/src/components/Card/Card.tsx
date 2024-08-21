import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleLike, deleteCard } from "../../redux/cardSlice";
import { Card as CardType } from "../types";

interface CardProps {
  card: {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
  };
  isLiked: boolean;
}

const Card: React.FC<CardProps> = ({ card, isLiked }) => {
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(toggleLike(card.id));
  };

  const handleDelete = () => {
    dispatch(deleteCard(card.id));
  };

  return (
    <div className="card">
      <img src={card.imageUrl} alt={card.title} />
      <h3>{card.title}</h3>
      <p>{card.description.slice(0, 100)}...</p>
      <button onClick={handleLike}>{isLiked ? "❤️" : "🤍"}</button>
      <button onClick={handleDelete}>🧺</button>
      <Link to={`/card/${card.id}`}>Подробнее</Link>
    </div>
  );
};

export default Card;
