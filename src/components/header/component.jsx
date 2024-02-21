import { Login } from '../login/component';
import styles from'./styles.module.scss';
import { CartButtonContainer } from '../cart-button/container';

export const Header = ({children}) => {    
    return (
        <header className={styles.header}>
            <span className={styles.content}>{children}</span>
            <div className={styles.rightSide}>
                <span>Cart:</span> 
                <CartButtonContainer />
                <Login />
            </div>
        </header>
    )
}