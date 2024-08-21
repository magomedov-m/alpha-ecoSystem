import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";

const FilterButton: React.FC = () => {
  const likedCards = useAppSelector(
    (state: RootState) => state.cards.likedCards
  );
  const [showLiked, setShowLiked] = React.useState(false);

  const handleFilter = () => {
    setShowLiked(!showLiked);
  };

  return (
    <div>
        <button onClick={handleFilter}>
            {showLiked ? 'Показать всё' : 'Показать залайканные'}
        </button>
        {showLiked && likedCards.map(cardId => (
            <div key={cardId}>{cardId}</div>
        ))}
    </div>
  )
};

export default FilterButton;