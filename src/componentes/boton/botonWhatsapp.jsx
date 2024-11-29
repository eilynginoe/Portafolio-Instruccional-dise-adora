// botonWhatsapp.jsx
import styles from './botonWhatsapp.module.css';

function WhatsAppButton({ text, customStyle }) { // Renombramos la prop "style" a "customStyle"
  const whatsappURL = 'https://bit.ly/3AOgkzk';

  const handleWhatsAppClick = () => {
    window.open(whatsappURL, '_blank'); // Abre WhatsApp en una nueva pestaña
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className={styles.button} // Estilo base desde CSS
      style={customStyle} // Estilo dinámico pasado como prop
    >
      {text}
    </button>
  );
}

export default WhatsAppButton;

