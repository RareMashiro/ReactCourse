/* eslint-disable react/prop-types */
import styles from'./styles.module.scss';

export const Button = ({type, onClick, children, disabled}) => {
    return (
        <button className={styles[type]} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}