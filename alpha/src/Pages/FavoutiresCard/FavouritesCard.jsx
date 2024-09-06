import React from "react";
import style from "./FavouritesCard.module.sass";
import Card from "../../components/Card/Card";
import ListStyle from '../../components/List/List.module.sass'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function FavouritesCard() {
  const navigate = useNavigate();
  const handle = (movie) => {
    navigate(`http://localhost:5173/country/:${movie}`)
  }
  const favElem = useSelector((state) => state.likedElem);
  console.log("favElem:", favElem);
  return (
    <div className={style.favourites}>
      <div className={style.favourites_card_return}>
        <a href="/">
          <img src="https://img.icons8.com/?size=50&id=cDx9hF2Mr4fv&format=png" />
        </a>
      </div>
      <div className={`${ListStyle.list} ${style}`}>
      {favElem.map((movie) => (
        <Card
        onClick={() => handle(movie.name.official)}
          movie={movie}
          key={movie.name.official}
          img={movie.flags[0]}
          title={movie.name.official}
          capital={movie.capital}
          region={movie.region}
          population={movie.population}
        />
      ))}
      </div>
    </div>
  );
}
