import React from "react";
import { Link } from "react-router-dom";

const StorageCard = () =>
{
    return (
        <>
            <div className="col-lg-4 col-md-6 mb-4">
                <div className="rounded overflow-hidden mb-2">
                    <img className="img-fluid" src="/images/s4.jpg" alt="" />
                    <div className="bg-secondary p-4">
                        <div className="d-flex justify-content-between mb-3">
                            <small className="m-0">
                                <i className="fa fa-map text-primary mr-2" />
                                Address
                            </small>
                            <small className="m-0">
                                <i className="far fa-clock text-primary mr-2" />
                                01h 30m
                            </small>
                        </div>
                        <Link className="h5" to="">
                            Warehouse Details
                        </Link>
                        <div className="border-top mt-4 pt-4">
                            <div className="d-flex justify-content-between">
                                <h5 className="m-0">$99</h5>
                                <h6 className="m-0">
                                    <i className="fa fa-star text-primary mr-2" />
                                    4.5
                                </h6>
                                <div className="float-end">
                                    <Link to="/WarehouseDetails"><button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block">Book Now</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StorageCard;
