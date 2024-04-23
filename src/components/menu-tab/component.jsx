/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { Tab } from "../tab/component"

export const MenuTab = ({ restaurantId }) => {
    return (
        <NavLink to={`/restaurants/${restaurantId}/menu`}>
            {({ isActive }) => (
                <Tab 
                    title="Menu" 
                    className="large" 
                    disabled={isActive}
                />
            )}
        </NavLink>
    )
}