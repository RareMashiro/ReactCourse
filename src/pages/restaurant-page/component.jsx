import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component"
import { Restaurant } from "../../components/restaurant/component"
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../../redux/entities/restaurant/selectors";

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const restaurantIds = useSelector(selectRestaurantIds);

    const activeRestaurant = restaurantIds.find(
        id => id === activeRestaurantId
    )
    
    return (
        <div>
            <RestaurantTabs 
                onSelect={setActiveRestaurantId}
            />
            {activeRestaurant && 
                <Restaurant id={activeRestaurant}
            />}
        </div>
    )
}