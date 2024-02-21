/* eslint-disable react/prop-types */
import { useState } from "react";
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Button } from "../button/component";
import { useSelector } from "react-redux";
import { selectDishById } from "../../../redux/entities/dish/selectors";

export const Dish = ({ id }) => {
    const dish = useSelector((state) => selectDishById(state ,id));
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1); 
    }
    
    return (
        <div className={classNames(styles.main)}>
            <p>{[dish.name, ': ', dish.price, '$']}</p>
            <div>
                <Button onClick={decrement} type='small' disabled={count === 0}>-</Button>
                    <span className={styles.quantity}>{count}</span>
                <Button onClick={increment} type='small' disabled={count === 5}>+</Button>
            </div>
        </div>
    )
}