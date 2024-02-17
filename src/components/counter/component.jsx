/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../button/component"
import styles from "./styles.module.scss"
import { decrement, increment, selectProductAmountById } from "../../redux/ui/cart"

export const Counter = ({ dish, min = 0, max = 5 }) => {
    const amount = useSelector(state => 
        selectProductAmountById(state, dish.id)
    );

    const dispatch = useDispatch();
    
    return (
        <div>
            <Button onClick={() => dispatch(decrement(dish.id))} type='small' disabled={amount === min}>
                -
            </Button>
                <span className={styles.quantity}>{amount}</span>
            <Button onClick={() => dispatch(increment(dish.id))} type='small' disabled={amount === max}>
                +
            </Button>
        </div>
    )
}