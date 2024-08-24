import React from "react";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import Data from '../components/Data'
import List from "../components/List/List";
import style from "../components/Container/Container.module.sass";

export default function Container() {
  return (
    <div className={style.container}>
      <Header />
      <Input />
      <List />
      <Data />
    </div>
  );
}
