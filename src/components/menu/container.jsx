import { Menu } from "./component"
import { useGetDishesQuery } from "../../redux/services/api";
import { useParams } from "react-router-dom";

export const MenuContainer = () => {
    const { restaurantId } = useParams();

    const {data: dishes, isFetching} = useGetDishesQuery(restaurantId);
    
    if(!dishes?.length) {
        return <div>Loading...</div>;
    }

    if(isFetching) {
        return <div>Loading...</div>
    }
    
    return (
        <>
            <p>Our best dishes: </p>
            <Menu dishes={dishes}/>
        </>
    )
}