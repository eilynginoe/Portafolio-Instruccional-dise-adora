import style from "./contacto.module.css";

function Contacto() {
    return (
        <div className="inicio-container">
            <main className={style.contacto}>
                {/* Aquí va la informacion de contacto, si es necesario */}
                <p>Bienvenido a la página de contacto.</p>
            </main>
        </div>
    );
}

export default Contacto;