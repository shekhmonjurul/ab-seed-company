import Home from "../../pages/Home"
import Productlist from "../../pages/Productlist"
import AllProduct from "../../pages/AllProduct"
import Comunity from "../../pages/Comunity"
import Newoffer from "../../pages/Newoffer"
import OrderCart from "../../pages/OrderCart"
import Notifaciton from "../../pages/Notifactin"
import OrderPage from "../../pages/OrderPages"
import Profile from "../../pages/Profile"
import AddProduct from "../../pages/Addmin/AddProduct"
import ProductList from "../../pages/Addmin/ProductList" 

const appRoute = [
  { path: "/", element: <Home/> },
  { path: "/productlist/addmin", element: <Productlist/>},
  { path: "/allproduct", element: <AllProduct /> },
  { path: "/comunity", element: <Comunity /> },
  { path: "/newoffer", element: <Newoffer /> },
  { path: "ordercart", element: <OrderCart /> },
  { path: "/notifaction", element: <Notifaciton /> },
  { path: "/order-form", element: <OrderPage /> },
  { path: "/profile", element: <Profile/> },
  { path: "/addmin/product/list", element: <ProductList /> },
  { path: "/addmin/product/add", element: <AddProduct /> }
]


export default appRoute