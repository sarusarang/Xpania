import React, { useEffect } from 'react'
import './Buy.css'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Buy() {



    const Navigate = useNavigate()

    useEffect(()=>{

        const user = sessionStorage.getItem("user")

        if(!user){

            toast.warning("Login First...!")

            Navigate('/auth')

        }

    })


    return (



        <>


            <div className="container my-3">

                <h1 className="fw-bold check-out text-center">Check Out</h1>

                <div className="row pt-xl-3 ">

                    <div className="left-section text-start col-lg-6 col-md-12">
                        <h5 className="fw-semibold">Casual Shoes</h5>
                        <h3>$1,499.00</h3>
                        <img
                            src="https://media.istockphoto.com/id/1407127841/photo/white-sneaker-with-colored-accents-on-a-green-gradient-background-mens-fashion-sport-shoe-air.jpg?s=612x612&w=0&k=20&c=h4PYQPT0vzv3QOgAHql4eSdbnfHdmgm5ewURKdzqk6c="
                            alt="Product"
                            className="img-fluid"
                        />
                    </div>

                    
                    <div className="right-section col-lg-6 col-md-12 pt-xl-5">


                        <form>

                           
                            <div className="mb-3">
                                <h4 className="form-label fw-bold text-md-start text-center  ">
                                    Billing Address
                                </h4>

                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Full Name"
                                    required
                                />
                                <input
                                    type="email"
                                    className="form-control mb-2"
                                    id="email"
                                    placeholder="Email"
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Phone Number "
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Address "
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="City"
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="PIN"
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="State"
                                    required
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Landmark"
                                    required
                                />
                            </div>


                            <select
                                className="form-select mb-2"
                                aria-label="Select Country"
                                required
                            >
                                <option value="India">India</option>
                                <option value="US">United States</option>
                                <option value="UK">United Kingdom</option>
                            </select>


                            <button type="submit" className="btn btn-primary btn-block mt-2">
                                Pay $1,499.00
                            </button>



                        </form>


                    </div>


                </div >


            </div >



        </>










    )








}

export default Buy