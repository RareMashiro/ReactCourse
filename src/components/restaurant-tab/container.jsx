/* eslint-disable react/prop-types */
import { Tab } from "../tab/component"

export const RestaurantTabContainer = ({ title, onClick }) => {
    return <Tab title={title} className="large" onClick={() => onClick(onClick)} />
}