import { Outlet } from "react-router-dom"
import styles from './styles.module.scss';

export const DishPage = () => {
    return (
        <div className={styles.dishPage}>
            <Outlet />
        </div>
    )
}