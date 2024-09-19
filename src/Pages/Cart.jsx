import React from 'react'

function Cart() {




    return (


        <>


            <div className="container mt-5">
                <div className="row">
                    {/* Left Section: Cart Item */}
                    <div className="col-md-8 ">
                        <h3 className="text-md-start">
                            Your cart: <span>1000</span>
                        </h3>
                        <div className="alert alert-info my-3">
                            Save $45 on this frame and 15% on a second one if you buy two
                            prescription pairs. <a href="#">xpania.in</a>
                        </div>
                        <div className="card mb-3 ">
                            <div className="row m-0 justify-content-center ">
                                <div className="col-md-4 align-content-center me-md-5">
                                    <img
                                        src="https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg"
                                        className="img-fluid rounded-3  "
                                        height={100}
                                        alt="Sunglasses"
                                    />
                                </div>
                                <div className="card-main col-md-8">
                                    <div className="card-body text-start mt-md-0 mt-5 ">
                                        <h5 className="card-title">Roosevelt</h5>
                                        <p className="text-muted">Striped Pacific with Grey lenses</p>
                                        <ul className="list-unstyled">
                                            <li>
                                                <strong>Brand:</strong> Xpania
                                            </li>
                                            <li>
                                                <strong>Category:</strong> Flip Flop
                                            </li>
                                            <li>
                                                <strong>Description:</strong> Good Quality (Leather)
                                            </li>
                                            <li>
                                                <strong> material:</strong> Leather
                                            </li>
                                        </ul>
                                        <h4 className="text-md-start text-center pt-4 pb-2">
                                            select quantity
                                        </h4>
                                        {/* Quantity Selector */}
                                        <div className="quantity d-lg-flex">
                                            <div className="quantity-selector d-flex align-items-center text-center justify-content-center">
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="form-control mx-2 quantity-input"
                                                    value=""
                                                    
                                                    min="1"
                                                />
                                                <button
                                                    className="btn btn-outline-secondary"
                                                    
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <div className="remove mt-3 text-md-start text-center pb-md-3">
                                                <button
                                                    className="btn btn-danger ms-md-5"
                                                    
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                        <h5 className="mt-3 text-md-start text-center">
                                            Total: $1000
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Summary */}
                    <div className="col-md-4  pt-xl-5">
                        <ul className="list-unstyled text-md-start text-center">
                            <li>✓ Quality Assured</li>
                            <li>✓ Free standard shipping </li>
                        </ul>

                        <div className="card p-3 mt-md-4">
                            <div className="d-flex justify-content-between">
                                <span>Shipping</span>
                                <span>Standard: Free</span>
                            </div>

                            <hr />
                            <div className="d-flex justify-content-between">
                                <span>Subtotal</span>
                                <span>1000</span>
                            </div>
                            <button className="btn btn-primary mt-3 w-100">
                                Make Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>





        </>



    )







}

export default Cart