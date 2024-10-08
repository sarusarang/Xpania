import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import './ProductSlide.css'
import AspectRatio from '@mui/joy/AspectRatio'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Chip from '@mui/joy/Chip'
import Link from '@mui/joy/Link'
import Typography from '@mui/joy/Typography'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { ProductList } from '../Hooks/ProductList'
import { Skeleton } from '@mui/material'
import { useNavigate } from 'react-router-dom'


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


    const [Product, SetProduct] = useState([])


    // ALL PRODUCT DATA
    const { data, isLoading,isSuccess } = ProductList()


    const Navigate = useNavigate()


    useEffect(() => {


        const AddProducts = () => {


            const firstSixObjects = data.slice(0, 6);

            SetProduct(firstSixObjects)



        }

        AddProducts()

    }, [data, isSuccess])








    return (



        <>


            <section className='container mt-4'>


                <Carousel responsive={responsive}>


                    {


                        isLoading ?


                            Array.from({ length: 3 }).map((item,index) => (


                                <div className='me-5 mt-3' key={index}>

                                    <Skeleton sx={{ height: 190 }} width={'100%'} animation="wave" variant="rectangular" />

                                    <Skeleton animation="wave" height={20} width={'100%'} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                    <Skeleton animation="wave" height={20} width="80%" />

                                </div>

                            ))


                            :

                            Product.map((item) => (


                                <div className='ms-3' key={item.id}>


                                    <Card sx={{ width: "100% ", maxWidth: '100%', boxShadow: 'lg' }}>


                                        <CardOverflow>

                                            <AspectRatio sx={{ minWidth: 200 }}>
                                                <img
                                                    src={item.image}

                                                    loading="lazy"
                                                    alt="img"
                                                    onClick={() => Navigate(`/pro/${item.id}`)}
                                                />
                                            </AspectRatio>

                                        </CardOverflow>


                                        <CardContent>

                                            <Typography level="body-xs"></Typography>


                                            <Link

                                                onClick={() => Navigate(`/pro/${item.id}`)}
                                                color="neutral"
                                                textColor="text.primary"
                                                overlay
                                                endDecorator={<ArrowOutwardIcon />}
                                                sx={{ fontWeight: 'md' }}
                                            >
                                                {item.sub_cateory} for {item.category}
                                            </Link>



                                            <Typography
                                                level="title-lg"
                                                sx={{ mt: 1, fontWeight: 'xl' }}
                                                endDecorator={
                                                    item.offer_is_available && (

                                                        <Chip component="span" size="sm" variant="soft" color="success" className='shimmer-chip '>
                                                            Lowest Price
                                                        </Chip>
                                                    )
                                                }
                                            >
                                                <h5 className=" fw-bold mb-0 me-2">Just ₹{item.offer_is_available ? item.offer_price : item.price}</h5>

                                                <span className='small text-danger'>{item.offer_is_available ? <s> ₹{item.price} </s> : ""}</span>
                                            </Typography>

                                            {/* <Typography level="body-sm">
                                                (Only <b>7</b> left in stock!)
                                            </Typography> */}

                                        </CardContent>



                                    </Card>



                                </div>


                            ))

                    }


                </Carousel>


            </section>







        </>



    )


}

export default ProductSlide