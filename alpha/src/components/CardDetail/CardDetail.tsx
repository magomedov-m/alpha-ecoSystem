import { useParams, Link } from "react-router-dom";
import { useGetCardsQuery } from "../../redux/cardSlice";

const CardDetail: React.FC = () => {
    const {id} = useParams<{id: string}>();
    const {data: cards = [] } = useGetCardsQuery();
    const card = cards.find(card => card.id === id);

    if (!card) return <div>Загрузка...</div>;

    return (
        <div>
            <h2>{card.title}</h2>
            <img src={card.imageUrl} alt={card.title} />
            <p>{card.description}</p>
            <Link to='/'>Назад к списку карточек</Link>
        </div>
    );
};

export default CardDetail;