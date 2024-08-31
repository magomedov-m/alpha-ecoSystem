import React from "react";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import List from "../../components/List/List";
import style from "../HomePage/HomePage.module.sass";

export default function Container() {
  return (
    <div className={style.container}>
      <Header />
      <Input />
      <List />
    </div>
  );
}
