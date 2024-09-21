import React, { useEffect } from 'react'
import './Filter.css'
import { useState } from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ProductList } from '../Hooks/ProductList';
import { Skeleton } from '@mui/material';
import { GetFilter } from '../Services/AllAPi';
import { useLocation } from 'react-router-dom';


function Filter() {



    const location = useLocation();



    // ALL PRODUCT DATA
    const { data, isLoading, isError, isSuccess } = ProductList();


    // Filter Data
    const [Filter, SetFilter] = useState([])


    // Filter Status
    const [showAllSize, setShowAllSize] = useState(false)

    const [showAllColor, setShowAllColor] = useState(false)

    const [open, setOpen] = useState(false)


    const [FilterData, setFilterData] = useState({

        brand: "",
        category: [],
        midcategory: [],
        type: [],
        size: "",
        color: ""


    });



    const Navigate = useNavigate()





    // Use params Filter
    useEffect(() => {

        const queryParams = new URLSearchParams(location.search);

        const brand = queryParams.get('brand') || "";

        setFilterData({ ...FilterData, brand: brand })

    }, [location.search])




    // Handling filter data
    const handleCheckboxChange = (filterType, value) => {
        setFilterData(prevState => {
            const currentValues = prevState[filterType];
            if (currentValues.includes(value.toLowerCase())) {
                return { ...prevState, [filterType]: currentValues.filter(item => item !== value.toLowerCase()) }; // Remove item
            } else {
                return { ...prevState, [filterType]: [...currentValues, value.toLowerCase()] }; // Add item
            }
        });
    };






    // filtering 
    useEffect(() => {

        if (!data || isLoading || isError) return;

        const filteredData = data.filter((item) => {

            const brandMatch = FilterData.brand.length === 0 || FilterData.brand.includes(item.brand.toLowerCase()) || FilterData.brand.toLowerCase() === "allbrands"

            const categoryMatch = FilterData.category.length === 0 || FilterData.category.includes(item.category.toLowerCase())

            const MidcategoryMatch = FilterData.midcategory.length === 0 || FilterData.midcategory.includes(item.mid_cateory.toLowerCase())

            const typeMatch = FilterData.type.length === 0 || FilterData.type.includes(item.sub_cateory.toLowerCase())

            return brandMatch && categoryMatch && typeMatch && MidcategoryMatch

        })

        SetFilter(filteredData)

        window.scrollTo(0, 0)

    }, [data, FilterData.midcategory,FilterData.category,FilterData.type, FilterData.brand, isLoading, isError,location.search])




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


        setFilterData({ ...FilterData, brand: "", type: [], category: [], midcategory: [], size: "", color: "" })

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

                                <Form.Control as="select" onChange={(e) => { setFilterData({ ...FilterData, brand: e.target.value }) }}>

                                    <option value="allbrands">All Brands</option>
                                    <option value="xpania">XPANIA</option>
                                    <option value="zibago">ZIBAGO</option>
                                    <option value="aida">AIDA</option>

                                </Form.Control>

                            </Form.Group>



                            <Accordion defaultActiveKey={['0']} alwaysOpen>

                                <Accordion.Item eventKey="0">

                                    <Accordion.Header >Category</Accordion.Header>


                                    <Accordion.Body>


                                        <Form>

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.category.includes('gents')}
                                                label="Gents"
                                                id="category-men"
                                                className="custom-checkbox"
                                                value="gents"
                                                onChange={() => handleCheckboxChange('category', "gents")}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.category.includes('ladies')}
                                                label="Ladies"
                                                value="ladies"
                                                id="category-gents"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('category', "ladies")}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.category.includes('boys&girls')}
                                                label="Boys & Girls"
                                                value="boys&girls"
                                                id="category-boys"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('category', "boys&girls")}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                label="Kids"
                                                value="kids"
                                                checked={FilterData.category.includes('kids')}
                                                id="category-kids"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('category', "kids")}
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
                                                checked={FilterData.midcategory.includes('shoes')}
                                                label="Shoes"
                                                value="Shoes"
                                                id="type-Shoes"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('midcategory', "shoes")}

                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type.includes('sports')}
                                                label="Sports"
                                                value="Sports"
                                                id="type-Sports"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('type', "sports")}
                                            />

                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type.includes('casual')}
                                                label="Casuals"
                                                value="Casual"
                                                id="type-Casuals"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('type', "casual")}
                                            />


                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type.includes('formal')}
                                                label="Formals"
                                                value="Formals"
                                                id="type-Formals"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('type', "formal")}
                                            />



                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type.includes('sandals')}
                                                label="Sandals"
                                                value="Sandals"
                                                id="type-Sandals"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('type', "sandals")}
                                            />




                                            <Form.Check

                                                type="checkbox"
                                                checked={FilterData.type.includes('flipflop')}
                                                label="Flip Flop"
                                                value="FilpFlop"
                                                id="type-Flip Flop"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('type', "FlipFlop")}

                                            />


                                            <Form.Check
                                                type="checkbox"
                                                checked={FilterData.type.includes('clogs')}
                                                label="Clogs"
                                                value="Clogs"
                                                id="type-Clogs"
                                                className="custom-checkbox"
                                                onChange={() => handleCheckboxChange('type', "clogs")}
                                            />


                                        </Form>


                                    </Accordion.Body>



                                </Accordion.Item>





                                <Accordion.Item eventKey="2">

                                    <Accordion.Header>Size</Accordion.Header>

                                    <Accordion.Body>

                                        <Form>

                                            <Form.Check checked={FilterData.size == "1"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="1" value="1" id="size-1" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "2"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="2" value="2" id="size-2" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "3"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="3" value="3" id="size-3" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "4"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="4" value="4" id="size-4" className="custom-checkbox" />

                                            <Form.Check checked={FilterData.size == "5"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="5" value="5" id="size-5" className="custom-checkbox" />



                                            {

                                                !showAllSize &&


                                                <p className=' text-success' style={{ cursor: 'pointer' }} onClick={() => { setShowAllSize(!showAllSize) }}>+7 more</p>

                                            }



                                            {

                                                showAllSize &&

                                                <div>

                                                    <Form.Check checked={FilterData.size == "6"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="6" value="6" id="size-6" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "7"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="7" value="7" id="size-7" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "8"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="8" value="8" id="size-8" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "9"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="9" value="9" id="size-9" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "10"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="10" value="10" id="size-10" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "11"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="11" value="11" id="size-11" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "12"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="12" value="12" id="size-12" className="custom-checkbox" />

                                                    <Form.Check checked={FilterData.size == "13"} onChange={(e) => { setFilterData({ ...FilterData, size: e.target.value }) }} type="checkbox" label="13" value="13" id="size-13" className="custom-checkbox" />


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

                                                <Form.Check value="black" type="checkbox" id="size-1" className="custom-checkbox" />

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

                                Array.from({ length: 6 }).map((item,index) => (


                                    <div className=' mt-3 col-md-4' key={index}>

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