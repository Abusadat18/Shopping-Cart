import Home from "./Components/Home/Home.jsx"
import Shop from "./Components/Shop/Shop.jsx"
import Cart from "./Components/Cart/Cart.jsx"
import App from "./App.jsx";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "shop",
                element: <Shop/>,
            },
            {
                path: "myCart",
                element: <Cart/>,
            },
        ]
    },
]

export default routes;