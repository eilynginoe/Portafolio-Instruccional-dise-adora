import React, { useEffect, useState } from "react";
import CardCarrusel from "../cardCarrusel/cardCarrusel";
import style from "./carrusel.module.css";

function Carrusel() {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cargar tarjetas desde db.json
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("./data/db.json");
        const data = await response.json();
        setCards(data.cards);
      } catch (error) {
        console.error("Error al cargar tarjetas:", error);
      }
    };

    fetchCards();
  }, []);

  // Controladores de navegación
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, cards.length - 1)
    );
  };

  return (
    <div className={style.carruselWrapper}>
      {cards.length > 0 ? (
        <>
          {/* Botón Anterior */}
          <button
            className={`${style.navButton} ${style.prevButton}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            {"<"}
          </button>

          {/* Contenedor del carrusel */}
          <div className={style.carrusel}>
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={style.cardContainer}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <CardCarrusel
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  items={card.items}
                  alternateText={card.alternateText}
                  isBlocked={index >= cards.length - 3} // Bloquear las últimas 3 tarjetas
                />
              </div>
            ))}
          </div>

          {/* Botón Siguiente */}
          <button
            className={`${style.navButton} ${style.nextButton}`}
            onClick={handleNext}
            disabled={currentIndex === cards.length - 1}
          >
            {">"}
          </button>
        </>
      ) : (
        <p>Cargando tarjetas...</p>
      )}
    </div>
  );
}

export default Carrusel;








