import React from 'react'
import Slider from '../Components/Slider'
import Brands from '../Components/Brands'
import Hero from '../Components/Hero'

function Landing() {


    window.scrollTo(0, 0)

    return (



        <>

            <section className='w-100'>


                {/* Slider */}
                <div>

                    <Slider />

                </div>


                {/* Brands */}
                <div>

                    <Brands />

                </div>

                {/* Hero */}
                <div>

                    <Hero />

                </div>


            </section>



        </>







    )


}

export default Landing