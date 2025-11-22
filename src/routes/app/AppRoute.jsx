import Home from '../../pages/Home';
import AllProduct from '../../pages/AllProduct';
import Comunity from '../../pages/Comunity';
import OrderCart from '../../pages/OrderCart';
import OrderPage from '../../pages/OrderPages';
import Profile from '../../pages/Profile';
import AddProduct from '../../pages/Addmin/AddProduct';
import EditProduct from '../../pages/Addmin/EditProdcut';
import Login from '../../pages/Login';
import CategoryPage from '../../pages/CategoryPage';
import ProductList from '../../pages/Addmin/ProductList';
import OrderSuccess from '../../pages/OrderSuccess';

const appRoute = [
  { path: '/', element: <Home /> },
  // { path: "/productlist/addmin", element: <Productlist/>},
  // { path: '/allproduct', element: <AllProduct /> }, // future
  { path: '/category/:slug', element: <CategoryPage /> },
  // { path: '/comunity', element: <Comunity /> }, // Future
  { path: 'ordercart', element: <OrderCart /> },
  { path: '/order-form', element: <OrderPage /> },
  { path: '/OrderSucess', element: <OrderSuccess /> },
  // { path: '/profile', element: <Profile /> }, // Future
  { path: '/login', element: <Login /> },
  { path: '/addmin/product/list', element: <ProductList /> },
  { path: '/addmin/product/add', element: <AddProduct /> },
  { path: '/addmin/product/edit', element: <EditProduct /> },
];

export default appRoute;
