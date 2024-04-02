import { NavLink, useParams } from "react-router-dom"
import { Tab } from "../tab/component"

export const CreateReviewTab = () => {
    const { restaurantId } = useParams();
    
    return (
        <NavLink to={`/createReview/${restaurantId}`}>
            {({ isActive }) => (
                <Tab 
                    title="Create new review" 
                    className="large" 
                    disabled={isActive}
                />
            )}
        </NavLink>
    )
}