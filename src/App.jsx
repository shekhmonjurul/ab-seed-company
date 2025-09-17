import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import OrderPage from './pages/OrderPages'
import Productlist from './pages/Productlist'
import AllProduct from './pages/AllProduct'
import Comunity from './pages/Comunity'
import Newoffer from './pages/Newoffer'
import OrderCart from './pages/OrderCart'
import Notifaciton from './pages/Notifactin'
import Profile from './Profile'


const routes = [
  { path: "/", element: <Home /> },
  { path: "/order", element: <OrderPage /> },
  { path: "/productlist-addmin", element: <Productlist/> },
  { path: "/allproduct", element: <AllProduct/> },
  { path: "/comunity", element: <Comunity/> },
  {path: "/newoffer", element: <Newoffer/>},
  {path: "ordercart", element: <OrderCart/>},
  {path: "/notifaction", element: <Notifaciton/>},
  {path: "/profile", element: <Profile/>}
]


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            routes.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
