import React from "react"
import { useState, useEffect, Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

const Landing = lazy(() => import('./Pages/Landing'))
const Header = lazy(() => import('./Components/Header'))
const Footer = lazy(() => import('./Components/Footer'))
const About = lazy(() => import('./Pages/AboutUs'))
const Contact = lazy(() => import('./Pages/Contact'))
const SingleProduct = lazy(() => import('./Pages/SingleProduct'))
const Filter = lazy(() => import('./Pages/Filter'))
const Auth = lazy(() => import('./Pages/Auth'))
const Policy = lazy(() => import('./Pages/Policy'))
const Terms = lazy(() =>  import('./Pages/Terms') )


function App() {


  return (



    <>

      <Suspense fallback={<div></div>}>

        <div className="w-100 head-shdw">

          <Header />

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

        </Routes>

      </Suspense>





      <Suspense fallback={<div></div>}>

        <Footer />

      </Suspense>



    </>





  )
}

export default App
