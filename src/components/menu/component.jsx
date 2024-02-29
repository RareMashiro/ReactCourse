/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { DishContainer } from "../dish/container";

export const Menu = ({dishes}) => {
    return (
        <ul className="menu">
            {dishes.map((dish) => {
                return (
                    <li><DishContainer dish={dish} /></li>
                );
            })}
        </ul>
    )
}