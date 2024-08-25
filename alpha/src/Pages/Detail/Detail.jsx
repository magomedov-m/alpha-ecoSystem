import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectData } from "../../redux/dataSlice";
import style from "../Detail/Detail.module.sass";

export default function Detail() {
  const { movie } = useParams();
  const data = useSelector(selectData);
  const currentCard = useEffect(() => {
    const getFetchData = async () => {
      currentCard = await axios.get(`https://restcountries.com/v3/name/${movie}`);
      console.log(currentCard.data);
    };
    getFetchData();
  }, []);
  console.log('Detail - data:', data);
  console.log('movie:', movie);
  console.log('Find:', currentCard)
  return (
    <div className={style.detail_card}>
      <h1 className={style.title}>Информация о {movie}</h1>

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
          <strong>Площадь:</strong> <span className={style.data}>{currentCard.area} км²</span>
        </p>
        <p>
          <strong>Население:</strong> <span className={style.data}>{currentCard.population}</span>
        </p>
        <p>
          <strong>Регион:</strong> <span className={style.data}>{currentCard.region}</span>
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
          <span className={style.data}>{currentCard.currencies.XCD.name} ({currentCard.currencies.XCD.symbol})</span>
        </p>
        <p>
          <strong>Код страны:</strong>{" "}
          <span className={style.data}>{currentCard.cca3}</span>
        </p>
      </div>

      <div className={style.info_section}>
        <h2 className={style.section_title}>Дополнительная информация</h2>
        <p>
          <strong>Флаг:</strong> <span className={style.data}>🇬🇮</span>
        </p>
        <p>
          <strong>Страны соседи:</strong>{" "}
          <span className={style.data}>{currentCard.borders}</span>
        </p>
        <p>
          <strong>Движение на дорогах:</strong>{" "}
          <span className={style.data}>{currentCard.car.side}</span>
        </p>
        <p>
          <strong>Коды ФИФА:</strong> <span className={style.data}>{currentCard.fifa}</span>
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
          <a href="https://goo.gl/maps/CEoHAs1t6byCBhHFA" target="_blank">
            Открыть карту
          </a>
        </p>
        <p>
          <strong>OpenStreetMap:</strong>{" "}
          <a
            href="https://www.openstreetmap.org/relation/1278736"
            target="_blank"
          >
            Открыть карту
          </a>
        </p>
      </div>
    </div>
  );
}
