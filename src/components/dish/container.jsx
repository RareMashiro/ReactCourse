/* eslint-disable react/prop-types */
//import { selectDishById } from "../../redux/entities/dish";
import { Dish } from "./component";

export const DishContainer = ({ dish }) => {
    return <Dish dish={dish} />
}