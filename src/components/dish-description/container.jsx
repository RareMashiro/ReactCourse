import { NavLink, useParams } from "react-router-dom"
import { useGetDishByIdQuery } from "../../redux/services/api";
import { Dish } from "../dish/component";
import { Button } from "../button/component";

export const DishDescriptionContainer = () => {
    const { dishId } = useParams();
    
    const { data: dish } = useGetDishByIdQuery(dishId);
    
    return (
        <div>
            <Dish dish={dish}/>
            <NavLink to="/restaurants">
                <Button>Exit</Button>
            </NavLink>
        </div>
    )
}