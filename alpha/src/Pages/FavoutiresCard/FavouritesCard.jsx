import React from "react";
import style from "./FavouritesCard.module.sass";
import Card from "../../components/Card/Card";
import ListStyle from '../../components/List/List.module.sass'
import { useSelector } from "react-redux";

export default function FavouritesCard() {
  const favElem = useSelector((state) => state.likedElem);
  console.log("favElem:", favElem);
  return (
    <div className={style.favourites}>
      <div className={style.favourites_card_return}>
        <a href="/">
          <img src="https://img.icons8.com/?size=50&id=cDx9hF2Mr4fv&format=png" />
        </a>
      </div>
      <div className="country_like">
      {favElem.map((movie) => (
        <Card
          movie={movie}
          key={movie.name}
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
