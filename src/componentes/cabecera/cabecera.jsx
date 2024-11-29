import { Link } from "react-router-dom";
import styles from "./cabecera.module.css";
import Logo from "./logo-digitize.svg";
import Texto from "./Instructional-Designer.svg";

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="."> {/* Usar un enlace relativo para la raíz */}
                <section className={styles.logoContainer}>
                    <img src={Logo} alt="Logo Diseño Instruccional" />
                    <img src={Texto} alt="Texto del logo" className={styles.textoLogo}/>
                </section>
            </Link>
            <nav>
                <Link to=".">Inicio</Link> {/* Usar un enlace relativo */}
                <Link to="./contacto">Contacto</Link> {/* Usar un enlace relativo */}
            </nav>
        </header>
    );
}

export default Cabecera;
