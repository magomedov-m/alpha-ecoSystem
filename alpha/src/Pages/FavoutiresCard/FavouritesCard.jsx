import React from "react";
import style from './FavouritesCard.module.sass'
// import user

export default function FavouritesCard() {
  return (
    <div className={style.favourites}>
      <div className={style.favourites_card_return}>
        <a href="/">
          <img src="https://img.icons8.com/?size=50&id=cDx9hF2Mr4fv&format=png" />
        </a>
      </div>

    </div>
  );
}
