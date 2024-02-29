/* eslint-disable react/jsx-key */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DishDescriptionContainer } from "./components/dish-description/container";
import { RestaurantContainer } from "./components/restaurant/container"
import { ReviewsContainer } from "./components/reviews/container";
import { RestaurantPage } from "./pages/restaurant-page/component"
import { MenuContainer } from "./components/menu/container";
import { UserContext } from "../contexts/user"
import { Placeholder } from "./components/placeholder/component";
import { MainPage } from "./pages/main-page/component"
import { useState } from "react"
import { Provider } from "react-redux"
import { DishPage } from "./pages/dish-page/component";
import { Layout } from "./components/layout/component"
import { store } from "./redux"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: "restaurants",
                element: <RestaurantPage />,
                children: [
                    {
                        index: true,
                        element: <Placeholder />,
                    },
                    {
                        path: ":restaurantId",
                        element: <RestaurantContainer />,
                        children: [
                            {
                                path: "menu",
                                element: <MenuContainer />,
                            },
                            {
                                path: "reviews",
                                element: <ReviewsContainer />
                            }
                        ],
                    },
                ]
            },
            {
                path: "dishes",
                element: <DishPage />,
                children: [
                    {
                        path: ":dishId",
                        element: <DishDescriptionContainer />
                    },
                ]
            },
            {
                path: "about-us",
                element: <div>About-us</div>,
            },
            {
                path: "contacts",
                element: <div>Contacts</div>,
            },
        ],
    },
]);

export const App = () => {
    const [user, setUser] = useState();
    
    return (
        <Provider store={store}>
            <UserContext.Provider value={{user, setUser}}>
                    <RouterProvider router={router} />
            </UserContext.Provider>
        </Provider>
    )
}
