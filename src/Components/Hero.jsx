import React from 'react'
import { useEffect } from 'react';
import './Hero.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

function Hero() {



    useEffect(() => {

        Aos.init()
        Aos.refresh(); 

    }, [])


    return (



        <>


            <section className='pt-5 pb-4' style={{ backgroundColor: '#e9eef5' }} >


                <div className='container'>




                    <div className='trend-text'>

                        <h1 data-aos="fade-left" data-aos-duration="500">Trending Products</h1>

                        <p data-aos="zoom-out-right" data-aos-duration="1000">It starts here! Step into the latest trends with our Stylish and comfortable <br /> collections find your perfect pair and make every stride a fashion statement.</p>

                    </div>


                    <div className='row pb-5'>


                        <div className='col-md-3 mt-4' data-aos="fade-up" data-aos-duration="500">

                            <div className="card custom-card mx-auto">


                                <Link>

                                    <img
                                        src="/image-01.jpg"
                                        className="card-img-top custom-img"
                                        alt="Sandal"
                                        loading='lazy'
                                    />

                                </Link>




                            </div>

                        </div>




                        <div className='col-md-3 mt-4' data-aos="fade-up" data-aos-duration="800">

                            <div className="card custom-card mx-auto">

                                <Link>

                                    <img
                                        src="/image-02.jpg"
                                        className="card-img-top custom-img"
                                        alt="Sandal"
                                        loading='lazy'
                                    />


                                </Link>



                            </div>

                        </div>





                        <div className='col-md-3 mt-4' data-aos="fade-up" data-aos-duration="1100">

                            <div className="card custom-card mx-auto">

                                <Link>

                                    <img
                                        src="/image-03.jpg"
                                        className="card-img-top custom-img"
                                        alt="Sandal"
                                        loading='lazy'
                                    />

                                </Link>

                            </div>

                        </div>




                        <div className='col-md-3 mt-4' data-aos="fade-up" data-aos-duration="1400">

                            <div className="card custom-card mx-auto">

                                <Link>

                                    <img
                                        src="/image-05.jpg"
                                        className="card-img-top custom-img"
                                        alt="Sandal"
                                        loading='lazy'
                                    />

                                </Link>

                            </div>

                        </div>

                    </div>


                </div>



            </section>














        </>




    )


}

export default Hero