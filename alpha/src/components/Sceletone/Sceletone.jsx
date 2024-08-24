import React from "react";
import style from "../Card/Card.module.sass";

export default function Skeleton() {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <div className={style.skeleton} />
      </div>
      <div className={style.card__block}>
        <div className={style.skeleton} />
        <div className={style.skeleton} />
        <div className={style.skeleton} />
        <div className={style.skeleton} />
      </div>
    </div>
  );
}