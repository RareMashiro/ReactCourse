export const Dish = ({dish}) => {
    return (<li className='menu-item'>{[dish.name, ': ', dish.price, '$']}</li>)
}