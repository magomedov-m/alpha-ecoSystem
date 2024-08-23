import React from "react";
import Header from "../Header/Header";
import Input from "../Input/Input";
import Data from '../Data'
// import List from "../List/List";
import Card from "../Card/Card";
import style from "../Container/Container.module.sass";

export default function Container() {
  return (
    <div className={style.container}>
      <Header />
      <Input />
      {/* <List /> */}
      <Card />
      <Data />
    </div>
  );
}
