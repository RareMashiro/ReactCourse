import { Dish } from "../dish/component"

export const Cart = ({productIds}) => {
    return (
        <div>
            {productIds?.length ? productIds.map(productId => <Dish id={productId}/>) 
            : 'Empty'}
        </div>
    )
} 