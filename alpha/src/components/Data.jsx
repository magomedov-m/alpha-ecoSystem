import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MAIN_COUNTRIES from "../assets/config";

export default function Data() {
  // здесь нужно прописать логику для занесения данных в Redux
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(MAIN_COUNTRIES + 'name/Russia').then(({data}) => setData(data))
  }, [])
  console.log(data);

  return (
    <div className="data_block">
      {data.map(el => <div>{el.altSpellings[2]}</div>)}
    </div>
  );
}
