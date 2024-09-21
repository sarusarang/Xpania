import React, { useEffect, useState } from 'react'
import { GetCartItems } from '../Hooks/AddCart';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom'
import { DeleteCartItems } from '../Hooks/AddCart';

function Cart() {



    const [CartItems, SetCartItems] = useState([])


    // Cart DELETE
    const { mutate } = DeleteCartItems()


    const Navigate = useNavigate()


    // Cart Items
    const { data, isSuccess } = GetCartItems()


    console.log(data);
    


    useEffect(() => {
        

        const user = sessionStorage.getItem("user");

        if (!user) {
            toast.warning("Login First...!");
            Navigate('/auth');
            return;
        }


        if (isSuccess) {
            const CartProducts = data.map(item => item.product);
            SetCartItems(CartProducts);
        }

        window.scrollTo(0, 0);

    }, [data, isSuccess, Navigate])



    // Product Quanity Change
    const ChangeQuanity = (newquanity, id) => {


        SetCartItems(CartItems.map(item =>

            item.id === id ? { ...item, quantity: newquanity } : item

        ))

    }



    // Cart Total Price
    const TotalPrice = () => {

        return CartItems.reduce((total, item) => total + item.quantity * (item.offer_is_available ? item.offer_price : item.price), 0)

    }







    return (


        <>


            <div className="container-fluid p-md-5 pt-0 mt-2">

                <div className="row">

                    {/* Left Section: Cart Item */}
                    <div className="col-md-8 ">

                        {

                            CartItems.length > 0 &&
                            < h3 className="text-md-start">

                                Your cart:

                                <span className='ms-2'>₹{TotalPrice()}</span>


                            </h3>

                        }




                        {
                            CartItems.length > 0 &&


                            <div className="alert alert-info my-3 text-center alert-shimmer">  <i className="fa-solid fa-certificate me-2"></i>


                                Step into comfort and style with XPANIA—your comfort awaits! Buy now and elevate your look!

                            </div>

                        }



                        <div className="card mb-4">


                            {

                                CartItems.length > 0 ?

                                    CartItems.map((item) => (



                                        <div className="row justify-content-center mt-5 mb-5" key={item.id}>


                                            <div className="col-md-3 align-content-center ms-md-5" onClick={() => { Navigate(`/pro/${item.id}`) }} style={{ cursor: 'pointer' }}>

                                                <img
                                                    src={item.image}
                                                    className="img-fluid rounded-3  "
                                                    height={100}
                                                    alt="Sunglasses"
                                                />

                                            </div>


                                            <div className="card-main col-md-4">

                                                <div className="card-body text-start mt-md-0 mt-5 ">


                                                    <h5 className="card-title">{item.name} </h5>
                                                    <p className="text-muted">{item.category} {item.sub_cateory}</p>


                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <strong>Brand:</strong> {item.brand}
                                                        </li>

                                                    </ul>






                                                </div>


                                            </div>


                                            <div className='col-md-4'>

                                                <h4 className="text-md-start  mb-2 text-center pt-1 h6">

                                                    Quantity

                                                </h4>


                                                {/* Quantity Selector */}
                                                <div className="quantity d-lg-flex">


                                                    <div className="mt-2 quantity-selector d-flex align-items-center text-center justify-content-center">

                                                        <select style={{ width: '100px' }} onChange={(e) => { ChangeQuanity(e.target.value, item.id) }} className="form-select">

                                                            <option value={1}>1</option>
                                                            <option value={2}>2</option>
                                                            <option value={3}>3</option>
                                                            <option value={4}>4</option>
                                                            <option value={5}>5</option>

                                                        </select>


                                                    </div>


                                                    <div className="remove mt-2 text-md-start text-center pb-md-1">
                                                        <button
                                                            className="btn btn-danger ms-md-3 fw-bold"
                                                            onClick={() => { mutate(item.id) }}

                                                        >
                                                            Remove  <i className="fa-solid fa-trash-can"></i>
                                                        </button>
                                                    </div>


                                                </div>



                                                <h5 className="mt-2 text-md-start text-center h6">
                                                    Price: ₹{item.offer_is_available ? item.offer_price * item.quantity : item.price * item.quantity}
                                                </h5>

                                            </div>


                                        </div>

                                    ))


                                    :

                                    <div className='d-flex flex-column'>

                                        <img src="https://www.buy.airoxi.com/img/empty-cart-1.png" className='img-fluid' loading='lazy' alt="img" />

                                    </div>


                            }

                        </div>


                    </div>

                    {/* Right Section: Summary */}
                    <div className="col-md-4  pt-xl-5">
                        <ul className="list-unstyled text-md-start text-center">
                            <li> <span className='text-success fw-bold'>✓</span>Quality Assured</li>
                            <li><span className='text-success fw-bold'>✓</span>Free standard shipping </li>
                        </ul>

                        <div className="card p-3 mt-md-4">

                            <div className="d-flex justify-content-between">
                                <span>Total Items:</span>
                                <span className='text-success fw-bold'>{CartItems.length}</span>
                            </div>

                            <div className="d-flex justify-content-between mt-2">
                                <span>Shipping <i className="fa-solid fa-truck-fast"></i></span>
                                <span className='text-success fw-bold'>Free</span>
                            </div>

                            <div className="d-flex justify-content-between mt-2">
                                <span>Total Price:</span>


                                {

                                    CartItems ?

                                        <span className='text-success fw-bold'>₹{TotalPrice()}</span>

                                        :
                                        0
                                }

                            </div>


                            <hr />


                            <div className="d-flex justify-content-between">
                                <span className='fw-bold'>Subtotal:</span>

                                {

                                    CartItems ?

                                        <span>₹{TotalPrice()}</span>

                                        :
                                        0
                                }


                            </div>


                            <button className="btn btn-primary mt-3 w-100 fw-bold">
                                CheckOut
                            </button>


                        </div>
                    </div>
                </div>
            </div >





        </>



    )







}

export default Cart