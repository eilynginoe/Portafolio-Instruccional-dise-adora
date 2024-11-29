import React from "react";
import style from "./botonAnimado.module.css";

const ButtonAnimado = ({ onClick, colors }) => {
  const [colorUno, colorDos, colorTres] = colors;

  return (
    <button className={style.botonanimado} onClick={onClick}>
      <span
        className={style.circle}
        style={{ backgroundColor: colorUno, animationDelay: "0s" }}
      ></span>
      <span
        className={style.circle}
        style={{ backgroundColor: colorDos, animationDelay: "0.5s" }}
      ></span>
      <span
        className={style.circle}
        style={{ backgroundColor: colorTres, animationDelay: "1s" }}
      ></span>
    </button>
  );
};

export default ButtonAnimado;








