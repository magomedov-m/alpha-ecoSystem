import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import style from '../Card/Card.module.sass'

export default function Card() {
  const data = useSelector(selectData)
  console.log('Card:', data.map(el => el.flags[0]))
  return (
    <div className={style.card}>
      <div className={style.card__image}><img src={data[198].flags[0]} alt="Флаг страны" /></div>
      <div className={style.card__block}>
        <div className={style.card__title}>Название: Россия</div>
        <div className={style.card__capital}>Столица: Москва</div>
        <div className={style.card__region}>Регион: Евразия</div>
        <div className={style.card__population}>Население: 140 млн</div>
      </div>
    </div>
  );
}
