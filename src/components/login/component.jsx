import { useContext } from 'react';
import { UserContext } from '../../../contexts/user';
import { Button } from '../button/component';
import styles from './styles.module.scss';


export const Login = () => {
    const {user, setUser} = useContext(UserContext);
    
    return (
        <div>
            {user ? (
                <div className={styles.logout}>
                    <span>{user}</span>
                    <Button onClick={() => setUser(null)}>Logout</Button>
                </div>
            ) : (
                <Button onClick={() => setUser('William')}>Login</Button>
            )}
        </div>
    )
}