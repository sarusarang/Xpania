import React from 'react'






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
                  <a className="foot-link" href="">Home</a>
                </li>
                <li className='pb-2'>
                  <a className="foot-link" href="">About </a>
                </li>
                <li className='pb-2'>
                  <a className="foot-link" href="">Shop </a>
                </li>
                <li className='pb-2'>
                  <a className="foot-link" href="">Contact </a>
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
                <li className='pb-2'><a className="foot-link" href="xpniaprivacypolicyhtml.html">Privacy Policy</a></li>
                <li className='pb-2'><a className="foot-link" href="termsandcondition.html">Terms and Conditions</a></li>
                <li className='pb-2'><a className="foot-link" href="#">Contact Us</a></li>


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


            <div className="col-auto">
              <label className="sr-only" for="subscribeEmail">Email address</label>
              <div className="input-group mb-2">
                <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                <div className="input-group-text btn-success text-light">Subscribe</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100  py-3" style={{ backgroundColor: '#1d242d' }}>

          <div className="container">
            <div className="row pt-2">
              <div className="col-12">

                <p className="text-left text-light">

                  Copyright &copy; 2024 All rights reserved | Xpania

                  <a rel="sponsored" href="www.expania.in" target="_blank" className='px-2 text-white'>www.expania.in</a>

                  <br />

                  <a href="xpniaprivacypolicyhtml.html" className='me-3 text-white policy-hover' style={{textDecoration:'none'}}>Privacy & Policy</a>

                  <a href="termsandcondition.html" className='text-white policy-hover' style={{textDecoration:'none'}}>Terms & Conditions</a>

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