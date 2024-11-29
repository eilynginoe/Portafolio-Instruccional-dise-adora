import React, { useState } from "react";
import style from "./cardCarrusel.module.css";
import candadoImage from "./candado.png";

function CardCarrusel({ image, title, description, items, alternateText, isBlocked }) {
  const [isAlternate, setIsAlternate] = useState(false);

  const handleToggleText = () => {
    if (!isBlocked) {
      setIsAlternate(!isAlternate); // Solo alterna si no está bloqueada
    }
  };

  return (
    <div className={`${style.card} ${isBlocked ? style.blockedCard : ""}`}>
      {/* Imagen del candado */}
      {isBlocked && (
        <img
          src={candadoImage}
          alt="Contenido bloqueado"
          className={style.blockedImage}
        />
      )}

      {/* Contenido visible en ambas tarjetas */}
      <img src={image} alt={title} className={style.cardImageSmall} />
      <h3 className={style.cardTitle}>{title}</h3>

      {/* Descripción o contenido alternativo */}
      {!isAlternate && (
        <div className={style.cardContent}>
          <p className={style.cardDescription}>{description}</p>
          <h4>{description ? "Características:" : ""}</h4>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {isAlternate && (
        <div className={style.cardDetails}>
          <h4>{alternateText.titulo}</h4>
          <p>{alternateText.ejemplo}</p>
          <p>{alternateText.escenario}</p>
          <h5>Aplicación Práctica:</h5>
          <ul>
            {alternateText.aplicacionPráctica.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
          <h5>Actividad Específica:</h5>
          <ul>
            {alternateText.actividadEspecifica.map((line, index) => {
              if (Array.isArray(line)) {
                return (
                  <ul key={index}>
                    {line.map((subItem, subIndex) => (
                      <li key={subIndex}>{subItem}</li>
                    ))}
                  </ul>
                );
              }
              return <li key={index}>{line}</li>;
            })}
          </ul>
        </div>
      )}

      {/* Botón alternar detalles */}
      <button
        className={style.cardButton}
        onClick={handleToggleText}
        disabled={isBlocked} // Desactiva el botón si está bloqueado
      >
        {isAlternate ? "Ocultar Detalles" : "Más Información"}
      </button>
    </div>
  );
}

export default CardCarrusel;







