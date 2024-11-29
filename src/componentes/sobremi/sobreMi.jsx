import styles from "./sobreMi.module.css"; // Estilos específicos del componente
import FlechaSobreMi from "./flecha-azul.webp"
import Que_sigue_Img from "./que-sigue.svg"
import WhatsAppButton from "../boton/botonWhatsapp";

function SobreMi() {
    return (
        <section className={styles.sobreMi}>

            <div className={styles.conversacion_inicial_sobre_mi}>
                <p>Ufff! Hasta ahora hemos recorrido juntos un montón de ideas, proyectos y diseños que resumen lo mejor de mi trabajo. Pero deja que te ponga en contexto con un poco mas información sobre mi, porque al fin y al cabo de eso se trata este portafolio no? además de ser una muestra de lo que hago, debe mostrar tambien quién soy y qué me motiva a seguir creando.</p>

                <img src={FlechaSobreMi} alt="flecha decorativa" />
            </div>

            {/* Título principal */}
            <h2 className={styles.titulo}>Sobre Mí: Detrás de la Innovación</h2>

            {/* Sección: Camino hacia el Diseño Instruccional */}
            <section className={styles.seccion}>
                <h3 className={styles.subtitulo}>Mi Camino hacia el Diseño Instruccional</h3>
                <p>
                    Mi viaje en el diseño instruccional comenzó con una revelación personal: tras participar en diversos cursos profesionales, identifiqué una brecha significativa entre aprobar exámenes y realmente dominar el conocimiento para su aplicación práctica.
                </p>
                <p>
                    Esta experiencia fue el catalizador que despertó mi pasión por transformar la manera en que las personas aprenden.
                </p>
                <p>
                    La decisión de especializarme en diseño instruccional surgió de reconocer una necesidad crítica en el panorama educativo actual.
                </p>
                <p>
                    Desde la educación inicial hasta la formación profesional, existe un vasto campo de oportunidad para mejorar la calidad del aprendizaje.
                </p>
                <p>
                    Mi misión se centra en cerrar esa brecha entre la teoría y la práctica, creando experiencias de aprendizaje que verdaderamente transformen.
                </p>
            </section>

            {/* Sección: Enfoque Distintivo */}
            <section className={styles.seccion}>
                <h3 className={styles.subtitulo}>Mi Enfoque Distintivo</h3>
                <p>Mi aproximación al diseño instruccional se fundamenta en cinco pilares esenciales:</p>
                <ul className={styles.lista}>
                    <li><strong>Empatía:</strong> Conectando profundamente con las necesidades del aprendiz</li>
                    <li><strong>Innovación:</strong> Explorando nuevas formas de transmitir conocimiento</li>
                    <li><strong>Economía del comportamiento:</strong> Comprendiendo los factores que motivan el aprendizaje</li>
                    <li><strong>Curiosidad:</strong> Manteniendo vivo el deseo de descubrir</li>
                    <li><strong>Motivación:</strong> Impulsando el compromiso activo con el aprendizaje</li>
                </ul>
            </section>

            {/* Sección: Competencias y Herramientas */}
            <section className={styles.seccion}>
                <h3 className={styles.subtitulo}>Competencias y Herramientas</h3>
                <h4 className={styles.subSubtitulo}>Habilidades Técnicas</h4>
                <ul className={styles.lista}>
                    <li>Análisis de necesidades educativas</li>
                    <li>Creación de contenido didáctico</li>
                    <li>Diseño de experiencias de usuario</li>
                    <li>Manejo de herramientas digitales educativas</li>
                </ul>
                <h4 className={styles.subSubtitulo}>Herramientas que Potencian mi Trabajo</h4>
                <ul className={styles.lista}>
                    <li><strong>Canva:</strong> Creación de recursos visuales impactantes</li>
                    <li><strong>Genially:</strong> Desarrollo de contenido interactivo</li>
                    <li><strong>Mentimeter:</strong> Evaluación y engagement en tiempo real</li>
                </ul>
                <p>
                    Continuamente busco expandir mis horizontes, actualmente enfocándome en dominar Articulate 360 para crear experiencias de aprendizaje aún más inmersivas.
                </p>
            </section>

            {/* Sección: Frase y Filosofía */}
            <section className={styles.seccion}>
                <h3 className={styles.filosofia}>Mi Filosofía de Diseño</h3>
                <blockquote className={styles.cita}>
                    "Diseñar es conectar el conocimiento con la experiencia"
                </blockquote>
                <p>
                    Esta frase resume mi aproximación al diseño instruccional. Creo firmemente que la innovación en el aprendizaje significa atreverse a pensar y hacer las cosas de manera diferente para lograr un aprendizaje verdaderamente significativo, incluso cuando esto implique salir de lo convencional.
                </p>
            </section>

            {/* Sección: Impacto y Visión */}
            <section className={styles.seccion}>
                <h4 className={styles.subtitulo}>Impacto y Visión</h4>
                <p>
                    Mi objetivo final es simple pero poderoso: cuando un estudiante completa un curso que he diseñado, debe sentir no solo que ha adquirido conocimiento, sino que puede aplicarlo de manera autónoma y confiada.
                </p>
                <p>
                    El verdadero éxito se mide en la capacidad del aprendiz para trasladar lo aprendido a situaciones reales sin necesidad de apoyo adicional.
                </p>
                <p>
                    En constante evolución, mi compromiso es seguir innovando en el diseño de experiencias de aprendizaje que no solo eduquen, sino que inspiren y transformen.
                </p>
            </section>

            <section className={styles.que_sigue}>
                <img src={Que_sigue_Img} alt="texto decorativo" />
            </section>

            <div className={styles.sobreMi_cierre_conversacional}>
                <p>Creo que el futuro del aprendizaje se escribe en colaboración. Si algo de lo que viste aquí te inspiró, mándame un mensaje y hagamos que esa inspiración se convierta en acción.
                </p>
            </div>

            <div className={styles.boton}>
            <WhatsAppButton
                    text="Cuéntame tu idea, yo pongo el diseño"
                    customStyle={{
                        backgroundColor: '#353534',
                        color: '#FFFFFF',
                    }}
                />
            </div>


        </section>
    );
}

export default SobreMi;
