import { Login } from '../login/component';
import styles from'./styles.module.scss';

export const Header = ({children}) => {    
    return (
        <header className={styles.header}>
            <span className={styles.content}>{children}</span>
            <div className={styles.loginStatus}>
                <Login />
            </div>
        </header>
    )
}