import { useEffect, useState } from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { Atom, LifeLine } from 'react-loading-indicators';
import Login from './Login'









const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {

  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  const router = createBrowserRouter(createRoutesFromElements(

    <Route>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
      </Route>
    </Route>
  ))

  return (
    <>
      {Loading ? (
        <div className="loading-overlay">
          <LifeLine color="#32cd32" size="medium" text="" textColor="" />        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}
export default App


