import React from "react";
import style from "../Header/Header.module.sass";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.block}>
        <div className={style.header__title}>COUNTRIES</div>
        <div className={style.header__fav}>
          <Link to="/favourites">
            <img src="https://cdn2.iconfinder.com/data/icons/bright-webshop/512/favourites-512.png" />
          </Link>
        </div>
      </div>
    </div>
  );
}
