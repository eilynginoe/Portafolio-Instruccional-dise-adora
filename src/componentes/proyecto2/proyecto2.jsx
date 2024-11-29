import React, { useState } from "react";
import style from "./proyecto2.module.css"; // Aplica estilos específicos
import ImgProyecto2 from "./proyecto-2.webp"
import ButtonAnimado from "../botonAnimado/botonAnimado";

function Proyecto2() {
    // Estados para controlar los textos
    const [mostrarTextoAlternativoFase1, setMostrarTextoAlternativoFase1] = useState(false);
    const [mostrarTextoAlternativoFase2, setMostrarTextoAlternativoFase2] = useState(false);
    const [mostrarTextoAlternativoFase3, setMostrarTextoAlternativoFase3] = useState(false);
    const [mostrarTextoAlternativoFase4, setMostrarTextoAlternativoFase4] = useState(false);

    return (
        <>
            <article>
                <div className={style.introproyect2}>
                    <img src={ImgProyecto2} />
                    <h2 className={style.titleproyect2}>Curso para Empleados:</h2>
                    <h3 className={style.subtitleproyect2}>“Autonomía e Innovación para Crear Valor”</h3>
                    <p className={style.parrafoproyect2}>Influencias: ABP  ASSURE   Modelo  4C-ID</p>
                </div>
                <div className={style.fase1}>

                    <div className={style.titlefase}>
                        <h2>Fase 1: Reto o Contexto</h2>
                    </div>

                    {/* Renderización condicional */}
                    {mostrarTextoAlternativoFase1 ? (
                        <p className={style.parrafoproyect2}>
                            Objetivo: Fomentar autonomía, creatividad y habilidades emprendedoras en empleados del área técnica para impulsar mejoras de procesos.
                            Siguiendo una estructura de análisis inicial bajo el modelo ADDIE, se propone este curso para desarrollar una actitud proactiva y de autogestión en los empleados.
                        </p>
                    ) : (
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Objetivo: Fomentar la autonomía y las habilidades emprendedoras en los empleados para que puedan mejorar de manera proactiva los procesos dentro de la organización.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Público objetivo: Empleados de áreas técnicas (ej. mantenimiento).
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Limitación o necesidad: La necesidad de que los empleados tomen un rol más activo en la mejora de procesos, desarrollando la capacidad de identificar problemas y proponer soluciones innovadoras de manera autónoma.
                                    Este enfoque fortalecerá la eficiencia operativa y contribuirá a una cultura organizacional más dinámica y adaptativa.
                                </p>
                            </li>
                        </ul>
                    )}

                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase1((prev) => !prev)}
                        colors={["#DC4737", "#F0A098", "#F9DFDD"]}
                    />
                </div>

                <div className={style.fase2}>

                    <div className={style.titlefase}>
                        <h2>Fase 2: Estrategia de Diseño</h2>
                    </div>

                    {mostrarTextoAlternativoFase2 ? (
                        <p className={style.parrafoproyect2}>
                            Metodología: Basada en proyectos, dinámicas de grupo y estudios de caso específicos de la industria. La estrategia de diseño combina los principios de los modelos ASSURE y 4C-ID, para adaptar los métodos de enseñanza a las necesidades del equipo técnico, garantizando la práctica progresiva de habilidades complejas.
                        </p>
                    ) : (
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Metodología: Basada en proyectos, dinámicas de grupo, y estudio de casos específicos de la industria.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Enfoque pedagógico: Método de Aprendizaje Basado en Problemas (ABP), que fomenta la aplicación de conocimientos en situaciones reales y facilita el desarrollo de la autogestión y la resolución de problemas en el contexto laboral de los empleados.
                                    El curso busca promover la autogestión, la creatividad y la resolución de problemas a través de actividades prácticas, discusiones grupales y análisis de casos.
                                    Se fomenta el aprendizaje experiencial, donde los empleados podrán aplicar lo aprendido directamente a situaciones de su entorno laboral.
                                </p>
                            </li>
                        </ul>
                    )}

                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase2((prev) => !prev)}
                        colors={["#DC4737", "#F0A098", "#F9DFDD"]}
                    />
                </div>

                <div className={style.fase3}>

                    <div className={style.titlefase}>
                        <h2>Fase 3: Solución Creativa</h2>
                    </div>

                    {mostrarTextoAlternativoFase3 ? (
                        <p className={style.parrafoproyect2}>
                            Elementos innovadores: Actividades como “Búsqueda del tesoro” y “Construyendo mi Destreza Laboral” para motivar el pensamiento crítico y la colaboración. Las actividades están inspiradas en el modelo de Aprendizaje Basado en Problemas (ABP), proporcionando un enfoque práctico donde los empleados resuelven problemas que emulan situaciones de su entorno laboral.
                        </p>
                    ) : (
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Elementos innovadores: Actividades como "Búsqueda del Tesoro", que desafían a los empleados a identificar oportunidades de mejora dentro de sus funciones, y "Construyendo mi Destreza Laboral", que fomenta la reflexión sobre sus habilidades y capacidades.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Características destacadas: Las actividades están diseñadas para ayudar a los empleados a autoconocerse y desarrollar soluciones innovadoras de manera colaborativa. Se enfoca en la resolución de problemas y en la generación de ideas para mejorar los procesos y procedimientos.
                                </p>
                            </li>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Adaptación para el usuario: Los empleados se centran en identificar sus fortalezas y cómo pueden aplicarlas para mejorar su desempeño laboral, creando un ambiente de trabajo más autónomo y orientado a la innovación.
                                </p>
                            </li>
                        </ul>
                    )}

                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase3((prev) => !prev)}
                        colors={["#DC4737", "#F0A098", "#F9DFDD"]}
                    />
                </div>

                <div className={style.fase4}>

                    <div className={style.titlefase}>
                        <h2>Fase 4: Resultados y Aprendizajes</h2>
                    </div>

                    {mostrarTextoAlternativoFase4 ? (
                        <>
                            <p className={style.parrafoproyect2}>
                                Resultados cuantitativos: Expectativa de calificación mínima del 80% en evaluaciones; se espera que el 90% de los participantes obtengan una satisfacción alta en encuestas.
                            </p>
                            <p className={style.parrafoproyect2}>
                                Para evaluar la efectividad del curso, se sugieren los principios del modelo de los Cuatro Niveles de Donald Kirkpatrick, que abordan la evaluación desde la reacción inicial hasta el impacto en el trabajo. Además, el modelo de J. Phillips permitiría medir el beneficio/costo y ROI del curso, y el de E. Mouret podría evaluar la satisfacción del cliente final.
                            </p>
                        </>
                    ) : (
                        <ul className={style.listaProyecto}>
                            <li>
                                <p className={style.parrafoproyect2}>
                                    Resultados cuantitativos: Expectativa de calificación mínima del 80% en evaluaciones; se espera que el 90% de los participantes obtengan una satisfacción alta en encuestas.
                                </p>
                            </li>
                        </ul>
                    )}

                    <ButtonAnimado
                        onClick={() => setMostrarTextoAlternativoFase4((prev) => !prev)}
                        colors={["#DC4737", "#F0A098", "#F9DFDD"]}
                    />
                </div>

            </article>

        </>
    )
}

export default Proyecto2;