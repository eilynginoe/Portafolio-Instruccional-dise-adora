import React, { useState } from "react";
import style from "./proyecto3.module.css"; // Aplica estilos específicos
import ImgProyecto3 from "./proyecto-3.webp"
import ButtonAnimado from "../botonAnimado/botonAnimado";

function Proyecto3() {

    // Estados para controlar los textos
    const [mostrarTextoAlternativoFase1, setMostrarTextoAlternativoFase1] = useState(false);
    const [mostrarTextoAlternativoFase2, setMostrarTextoAlternativoFase2] = useState(false);
    const [mostrarTextoAlternativoFase3, setMostrarTextoAlternativoFase3] = useState(false);
    const [mostrarTextoAlternativoFase4, setMostrarTextoAlternativoFase4] = useState(false);

    return (
        <>
            <article>
                <div className={style.introproyect3}>
                    <img src={ImgProyecto3} />
                    <h2 className={style.titleproyect3}>Curso: Marketing Digital para Emprendedores</h2>

                    <p className={style.parrafoproyect3}>Influencias: ABP  CLE </p>
                </div>
                <div className={style.fase1}>
                    <div className={style.centrarbotonanimado}>
                        <div className={style.titlefase}>
                            <h2>Fase 1: Reto o Contexto</h2>
                        </div>

                        {/* Renderización condicional */}
                        {mostrarTextoAlternativoFase1 ? (
                            <p className={style.parrafoproyect3}>
                                Objetivo: Capacitar a emprendedores en marketing digital para que puedan promocionar y posicionar sus negocios de manera efectiva en el mercado digital. Siguiendo un análisis inicial bajo el modelo ADDIE, se identificó la necesidad de mejorar las habilidades de marketing digital en emprendedores, quienes requieren herramientas prácticas para comunicar su propuesta de valor y definir correctamente su audiencia.
                            </p>
                        ) : (
                            <ul className={style.listaProyecto}>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Objetivo: Capacitar a los emprendedores en marketing digital para que puedan promocionar y posicionar sus negocios de manera efectiva en el mercado digital.
                                    </p>
                                </li>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Personas interesadas en emprender y que deseen aprender a utilizar herramientas de marketing digital para impulsar su negocio, sin necesidad de experiencia previa en marketing.
                                    </p>
                                </li>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Limitación o necesidad: El marketing digital es clave para que los negocios ganen visibilidad y crezcan, pero muchos emprendedores carecen del conocimiento necesario para usar estas herramientas de manera efectiva, limitando su competitividad en mercados digitales. Este curso busca cubrir esa brecha, enseñando a los emprendedores a aplicar estrategias de marketing digital eficaces, desde segmentación de audiencias hasta la creación de campañas que comuniquen su propuesta de valor.
                                    </p>
                                </li>
                            </ul>
                        )}
                    </div>
                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase1((prev) => !prev)}
                        colors={["#F2B121", "#F6D17F", "#F4E4BF"]}
                    />
                </div>

                <div className={style.fase2}>
                    <div className={style.centrarbotonanimado}>
                        <div className={style.titlefase}>
                            <h2>Fase 2: Estrategia de Diseño</h2>
                        </div>

                        {mostrarTextoAlternativoFase2 ? (
                            <p className={style.parrafoproyect3}>
                                Metodología: Para estructurar las actividades y fomentar una participación activa, se utilizaron principios del modelo CLE de Jonassen, que permite a los emprendedores aplicar sus conocimientos en situaciones reales, y del modelo ASSURE, el cual facilita la adaptación de las actividades al perfil de aprendizaje de los participantes.
                            </p>
                        ) : (
                            <ul className={style.listaProyecto}>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Metodología: Enfoque práctico basado en proyectos, estudios de caso y actividades aplicables.
                                    </p>
                                </li>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Enfoque pedagógico: Método CLE de Jonassen, que fomenta la aplicación de conocimientos en situaciones reales y la resolución de problemas específicos del mundo del marketing digital.
                                    </p>
                                </li>
                            </ul>
                        )}
                    </div>
                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase2((prev) => !prev)}
                        colors={["#F2B121", "#F6D17F", "#F4E4BF"]}
                    />
                </div>

                <div className={style.fase3}>
                    <div className={style.centrarbotonanimado}>
                        <div className={style.titlefase}>
                            <h2>Fase 3: Solución Creativa</h2>
                        </div>

                        {mostrarTextoAlternativoFase3 ? (
                            <p className={style.parrafoproyect3}>
                                Elementos innovadores: Las actividades están diseñadas con base en el modelo de Aprendizaje Basado en Problemas (ABP), de modo que los emprendedores puedan trabajar en la resolución de desafíos de marketing digital que simulan situaciones reales, aplicando el conocimiento en contextos que reflejan el entorno actual del mercado digital.
                            </p>
                        ) : (
                            <ul className={style.listaProyecto}>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Elementos innovadores: Actividades colaborativas como creación de modelos visuales, desarrollo de campañas en redes sociales, y realización de infografías de estrategias.
                                    </p>
                                </li>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Actividades prácticas que se centran en la aplicación de técnicas de SEO, SEM, marketing de contenidos y redes sociales.
                                    </p>
                                </li>
                            </ul>
                        )}
                    </div>
                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase3((prev) => !prev)}
                        colors={["#F2B121", "#F6D17F", "#F4E4BF"]}
                    />
                </div>

                <div className={style.fase4}>
                    <div className={style.centrarbotonanimado}>
                        <div className={style.titlefase}>
                            <h2>Fase 4: Resultados y Aprendizajes</h2>
                        </div>

                        {mostrarTextoAlternativoFase4 ? (
                            <>
                                <p className={style.parrafoproyect3}>
                                    Resultados cuantitativos: Se prevé que los participantes obtendrían una calificación mínima del 80% en evaluaciones de comprensión, y que al menos el 70% de los participantes presenten un informe final de aplicación.
                                </p>
                                <p className={style.parrafoproyect3}>
                                    Modelo de Evaluación: Para evaluar la efectividad del curso, se utilizó el modelo de los Cuatro Niveles de Donald Kirkpatrick, que permite medir la satisfacción inicial (Nivel I), el aprendizaje adquirido (Nivel II), el cambio de comportamiento en la aplicación del conocimiento (Nivel III), y los resultados en la efectividad de las estrategias de marketing aplicadas (Nivel IV). Para un análisis más profundo del impacto, se añadieron el modelo de J. Phillips, que evalúa el beneficio/costo y el ROI, y el modelo de E. Mouret, que mide la satisfacción del cliente final.
                                </p>
                            </>
                        ) : (
                            <ul className={style.listaProyecto}>
                                <li>
                                    <p className={style.parrafoproyect3}>
                                        Resultados cuantitativos: Se prevé que los participantes obtendrían una calificación mínima del 80% en evaluaciones de comprensión, y que al menos el 70% de los participantes presenten un informe final de aplicación.
                                    </p>
                                </li>
                            </ul>
                        )}
                    </div>
                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase4((prev) => !prev)}
                        colors={["#F2B121", "#F6D17F", "#F4E4BF"]}
                    />
                </div>

            </article>

        </>
    )
}

export default Proyecto3;