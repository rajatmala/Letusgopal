import React from "react";
import { Link } from "react-router-dom";
import
{
    Col,
    Button,
    ProgressBar
} from "react-bootstrap";
import { FcClock, FcRating, FcGlobe, FcCamcorderPro, FcRuler } from "react-icons/fc";
import "./StorageCard.css"

const StorageCard = () =>
{
    function WarehouseArea(area)
    {
        return (
            <ProgressBar className="mt-2">
                <ProgressBar now={ area } label={ `Booked Area ${ area }%` } variant="success" striped key={ 1 } />
                <ProgressBar variant="dark" now={ 100 - area } label={ `Remain Area ${ 100 - area }%` } key={ 2 } />
            </ProgressBar >
        );
    }
    return (
        <>
            <Col lg={ 3 } md={ 6 } sm={ 6 } xs={ 12 } className="cardHover">
                <div className="rounded overflow-hidden mb-2">
                    <img className="img-fluid" src="/images/s4.jpg" alt="" />
                    <div className="bg-secondary p-4">
                        <Link className="h3" to="">
                            <b className=" text-dark">Shree Warehouse</b>
                        </Link>
                        <div className="d-flex flex-column justify-content-between mb-3">
                            <h5 className="m-1">
                                <i><FcGlobe /> </i>
                                Nagpur-Maharashtra
                            </h5>
                            <h6 className="m-1">
                                <i><FcClock /> </i>
                                3 days ago
                            </h6>
                            <h6 className="m-1">
                                <i><FcCamcorderPro /> </i>
                                CCTV Monitoring
                            </h6>
                            <h6 className="m-1">
                                <i><FcRuler /> </i>
                                4000sq.ft Volume
                            </h6>
                            <h6 className="m-1">
                                <i><FcRating /> </i>
                                4.5
                                <p className="m-0 float-right">{ 9000 } ₹</p>
                            </h6>
                            { WarehouseArea(60) }
                        </div>
                        <div className="border-top pt-2">
                            <div className="d-grid gap-1">
                                <Link to="/WarehouseDetails" style={ { textDecoration: "none" } }><Button
                                    className="btn btn-block" variant="dark" size="md" block>Book Now</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default StorageCard;
