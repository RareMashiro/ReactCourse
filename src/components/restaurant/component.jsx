/* eslint-disable react/jsx-key */
import { Reviews } from "../reviews/component";
//import { Menu } from "../menu/component";
import { MenuContainer } from "../menu/container";
import { Name } from "../name/component";

/* eslint-disable react/prop-types */
export const Restaurant = ({ restaurant }) => {

    console.log(restaurant.id);
    return (
        <div>
            <Name place={restaurant} />
            <h3 className='menu-title'><span>Menu</span></h3>
            <MenuContainer restaurantId={restaurant.id} />
            <h3 className='review-title'><span>Reviews</span></h3>
            <Reviews reviews={restaurant.reviews} key={restaurant}/>
        </div>
    )
}