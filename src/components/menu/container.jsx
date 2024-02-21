import { Menu } from "./component"
import { useGetDishesQuery } from "../../redux/services/api";

export const MenuContainer = ({ restaurantId }) => {1
    const {data: dishes, isFetching} = useGetDishesQuery(restaurantId);
    
    if(!dishes?.length) {
        return null;
    }

    if(isFetching) {
        return <div>Loading...</div>
    }
    
    return <Menu dishes={dishes}/>;
}