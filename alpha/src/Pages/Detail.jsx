import React from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { name } = useParams();
  console.log("detail:", name);
  return <div>Подробная информация о странах {name}</div>;
}
