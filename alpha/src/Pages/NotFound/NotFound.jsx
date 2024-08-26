import React from "react";
import style from "../NotFound/NotFound.module.sass";

export default function NotFound() {
  return (
    <div className={style.error_page} >
      <div className={style.error_content} >
        <h1 className={style.error_title} >404</h1>
        <p className={style.error_message} >Страница не найдена</p>
        <a href="/" className={style.error_link} >
          Вернуться на главную
        </a>
      </div>
    </div>
  );
}
