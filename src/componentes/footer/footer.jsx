import LogoPie from "./logo-footer.webp";
import Innovación from "./Innovación-Educativa.svg";
import Correo from "./correo.svg";
import Whatsapp from "./whatsapp.svg";
import GitHub from "./github.svg";
import styles from "./footer.module.css";

function PieDePagina() {
    // Función para redirigir al correo
    const handleCorreoClick = () => {
        window.location.href = "mailto:eilynginoe@gmail.com?subject=Asunto%20del%20Correo&body=Mensaje%20aquí";
    };

    // Función para redirigir a WhatsApp
    const handleWhatsappClick = () => {
        window.location.href = "https://bit.ly/3AOgkzk";
    };

    // Función para redirigir a GitHub
    const handleGithubClick = () => {
        window.location.href = "https://github.com/eilynginoe";  // Reemplaza con tu dirección de GitHub
    };

    return (
        <footer className={styles.rodapie}>
            <div className={styles.contenidoPrincipal}>
                <div className={styles.infocontacto}>
                    <h2>CONTACTO</h2>
                    <p>Teléfono: +52 8991158035</p>
                    <p>Dirección: Monterrey, Nuevo León, México.</p>
                </div>
                <div className={styles.logofootertext}>
                    <img src={LogoPie} alt="Logo del pie de página" />
                    <img src={Innovación} alt="Texto del logo" />
                </div>
                <div className={styles.redes}>
                    {/* Íconos con onClick */}
                    <div className={styles.icono} onClick={handleCorreoClick}>
                        <img src={Correo} alt="Logo del correo" />
                    </div>
                    <div className={styles.icono} onClick={handleWhatsappClick}>
                        <img src={Whatsapp} alt="Logo de WhatsApp" />
                    </div>
                    <div className={styles.icono} onClick={handleGithubClick}>
                        <img src={GitHub} alt="Logo de GitHub" />
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>© {new Date().getFullYear()} Eilyn Ginoe Brito. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default PieDePagina;

