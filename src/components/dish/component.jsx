/* eslint-disable react/prop-types */
import styles from './styles.module.scss';
import { Counter } from "../counter/component"
import { selectDishById } from '../../redux/entities/dish';
import { useSelector } from 'react-redux';

export const Dish = ({ dish }) => {
    const currentDish = useSelector(state => selectDishById(state, dish))
    
    if(!currentDish) {
        return <>Loading...</>
    }

    return (
        <div className={styles.main}>
            <p>{[currentDish.name, ': ', currentDish.price, '$']}</p>
            <Counter dish={currentDish} />
        </div>
    )
}