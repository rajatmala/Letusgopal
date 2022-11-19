import React from "react";
import { Link } from "react-router-dom";

const LoginSection = () =>
{
    return (
        <>
            <div
                className="container-fluid bg-registration py-5"
                style={ { margin: "90px 0" } }
            >
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="mb-4">
                                <h5
                                    className="text-primary text-uppercase mb-3"
                                    style={ { letterSpacing: 5 } }
                                >
                                    Need Any Storage
                                </h5>
                                <h1 className="text-white">10% Off For New Comers</h1>
                            </div>
                            <p className="text-white">
                                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                                lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                                sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                            </p>
                            <ul className="list-inline text-white m-0">
                                <li className="py-2">
                                    <i className="fa fa-check text-primary mr-3" />
                                    Labore eos amet dolor amet diam
                                </li>
                                <li className="py-2">
                                    <i className="fa fa-check text-primary mr-3" />
                                    Etsea et sit dolor amet ipsum
                                </li>
                                <li className="py-2">
                                    <i className="fa fa-check text-primary mr-3" />
                                    Diam dolor diam elitripsum vero.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5">
                            <div className="card border-0">
                                <div className="card-header bg-light text-center p-4">
                                    <h1 className="m-0">Login Now</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-success p-5">
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control border-0 p-4"
                                                placeholder="Your Email"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                className="form-control border-0 p-4"
                                                placeholder="Your Password"
                                                required="required"
                                            />
                                        </div>
                                        <div className="text-right">
                                            <button
                                                className="btn btn-dark btn-block border-0 py-3 mb-3"
                                                type="submit"
                                            >
                                                Login Now
                                            </button>
                                            <Link to="/register" className="bg-light mt-1">New User Register Now</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginSection;
