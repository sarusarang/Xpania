import React from "react"
import { useState, useEffect, Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Toaster } from "sonner"

const Landing = lazy(() => import('./Pages/Landing'))
const Header = lazy(() => import('./Components/Header'))
const Footer = lazy(() => import('./Components/Footer'))
const About = lazy(() => import('./Pages/AboutUs'))
const Contact = lazy(() => import('./Pages/Contact'))
const SingleProduct = lazy(() => import('./Pages/SingleProduct'))
const Filter = lazy(() => import('./Pages/Filter'))
const Auth = lazy(() => import('./Pages/Auth'))
const Policy = lazy(() => import('./Pages/Policy'))
const Terms = lazy(() => import('./Pages/Terms'))
const Cart = lazy(() => import('./Pages/Cart'))


function App() {



  const location = useLocation()


  const [Hide, sethide] = useState(false)


  useEffect(() => {

    const hidecheck = () => {

      if (location.pathname == '/auth') {


        sethide(true)


      }
      else {

        sethide(false)

      }

    }

    hidecheck()

  }, [location])







  return (



    <>

      <Suspense fallback={<div></div>}>

        <div className="w-100 head-shdw">

          {!Hide && <Header />}

        </div>

      </Suspense>



      <Suspense fallback={<div></div>}>

        <Routes>

          <Route path="/" element={<Landing />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/fil" element={<Filter />} />

          <Route path="/pro/:id" element={<SingleProduct />} />

          <Route path="/auth" element={<Auth />} />

          <Route path="/policy" element={<Policy />} />

          <Route path="/terms" element={<Terms />} />

          <Route path="/Cart" element={<Cart />} />

        </Routes>

      </Suspense>



      <Suspense fallback={<div></div>}>

        {!Hide && <Footer />}

      </Suspense>


      <Toaster richColors position="top-center" />


    </>


  )
}

export default App
