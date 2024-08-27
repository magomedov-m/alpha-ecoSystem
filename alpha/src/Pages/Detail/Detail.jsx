import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "../Detail/Detail.module.sass";

export default function Detail() {
  const { movie } = useParams();
  const [currentCard, setCurrentCard] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getFetchData = async () => {
      try {
        const resoponse = await axios.get(
          `https://restcountries.com/v3/name/${movie}`
        );
        setCurrentCard(resoponse.data[0]);
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      } finally {
        setLoading(false);
      }
    };
    getFetchData();
  }, [movie]);

  if (loading) {
    return <div>Загрузка...</div>;
  }
  console.log("currentCard", currentCard);
  console.log("movie-Detail:", movie);
  return (
    <div className={style.detail_card}>
      <a href="/"><img src="https://img.icons8.com/?size=50&id=cDx9hF2Mr4fv&format=png" /></a>
      <h1 className={style.title}>Информация о {movie}</h1>
      <img src={currentCard.flags[0]} className={style.detail_card__img} />
      <div className={style.info_section}>
        <h2 className={style.section_title}>Общие сведения</h2>
        <p>
          <strong>Название:</strong>{" "}
          <span className={style.data}>{currentCard.name.official}</span>
        </p>
        <p>
          <strong>Столица:</strong>{" "}
          <span className={style.data}>{currentCard.capital}</span>
        </p>
        <p>
          <strong>Площадь:</strong>{" "}
          <span className={style.data}>{currentCard.area} км²</span>
        </p>
        <p>
          <strong>Население:</strong>{" "}
          <span className={style.data}>{currentCard.population}</span>
        </p>
        <p>
          <strong>Регион:</strong>{" "}
          <span className={style.data}>{currentCard.region}</span>
        </p>
        <p>
          <strong>Подрегион:</strong>{" "}
          <span className={style.data}>{currentCard.subregion}</span>
        </p>
        <p>
          <strong>Часовой пояс:</strong>{" "}
          <span className={style.data}>{currentCard.timezones}</span>
        </p>
        <p>
          <strong>Валюта:</strong>{" "}
          <span className={style.data}>
            {currentCard.currencies ? Object.entries(currentCard.currencies).map(
              ([code, { name, symbol }]) => (
                <span key={code}>
                  {name} {'-'} ({symbol}){'; '}
                </span>
              )
            ) : <span>-</span>}
          </span>
        </p>
        <p>
          <strong>Код страны:</strong>{" "}
          <span className={style.data}>{currentCard.ccn3}</span>
        </p>
      </div>

      <div className={style.info_section}>
        <h2 className={style.section_title}>Дополнительная информация</h2>
        <p>
          <strong>Флаг:</strong> <span className={style.data}>{currentCard.flag}</span>
        </p>
        <p>
          <strong>Страны соседи:</strong>{" "}
          <span className={style.data}>
            {currentCard.borders ? Object.entries(currentCard.borders).map(([id, el]) => (
              <span key={id}>{el + ' '}</span>
            )) : <span>-</span>}
          </span>
        </p>
        <p>
          <strong>Движение на дорогах:</strong>{" "}
          <span className={style.data}>{currentCard.car.side}</span>
        </p>
        <p>
          <strong>Коды ФИФА:</strong>{" "}
          <span className={style.data}>{currentCard.fifa}</span>
        </p>
        <p>
          <strong>Альтернативные названия:</strong>{" "}
          <span className={style.data}>{currentCard.name.common}</span>
        </p>
      </div>

      <div className={style.info_section}>
        <h2 className={style.section_title}>Карта</h2>
        <p>
          <strong>Google Maps:</strong>{" "}
          <a href={currentCard.maps.googleMaps} target="_blank">
            Открыть карту
          </a>
        </p>
        <p>
          <strong>OpenStreetMap:</strong>{" "}
          <a
            href={currentCard.maps.openStreetMaps}
            target="_blank"
          >
            Открыть карту
          </a>
        </p>
      </div>
    </div>
  );
}
