import { Route, Routes } from "react-router-dom"
import Search from "../../../pages/Addmin/e-com/order/Search"
import NewOrder from "../../../pages/Addmin/e-com/order/NewOrder"
import WebOrder from "../../../pages/Addmin/e-com/order/WebOrder"
import OrderList from "../../../pages/Addmin/e-com/order/OrderList"
import OpenOrder from "../../../pages/Addmin/e-com/order/OpenOrder"

const orderRouters = [
    { path: "/addmin/ecom/order/search", element: <Search /> },
    { path: "/addmin/ecom/order/new", element: <NewOrder /> },
    { path: "/addmin/ecom/order/web", element: <WebOrder /> },
    { path: "/addmin/ecom/order/list", element: <OrderList /> },
    { path: "/addmin/ecom/order/open", element: <OpenOrder /> },
]

export default orderRouters