/* eslint-disable react/jsx-key */
import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";
import { Name } from "../name/component";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../../redux/entities/restaurant/selectors";

/* eslint-disable react/prop-types */
export const Restaurant = ({ id }) => {
    
    const restaurant = useSelector((state) => selectRestaurantById(state, id))
    console.log(restaurant.reviews);

    return (
        <div>
            <Name place={restaurant} />
            <h3 className='menu-title'><span>Menu</span></h3>
            <Menu menu={restaurant.menu} />
            <h3 className='review-title'><span>Reviews</span></h3>
            <Reviews reviews={restaurant.reviews} key={id}/>
        </div>
    )
}