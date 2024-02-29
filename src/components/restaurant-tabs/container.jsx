import { RestaurantTabs } from "./component"
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantTabsContainer = () => {
    const {data: restaurants, isLoading} = useGetRestaurantsQuery();

    if(isLoading) {
        return <div>Loading...</div>
    }

    return <RestaurantTabs restaurants={restaurants} />
}   