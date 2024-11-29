import React, { useState } from "react";
import style from "./rediseño.module.css";
import Modal from "../modal/modal";
import FlechaRediseñoDos from "./flecha-coral-moderada.webp";
import FlechaRediseñoUno from "./flecha-suave-coral.webp";
import WhatsAppButton from "../boton/botonWhatsapp";
import ColorButton from "../botonescolores/colorbutton";


function Rediseño() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent("");
    };

    return (
        <div className={style.introduccion_rediseño}>

            <div className={style.conversacion_inicial_rediseño}>
                <p className={style.parrafo_conversacion_rediseño}>Ahora bien, rediseñar un curso no solo es cuestión de actualizar contenidos, se requiere transformar la manera en que los estudiantes aprenden y se conectan con la información. </p>
                <p className={style.parrafo_conversacion_rediseño}>En esta sección, te mostraré cómo comparo la estructura original de un curso con mi sugerencia de rediseño, para que veas cómo optimizo cada elemento y lo hago más efectivo.
                </p>
                <p className={style.parrafo_conversacion_rediseño}>Para este rediseño he transformado la teoría en algo que realmente funciona y engancha, quieres saber como lo hice? sigue leyendo.
                </p>
                <img src={FlechaRediseñoUno} alt="flecha decorativa" />
            </div>

            <div className={style.contexto_rediseño}>

                <article>
                    <h2 className={style.titulo_rediseño}>Rediseñando el Aprendizaje</h2>
                    <h3 className={style.titulo_rediseño}>Rediseño del curso "Python Essentials 1: Fundamentos de Python" de Cisco Networking Academy</h3>

                    <section>
                        <h4 className={style.subtitulo_rediseño}>Objetivo del curso actual:</h4>
                        <p className={style.parrafo_rediseño}>
                            El curso "Python Essentials 1" busca introducir a los estudiantes en los conceptos básicos de Python, preparándolos para escribir programas simples y entender estructuras de control básicas.
                        </p>
                    </section>

                    <section>
                        <h4 className={style.subtitulo_rediseño}>Motivación del rediseño:</h4>
                        <p className={style.parrafo_rediseño}>
                            A pesar de ser un curso introductorio completo, el enfoque actual presenta limitaciones en cuanto a la conexión entre la teoría y la práctica, así como la integración progresiva de conceptos.
                        </p>
                    </section>

                    <section>
                        <h4 className={style.subtitulo_rediseño}>Oportunidades de Mejora en el Curso Actual:</h4>
                        <p className={style.parrafo_rediseño}>
                            Aunque el curso "Python Essentials 1" proporciona una sólida introducción a los fundamentos de Python, existen varias áreas con potencial de optimización que pueden mejorar significativamente la experiencia de aprendizaje y hacerla más significativa y aplicada para los estudiantes. A continuación, se presentan algunas de las principales oportunidades de mejora:
                        </p>
                    </section>

                </article>


                <div className={style.opciones_rediseño}>

                    <div className={style.centrandoBotones}>
                        <ColorButton
                            text="Conectar"
                            customStyle={{
                                backgroundColor: '#95CCC9',
                                color: '#000000',
                            }}

                            onClick={() =>
                                handleOpenModal(
                                    <>
                                        <h2>Conectar la teoría con la práctica desde el inicio</h2>

                                        <ul>
                                            <li>Actualmente, el curso presenta la teoría de manera secuencial, y los estudiantes aplican lo aprendido al final de cada unidad a través de ejercicios prácticos. Esta estructura modular permite una comprensión básica, pero no siempre facilita una aplicación inmediata y contextualizada de los conocimientos.</li>

                                            <li><h3>Oportunidad de mejora:</h3>
                                                <p> Integrar la teoría con la práctica de manera más fluida y continua a través de un proyecto práctico desde el inicio, donde los estudiantes vayan aplicando lo aprendido en cada módulo al desarrollo de su proyecto. Esto mejoraría la comprensión de los conceptos y ayudaría a los estudiantes a ver cómo se conectan y aplican en situaciones reales.</p></li>

                                        </ul>
                                    </>
                                )
                            }
                        />
                        <ColorButton
                            text="Integrar"
                            customStyle={{
                                backgroundColor: '#FF9A91',
                                color: '#000000',
                            }}

                            onClick={() =>
                                handleOpenModal(
                                    <>
                                        <h2>Integración progresiva de los conceptos</h2>

                                        <ul>
                                            <li>El curso actual aborda los conceptos de manera aislada, lo que puede dificultar que los estudiantes vean cómo se interrelacionan. Esta desconexión entre los módulos puede hacer que los estudiantes no logren una visión completa de cómo se utiliza Python en un proyecto real.</li>

                                            <li><h3>Oportunidad de mejora:</h3>
                                                <p> Adoptar un enfoque progresivo y modular en el que los estudiantes aprendan y apliquen conceptos a medida que avanzan en un proyecto real. Al dividir el curso en etapas del proyecto, cada nuevo concepto se introducirá de manera natural, proporcionando una comprensión más profunda y aplicada de cómo los diferentes elementos del lenguaje se interrelacionan en un proyecto completo.</p></li>

                                        </ul>
                                    </>
                                )
                            }
                        />
                        <ColorButton
                            text="Contextualizar"
                            customStyle={{
                                backgroundColor: '#F4BC43',
                                color: '#000000',
                            }}

                            onClick={() =>
                                handleOpenModal(
                                    <>
                                        <h2>Contextualización de los problemas prácticos</h2>

                                        <ul>
                                            <li>Aunque este curso sigue un enfoque basado en problemas, los problemas propuestos son abstractos y no siempre se evidencia directamente su relacion con proyectos reales o escenarios del mundo laboral. Esto puede hacer que los estudiantes no vean la relevancia de los problemas que están resolviendo.</li>

                                            <li><h3>Oportunidad de mejora:</h3>
                                                <p>Desarrollar problemas prácticos que estén directamente alineados con un proyecto que simule un entorno profesional. Esta contextualización hará que los estudiantes puedan aplicar lo aprendido en un escenario más cercano a la realidad, aumentando la motivación y el sentido de propósito durante el proceso de aprendizaje.</p></li>

                                        </ul>
                                    </>
                                )
                            }
                        />
                        <ColorButton
                            text="Evaluar"
                            customStyle={{
                                backgroundColor: '#779F79',
                                color: '#000000',
                            }}

                            onClick={() =>
                                handleOpenModal(
                                    <>
                                        <h2>Evaluación continua y retroalimentación constante</h2>

                                        <ul>
                                            <li>En el curso actual, las evaluaciones se realizan al final de cada unidad. Aunque estas evaluaciones permiten medir el progreso, los estudiantes podrían beneficiarse de una retroalimentación más constante a lo largo del curso, especialmente mientras trabajan en su proyecto.</li>

                                            <li><h3>Oportunidad de mejora:</h3>
                                                <p>Implementar una evaluación continua basada en el avance del proyecto. A medida que los estudiantes desarrollan su proyecto, recibirán retroalimentación constante sobre su progreso, lo que les permitirá realizar ajustes y mejorar en tiempo real. Esto también fomenta un aprendizaje más dinámico y colaborativo.</p></li>

                                        </ul>
                                    </>
                                )
                            }
                        />
                        <ColorButton
                            text="Desarrollar habilidades"
                            customStyle={{
                                backgroundColor: '#E5E1D8',
                                color: '#000000',
                            }}

                            onClick={() =>
                                handleOpenModal(
                                    <>
                                        <h2>Desarrollo de habilidades profesionales prácticas</h2>

                                        <ul>
                                            <li>El curso actual proporciona una sólida base teórica, pero los estudiantes podrían beneficiarse de una mayor exposición a entornos de programación reales, lo que les permitiría desarrollar habilidades prácticas más directamente aplicables en el mundo profesional.</li>
                                            <li><h3>Oportunidad de mejora:</h3>
                                                <p>Integrar proyectos reales o simulaciones que preparen a los estudiantes para enfrentarse a desafíos profesionales. Este enfoque no solo les permitirá aprender Python, sino que también desarrollarán habilidades críticas como la resolución de problemas, el trabajo en equipo, la gestión de proyectos y la adaptabilidad, todas esenciales en el ámbito profesional.</p></li>

                                        </ul>
                                    </>
                                )
                            }
                        />
                    </div>

                    {/* Modal */}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={handleCloseModal}
                        content={modalContent}
                    />

                </div>

                <div className={style.tabla_comparativa}>

                    <table >
                        <thead>
                            <tr>
                                <th colSpan="3" className="titulo">
                                    Comparativa entre el Enfoque Actual y el Rediseñado
                                </th>
                            </tr>
                            <tr>
                                <th>Aspecto</th>
                                <th>Curso Actual</th>
                                <th>Rediseño Propuesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Estructura del curso</td>
                                <td>Teoría seguida de ejercicios y un proyecto final.</td>
                                <td>
                                    Enfoque basado en un proyecto continuo con conceptos aplicados a
                                    medida que se desarrollan.
                                </td>
                            </tr>
                            <tr>
                                <td>Evaluación</td>
                                <td>Evaluaciones al final de cada módulo.</td>
                                <td>Evaluación continua a través del progreso del proyecto.</td>
                            </tr>
                            <tr>
                                <td>Enfoque pedagógico</td>
                                <td>Basado en competencias con enfoque constructivista.</td>
                                <td>
                                    Enfoque basado en proyectos (ABP) integrados, con un aprendizaje más
                                    aplicado.
                                </td>
                            </tr>
                            <tr>
                                <td>Conexión teoría-práctica</td>
                                <td>
                                    La práctica se aplica de manera aislada y al final del curso.
                                </td>
                                <td>
                                    La práctica se integra a lo largo del curso, conectando la teoría
                                    con el proyecto.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={style.rediseño_cierre_conversacional}>
                <div className={style.centrandoflecha}>
                    <p className={style.llamado_accion_rediseño}>Aja! este rediseño promete, pero... ¿Cómo mides la efectividad de los cambios que deseas implementar?
                    </p>
                    <p className={style.llamado_accion_rediseño}>Cada rediseño se evalúa a través de métricas clave como el rendimiento de los estudiantes, el nivel de participación y la retroalimentación continua. Si te interesa saber más sobre cómo se realiza este seguimiento, no dudes en contactarme.</p>
                </div>
                <img src={FlechaRediseñoDos} alt="flecha decorativa" className={style.imgflecha}/>
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

        </div>
    )
}

export default Rediseño;