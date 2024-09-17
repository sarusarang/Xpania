import React from 'react'

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

                                        <h5 style={{ color: "#777", fontWeight: '400' }}>Perfect Sandals for Gents</h5>

                                        <span className="text-muted ms-2"><i className="fas fa-shopping-basket fa-sm mx-1"></i></span>

                                        <span className="text-success">In Stock</span>

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




                                    {/* Incrediants */}
                                    <p className='mb-4'>
                                        Good
                                    </p>


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




                                    <div className="row">

                                        <dt className="col-2">Color:</dt>

                                        <dd className="col-10 mb-3">Black</dd>


                                    </div>



                                    {/* Quanity */}
                                    <div className=" mb-4">


                                        <div className="d-flex flex-column">


                                            <div className='d-flex align-items-center'>


                                                <label className="mb-1 fw-bold" style={{ fontSize: '1.3rem' }}>Size</label>


                                            </div>




                                            <div className='row btn-size'>


                                                <button className="btn btn-dark mt-2 col-1 ms-3">10</button>
                                                

                                            </div>


                                        </div>


                                    </div>


                                    <hr />


                                    <div className='row sec-buy mt-4'>

                                        {/* Buy Now */}
                                        <a className="btn btn-dark p-3 shadow me-3 col-md-5"> Buy now </a>
                                        <a className="btn btn-dark p-3 shadow col-md-6"> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

                                    </div>







                                </div>


                            </main>
                        </div>
                    </div>


                </section>


            </section >





        </>



    )




}

export default SingleProduct