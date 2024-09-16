import React from 'react'
import './Filter.css'
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Pagination, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Filter() {


    // Filter Status
    const [showAllSize, setShowAllSize] = useState(false)

    const [showAllColor, setShowAllColor] = useState(false)

    const [open, setOpen] = useState(false)


    const Navigate = useNavigate()



    return (




        <>

            <Container fluid className="filter-page p-4 pt-5">


                <Row className='border-top pt-4'>



                    {/* Filter Sidebar */}
                    <Col md={2} className="sidebar">


                        <Button
                            className="btn btn-success text-white mb-3 w-100 d-lg-none"
                            type="button"
                            onClick={() => setOpen(!open)}
                            aria-controls="navbarSupportedContent"
                            aria-expanded={open}
                        >
                            <span>Show filter</span>

                        </Button>


                        <div className={`collapse d-lg-block mb-5 ${open ? 'show' : ''}`} id="navbarSupportedContent">






                            <div className='d-flex justify-content-between mb-3'>

                                <h4 className='mb-0'>Filter</h4>

                                <button className='btn text-danger' style={{ fontWeight: '500' }}>Clear All</button>


                            </div>




                            {/* Category Filter */}
                            <Form.Group controlId="categoryFilter">

                                <Form.Label className='fw-bold'>Brands</Form.Label>
                                <Form.Control as="select">
                                    <option>All Brands</option>
                                    <option>XPANIA</option>
                                    <option>ZIBAGO</option>
                                    <option>AIDA</option>
                                </Form.Control>

                            </Form.Group>



                            <Accordion defaultActiveKey={['0']} alwaysOpen>

                                <Accordion.Item eventKey="0">

                                    <Accordion.Header >Category</Accordion.Header>


                                    <Accordion.Body>


                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                                label="Men"
                                                id="category-men"
                                                className="custom-checkbox"
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label="Gents"
                                                id="category-gents"
                                                className="custom-checkbox"
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label="Boys & Girls"
                                                id="category-boys"
                                                className="custom-checkbox"
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label="Kids"
                                                id="category-kids"
                                                className="custom-checkbox"
                                            />



                                        </Form>

                                    </Accordion.Body>


                                </Accordion.Item>



                                <Accordion.Item eventKey="1">

                                    <Accordion.Header>Type</Accordion.Header>

                                    <Accordion.Body>

                                        <Form>
                                            <Form.Check
                                                type="checkbox"
                                                label="Shoes"
                                                id="type-Shoes"
                                                className="custom-checkbox"

                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label="Sports"
                                                id="type-Sports"
                                                className="custom-checkbox"
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label="Casuals"
                                                id="type-Casuals"
                                                className="custom-checkbox"
                                            />


                                            <Form.Check
                                                type="checkbox"
                                                label="Formals"
                                                id="type-Formals"
                                                className="custom-checkbox"
                                            />



                                            <Form.Check
                                                type="checkbox"
                                                label="Sandals"
                                                id="type-Sandals"
                                                className="custom-checkbox"
                                            />




                                            <Form.Check
                                                type="checkbox"
                                                label="Flip Flop"
                                                id="type-Flip Flop"
                                                className="custom-checkbox"
                                            />


                                            <Form.Check
                                                type="checkbox"
                                                label="Clogs"
                                                id="type-Clogs"
                                                className="custom-checkbox"
                                            />


                                        </Form>


                                    </Accordion.Body>



                                </Accordion.Item>





                                <Accordion.Item eventKey="2">

                                    <Accordion.Header>Size</Accordion.Header>

                                    <Accordion.Body>

                                        <Form>

                                            <Form.Check type="checkbox" label="1" id="size-1" className="custom-checkbox" />

                                            <Form.Check type="checkbox" label="2" id="size-2" className="custom-checkbox" />

                                            <Form.Check type="checkbox" label="3" id="size-3" className="custom-checkbox" />

                                            <Form.Check type="checkbox" label="4" id="size-4" className="custom-checkbox" />

                                            <Form.Check type="checkbox" label="5" id="size-5" className="custom-checkbox" />



                                            {

                                                !showAllSize &&


                                                <p className=' text-success' style={{ cursor: 'pointer' }} onClick={() => { setShowAllSize(!showAllSize) }}>+7 more</p>

                                            }



                                            {

                                                showAllSize &&

                                                <div>

                                                    <Form.Check type="checkbox" label="6" id="size-6" className="custom-checkbox" />

                                                    <Form.Check type="checkbox" label="7" id="size-7" className="custom-checkbox" />

                                                    <Form.Check type="checkbox" label="8" id="size-8" className="custom-checkbox" />

                                                    <Form.Check type="checkbox" label="9" id="size-9" className="custom-checkbox" />

                                                    <Form.Check type="checkbox" label="10" id="size-10" className="custom-checkbox" />

                                                    <Form.Check type="checkbox" label="11" id="size-11" className="custom-checkbox" />

                                                    <Form.Check type="checkbox" label="12" id="size-12" className="custom-checkbox" />

                                                    <Form.Check type="checkbox" label="13" id="size-13" className="custom-checkbox" />


                                                </div>

                                            }




                                        </Form>


                                    </Accordion.Body>



                                </Accordion.Item>




                                <Accordion.Item eventKey="3">

                                    <Accordion.Header>Color</Accordion.Header>

                                    <Accordion.Body>

                                        <Form>



                                            <div className="checkbox-container">

                                                <Form.Check type="checkbox" id="size-1" className="custom-checkbox" />

                                                <div className="label-container">

                                                    <span className='color me-1' style={{ backgroundColor: '#312f2f' }}></span>

                                                    <label htmlFor="size-1">Black</label>

                                                </div>

                                            </div>



                                            <div className="checkbox-container">

                                                <Form.Check type="checkbox" id="size-1" className="custom-checkbox" />

                                                <div className="label-container">

                                                    <span className='color me-1' style={{ backgroundColor: 'red' }}></span>

                                                    <label htmlFor="size-1">Red</label>

                                                </div>

                                            </div>



                                            {

                                                !showAllColor &&


                                                <p className=' text-success' style={{ cursor: 'pointer' }} onClick={() => { setShowAllColor(!showAllColor) }}>+1 more</p>

                                            }



                                            {

                                                showAllColor &&

                                                <div>

                                                    <div className="checkbox-container">

                                                        <Form.Check type="checkbox" id="size-1" className="custom-checkbox" />

                                                        <div className="label-container">

                                                            <span className='color me-1' style={{ backgroundColor: 'green' }}></span>

                                                            <label htmlFor="size-1">Green</label>

                                                        </div>

                                                    </div>



                                                </div>

                                            }




                                        </Form>


                                    </Accordion.Body>



                                </Accordion.Item>



                            </Accordion>


                        </div>


                    </Col>







                    {/* Product Grid */}
                    <Col md={10} className='p-4 pt-0 pb-0'>


                        <Row>


                            <h4>9 Products Found</h4>

                            {[...Array(9)].map((_, idx) => (
                                <Col md={3} sm={6} xs={12} className="product-col" key={idx}>



                                    <div className="card w-100 my-2 border hover-shdw">


                                        <div className='new-arrival'>

                                            <img loading='lazy' src="/image-05.jpg" className="card-img-top" style={{ cursor: 'pointer' }} onClick={() => { Navigate(`/pro/1`) }} />


                                        </div>



                                        <div className="card-body d-flex flex-column">

                                            <p className="mb-1">Gents Sandals <span className='fw-bold'>XLV001</span></p>
                                            <p className="fw-bold mb-1">Xpania</p>

                                            <div className="d-flex flex-row align-items-center">

                                                <p className="mb-1 me-1 fw-bold">Rs.1000</p>

                                                <span className="text-danger small"><s>₹1000</s></span>

                                                <p className='text-success ms-2 mb-0 small'>(10%off)</p>


                                            </div>


                                        </div>


                                    </div>


                                </Col>
                            ))}

                        </Row>

                        {/* Pagination */}
                        <Pagination className="pagination-bar">

                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Next />


                        </Pagination>



                    </Col>



                </Row>





            </Container >







        </>


    )



}

export default Filter