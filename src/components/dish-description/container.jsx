import { useParams } from "react-router-dom"
import { useGetDishByIdQuery } from "../../redux/services/api";
import { Dish } from "../dish/component";

export const DishDescriptionContainer = () => {
    const { dishId } = useParams();
    
    const { data: dish } = useGetDishByIdQuery(dishId);
    
    return (
        <Dish dish={dish}/>
    )
}