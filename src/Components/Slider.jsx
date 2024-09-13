import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap';

function Slider() {



    return (


        <>





            <section>




                <Carousel controls={false}>


                    <Carousel.Item>


                        <Row>


                            <Col md={6} className="order-2 order-md-1 d-flex align-items-center" style={{ backgroundColor: '#efefef' }}>

                                <div className='slider-text'>

                                    <h1>Be Comfort & Stylish</h1>

                                    <p>
                                        This is the description for the first slide. You can add any text you want here,
                                        along with other elements.
                                    </p>


                                </div>


                            </Col>


                            <Col md={6} className="order-1 order-md-2 ps-0" style={{ backgroundColor: '#efefef' }}>


                                <div className='p-5 pb-0 pt-0'>

                                    <img
                                        className="d-block w-100"
                                        src="/slide-1.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                    />


                                </div>



                            </Col>


                        </Row>


                    </Carousel.Item>




                    <Carousel.Item>


                        <Row>


                            <Col md={6} className="order-2 order-md-1 d-flex align-items-center" style={{ backgroundColor: '#efefef' }}>

                                <div className='slider-text'>

                                    <h1>Collections to match</h1>

                                    <p>
                                    Discover our collections perfectly matched with stylish footwear. Step out with confidence and flair!
                                    </p>


                                </div>


                            </Col>


                            <Col md={6} className="order-1 order-md-2 ps-0" style={{ backgroundColor: '#efefef' }}>


                                <div className='p-5 pb-0 pt-0'>

                                    <img
                                        className="d-block w-100"
                                        src="/slide-2.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                    />


                                </div>



                            </Col>


                        </Row>


                    </Carousel.Item>




                    <Carousel.Item>


                        <Row>


                            <Col md={6} className="order-2 order-md-1 d-flex align-items-center" style={{ backgroundColor: '#efefef' }}>

                                <div className='slider-text'>

                                    <h1>Steps towards Ambition</h1>

                                    <p>
                                    A step towards ambition with our quality footwear collection, upraise your journey with every step!
                                    </p>


                                </div>


                            </Col>


                            <Col md={6} className="order-1 order-md-2 ps-0" style={{ backgroundColor: '#efefef' }}>


                                <div className='p-5 pb-0 pt-0'>

                                    <img
                                        className="d-block w-100"
                                        src="/slide-3.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                    />


                                </div>



                            </Col>


                        </Row>


                    </Carousel.Item>




                    <Carousel.Item>


                        <Row>


                            <Col md={6} className="order-2 order-md-1 d-flex align-items-center" style={{ backgroundColor: '#efefef' }}>

                                <div className='slider-text'>

                                    <h1>Trust in Care</h1>

                                    <p>
                                    Stands for comfort, posture, and confidence, Have an option for your perfect!
                                    </p>


                                </div>


                            </Col>


                            <Col md={6} className="order-1 order-md-2 ps-0" style={{ backgroundColor: '#efefef' }}>


                                <div className='p-5 pb-0 pt-0'>

                                    <img
                                        className="d-block w-100"
                                        src="/slide-4.jpg"
                                        alt="First slide"
                                        loading='lazy'
                                    />


                                </div>



                            </Col>


                        </Row>


                    </Carousel.Item>









                </Carousel>







            </section>






        </>








    )



}

export default Slider