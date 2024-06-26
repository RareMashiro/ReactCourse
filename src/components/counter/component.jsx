/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../button/component"
import styles from "./styles.module.scss"
import { decrement, increment, selectProductAmountById } from "../../redux/ui/cart"

export const Counter = ({ dishId, min = 0, max = 5 }) => {
    const amount = useSelector(state => 
        selectProductAmountById(state, dishId)
    );

    const dispatch = useDispatch();
    
    return (
        <div>
            <Button type="switch" onClick={() => dispatch(decrement(dishId))} disabled={amount === min}>
                -
            </Button>
                <span className={styles.quantity}>{amount}</span>
            <Button type="switch" onClick={() => dispatch(increment(dishId))} disabled={amount === max}>
                +
            </Button>
        </div>
    )
}