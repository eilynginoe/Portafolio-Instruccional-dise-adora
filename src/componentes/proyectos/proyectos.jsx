import React, { useState } from "react";
import style from "./proyectos.module.css";
import Minombre from "./Hola-mi-nombre-es.svg";
import NombreInicio from "./nombre-inicio.svg";
import FlechaInicio from "./flecha-inicial.webp";
import FlechaModerada from "./flecha-moderada.webp";
import WhatsAppButton from "../boton/botonWhatsapp";
import ColorButton from "../botonescolores/colorbutton";
import Aprender from "./aprender.webp";
import Poder from "./poder.webp";
import Graduate from "./graduate.webp";
import Proyecto1 from "../proyecto1/proyecto1";
import Proyecto2 from "../proyecto2/proyecto2";
import Proyecto3 from "../proyecto3/proyecto3";

function Proyectos() {
    const [proyectoActivo, setProyectoActivo] = useState(1);

    const mostrarProyecto = (proyecto) => {
        setProyectoActivo(proyecto);
    };

    return (
        <section className={style.introduccion}>
            <div className={style.presentacion}>
                <img src={Minombre} alt="Texto de presentacion" />
                <img src={NombreInicio} alt="Texto con el nombre" />
            </div>

            <div className={style.conversacioninicial}>
                <p className={style.parrafo_conversacion_inicial}>
                    Más que contarte lo que hago, quiero que lo descubras:
                    He reunido mis proyectos favoritos en este portafolio, cada uno pensado para inspirar, conectar y transformar el aprendizaje.
                </p>
                <p className={style.parrafo_conversacion_inicial}>
                    ¿Quieres descubrir cómo transformar contenidos complejos en aprendizajes que realmente conectan?, sigue leyendo y déjate sorprender.
                </p>
                <img src={FlechaInicio} alt="flecha decorativa" className={style.flechaInicio}/>
            </div>

            <div className={style.contexto_proyet}>
                <h2 className={style.titulo_proyet}>Proyectos en Acción</h2>
                <div className={style.botones}>
                    <ColorButton
                        text="Proyecto 1"
                        customStyle={{
                            backgroundColor: '#95CCC9',
                            color: '#000000',
                        }}
                        imageUrl={Aprender}
                        onClick={() => mostrarProyecto(1)}
                    />
                    <ColorButton
                        text="Proyecto 2"
                        customStyle={{
                            backgroundColor: '#FF9A91',
                            color: '#000000',
                        }}
                        imageUrl={Poder}
                        onClick={() => mostrarProyecto(2)}
                    />
                    <ColorButton
                        text="Proyecto 3"
                        customStyle={{
                            backgroundColor: '#F4BC43',
                            color: '#000000',
                        }}
                        imageUrl={Graduate}
                        onClick={() => mostrarProyecto(3)}
                    />
                </div>

                <div className={style.tabla}>
                   
                    {/* Proyecto 1 con transición de opacidad */}
                    <div
                        className={`${style.proyecto} ${
                            proyectoActivo === 1 ? style.proyectoVisible : style.proyectoOculto
                        }`}
                    >
                        {proyectoActivo === 1 && <Proyecto1 />}
                    </div>

                    {/* Proyecto 2 con transición de opacidad */}
                    <div
                        className={`${style.proyecto} ${
                            proyectoActivo === 2 ? style.proyectoVisible : style.proyectoOculto
                        }`}
                    >
                        {proyectoActivo === 2 && <Proyecto2 />}
                    </div>

                    {/* Proyecto 3 con transición de opacidad */}
                    <div
                        className={`${style.proyecto} ${
                            proyectoActivo === 3 ? style.proyectoVisible : style.proyectoOculto
                        }`}
                    >
                        {proyectoActivo === 3 && <Proyecto3 />}
                    </div>
                </div>
            </div>

            <div className={style.boton}>
                <p className={style.llamado_accion_proyet}>
                    — Eilyn, estos proyectos se ven geniales, pero me gustaría profundizar en las cartas descriptivas para comprender mejor el diseño y la secuencia de actividades en cada uno.
                </p>
                <p className={style.llamado_accion_proyet}>
                    — Claro, Si quieres profundizar y explorar cómo están diseñadas las actividades y la secuencia de cada curso, ¡haz clic en "Contáctame" y con gusto te comparto más detalles!
                </p>
                <img src={FlechaModerada} alt="flecha decorativa" />
            </div>

            <div className={style.boton}>
                <WhatsAppButton
                    text="¡Contáctame aquí!"
                    customStyle={{
                        backgroundColor: '#353534',
                        color: '#FFFFFF',
                    }}
                />
            </div>
        </section>
    );
}

export default Proyectos;



