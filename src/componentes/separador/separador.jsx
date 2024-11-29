import style from "./separador.module.css";
import Correo from "./correo.svg";
import LogoHero from "./logo-hero-section.webp";
import Whatsapp from "./whatsapp.svg";

function Separador() {
  // Función para redirigir al correo (con tu correo real)
  const handleCorreoClick = () => {
    window.location.href = "mailto:eilynginoe@gmail.com?subject=Asunto%20del%20Correo&body=Mensaje%20aquí";
  };

  // Función para redirigir a WhatsApp (con tu número real)
  const handleWhatsappClick = () => {
    window.location.href = "https://bit.ly/3AOgkzk";
  };

  return (
    <div className={style.introduccion}>
      
      {/* Ícono de correo con onClick */}
      <div className={style.corre} onClick={handleCorreoClick}>
        <img src={Correo} alt="Ícono de correo electrónico" />
      </div>
      
      {/* Logo */}
      <div className={style.logoherosection}>
        <img src={LogoHero} alt="Logo de la sección" />
      </div>
      
      {/* Ícono de WhatsApp con onClick */}
      <div className={style.whatsapp} onClick={handleWhatsappClick}>
        <img src={Whatsapp} alt="Ícono de WhatsApp" />
      </div>

    </div>
  );
}

export default Separador;
