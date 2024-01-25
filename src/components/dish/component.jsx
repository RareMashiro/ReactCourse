export const Dish = ({dish}) => {
    return (
        <p>{[dish.name, ': ', dish.price, '$']}</p>
    )
}