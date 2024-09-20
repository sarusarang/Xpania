import React, { useEffect } from 'react'
import { useState } from 'react';
import ProductSlide from '../Components/ProductSlide'
import { ProductList } from '../Hooks/ProductList';
import { useNavigate, useParams } from 'react-router-dom';
import { GetQuanity } from '../Services/AllAPi';
import { GetColor, AddtoCart } from '../Services/AllAPi';
import ProductSkelton from '../Components/ProductSkelton'
import { toast } from 'sonner';
import { GetCartItems } from '../Hooks/AddCart'

function SingleProduct() {



    // Product id 
    const { id } = useParams()


    const Navigate = useNavigate();

    // ALL PRODUCT DATA
    const { data, isLoading, isSuccess, refetch } = ProductList()

    // Cart Refetch
    const{refetch:CartFetch} = GetCartItems()


    // Product Data
    const [ProductData, SetProductData] = useState({})


    // Price and Quanity 
    const [PriceandQuanity, SetPriceandQuanity] = useState({})


    // all Quanity
    const [AllQuanity, SetAllQuanity] = useState([])


    // All Colors
    const [AllColors, SetAllColors] = useState([])



    //Selected Color
    const [SelectedColor, SetSelectedColor] = useState({})


    const [loading, Setloading] = useState(true)





    useEffect(() => {


        const GetAllProducts = () => {

            if (isSuccess) {


                const Result = data.find((item) => (item.id == id))

                SetProductData(Result)

            }

        }


        // Get Quanity
        const AllQuanity = async () => {


            try {


                const res = await GetQuanity()

                if (res.status >= 200 && res.status <= 300) {


                    const result = res.data.filter(item => item.product == id)


                    const defaultquanity = result.find((item) => (item))


                    SetPriceandQuanity(defaultquanity)


                    SetAllQuanity(result)
                    Setloading(false)



                } else {


                    console.log(res);
                    Setloading(true)



                }

            }
            catch (err) {

                console.log(err);
                Setloading(true)


            }

        }



        // Get Prodct Color
        const ProductColor = async () => {


            try {

                const res = await GetColor()

                if (res.status >= 200 && res.status <= 300) {

                    const result = res.data.filter(item => item.product == id)

                    const defaultcolor = result.find((item) => (item))

                    SetAllColors(result)

                    SetSelectedColor(defaultcolor)

                    Setloading(false)




                }
                else {

                    console.log(res)
                    Setloading(true)


                }

            }
            catch (Err) {


                console.log(Err);
                Setloading(true)

            }

        }


        GetAllProducts()

        AllQuanity()

        ProductColor()

        refetch()

        window.scrollTo(0, 0)


    }, [id])



    // Handle Add To Cart
    const HandleCart = async (product_id) => {


        try {


            const user = sessionStorage.getItem("user")
            const token = sessionStorage.getItem("token")


            if (user) {


                const reqheader = {

                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${token}`

                }

                const formdata = new FormData()
                formdata.append("items", product_id)
                formdata.append("user", user)
                formdata.append("color", SelectedColor.product_color)
                formdata.append("size", PriceandQuanity.size)


                const res = await AddtoCart(formdata, reqheader)


                if (res.status >= 200 && res.status <= 300) {


                    toast.success("Product Added To Cart...!")
                    CartFetch()

                }
                else {

                    console.log(res)
                    toast.warning("Product Alredy Exist in the Cart")

                }


            }
            else {


                toast.warning("Please Login First..!")


                setTimeout(() => {

                    Navigate('/auth')

                }, 1000);

            }

        }
        catch (err) {


            console.log(err)

        }


    }





    return (



        <>


            {

                !AllQuanity.length || !AllColors.length || loading || isLoading ?

                    <ProductSkelton />

                    :

                    < section >


                        <section className="py-4 mb-5">


                            <div className="container">


                                <div className="row">


                                    <aside className="col-lg-6">


                                        <div className="border rounded-4 mb-3 d-flex justify-content-center">

                                            <a data-fslightbox="mygalley" className="rounded-4" target="_blank" data-type="image">

                                                <img loading='lazy' style={{ maxWidth: '100%', maxHeight: '100vh', margin: 'auto' }} className="rounded-4 fit" src={SelectedColor.image} />

                                            </a>

                                        </div>


                                    </aside>


                                    <main className="col-lg-6">

                                        <div className="ps-lg-3 p-3">

                                            {/* Tittle */}
                                            <h3 className="title text-dark mb-0 fw-bold">
                                                {ProductData.brand}
                                            </h3>


                                            <div className="d-flex flex-row mt-1">

                                                <h5 style={{ color: "#535665", fontWeight: '400' }} >Perfect {ProductData.sub_cateory} for {ProductData.category}</h5>

                                                <span className="text-muted ms-2"><i className="fas fa-shopping-basket fa-sm mx-1"></i></span>

                                                <span className="text-success in-stock">In Stock</span>

                                            </div>


                                            {/* Price */}
                                            <div className="mb-3 mt-3">

                                                <div className='d-flex flex-row align-items-center'>

                                                    <h5 className=" fw-bold mb-0 me-2">₹{PriceandQuanity.offer_is_available ? PriceandQuanity.offer_price : PriceandQuanity.price}</h5>

                                                    <span className="text-muted h6 mb-0 ">{PriceandQuanity.offer_is_available ? <s> ₹{PriceandQuanity.price}</s> : ""}</span>

                                                    <p className='text-success ms-2 mb-0 h5'>{PriceandQuanity.offer_is_available ? <s style={{ textDecoration: 'none' }}>({PriceandQuanity.offer_percentage}%off)</s> : ""}</p>

                                                </div>

                                                <span className="text-success fw-bold" style={{ fontSize: '14px', fontWeight: '500' }}>Inclusive of all taxes</span>

                                            </div>







                                            <div className="d-flex justify-content-start mb-4">


                                                {

                                                    AllColors &&

                                                    AllColors.map((item) => (

                                                        <a style={{ cursor: 'pointer' }} onClick={() => { SetSelectedColor(item) }} data-fslightbox="mygalley" className="border mx-1 rounded-2 item-thumb" target="_blank" data-type="image">
                                                            <img loading='lazy' width="60" height="60" className="rounded-2" src={item.image} />
                                                        </a>


                                                    ))

                                                }




                                            </div>



                                            {/* Color */}
                                            <div className="row">

                                                <dt className="col-2">Color:</dt>

                                                <dd className="col-10 mb-3">{SelectedColor.product_color}</dd>

                                            </div>






                                            {/* Size */}
                                            <div className=" mb-4">


                                                <div className="d-flex flex-column">


                                                    <div className='d-flex align-items-center'>


                                                        <label className="mb-1 fw-bold h4" style={{ fontSize: '18px' }}>Select Size</label>


                                                    </div>




                                                    <div className='row'>

                                                        <div className="size-selector mt-2">

                                                            {

                                                                AllQuanity &&

                                                                AllQuanity.map((item) => (

                                                                    <button className={`size-btn  ${PriceandQuanity.size === item.size ? 'selected' : ''}`} onClick={() => { SetPriceandQuanity(item) }}>{item.size}</button>

                                                                ))

                                                            }

                                                        </div>

                                                    </div>



                                                    {/* Delivery  */}
                                                    <div className='row mt-4'>

                                                        <h1 className='h6 fw-bold'>DELIVERY OPTIONS <i className="fa-solid fa-truck-fast"></i></h1>

                                                        <div className="delivery-checker">

                                                            <div className="input-wrapper">

                                                                <input type="text" placeholder="Enter Pincode" className="postal-input" maxLength="6" pattern="\d{6}" inputMode='numeric' onInput={(e) => { e.target.value = e.target.value.replace(/\D/, '') }} />

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
                                                <a className="btn btn-buy p-3 shadow col-md-6 mt-3" onClick={() => { HandleCart(ProductData.id) }}> <i className="me-1 fa fa-shopping-basket"></i> Add to cart </a>

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

            }



        </>



    )




}

export default SingleProduct