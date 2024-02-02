import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component"
import { Restaurant } from "../../components/restaurant/component"
import { restaurants } from "../../../materials/mock"

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    
    const activeRestaurant = restaurants.find(
        ({id}) => id === activeRestaurantId
    )
    
    return (
        <div>
            <RestaurantTabs 
                restaurants={restaurants} 
                onSelect={setActiveRestaurantId}
            />
            {activeRestaurant && 
                <Restaurant restaurant={activeRestaurant} key={activeRestaurantId}
            />}
        </div>
    )
}