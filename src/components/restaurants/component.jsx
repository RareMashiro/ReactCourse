/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component"
import { Review } from "../review/component"
import './styles.scss';

/* eslint-disable react/prop-types */
export const Restaurants = ({place}) => {
    return (
        <div className='restaurant'>
            <h1 className='restaurant-name'>{place.name}</h1>
            <h3 className='menu-title'><span>Меню</span></h3>
            <ul className='menu'>
                {place.menu.map(pos => {
                    return <li className='menu-item'><Dish dish={pos} /></li>
                })}
            </ul>
            <h3 className='review-title'><span>Отзывы</span></h3>
            <ul className='review'>
                {place.reviews.map(pos => {
                    return <li className='review-item'><Review review={pos} /></li>
                })}
            </ul>
        </div>
    )
}