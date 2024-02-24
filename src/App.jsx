/* eslint-disable react/jsx-key */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RestaurantContainer } from "./components/restaurant/container"
import { RestaurantPage } from "./pages/restaurant-page/component"
import { UserContext } from "../contexts/user"
import { MainPage } from "./pages/main-page/component"
import { useState } from "react"
import { Provider } from "react-redux"
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
                        element: <div>Choose Restaurant</div>,
                    },
                    {
                        path: ":restaurantId",
                        element: <RestaurantContainer />
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
                {/* <RestaurantPage /> */}
            </UserContext.Provider>
        </Provider>
    )
}
