import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import appRoute from './routes/app/AppRoute'
import orderRouters from './routes/addmin/e-com/OrderRoute'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            appRoute.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))
          }
          {
            orderRouters.map((route, index) => (
              <Route path={route.path} element={route.element} key={index} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
