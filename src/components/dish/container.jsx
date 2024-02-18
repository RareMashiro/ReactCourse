/* eslint-disable react/prop-types */
//import { selectDishById } from "../../redux/entities/dish";
import { Dish } from "./component";

export const DishContainer = ({ dish }) => {
    
    if(!dish) {
        return <div>Loading...</div>
    }
    
    return <Dish dish={dish} />
}