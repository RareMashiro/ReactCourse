import { useRef } from "react";
import { Button } from "../button/component"
import styles from './styles.module.scss';
import { createPortal } from "react-dom";

export const ModalLogin = ({children, onClose, onSubmit}) => {
    const modalContainer = useRef(document.getElementById("modal-container"));
    
    return createPortal(
        <div className={styles.modal}>
            <h3 className={styles.authorization}>Authorization</h3>
                {children}
            <div className={styles.modalButton}>
                <Button onClick={onSubmit}>Submit</Button>
                <Button onClick={onClose}>Close</Button>
            </div>
        </div>,
        modalContainer.current
    );
}