/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { selectRestaurantById } from "../../redux/entities/restaurant"
import { Tab } from "../tab/component"

export const RestaurantTabContainer = ({ restaurantId, onClick }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))
    
    return <Tab title={restaurant.name} className="large" onClick={() => onClick(onClick)} />
}