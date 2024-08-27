import React, { useState } from "react";
import style from "../Input/Input.module.sass";

export default function Input() {
    const [inputValue, setInputValue] = useState('');
    console.log(inputValue);
  return (
    <div className={style.input}>
      <input onChange={(e) => setInputValue(e.target.value)} placeholder="Поиск временно не работает" className={style.input__field} value={inputValue} />
      {inputValue ? <img onClick={() => setInputValue('')} className={style.input__clear} src="https://cdn3.iconfinder.com/data/icons/user-interface-169/32/cross-512.png" alt="Очистить" /> : null}
    </div>
  );
}
