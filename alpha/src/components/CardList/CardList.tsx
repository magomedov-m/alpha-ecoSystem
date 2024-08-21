import React from "react";
import { useGetCardsQuery } from "../../redux/cardSlice";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CardList = () => {
    const { data: cards = [] } = useGetCardsQuery();
    const likedCards = useSelector((state: RootState) => state.cards.likedCards)

    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.id} card={card} isLiked={likedCards.includes(card.id)} />
            ))}
        </div>
    )
}

export default CardList;