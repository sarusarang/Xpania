import React from 'react'
import { Link } from 'react-router-dom'






function Footer() {


  return (
    <>



      <footer className="" style={{ backgroundColor: '#212934' }} id="tempaltemo_footer">

        <div className="container">

          <div className="row">

            <div className="col-md-4 pt-5">

              <h2 className="h2  pb-3" style={{ borderBottom: '1px solid #2d343f' }}>Page</h2>

              <ul className="list-unstyled">
                <li className='pb-2'>

                  <Link to={'/'} className='foot-link'>Home</Link>

                </li>
                <li className='pb-2'>

                  <Link to={'/about'} className='foot-link'>About</Link>

                </li>
                <li className='pb-2'>

                  <Link to={'/fil'} className='foot-link'>Shop</Link>

                </li>
                <li className='pb-2'>

                  <Link to={'/contact'} className='foot-link'>Contact</Link>

                </li>
              </ul>
            </div>

            <div className="col-md-4 pt-5">

              <h2 className="h2 pb-3" style={{ borderBottom: '1px solid #2d343f' }}>Shop</h2>

              <ul className="list-unstyled">

                <li className='pb-2'><a className="foot-link" href="#">Men</a></li>
                <li className='pb-2'><a className="foot-link" href="#">Women</a></li>
                <li className='pb-2'><a className="foot-link" href="#">Boys & Girls</a></li>
                <li className='pb-2'><a className="foot-link" href="#">Kids </a></li>

              </ul>

            </div>

            <div className="col-md-4 pt-5">

              <h2 className="h2 pb-3" style={{ borderBottom: '1px solid #2d343f' }}>Information</h2>

              <ul className="list-unstyled text-light footer-link-list">

                <li className='pb-2'><a className="foot-link" href="#">Track your order</a></li>

                <li className='pb-2'><Link to={'/policy'} className='foot-link'>Privacy & Policy</Link></li>
                <li className='pb-2'><Link to={'/terms'} className='foot-link'>Terms & Conditions</Link></li>
                <li className='pb-2'><Link to={'/contact'} className='foot-link'>Contact Us</Link></li>


              </ul>


            </div>

          </div>



          <div className="row text-light mb-4">

            <div className="col-12 mb-3">
              <div className="w-100 my-3" style={{ borderTop: '1px solid #2d343f' }}></div>
            </div>

            <div className="col-auto me-auto">

              <ul className="footer-icons">

                <li>
                  <a className="foot-social" target="_blank" href="https://www.facebook.com/Xpaniafootcare">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a className="foot-social" target="_blank" href="https://www.instagram.com/xpaniafootcare/?next=%2F">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="foot-social" target="_blank" href="https://x.com/xpaniafootcare">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="foot-social" target="_blank" href="https://in.pinterest.com/xpaniafootcares/">
                    <i className="fab fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a className="foot-social" target="_blank" href="https://www.youtube.com/@xpaniafootcare">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>

            </div>


            {/* <div className="col-auto">
              <label className="sr-only" for="subscribeEmail">Email address</label>

              <div className="input-group mb-2">

                <input type="text" className="form-control bg-secondary  text-dark" id="subscribeEmail" placeholder="Email address" />

                <div className="input-group-text btn btn-success ">Subscribe</div>
              </div>
            </div> */}


          </div>
        </div>

        <div className="w-100  py-3" style={{ backgroundColor: '#1d242d' }}>

          <div className="container">
            <div className="row pt-2">
              <div className="col-12">

                <p className="text-left text-light">

                  Copyright &copy; 2024 All rights reserved | Xpania

                  <a rel="sponsored" href="https://xpania.in/" target="_blank" className='px-2 text-white'>www.expania.in</a>

                  <br />

                  <Link to={'/policy'} className='me-3 text-white policy-hover' style={{ textDecoration: 'none' }}>Privacy & Policy</Link>


                  <Link to={'/terms'} className='me-3 text-white policy-hover' style={{ textDecoration: 'none' }}>Terms & Conditions</Link>


                </p>

                <p className="text-left text-light">
                  Powered by <a href="https://exmedia.in" className='text-white'>Exmedia</a>
                </p>

              </div>
            </div>
          </div>
        </div>

      </footer>



    </>





  )
}

export default Footer