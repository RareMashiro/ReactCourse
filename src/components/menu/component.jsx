/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component"

export const Menu = ({menu}) => {
    // console.log(menu);

    return (
        <ul className="menu">
            {menu.map(id => {
                // console.log(id);
                return (
                    <li><Dish id={id} /></li>
                );
            })}
        </ul>
    )
}