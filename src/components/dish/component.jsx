/* eslint-disable react/prop-types */
import styles from './styles.module.scss';
import { Counter } from "../counter/component"

export const Dish = ({ dish }) => {
    
    if(!dish) {
        return <>Loading...</>
    }

    return (
        <div className={styles.main}>
            <p>{[dish.name, ': ', dish.price, '$']}</p>
            <Counter dish={dish} />
        </div>
    )
}