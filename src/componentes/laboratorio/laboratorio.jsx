import style from "./laboratorio.module.css";
import FlechaLab from "./flecha-suave.webp";
import WhatsAppButton from "../boton/botonWhatsapp";
import Carrusel from "../carrusel/carrusel";

function Laboratorio() {
    return (
        <section className={style.introduccion_Lab}>

            <div className={style.conversacion_inicial_Lab}>
                <p>¿Y si reimaginamos el futuro del aprendizaje?</p>
                <p>
                    Me encanta jugar con ideas que sacuden lo establecido. En este rincón de mi portafolio, he dejado volar mi imaginación mezclando lo mejor del storytelling, los secretos de la economía del comportamiento y todo lo que he aprendido sobre cómo funciona nuestra mente (¡sí, incluidos esos sesgos que nos hacen tan humanos!).
                </p>
                <p>
                    ¿El resultado? Un carrusel de ideas frescas que podrían transformar la manera en que diseñamos experiencias de aprendizaje.
                </p>
                <p>
                    No son solo conceptos sacados de la nada - cada idea está construida sobre bases sólidas de investigación y experiencia, pero con ese toque de audacia que nos hace pensar "¿y por qué no?".
                </p>
                <p>
                    Te abro las puertas de mi laboratorio de ideas, donde cada propuesta desafía los límites de lo convencional. Porque el futuro del aprendizaje no solo se predice... ¡se diseña! ¿Estás listo para lo que viene?
                </p>
            </div>

            <div className={style.carrusel_rediseño}>
                <h2 className={style.titulo_carrusel_rediseño}>Innovaciones Futuras en el Diseño Instruccional: Un Laboratorio de Ideas</h2>
                <div className={style.botones}>
                    <Carrusel/>
                 </div>
            </div>

            <div className={style.llamado_accion_Lab}>
                <p >Las ideas más interesantes están bajo llave 🔐 ¿Por qué? Porque la verdadera innovación merece una conversación en vivo. ¿Quieres acceso completo a este laboratorio de ideas? Mándame un mensaje y te cuento mucho más.
                </p>
                <img src={FlechaLab} alt="flecha decorativa" />
            </div>

            <div className={style.boton}>
            <WhatsAppButton
                    text="Explora más"
                    customStyle={{
                        backgroundColor: '#353534',
                        color: '#FFFFFF',
                    }}
                />
            </div>

        </section>
    )
}

export default Laboratorio;