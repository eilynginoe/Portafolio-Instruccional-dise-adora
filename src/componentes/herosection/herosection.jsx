// HeroSection.jsx
import styles from "./herosection.module.css";
import HeroImage from "./hero-img.webp";
import WhatsAppButton from "../boton/botonWhatsapp";

function HeroSection() {
    return (
        <section className={styles.introduccion}>
            <div className={styles.flex1}>
                <div className={styles.textoinit}>
                    <h2 className={styles.hdos}>Del contenido técnico a experiencias memorables</h2>
                    <h1 className={styles.huno}>Diseñar para Transformar</h1>
                    <p className={styles.parrafoinit}>¿Qué tal si cada experiencia de aprendizaje que diseñamos pudiera transformar una vida?</p>
                </div>
            </div>
            <div className={styles.flex2}>
                <div className={styles.contexto}>
                    <p>Mi enfoque va más allá de estructurar contenidos: se trata de crear conexiones profundas entre el conocimiento y la experiencia, desbloqueando el verdadero potencial de quienes aprenden.</p>
                </div>
            </div>
            <div className={styles.flex3}>
                <div className={styles.imagen}>
                    <img src={HeroImage} alt="Computadora y libros apilados" />
                </div>
            </div>
            <div className={styles.boton}>
                <WhatsAppButton
                    text="Escríbeme por WhatsApp"
                    customStyle={{
                        backgroundColor: '#F4BC43',
                        color: '#000000',
                    }}
                />
            </div>
        </section>
    );
}

export default HeroSection;

