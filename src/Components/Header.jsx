import React from 'react'
import { useState } from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

function Header() {




    // Collapse the navbar
    const [expanded, setExpanded] = useState(false)


    const handleNavClick = () => {

        setExpanded(false)

    }





    return (




        <>




            <nav
                className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
                id="templatemo_nav_top"
            >


                <div className="container text-light">
                    <div className="w-100 d-flex justify-content-between">
                        <div>
                            <i className="fa fa-envelope mx-2"></i>
                            <a
                                className="navbar-sm-brand text-light text-decoration-none"
                                href="mailto:info@company.com"
                            >
                                info@xpania.in
                            </a>
                            <i className="fa fa-phone mx-2"></i>
                            <a
                                className="navbar-sm-brand text-light text-decoration-none"
                                href="tel:010-020-0340"
                            >
                                010-020-0340
                            </a>
                        </div>
                        <div>
                            <a className="text-light" href="https://www.facebook.com/Xpaniafootcare" target="_blank" rel="sponsored">
                                <i className="fa-brands fa-facebook-f fa-sm fa-fw me-2 "></i>
                            </a>
                            <a className="text-light" href="https://www.instagram.com/xpaniafootcare/?next=%2F" target="_blank">
                                <i className="fa-brands fa-instagram fa-sm fa-fw me-2"></i>
                            </a>
                            <a className="text-light" href="https://x.com/xpaniafootcare" target="_blank">
                                <i className="fa-brands fa-x-twitter fa-sm fa-fw me-2"></i>
                            </a>
                            <a className="text-light" href="https://in.pinterest.com/xpaniafootcar" target="_blank">
                            <i class="fa-brands fa-pinterest"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>




            <Navbar expand="lg" className="header" collapseOnSelect expanded={expanded}>

                <Container className='contain p-1'>


                    <div className='nav-logo'>

                        <a href="/">

                            <img src="/xpanialogo-2.png" className='img-fluid' alt="logo" />

                        </a>

                    </div>


                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />




                    <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


                        <Nav className="navigation">

                            <Link to={'/'} className='nav-home' onClick={handleNavClick}>Home</Link>

                            <Link to={'/about'} className='nav-home' onClick={handleNavClick}>About</Link>

                            <Link to={'/fil'} className='nav-home' onClick={handleNavClick}>Shop</Link>

                            <Link to={'/contact'} className='nav-home' onClick={handleNavClick}>Contact</Link>

                        </Nav>


                    </Navbar.Collapse>



                    <Navbar.Collapse id="basic-navbar-nav" className='nav-col justify-content-end'>


                        <Nav className="navigation">



                            <Link to={'/fil'} onClick={handleNavClick} className='search-none'>

                                <i className="fa-solid fa-magnifying-glass fa-lg"></i>

                            </Link>



                            <Link to={'/cart'} onClick={handleNavClick}><i className="fa-solid fa-cart-shopping fa-lg"></i></Link>



                            <div className='dropdown'>

                                <Nav.Link  ><i className="fa-solid fa-user fa-lg"></i></Nav.Link>

                                <div className='dropdown-content'>

                                    <Link to={'/auth'} className='drop-link d-block' onClick={handleNavClick}>Login</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Logout</Link>
                                    <Link to={'/'} className='drop-link d-block' onClick={handleNavClick}>Orders</Link>

                                </div>

                            </div>


                        </Nav>



                    </Navbar.Collapse>


                </Container>

            </Navbar>




        </>






    )





}

export default Header