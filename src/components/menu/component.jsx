/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { DishContainer } from "../dish/container";

export const Menu = ({dishIds}) => {
    console.log(dishIds);

    return (
        <ul className="menu">
            {dishIds.map(id => {
                return (
                    <li><DishContainer dish={id}/></li>
                );
            })}
        </ul>
    )
}