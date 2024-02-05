import { Button } from '../button/component';
import { person } from '../../../materials/person';
import styles from './styles.module.scss' ;
import { VisibleContext } from '../../../contexts/visible';
import { useState } from 'react';

export const Login = () => {
    const [title, setTitle] = useState('Login');
    const [isVisible, setIsVisible] = useState('');

    const authorization = () => {
        title === 'Login' ? setTitle('Exit') : setTitle('Login');
        setIsVisible(isVisible === '' ? 'hidden' : '');
    }

    return (
        <VisibleContext.Provider value={isVisible}>
            <div className={styles.login}>
                {title === 'Exit' ? <span>{person.name}</span> : <></>}
                <Button onClick={authorization}>{title}</Button>
            </div>
        </VisibleContext.Provider>
    )
}