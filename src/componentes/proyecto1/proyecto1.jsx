import React, { useState } from "react";
import style from "./proyecto1.module.css"; // Aplica estilos específicos
import ImgProyecto1 from "./proyecto-1.webp"
import ButtonAnimado from "../botonAnimado/botonAnimado";

function Proyecto1() {

    // Estados para controlar los textos
    const [mostrarTextoAlternativoFase1, setMostrarTextoAlternativoFase1] = useState(false);
    const [mostrarTextoAlternativoFase2, setMostrarTextoAlternativoFase2] = useState(false);
    const [mostrarTextoAlternativoFase3, setMostrarTextoAlternativoFase3] = useState(false);
    const [mostrarTextoAlternativoFase4, setMostrarTextoAlternativoFase4] = useState(false);

    return (
        <>
            <article>
                <div className={style.introproyect1}>
                    <img src={ImgProyecto1} alt="Proyecto 1" />
                    <h2 className={style.titleproyect1}>Líderes Intraemprendedores:</h2>
                    <h3 className={style.subtitleproyect1}>“Potenciando el Talento de tu Equipo”</h3>
                    <p className={style.parrafoproyect1}>Influencias: ADDIE | ASSURE | ABP | 4C-ID</p>
                </div>

                {/* Fase 1 */}
                <div className={style.fase1}>
                    <div className={style.titlefase}>
                        <h2>Fase 1: Reto o Contexto</h2>
                    </div>

                    {/* Renderización condicional */}
                    {mostrarTextoAlternativoFase1 ? (
                        // Texto alternativo
                        <p className={style.parrafoproyect1}>
                            Objetivo: Capacitar a líderes de equipo en habilidades de intraemprendimiento para fomentar una cultura de innovación.
                            Basándose en un análisis de necesidades bajo el modelo ADDIE, se plantea la identificación de áreas donde la eficiencia y el pensamiento creativo en el proceso de mantenimiento correctivo podrían optimizarse.
                        </p>
                    ) : (
                        // Texto inicial
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Objetivo: Capacitar a los líderes de equipo en habilidades intraemprendedoras para que puedan impulsar la innovación y mejorar el rendimiento de sus equipos.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Público objetivo: Jefes y líderes de equipos de áreas técnicas, como mantenimiento.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Limitación o necesidad: Los líderes deben adquirir competencias para fomentar la autonomía, creatividad y pensamiento innovador en sus equipos, lo que impactará directamente en la mejora de los procesos y la eficiencia operativa.
                                </p>
                            </li>
                        </ul>
                    )}

                    {/* Botón para alternar texto */}
                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase1((prev) => !prev)}
                        colors={["#4A968E", "#88D0C9", "#D0EDEA"]}
                    />
                </div>

                <div className={style.fase2}>

                    <div className={style.titlefase}>
                        <h2>Fase 2: Estrategia de Diseño</h2>
                    </div>

                    {/* Renderización condicional */}
                    {mostrarTextoAlternativoFase2 ? (
                        <p className={style.parrafoproyect1}>
                            Metodología: Se propone una capacitación interactiva mediante estudios de caso y dinámicas grupales. Para estructurar las actividades y fomentar la participación activa, se sugiere emplear principios de los modelos ASSURE y 4C-ID, que permitirían adaptar los métodos a los líderes y asegurar una práctica progresiva en la construcción de habilidades.
                        </p>
                    ) : (
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Metodología: Capacitación práctica basada en estudios de caso reales, dinámicas grupales y actividades de resolución de problemas.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Enfoque pedagógico: Modelo 4C-ID, que permite desarrollar habilidades de liderazgo intraemprendedor mediante la práctica progresiva en contextos reales y la solución de problemas específicos del ámbito de mantenimiento.
                                </p>
                            </li>
                        </ul>
                    )}

                    {/* Botón para alternar texto */}
                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase2((prev) => !prev)}
                        colors={["#4A968E", "#88D0C9", "#D0EDEA"]}
                    />
                </div>

                <div className={style.fase3}>

                    <div className={style.titlefase}>
                        <h2>Fase 3: Solución Creativa</h2>
                    </div>

                    {mostrarTextoAlternativoFase3 ? (
                        <p className={style.parrafoproyect1}>
                            Elementos innovadores: Se contemplan talleres de análisis de casos de éxito, lluvia de ideas sobre oportunidades en el área de mantenimiento y actividades de reflexión en equipo.
                            Siguiendo el modelo de Aprendizaje Basado en Problemas (ABP), se sugiere incluir actividades en las que los líderes puedan resolver problemas cercanos a su entorno laboral, fortaleciendo así sus capacidades para liderar innovaciones.
                        </p>
                    ) : (
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Elementos innovadores: Talleres donde los líderes analizan casos de éxito de empresas similares y generan ideas para aplicarlas a su equipo. Se organizan sesiones de lluvia de ideas donde los líderes identifican oportunidades de mejora en el área de mantenimiento.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Adaptación para el usuario: Diseñado para que los líderes practiquen habilidades aplicables directamente en sus equipos, con enfoques en liderazgo emprendedor y mejora continua.
                                </p>
                            </li>
                        </ul>
                    )}

                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase3((prev) => !prev)}
                        colors={["#4A968E", "#88D0C9", "#D0EDEA"]}
                    />
                </div>

                <div className={style.fase4}>

                    <div className={style.titlefase}>
                        <h2>Fase 4: Resultados y Aprendizajes</h2>
                    </div>

                    {mostrarTextoAlternativoFase4 ? (
                        <>
                            <p className={style.parrafoproyect1}>
                                Resultados cuantitativos: Se espera una calificación mínima del 80% en evaluaciones de comprensión; al menos el 70% de los líderes presenta un informe final de aplicación.
                            </p>
                            <p className={style.parrafoproyect1}>
                                Modelo de Evaluación: Para evaluar la efectividad de la formación en este curso, se utilizó el modelo de los Cuatro Niveles de Donald Kirkpatrick, ampliamente difundido en entornos organizacionales y públicos debido a su comprobada aplicabilidad. Este modelo permite una evaluación jerárquica y completa, comenzando en el Nivel I (Reacción) para medir la satisfacción de los líderes con el curso; el Nivel II (Aprendizaje) para evaluar el conocimiento adquirido; el Nivel III (Comportamiento) para observar cómo aplican estas competencias en sus equipos; y el Nivel IV (Resultados), donde se examina el impacto de las habilidades adquiridas en el rendimiento del área de mantenimiento.
                            </p>
                        </>
                    ) : (
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect1}>
                                    Resultados cuantitativos: Se prevé que los participantes obtendrían una calificación mínima del 80% en evaluaciones de comprensión, y que al menos el 70% de los líderes presentaría un informe final de aplicación.
                                </p>
                            </li>
                        </ul>
                    )}

                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase4((prev) => !prev)}
                        colors={["#4A968E", "#88D0C9", "#D0EDEA"]}
                    />
                </div>

            </article>

        </>
    )
}

export default Proyecto1;