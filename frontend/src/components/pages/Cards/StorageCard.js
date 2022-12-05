import React, { useHistory } from "react";
import { Link } from "react-router-dom";
import
{
    Col,
    Button,
    ProgressBar
} from "react-bootstrap";
import { FcClock, FcRating, FcGlobe, FcCamcorderPro, FcOrgUnit } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import "./StorageCard.css"
import "./progresssbar.css";

const StorageCard = () =>
{
    let totalArea = 200;
    function WarehouseArea(percentage, area)
    {
        return (
            <>
                <span className="fs-6 float-left">Booked</span>
                <span className="fs-6 float-right">Vacant</span>
                <ProgressBar className="progressContainer">
                    <ProgressBar now={ 30 } label={ `${ area }sqft` } className="text-dark fw-bold fs-6" variant="warning" key={ 1 } />
                    <ProgressBar now={ percentage } label={ `${ totalArea - area }sqft` } className="text-light fw-bold fs-6" variant="success" key={ 2 } />
                </ProgressBar >
            </>
        );
    }
    return (
        <>
            <Col lg={ 3 } md={ 6 } sm={ 6 } xs={ 12 } className="cardHover">
                <div className="rounded overflow-hidden mb-2">
                    <img className="img-fluid" src="/images/s4.jpg" alt="" />
                    <div className="bg-secondary p-4">
                        <b className=" text-dark h3">Shree Warehouse</b>
                        <div className="d-flex flex-column justify-content-between mb-3">
                            <h5 className="m-1">
                                <i><FcGlobe /> </i>
                                Nagpur-Maharashtra
                            </h5>
                            <h6 className="m-1">
                                <i><FcCamcorderPro /> </i>
                                CCTV Monitoring
                            </h6>
                            <h6 className="m-1">
                                <i><FcOrgUnit /> </i>
                                10' x 20' x 6'
                            </h6>
                            <h6 className="m-1">
                                <i><AiFillStar /> </i>
                                4.5
                                <p className="m-0 float-right">from { 150 } ₹</p>
                            </h6>
                            <h6 className="m-1">{ WarehouseArea(70, 50) }</h6>

                        </div>
                        <div className="border-top pt-2">
                            <div className="d-grid gap-1">
                                <Link to="/warehouse" style={ { textDecoration: "none" } }><Button
                                    className="btn btn-block" variant="blue" size="md" block>Book Now</Button></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default StorageCard;
