import React from "react";
import "./css/style.css";
import { Link } from "react-router-dom";


const HeaderSection = () =>
{
    return (
        <>
            <>{/* Topbar Start */ }</>
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center py-4 px-xl-5">
                    <div className="col-lg-3">
                        <Link to="" className="text-decoration-none">
                            <h1 className="m-0">
                                <span className="text-primary">Let's </span>GO PAL
                            </h1>
                        </Link>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                                <small>South Delhi, Delhi-India</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-envelope text-primary mr-3" />
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                                <small>letsgopal@gmail.com</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-phone text-primary mr-3" />
                            <div className="text-left">
                                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                                <small>+9112 345 6789</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>{/* Topbar End */ }</>

            <>{/* Navbar Start */ }</>
            <div className="container-fluid">
                <div className="row border-top px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <a
                            className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
                            data-toggle="collapse"
                            href="#navbar-vertical"
                            style={ { height: 67, padding: "0 30px" } }
                        >
                            <h5 className="text-primary m-0">
                                <i className="fa fa-book-open mr-2" />
                                We are..
                            </h5>
                            <i className="fa fa-angle-down text-primary" />
                        </a>
                        <nav
                            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                            id="navbar-vertical"
                            style={ { width: "calc(100% - 30px)", zIndex: 9 } }
                        >
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown">
                                    <Link to="#" className="nav-link" data-toggle="dropdown">
                                        Web Design <i className="fa fa-angle-down float-right mt-1" />
                                    </Link>
                                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <Link to="" className="dropdown-item">
                                            HTML
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            CSS
                                        </Link>
                                        <Link to="" className="dropdown-item">
                                            jQuery
                                        </Link>
                                    </div>
                                </div>
                                <Link href="" className="nav-item nav-link">
                                    Apps Design
                                </Link>
                                <Link href="" className="nav-item nav-link">
                                    Marketing
                                </Link>
                                <Link to="" className="nav-item nav-link">
                                    Research
                                </Link>
                                <Link to="" className="nav-item nav-link">
                                    SEO
                                </Link>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <Link to="/" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0">
                                    <span className="text-primary">Let's</span>GO PAL
                                </h1>
                            </Link>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav py-0">
                                    <Link to="/" className="nav-item nav-link active">
                                        Home
                                    </Link>
                                    <Link to="/careers" className="nav-item nav-link">
                                        Careers
                                    </Link>
                                    <Link to="/dealer" className="nav-item nav-link">
                                        Become a Dealer
                                    </Link>
                                    <Link to="/Locations" className="nav-item nav-link">
                                        Locations
                                    </Link>
                                    <div className="nav-item dropdown">
                                        <Link
                                            to="/cart"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                           Cart
                                        </Link>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <Link to="/blog" className="dropdown-item">
                                                Blog List
                                            </Link>
                                        </div>
                                    </div>
                                    <Link to="/contact" className="nav-item nav-link">
                                        Contact
                                    </Link>
                                </div>
                                <Link
                                    className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
                                    to="/login"
                                >
                                   SignIn/Orders
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <>{/* Navbar Start */ }</>


        </>
    );
}

export default HeaderSection;
