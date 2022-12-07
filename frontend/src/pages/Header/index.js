import React from "react";
import { Link } from "react-router-dom";

const styles = {
  fontFamily: "Mrs+Sheppards",
};

const HeaderSection = () =>
{
  return (
    <>
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <Link to="" className="text-decoration-none">
              <h1 className="m-0" style={ styles }>
                <span className="text-primary">Let's </span>
                <span className="text-success">Go </span>
                <span className="text-violate">pal</span>
                <span className="text-violate">
                  <span className="ml-2">
                    <img src="/images/logo.png" height={ 60 } width={ 60 } alt="" />
                  </span>
                </span>
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
                <small>+91 86384 40694</small>
              </div>
            </div>
          </div>
        </div>
      </div>


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
                Services..
              </h5>
              <i className="fa fa-angle-down text-primary" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
              id="navbar-vertical"
              style={ { width: "calc(100% - 30px)", zIndex: 9 } }
            >
              <div className="navbar-nav w-100">
                <Link to="/storage" className="nav-item nav-link">
                  Storage
                </Link>
                <Link href="/logistics" className="nav-item nav-link">
                  Logistics
                </Link>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <Link to="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0">
                  <span className="text-primary">Let's </span>
                  <span className="text-success">Go </span>
                  <span className="text-violate">pal</span>
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
                  <Link to="/partner" className="nav-item nav-link">
                    Become a Partner
                  </Link>
                  <Link to="/locations" className="nav-item nav-link">
                    Locations
                  </Link>
                  <Link
                    to="/cart"
                    className="nav-item nav-link"
                  >
                    Cart
                  </Link>
                  <Link to="/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                </div>
                <Link
                  className="btn btn-success py-2 px-4 ml-auto d-none d-lg-block"
                  to="/login"
                >
                  SignIn/Orders
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;