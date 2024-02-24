/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { Tab } from "../tab/component"
import styles from "./styles.module.scss";


export const RestaurantTabs = ({ restaurants, onSelect }) => {
        
    
    return (
        <div className={styles.tabs}>
            {restaurants.map(({name, id}) => (
                <NavLink to={`/restaurants/${id}`}>
                    {({ isActive }) => (
                        <Tab 
                            title={name} 
                            className="large" 
                            onClick={() => onSelect(id)} 
                            disabled={isActive}
                        />
                    )}
                </NavLink>
            ))}
        </div>
    )
}