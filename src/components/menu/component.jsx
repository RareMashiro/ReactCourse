/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component"

export const Menu = ({menu}) => {
    return (
        <ul className="menu">
            {menu.map(pos => {
                return (
                    <li><Dish dish={pos} /></li>
                )
            })}
        </ul>
    )
}