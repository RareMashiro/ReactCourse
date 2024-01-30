/* eslint-disable react/prop-types */
import styles from'./styles.module.scss';

export const Button = ({type, onClick, children}) => {
    return (
        <button className={styles[type]} onClick={onClick}>
            {children}
        </button>
    )
}