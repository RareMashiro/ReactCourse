/* eslint-disable react/jsx-key */
import { Reviews } from "../reviews/component";
import { Menu } from "../menu/component";
import { Title } from "../title/component";
import classNames from "classnames";
import './styles.scss';

/* eslint-disable react/prop-types */
export const Restaurants = ({place}) => {
    return (
        <div className={classNames(place.name, 'isClose', 'main')}>
            <h1><Title title={place}/></h1>
            <h3 className='menu-title'><span>Menu</span></h3>
            <Menu menu={place.menu} />
            <h3 className='review-title'><span>Reviews</span></h3>
            <Reviews reviews={place.reviews}/>
        </div>
    )
}