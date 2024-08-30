import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import { useNavigate } from "react-router-dom";
import style from "../List/List.module.sass";
import Card from "../Card/Card";

export default function List() {
  const data = useSelector(selectData);
  const navigate = useNavigate();
  const handleCardClick = (movie) => {
    navigate(`/country/:${movie}`);
  };
  return (
    <div className={style.list}>
      {data.map((movie, idx) => (
        <Card
        movie={movie}
          onClick={() => handleCardClick(movie)}
          key={idx}
          img={movie.flags[0]}
          title={movie.name.official}
          capital={movie.capital}
          region={movie.region}
          population={movie.population}
        />
      ))}
    </div>
  );
}