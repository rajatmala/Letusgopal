import React from "react";
import { Link, useNavigate } from "react-router-dom";
import
{
    Col,
    Button,
    ProgressBar,
    Card
} from "react-bootstrap";
import { FcClock, FcRating, FcGlobe, FcCamcorderPro, FcOrgUnit } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import "./StorageCard.css"
import "./progresssbar.css";

const StorageCard = (card, index) =>
{
    const warehouseInfo = [
        { image: "/images/s1.jpg", name: "Shree warehouse", location: "surat", facility: "CCTV monitoring", area: "10' x 20' x 6'", rating: "3.5", price: "150" },
        { image: "/images/s2.jpg", name: "Surya warehouse", location: "delhi", facility: "Climate Control", area: "30' x 20' x 6'", rating: "4.7", price: "200" },
        { image: "/images/s3.jpg", name: "Shreelakshmi warehouse", location: "", facility: "Indoor Storage", area: "15' x 20' x 5'", rating: "4.5", price: "170" },
    ];

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

    let navigate = useNavigate();
    const routeChange = () =>
    {
        let path = `/warehouse`;
        navigate(path);
    }


    return (
        <>
            <Col lg={ 3 } md={ 6 } sm={ 6 } xs={ 12 }>
                <Card className="rounded overflow-hidden mb-2 my-4 cardHover" onClick={ () =>
                    routeChange() }>
                    <img className="img-fluid" src="/images/s4.jpg" alt="" />
                    <div className="bg-secondary p-4">
                        <b className=" text-dark h3">{ warehouseInfo.name }</b>
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
                        </div>
                        <div className="border-top pt-2">
                            <h6 className="m-1">{ WarehouseArea(70, 50) }</h6>
                        </div>
                    </div>
                </Card>
            </Col>
        </>
    );
}

export default StorageCard;
