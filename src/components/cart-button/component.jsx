/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { Button } from "../button/component"
import { createPortal } from "react-dom";
import { CartContainer } from "../cart/container";
import styles from "./styles.module.scss";

export const CartButton = ({amount}) => {
    const [coordinates, setCoordinates] = useState(null);
    const buttonRef = useRef();
    
    const toggleCartModal = () => {
        if(coordinates) {
            setCoordinates(null);
            return;
        }
        // console.log(buttonRef);
        const {bottom, left} = buttonRef.current.getBoundingClientRect();
        setCoordinates({right: -left, top: bottom});
    }

    return (
        <div className={styles.root}>
            <Button ref={buttonRef} onClick={toggleCartModal}>{amount}</Button>
            {coordinates && createPortal(
                <div style={coordinates} className={styles.modal}>
                    <CartContainer />
                </div>,
                document.getElementById('popover-container')
            )}
        </div>
    )
}