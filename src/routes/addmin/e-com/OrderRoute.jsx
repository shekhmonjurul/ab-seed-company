import { Route, Routes } from "react-router-dom"
import Search from "../../../pages/Addmin/e-com/order/Search"

const routers = [
    { path: "/addmin/ecom/order/search", element: <Search/> },
    { path: "/addmin/ecom/order/new", element: <h1>New Order</h1> },
    { path: "/addmin/ecom/order/web", element: <h1>Web Order</h1> },
    { path: "/addmin/ecom/order/list", element: <h1>Oreder List</h1> },
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