/* eslint-disable react/prop-types */
import { useGetRestaurantsQuery } from "../../redux/services/api"
import { Outlet, useParams } from "react-router-dom";
import { MenuTab } from "../menu-tab/component";
import { ReviewsTab } from "../reviews-tab/component";

export const RestaurantContainer = () => {
    const { restaurantId } = useParams();

    const {data: restaurant, isLoading} = useGetRestaurantsQuery(undefined, {
        selectFromResult: result => ({
            ...result, 
            data: result.data?.find(({id}) => restaurantId === id),
        }),
    });
    
    if(!restaurant) {
        return null;
    }

    if(isLoading) {
        return <>Loading...</>;
    }

    return (
        <>
            <MenuTab restaurantId={restaurantId}/>
            <ReviewsTab restaurantId={restaurantId}/>
            <Outlet />
        </>
    );
}