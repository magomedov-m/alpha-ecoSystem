import React from "react";
import style from "../Card/Card.module.sass";
import { useNavigate } from "react-router-dom";

export default function Card({
  img,
  title,
  capital,
  region,
  population,
  onClick,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    navigate(`/country/${title}`);
  };
  return (
    <div onClick={handleClick} className={style.card}>
      <div className={style.card__image}>
        <img src={img} alt={`Флаг ${title}`} />
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
