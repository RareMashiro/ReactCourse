/* eslint-disable react/jsx-key */
import { Layout } from "./components/layout/component"
import { RestaurantPage } from "./pages/restaurant-page/component"

export const App = () => {
    return (
        <Layout>
            <RestaurantPage />
        </Layout>
    )
}
