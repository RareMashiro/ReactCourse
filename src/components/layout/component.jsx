/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Header } from "../header/component"
import { Footer } from "../footer/component"
import { Outlet } from "react-router-dom";
import styles from './styles.module.scss';


export const Layout = () => {    
    return (
        <div>
            <Header>Header</Header>
                <div className={styles.content}>
                    <Outlet />
                </div>
            <Footer>Footer</Footer>
            <div className={styles.modals}>
                <div id="modal-container"/>
                <div id="popover-container" className={styles.popoverContainer}></div>
            </div>
        </div>
    )
}