import Home from '../../pages/Home';
import AllProduct from '../../pages/AllProduct';
import Comunity from '../../pages/Comunity';
import Newoffer from '../../pages/Newoffer';
import OrderCart from '../../pages/OrderCart';
import Notifaciton from '../../pages/Notifactin';
import OrderPage from '../../pages/OrderPages';
import Profile from '../../pages/Profile';
import AddProduct from '../../pages/Addmin/AddProduct';
import EditProduct from '../../pages/Addmin/EditProdcut';
import Login from '../../pages/Login';
import CategoryPage from '../../pages/CategoryPage';
import ProductList from '../../pages/Addmin/ProductList';

const appRoute = [
  { path: '/', element: <Home /> },
  // { path: "/productlist/addmin", element: <Productlist/>},
  { path: '/allproduct', element: <AllProduct /> },
  { path: '/category', element: <CategoryPage /> },
  { path: '/comunity', element: <Comunity /> },
  { path: '/newoffer', element: <Newoffer /> },
  { path: 'ordercart', element: <OrderCart /> },
  { path: '/notifaction', element: <Notifaciton /> },
  { path: '/order-form', element: <OrderPage /> },
  { path: '/profile', element: <Profile /> },
  { path: '/login', element: <Login /> },
  { path: '/addmin/product/list', element: <ProductList /> },
  { path: '/addmin/product/add', element: <AddProduct /> },
  { path: '/addmin/product/edit', element: <EditProduct /> },
];

export default appRoute;
