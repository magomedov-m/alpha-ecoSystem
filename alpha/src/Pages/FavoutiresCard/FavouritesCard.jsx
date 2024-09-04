import React from "react";
import style from "./FavouritesCard.module.sass";
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
      <ul>
        {favElem.map((m, i) => (
          <li key={m.name}>{m.area}</li>
        ))}
      </ul>
    </div>
  );
}
