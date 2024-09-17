import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './ProductSlide.css'

function ProductSlide() {



    // Slider Responsive
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (



        <>


            <section className='container'>


                <Carousel responsive={responsive}>

                    <div>

                       

                    </div>


                </Carousel>


            </section>







        </>



    )


}

export default ProductSlide