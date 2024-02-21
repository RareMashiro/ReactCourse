/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Tab } from "../tab/component"
import { selectRestaurantIds } from "../../../redux/entities/restaurant/selectors"

export const RestaurantTabs = ({onSelect}) => {
    const restaurantIds = useSelector(selectRestaurantIds);
    
    return (
        <div>
            {restaurantIds.map((id) => (
                <Tab id={id} className="large" onClick={() => onSelect(id)} />
            ))}
        </div>
    )
}