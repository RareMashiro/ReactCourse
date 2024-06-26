/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Tab } from "../tab/component"
import styles from "./styles.module.scss";


export const RestaurantTabs = ({ restaurants }) => {
        
    
    return (
        <div className={styles.tabs}>
            {restaurants.map(({name, id}) => (
                <NavLink to={`/restaurants/${id}`}>
                    {({ isActive }) => (
                        <Tab 
                            title={name} 
                            className="large" 
                            disabled={isActive}
                        />
                    )}
                </NavLink>
            ))}
        </div>
    )
}