import React from 'react'
import './Contact.css'

function Contact() {

    window.scrollTo(0, 0)



    return (




        <section className='contact'>



            <div className='Contact-hero row'>

                <h2 className='text-center'>Connect with us for Business & Support</h2>

            </div>


            <div className='container'>


                <div className='contact-form row  mt-5'>


                    {/* Contact Deatils */}
                    <div className='col-md-6 get-in'>

                        <h3 className='mb-4'>Xpania Footcare LLP</h3>


                        <p><i className="fa-solid fa-house me-2"></i>43/129 B, Near CICS Sneha Nagar, Jayanthi Road, Kolathara P.O,Calicut, India, Kerala</p>

                        <p>

                            <a href="https://wa.me/+919746388810" className='nav-link' target='_blank'> <i className="fa-solid fa-phone me-2"></i>+91 9746388810</a>


                        </p>

                        <p>

                            <a href="mailto:info@xpania.in" className='nav-link' target='_blank'><i className="fa-solid fa-envelope me-2"></i>info@xpania.in</a>


                        </p>



                        <p>

                            <a href="https://xpania.in/" className='nav-link' target='_blank'><i className="fa-solid fa-earth-americas me-2"></i>www.xpania.in</a>

                        </p>


                    </div>



                    {/* Contact Form */}
                    <div className='col-md-6 margin-get'>

                        <h3>Get In Touch</h3>

                        <form onSubmit={(e) => { e.preventDefault() }} className='pt-3'>


                            <input type="text" className='form-control mb-4' placeholder='Name' />


                            <input type="text" className='form-control mb-4' placeholder='Email' />


                            <input type="text" className='form-control mb-4' placeholder='Phone' />


                            <input type="text" className='form-control mb-4' placeholder='Subject' />


                            <textarea name="" placeholder='Your Message' className='form-control' id=""></textarea>

                            <button type='submit' className='btn btn-success w-50 mt-4'>Let's Talk</button>


                        </form>


                    </div>


                </div>


            </div>


            


        </section>


    )



}

export default Contact