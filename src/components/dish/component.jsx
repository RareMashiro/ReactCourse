/* eslint-disable react/prop-types */
//import { useState } from "react";
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Button } from "../button/component";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectProductAmountById } from '../../redux/ui/cart';

export const Dish = ({ dish }) => {
    const amount = useSelector((state) => 
        selectProductAmountById(state, dish)
    );
    const dispatch = useDispatch();


    
    return (
        <div className={classNames(styles.main)}>
            <p>{[dish.name, ': ', dish.price, '$']}</p>
            <div>
                <Button onClick={() => {dispatch(decrement(dish))}} type='small' disabled={amount === 0}>-</Button>
                    <span className={styles.quantity}>{amount}</span>
                <Button onClick={() => {dispatch(increment(dish))}} type='small' disabled={amount === 5}>+</Button>
            </div>
        </div>
    )
}