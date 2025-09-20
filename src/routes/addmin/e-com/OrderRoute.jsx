import { Route, Routes } from "react-router-dom"
import Search from "../../../pages/Addmin/e-com/order/Search"
import NewOrder from "../../../pages/Addmin/e-com/order/NewOrder"
import WebOrder from "../../../pages/Addmin/e-com/order/WebOrder"
import OrderList from "../../../pages/Addmin/e-com/order/OrderList"

const routers = [
    { path: "/addmin/ecom/order/search", element: <Search/> },
    { path: "/addmin/ecom/order/new", element: <NewOrder/> },
    { path: "/addmin/ecom/order/web", element: <WebOrder/> },
    { path: "/addmin/ecom/order/list", element: <OrderList/> },
]

export default function OrderRoute() {

    return (
        <Routes>
            {
               routers.map((router, index)=>(
                <Route path={router.path} element={router.element} key={index}/>
               ))
            }
        </Routes>
    )

}