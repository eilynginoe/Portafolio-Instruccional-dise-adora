import styles from './colorbutton.module.css';

function ColorButton({ text, customStyle, imageUrl, onClick }) { // Renombramos la prop "style" a "customStyle"

    return (
        <button
            onClick={onClick}
            className={styles.button} // Estilo base desde CSS
            style={customStyle} // Estilo dinámico pasado como prop
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt="icon"
                    className={styles.buttonIcon} // Usamos una clase para la imagen
                />
            )}
            {text}
        </button>
    );
}

export default ColorButton;