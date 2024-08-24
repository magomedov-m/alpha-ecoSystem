import React from 'react'
import style from '../Header/Header.module.sass'

export default function Header() {
  return (
    <div className={style.header}>
        <div className={style.block}>
            <div className="header__title">COUNTRIES</div>
            <div className="header__toggle"><img src='https://cdn4.iconfinder.com/data/icons/social-media-and-branding/24/device_theme-512.png' /></div>
        </div>
    </div>
  )
}
