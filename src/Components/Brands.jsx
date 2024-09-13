import React from 'react'
import { useEffect } from 'react';
import './Brand.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

function Brands() {


    useEffect(() => {

        Aos.init()

    }, [])


    return (


        <section className='container pt-5 pb-5'>

            <div className='brand-head'>

                <h1 data-aos="fade-left" data-aos-duration="500">Our Brands</h1>
                <p data-aos="zoom-out-right" data-aos-duration="500">To Experience Ultimate Comfort With Perfect Footwear, We Introduced More <br /> Brands To Match The Needs Of All</p>

            </div>


            <div className='row'>



                <div className='col-md-4 brand p-5' data-aos="fade-up" data-aos-duration="500">

                    <img src="/xpanialogo.png" className='img-fluid' alt="img" loading='lazy' />

                    <div className='d-flex flex-column align-items-center'>

                        <p>Offers A Sophisticated Range Of Footwear Designed For Women & Gents, Premium Materials With Timeless Designs.</p>

                        <button className='btn btn-discover w-50'> Discover</button>

                    </div>

                </div>



                <div className='col-md-4 brand p-5' data-aos="fade-up" data-aos-duration="1500">

                    <img src="/zibagologo.png" className='img-fluid' alt="img" loading='lazy' />

                    <div className='d-flex flex-column align-items-center'>

                        <p>Is Perfect For Those Who Navigate The Hustle And Bustle Of Life While Keeping Their Style Of Activity Strong.</p>

                        <button className='btn btn-discover w-50'> Discover</button>

                    </div>

                </div>



                <div className='col-md-4 brand p-5' data-aos="fade-up" data-aos-duration="1000">

                    <img src="/adalogo.png" className='img-fluid' alt="img" loading='lazy' />

                    <div className='d-flex flex-column align-items-center'>

                        <p>Foot Health Without Compromising On Style, Offers Shoes & Sandals That Keep You Comfortable All Day Long</p>

                        <button className='btn btn-discover w-50'> Discover</button>

                    </div>

                </div>




            </div>






        </section>




    )




}

export default Brands