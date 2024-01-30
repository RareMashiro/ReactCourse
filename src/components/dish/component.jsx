/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Button } from "../button/component";

export const Dish = ({dish}) => {
    const [count, setCount] = useState(0);
    const [lftBtn, setLftBtn] = useState('small');
    const [rgtBtn, setRgtBtn] = useState('small');
    
    const increment = () => {
        if(count >= 4) {
            setLftBtn('blocked');
        } else {
            setLftBtn('small');
            setRgtBtn('small');
        }

        if(count < 5) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if(count <= 1) {
            setRgtBtn('blocked');
        } else {
            setRgtBtn('small');
            setLftBtn('small');
        }
        
        if(count > 0) {
            setCount(count - 1);
        }
    }
    
    return (
        <div className={classNames(styles.main)}>
            <p>{[dish.name, ': ', dish.price, '$']}</p>
            <div>
                <Button type={lftBtn} onClick={increment}>+</Button>
                    <span className={styles.quantity}>{count}</span>
                <Button type={rgtBtn} onClick={decrement}>-</Button>
            </div>
        </div>
    )
}