import React from "react"
import { useState, useEffect, Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"

const Landing = lazy(() => import('./Pages/Landing'))
const Header = lazy(() => import('./Components/Header'))
const Footer = lazy(() => import('./Components/Footer'))


function App() {


  return (



    <>

      <Suspense fallback={<div></div>}>

        <Header />

      </Suspense>



      <Suspense fallback={<div></div>}>

        <Routes>

          <Route path="/" element={<Landing />} />

        </Routes>

      </Suspense>


      <Suspense fallback={<div></div>}>

        <Footer />

      </Suspense>



    </>





  )
}

export default App
