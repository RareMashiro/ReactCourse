/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { RestaurantTabContainer } from "../restaurant-tab/container"
import { Tab } from "../tab/component"

export const RestaurantTabs = ({ restaurants, onSelect }) => {
        
    
    return (
        <div>
            {restaurants.map(({name, id}) => (
                <Tab title={name} className="large" onClick={() => onSelect(id)} />
            ))}
        </div>
    )
}