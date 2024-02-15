import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants";
import { selectIsLoading } from "../../redux/ui/request";
import { RestaurantContainer } from "../../components/restaurant/container";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";

export const RestaurantPage = () => {
    const [activeRestaurantId, setActiveRestaurantId] = useState();
    const [requestId, setRequestId] = useState(null);
    const isLoading = useSelector(state => requestId && selectIsLoading(state, requestId));

    const dispatch = useDispatch();
    
    useEffect(() => {
        setRequestId(dispatch(getRestaurants()).requestId);
    }, [dispatch]);
    
    return (
        <>
            {isLoading ? <div>Loading...</div> : 
                <div>
                    <RestaurantTabsContainer 
                        onSelect={setActiveRestaurantId}
                    />
                    {activeRestaurantId && 
                        <RestaurantContainer restaurantId={activeRestaurantId}
                    />}
                </div>
            }
        </>
    )
}