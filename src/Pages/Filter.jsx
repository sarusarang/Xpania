import React, { useEffect } from 'react'
import './Filter.css'
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductList } from '../Hooks/ProductList';
import { Skeleton } from '@mui/material';
import { GetFilter } from '../Services/AllAPi';

function Filter() {




    // ALL PRODUCT DATA
    const { data, isLoading, isError, isSuccess } = ProductList()


    // Filter Data
    const [Filter, SetFilter] = useState([])


    // Filter Status
    const [showAllSize, setShowAllSize] = useState(false)

    const [showAllColor, setShowAllColor] = useState(false)

    const [open, setOpen] = useState(false)


    const [FilterData, SetFilterData] = useState({

        brand: "", category: "", type: "", size: "", color: ""

    })


    const Navigate = useNavigate()




    useEffect(() => {

        if (!data || isLoading || isError) return

        const filteredData = data.filter((item) => {

            const brandMatch = !FilterData.brand || FilterData.brand.toLowerCase() === "allbrands" || item.brand.toLowerCase() === FilterData.brand.toLowerCase();
            const categoryMatch = !FilterData.category || item.category.toLowerCase() === FilterData.category.toLowerCase();
            const typeMatch = !FilterData.type || item.sub_cateory?.toLowerCase() === FilterData.type.toLowerCase();

            return brandMatch && categoryMatch && typeMatch

        })

        SetFilter(filteredData)

        window.scrollTo(0, 0)

    }, [data, FilterData, isLoading, isError])



    // Size Filter
    useEffect(() => {


        const GetFilterData = async () => {


            try {


                if (FilterData.category) {


                    const res = await GetFilter(FilterData.category, FilterData.size, FilterData.color)


                    if (res.status >= 200 && res.status <= 300) {


                        SetFilter(res.data)

                    }
                    else {

                        console.log(res);


                    }

                }


            }
            catch (err) {

                console.log(err);


            }


        }

        window.scrollTo(0, 0);


        GetFilterData()


    }, [FilterData.size, FilterData.color])




    const ClearAll = () => {


        SetFilterData({ ...FilterData, brand: "", type: "", category: "" })

    }

    
    



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

                                <button className='btn text-danger' style={{ fontWeight: '500' }} onClick={ClearAll}>Clear All</button>


                            </div>




                            {/* Category Filter */}
                            <Form.Group controlId="categoryFilter">

                                <Form.Label className='fw-bold'>Brands</Form.Label>

                                <Form.Control as="select" onChange={(e) => { SetFilterData({ ...FilterData, brand: e.target.value }) }}>

                                    <option value="allbrands">All Brands</option>
                                    <option value="XPANIA">XPANIA</option>
                                    <option value="ZIBAGO">ZIBAGO</option>
                                    <option value="AIDA">AIDA</option>

                                </Form.Control>

                            </Form.Group>



                            <Accordion defaultActiveKey={['0']} alwaysOpen>

                                <Accordion.Item eventKey="0">

                                    <Accordion.Header >Category</Accordion.Header>


                                    <Accordion.Body>


                                        <Form>

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.category == "gents"}
                                                label="Gents"
                                                id="category-men"
                                                className="custom-checkbox"
                                                value="gents"
                                                onChange={(e) => { SetFilterData({ ...FilterData, category: e.target.value }) }}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.category == "ladies"}
                                                label="Ladies"
                                                value="ladies"
                                                id="category-gents"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, category: e.target.value }) }}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.category == "boys&girls"}
                                                label="Boys & Girls"
                                                value="boys&girls"
                                                id="category-boys"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, category: e.target.value }) }}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label="Kids"
                                                value="kids"
                                                checked={FilterData.category == "kids"}
                                                id="category-kids"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, category: e.target.value }) }}
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
                                                checked={FilterData.type == "Shoes"}
                                                label="Shoes"
                                                value="Shoes"
                                                id="type-Shoes"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, type: e.target.value }) }}

                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type == "Sports"}
                                                label="Sports"
                                                value="Sports"
                                                id="type-Sports"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, type: e.target.value }) }}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type == "Casual"}
                                                label="Casuals"
                                                value="Casual"
                                                id="type-Casuals"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, type: e.target.value }) }}
                                            />


                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type == "Formals"}
                                                label="Formals"
                                                value="Formals"
                                                id="type-Formals"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, type: e.target.value }) }}
                                            />



                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type == "Sandals"}
                                                label="Sandals"
                                                value="Sandals"
                                                id="type-Sandals"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, type: e.target.value }) }}
                                            />




                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type == "Filp Flop"}
                                                label="Flip Flop"
                                                value="Filp Flop"
                                                id="type-Flip Flop"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, type: e.target.value }) }}
                                            />


                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type == "Clogs"}
                                                label="Clogs"
                                                value="Clogs"
                                                id="type-Clogs"
                                                className="custom-checkbox"
                                                onChange={(e) => { SetFilterData({ ...FilterData, type: e.target.value }) }}
                                            />


                                        </Form>


                                    </Accordion.Body>



                                </Accordion.Item>





                                <Accordion.Item eventKey="2">

                                    <Accordion.Header>Size</Accordion.Header>

                                    <Accordion.Body>

                                        <Form>

                                            <Form.Check checked={FilterData.size == "1"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="1" value="1" id="size-1" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "2"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="2" value="2" id="size-2" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "3"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="3" value="3" id="size-3" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "4"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="4" value="4" id="size-4" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "5"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="5" value="5" id="size-5" className="custom-checkbox" />



                                            {

                                                !showAllSize &&


                                                <p className=' text-success' style={{ cursor: 'pointer' }} onClick={() => { setShowAllSize(!showAllSize) }}>+7 more</p>

                                            }



                                            {

                                                showAllSize &&

                                                <div>

                                                    <Form.Check checked={FilterData.size == "6"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="6" value="6" id="size-6" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "7"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="7" value="7" id="size-7" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "8"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="8" value="8" id="size-8" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "9"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="9" value="9" id="size-9" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "10"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="10" value="10" id="size-10" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "11"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="11" value="11" id="size-11" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "12"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="12" value="12" id="size-12" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "13"} onChange={(e) => { SetFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="13" value="13" id="size-13" className="custom-checkbox" />


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

                                                <Form.Check value="black"  type="checkbox" id="size-1" className="custom-checkbox" />

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


                            {

                                Filter.length > 0 &&

                                <h4>{Filter.length} Products Found</h4>

                            }






                            {

                                isLoading &&

                                Array.from({ length: 6 }).map((item) => (


                                    <div className=' mt-3 col-md-4'>

                                        <Skeleton sx={{ height: 190 }} width={'100%'} animation="wave" variant="rectangular" />

                                        <Skeleton animation="wave" height={20} width={'100%'} style={{ marginBottom: 6, marginTop: '1rem' }} />

                                        <Skeleton animation="wave" height={20} width="80%" />

                                    </div>

                                ))


                            }


                            {

                                isSuccess && Filter.length > 0 ?


                                    Filter.map((item) => (


                                        <Col md={3} sm={6} xs={12} key={item.id} className="product-col">


                                            <div className="card w-100 my-2 border hover-shdw">


                                                <div className='new-arrival'>

                                                    <img alt='product-image' loading='lazy' src={item.image} className="card-img-top" style={{ cursor: 'pointer' }} onClick={() => { Navigate(`/pro/${item.id}`) }} />

                                                </div>



                                                <div className="card-body d-flex flex-column">

                                                    <p className="mb-1">{item.category} {item.sub_cateory} <span className='fw-bold'>{item.name}</span></p>

                                                    <p className="fw-bold mb-1">{item.brand}</p>

                                                    <div className="d-flex flex-row align-items-center">

                                                        <p className="mb-1 me-1 fw-bold">Rs.{item.offer_is_available ? item.offer_price : item.price}</p>

                                                        <span className="text-danger small">{item.offer_is_available ? <s>₹{item.price}</s> : ""}</span>

                                                        <p className='text-success ms-2 mb-0'>{item.offer_is_available ? <s style={{ textDecoration: 'none' }}>({item.offer_percentage}%off)</s> : ""}</p>


                                                    </div>

                                                </div>


                                            </div>


                                        </Col>


                                    ))

                                    :


                                    <div className='d-flex justify-content-center p-5 pt-0'>

                                        <img src="https://www.fruitomans.com/themes/home/images/no-product-found.png" className='img-fluid' alt="img" loading='lazy' />

                                    </div>


                            }



                        </Row>



                    </Col>



                </Row>



            </Container >



        </>


    )



}

export default Filter