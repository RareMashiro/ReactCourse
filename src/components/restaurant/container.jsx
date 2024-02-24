/* eslint-disable react/prop-types */
import { Restaurant } from "./component"
import { useGetRestaurantsQuery } from "../../redux/services/api"
import { useParams } from "react-router-dom";

export const RestaurantContainer = () => {
    const { restaurantId } = useParams();

    const {data: load} = useGetRestaurantsQuery();
    console.log(load);

    const {data: restaurant, isLoading} = useGetRestaurantsQuery(undefined, {
        selectFromResult: result => ({
            ...result, 
            data: result.data.find(({id}) => restaurantId === id),
        }),
    });
    
    if(!restaurant) {
        return null;
    }

    if(isLoading) {
        return <>Loading...</>;
    }

    return <Restaurant restaurant={restaurant} />
}