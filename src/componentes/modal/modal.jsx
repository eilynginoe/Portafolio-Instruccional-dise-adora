import React from "react";
import { FaTimes } from "react-icons/fa";
import style from "./modal.module.css"; // Define estilos personalizados para el modal

function Modal({ isOpen, onClose, content }) {
    if (!isOpen) return null; // Si el modal no está abierto, no se renderiza nada.

    return (
        <div className={style.overlay}>
            <div className={style.modal}>
                {/* Ícono de cerrar en la parte superior derecha */}
                <button className={style.iconCloseButton} onClick={onClose}>
                    <FaTimes />
                </button>
                <p className={style.content}>{content}</p>
                <button className={style.closeButton} onClick={onClose}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}

export default Modal;
