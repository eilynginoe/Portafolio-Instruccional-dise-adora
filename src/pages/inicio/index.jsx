import Separador from "../../componentes/separador/separador";
import HeroSection from "../../componentes/herosection/herosection"; // Sin la extensión
import Proyectos from "../../componentes/proyectos/proyectos";
import style from "./index.module.css";
import Rediseño from "../../componentes/rediseño/rediseño";
import Laboratorio from "../../componentes/laboratorio/laboratorio";
import SobreMi from "../../componentes/sobremi/sobreMi";

function Inicio() {
    return (
        <div className={style.inicioContainer}>
            <main className={style.contenido}>
                <HeroSection/>
                <Separador/>
                <Proyectos/>
                <Rediseño/>
                <Laboratorio/>
                <SobreMi/>

            </main>
        </div>
    );
}

export default Inicio;