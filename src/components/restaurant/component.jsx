/* eslint-disable react/jsx-key */
import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";
//import './styles.scss';
import { Name } from "../name/component";

/* eslint-disable react/prop-types */
export const Restaurant = ({restaurant, key}) => {
    return (
        <div>
            <Name place={restaurant.name} />
            <h3 className='menu-title'><span>Menu</span></h3>
            <Menu menu={restaurant.menu} />
            <h3 className='review-title'><span>Reviews</span></h3>
            <Reviews reviews={restaurant.reviews} key={key}/>
        </div>
    )
}