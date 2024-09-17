import React from 'react'
import { useState } from 'react';
import ProductSlide from '../Components/ProductSlide'

function SingleProduct() {

    window.scrollTo(0, 0)



    return (



        <>

            < section >


                <section className="py-4 mb-5">


                    <div className="container">


                        <div className="row">


                            <aside className="col-lg-6">


                                <div className="border rounded-4 mb-3 d-flex justify-content-center">

                                    <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">

                                        <img loading='lazy' style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src="/image-01.jpg" />

                                    </a>

                                </div>


                            </aside>


                            <main className="col-lg-6">

                                <div className="ps-lg-3 p-3">

                                    {/* Tittle */}
                                    <h3 className="title text-dark mb-0 fw-bold">
                                        Xpania
                                    </h3>


                                    <div className="d-flex flex-row mt-1">

                                        <h5 style={{ color: "#535665", fontWeight: '400' }} >Perfect Sandals for Gents</h5>

                                        <span className="text-muted ms-2"><i className="fas fa-shopping-basket fa-sm mx-1"></i></span>

                                        <span className="text-success in-stock">In Stock</span>

                                    </div>


                                    {/* Price */}
                                    <div className="mb-3 mt-3">

                                        <div className='d-flex flex-row align-items-center'>

                                            <h5 className=" fw-bold mb-0 me-2">₹1000</h5>

                                            <span className="text-muted h6 mb-0 ">MRP <s>₹1000</s></span>

                                            <p className='text-success ms-2 mb-0 h5'><s style={{ textDecoration: 'none' }}>(10%off)</s></p>


                                        </div>


                                        <span className="text-success fw-bold" style={{ fontSize: '14px', fontWeight: '500' }}>Inclusive of all taxes</span>

                                    </div>







                                    <div className="d-flex justify-content-start mb-4">

                                        <a style={{ cursor: 'pointer' }} data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                            <img loading='lazy' width="60" height="60" className="rounded-2" src="/image-05.jpg" />
                                        </a>

                                        <a style={{ cursor: 'pointer' }} data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                            <img loading='lazy' width="60" height="60" className="rounded-2" src="/image-05.jpg" />
                                        </a>


                                        <a style={{ cursor: 'pointer' }} data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                            <img loading='lazy' width="60" height="60" className="rounded-2" src="/image-05.jpg" />
                                        </a>

                                    </div>



                                    {/* Color */}
                                    <div className="row">

                                        <dt className="col-2">Color:</dt>

                                        <dd className="col-10 mb-3">Black</dd>


                                    </div>






                                    {/* Size */}
                                    <div className=" mb-4">


                                        <div className="d-flex flex-column">


                                            <div className='d-flex align-items-center'>


                                                <label className="mb-1 fw-bold h4" style={{ fontSize: '18px' }}>Select Size</label>


                                            </div>




                                            <div className='row'>


                                                <div className="size-selector mt-2">
                                                    <button className="size-btn selected">8</button>
                                                    <button className="size-btn">9</button>
                                                    <button className="size-btn unavailable">10</button>
                                                    <button className="size-btn unavailable">11</button>
                                                </div>


                                            </div>

                                            {/* Delivery  */}
                                            <div className='row mt-4'>

                                                <h1 className='h6 fw-bold'>DELIVERY OPTIONS <i className="fa-solid fa-truck-fast"></i></h1>

                                                <div className="delivery-checker">

                                                    <div className="input-wrapper">

                                                        <input type="text" placeholder="Enter Pincode" className="postal-input" maxlength="6" pattern="\d{6}" inputMode='numeric' onInput={(e) => { e.target.value = e.target.value.replace(/\D/, '') }} />

                                                        <button className="check-btn">Check</button>

                                                    </div>

                                                    <p>Please enter PIN code to check delivery time & Delivery Availability*</p>

                                                </div>

                                            </div>


                                        </div>


                                    </div>


                                    <hr />



                                    {/* Buy Now */}
                                    <div className='row sec-buy'>


                                        <a className="btn btn-buy p-3 shadow me-3 col-md-5 mt-3"> Buy now </a>
                                        <a className="btn btn-buy p-3 shadow col-md-6 mt-3"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

                                    </div>


                                </div>


                            </main>


                        </div>


                    </div>


                </section>



                {/* Products */}
                <section className='pb-5 pt-5 mt-5' style={{ borderTop: '3px dotted #eee' }}>


                    <div>

                        <h3 className='text-center mb-0' style={{ fontWeight: '600' }}>YOU MAY ALSO LIKE</h3>
                        <p className='text-center' style={{ color: '#777' }}>Browse the collection of related products.</p>

                        <ProductSlide />

                    </div>


                </section>


            </section >





        </>



    )




}

export default SingleProduct