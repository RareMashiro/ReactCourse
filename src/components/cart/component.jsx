/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Dish } from "../dish/component"

export const Cart = ({productIds}) => {
    return (
        <div>
            {productIds?.length ? productIds.map(productId => {
                return <Dish dish={productId}/>
            }) 
            : 'Empty'}
        </div>
    )
} 