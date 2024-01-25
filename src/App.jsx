/* eslint-disable react/jsx-key */
import { Layout } from "./components/layout/component"
import { restaurants } from "../materials/mock"
import { Restaurants } from "./components/restaurants/component"

export const App = () => {
    return (
        <Layout>
            {restaurants.map(restaurant => (
                <Restaurants place={restaurant} />
            ))}
        </Layout>
    )
}