import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component"
import { selectRestaurantMenuById } from "../../redux/entities/restaurant";
import { useEffect } from "react";
import { getDishes } from "../../redux/entities/dish/thunks/get-dishes";

export const MenuContainer = ({restaurantId}) => {
    const dishIds = useSelector(state => selectRestaurantMenuById(state, restaurantId))
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishes(restaurantId));
    }, [restaurantId]);

    if(!dishIds?.length) {
        return null;
    }
    
    return <Menu dishIds={dishIds}/>;
}