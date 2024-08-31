import Sceletone from "../Sceletone/Sceletone";
import { useNavigate } from "react-router-dom";
import style from "../List/List.module.sass";
import Card from "../Card/Card";
import { useGetCountriesQuery } from "../../redux/countriesApi";

export default function List() {
  const { data, isLoading } = useGetCountriesQuery();
  console.log('useGetCountriesQuery', data);
  const navigate = useNavigate();
  const handleCardClick = (movie) => {
    navigate(`/country/:${movie}`);
  };
  const skeletoneCount = 20;
  if (isLoading) {
    return (
      <div className={style.list}>
        {Array.from({ length: skeletoneCount }).map((_, idx) => (
          <Sceletone key={idx} />
        ))}
      </div>
    );
  }
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
