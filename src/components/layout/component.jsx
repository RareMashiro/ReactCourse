/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Header } from "../header/component"
import { Footer } from "../footer/component"
import styles from './styles.module.scss';


export const Layout = ({children}) => {    
    return (
        <div>
            <Header>Header</Header>
            <div className={styles.content}>{children}</div>
            <Footer>Footer</Footer>
            <div className={styles.modals}>
                <div id="modal-container"/>
                <div id="popover-container" className={styles.popoverContainer}></div>
            </div>
        </div>
    )
}