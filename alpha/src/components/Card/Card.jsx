import React from "react";
import style from "../Card/Card.module.sass";

export default function Card({ img, title, capital, region, population }) {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <img src={img} alt="Флаг страны" />
      </div>
      <div className={style.card__block}>
        <div className={style.card__title}>Название: {title}</div>
        <div className={style.card__capital}>Столица: {capital}</div>
        <div className={style.card__region}>Регион: {region}</div>
        <div className={style.card__population}>Население: {population}</div>
      </div>
    </div>
  );
}
