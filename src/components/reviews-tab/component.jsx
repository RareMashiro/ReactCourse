/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"
import { Tab } from "../tab/component"

export const ReviewsTab = ({ restaurantId }) => {
    return (
        <NavLink to={`/restaurants/${restaurantId}/reviews`}>
            {({ isActive }) => (
                <Tab 
                    title="Reviews" 
                    className="large" 
                    disabled={isActive}
                />
            )}
        </NavLink>
    )
}