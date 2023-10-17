import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import SecondPage from "./components/SecondPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Link } from "react-router-dom";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const AppLayout = () => {
    return (

        <Provider store = {appStore}>
        
            <div className="app">
                <Header/>
                <Outlet/>
            </div>

        </Provider>

        
    );

};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <SecondPage/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }


        ],
        errorElement: <Error/>,
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
