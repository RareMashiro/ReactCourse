/* eslint-disable react/jsx-key */
//import { Menu } from "../menu/component";
import { CreateReviewFormContainer } from "../create-review-form/container";
import { MenuTab } from "../menu-tab/component";
import { MenuContainer } from "../menu/container";
import { Name } from "../name/component";
import { ReviewsContainer } from "../reviews/container";

/* eslint-disable react/prop-types */
export const Restaurant = ({ restaurant }) => {

    return (
        <div>
            {/* <Name place={restaurant} />
            <h3 className='menu-title'><span>Menu</span></h3>
            <MenuContainer restaurantId={restaurant.id} />
            <h3 className='review-title'><span>Reviews</span></h3>
            <ReviewsContainer restaurantId={restaurant.id} key={restaurant}/>
            <CreateReviewFormContainer restaurantId={restaurant.id}/> */}
        </div>
    )
}