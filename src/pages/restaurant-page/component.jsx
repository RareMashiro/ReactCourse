import { useState } from "react";
import { RestaurantContainer } from "../../components/restaurant/container";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();

    return (
        <>
            <div>
                <RestaurantTabsContainer 
                    onSelect={setActiveRestaurantId}
                />
                {activeRestaurantId && 
                    <RestaurantContainer restaurantId={activeRestaurantId}
                />}
            </div>
        </>
    )
}