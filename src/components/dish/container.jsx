import { useSelector } from "react-redux"
import { selectDishById } from "../../redux/entities/dish";
import { Dish } from "./component";

export const DishContainer = ({ dishId }) => {
    const dish = useSelector(state => selectDishById(state, dishId));

    if(!dish) {
        return <>Loading...</>;
    }

    return <Dish dish={dish} />
}