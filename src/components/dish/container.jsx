/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishContainer = ({ dish }) => {

    const {data: currDish} = useGetDishByIdQuery(dish?.id);

    console.log(currDish);

    if(!currDish) {
        return <div>Loading...</div>
    }
    
    return (
        <NavLink to={`/dishes/${currDish.id}`}>
            <span>{currDish.name}</span>
        </NavLink>
    )
}