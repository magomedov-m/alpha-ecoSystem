import React from 'react'
import Header from '../Header/Header'
import Input from '../Input/Input'
import style from '../Container/Container.module.sass'
import Data from '../Data'

export default function Container() {
  return (
    <div className={style.container}>
        <Header />
        <Input />
        <Data />
    </div>
  )
}
