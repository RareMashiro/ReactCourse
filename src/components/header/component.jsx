import { Login } from '../login/component';
import styles from'./styles.module.scss';
import { CartButtonContainer } from '../cart-button/container';
import { Link } from 'react-router-dom';

export const Header = () => {    
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <div className={styles.navigation}>
                    <Link to="/">
                        Shop
                    </Link>
                    <Link to="/restaurants">
                        Restaurants
                    </Link>
                    <Link to="/about-us">
                        About-Us
                    </Link>
                    <Link to="/contacts">
                        Contacts
                    </Link>
                </div>
            </div>
            <div className={styles.rightSide}>
                <span>Cart:</span> 
                <CartButtonContainer />
                <Login />
            </div>
        </header>
    )
}