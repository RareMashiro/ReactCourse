/* eslint-disable react/prop-types */
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors"
import { Button } from "../button/component"
import { useSelector } from "react-redux";

export const Tab = ({id, onClick, className}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, id))

    return (
        <Button onClick={onClick} type={className}>
            {restaurant.name}
        </Button>
    )
}