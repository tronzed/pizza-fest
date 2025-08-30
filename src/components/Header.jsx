import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../App";
import { cartRead33 } from "../commonFunctions"

function Header() {

    const loc = useLocation();
    const { cartCountAll, setCartCountAll, cartReadAll } = useContext(MyContext);

    useEffect(() => {
        cartReadAll();
    }, []);

    return (
        <>
            <>

                {/* Navbar start */}
                <div className="container-fluid fixed-top">
                    <div className="container topbar bg-primary d-none d-lg-block">
                        <div className="d-flex justify-content-between">
                            <div className="top-info ps-2">
                                <small className="me-3">
                                    <i className="fas fa-map-marker-alt me-2 text-secondary" />{" "}
                                    <a href="#" className="text-white">
                                        123 Street, New York
                                    </a>
                                </small>
                                <small className="me-3">
                                    <i className="fas fa-envelope me-2 text-secondary" />
                                    <a href="#" className="text-white">
                                        Email@Example.com
                                    </a>
                                </small>
                            </div>
                            <div className="top-link pe-2">
                                <a href="#" className="text-white">
                                    <small className="text-white mx-2">Terms of Use</small>/
                                </a>
                                <a href="#" className="text-white">
                                    <small className="text-white ms-2">Sales and Refunds</small>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container px-0">
                        <nav className="navbar navbar-light bg-white navbar-expand-xl">


                            <Link to="/" className="navbar-brand">
                                {/* <h1 className="text-primary display-6">Pizza Fest</h1> */}
                            
                                <span className="logo_img"><img className="img-fluid" src="./assets/images/logo_01.png" alt="" /></span>
                            
                            </Link>
                            <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars text-primary"></span>
                            </button>
                            <div className="collapse navbar-collapse bg-white" id="navbarCollapse" >
                                <div className="navbar-nav mx-auto">


                                    <Link to="/" className="nav-item nav-link">Home</Link>

                                    <Link to="/shop" className="nav-item nav-link">Menu</Link>

                                    {/* <Link to="/single" className="nav-item nav-link">Shop Detail</Link> */}

                                    {/* <div className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className="nav-link dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                        >
                                            Pages
                                        </a>
                                        <div className="dropdown-menu m-0 bg-secondary rounded-0">
                                            <Link to="/cart" className="dropdown-item">Cart</Link>
                                            <Link to="/checkout" className="dropdown-item">Chackout</Link>
                                            <Link to="/404" className="dropdown-item">404 Page</Link>
                                        </div>
                                    </div> */}

                                </div>
                                <div className="d-flex m-3 me-0">
                                    <Link to="/cart" className="position-relative me-4 my-auto">
                                        <i className="fa fa-shopping-bag fa-2x" />
                                        <span
                                            className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                                            style={{ top: "-5px", left: 15, height: 20, minWidth: 20 }}
                                        >
                                            {cartCountAll?.length}
                                        </span>
                                    </Link>

                                    <Link to="/user" className="my-auto">
                                        <i className="fas fa-user fa-2x" />
                                    </Link>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* Navbar End */}


                {loc.pathname === '/' ? (
                    <>
                        {/* Hero Start */}
                        <div className="container-fluid py-5 mb-5 hero-header">
                            <div className="container py-5">
                                <div className="row g-5 align-items-center">
                                    <div className="col-md-12 col-lg-7">
                                        <h4 className="mb-3 text-secondary">100% Organic</h4>
                                        <h1 className="mb-5 display-3 text-primary">
                                            Making Memories, One Slice at a Time
                                        </h1>
                                    </div>
                                    <div className="col-md-12 col-lg-5">

                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active rounded">
                                                <img
                                                    src="./assets/images/hero-img-1.jpg"
                                                    className="img-fluid w-100 h-100 bg-secondary rounded"
                                                    alt="First slide"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Hero End */}
                    </>
                ) : (<>

                    {/* Single Page Header start */}
                    <div className="container-fluid page-header py-5">
                        <h1 className="text-center text-white display-6">Shop Detail</h1>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item">
                                <a href="#">Pages</a>
                            </li>
                            <li className="breadcrumb-item active text-white">Shop Detail</li>
                        </ol>
                    </div>
                    {/* Single Page Header End */}

                </>)};



            </>


        </>
    );
}

export default Header;