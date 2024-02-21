/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { RestaurantTabContainer } from "../restaurant-tab/container"

export const RestaurantTabs = ({ restaurantIds, onSelect }) => {
        return (
        <div>
            {restaurantIds.map((id) => (
                <RestaurantTabContainer restaurantId={id} className="large" onClick={() => onSelect(id)} />
            ))}
        </div>
    )
}