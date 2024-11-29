import Cabecera from "../../componentes/cabecera/cabecera";
import PieDePagina from "../../componentes/footer/footer";
import { Outlet } from "react-router-dom";

function PaginaBase(){
    return (
        <main>
            <Cabecera/>
                <Outlet/>
            <PieDePagina/>    
        </main>
    )
}

export default PaginaBase;
