/* eslint-disable react/prop-types */
//import { selectRestaurantById } from "../../redux/entities/restaurant"
import { Button } from "../button/component"
//import { useSelector } from "react-redux";

export const Tab = ({title, onClick, className}) => {
    // const restaurant = useSelector((state) => selectRestaurantById(state, id))

    return (
        <Button onClick={onClick} type={className}>
            {title}
        </Button>
    )
}