import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";
import { Outlet } from "react-router-dom";

export const RestaurantPage = () => {

    return (
        <div>
            <RestaurantTabsContainer />
            <Outlet />
        </div>
    )
}