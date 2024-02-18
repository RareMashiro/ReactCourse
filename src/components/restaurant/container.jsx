/* eslint-disable react/prop-types */
import { Restaurant } from "./component"
import { useGetRestaurantsQuery } from "../../redux/services/api"

export const RestaurantContainer = ({restaurantId}) => {
    const {data: restaurant} = useGetRestaurantsQuery(undefined, {selectFromResult: result => ({
            ...result, 
            data: result.data.find(({id}) => id === restaurantId),
        }),
    });

    if(!restaurant) {
        return null;
    }

    return <Restaurant restaurant={restaurant} />
}