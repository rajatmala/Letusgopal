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
    const totalArea = card.totalArea;
    const area = card.area;
    const percentage = card.percentage;

    function WarehouseArea(card)
    {
        return (
            <>
                <span className="fs-6 float-left">{ percentage }Booked</span>
                <span className="fs-6 float-right">Vacant</span>
                <ProgressBar className="progressContainer">
                    <ProgressBar now={ 100 - percentage } label={ `${ area }sqft` } className="text-dark fw-bold fs-6" variant="warning" key={ 1 } />
                    <ProgressBar now={ 100 } label={ `${ totalArea - area }sqft` } className="text-light fw-bold fs-6" variant="success" animated key={ 2 } />
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
                <Card className="rounded shadow bg-white overflow-hidden mb-2 my-4 cardHover" onClick={ () =>
                    routeChange() }>
                    <img className="img-fluid" src={ card.image } alt="" />
                    <div className="bg-secondary p-4">
                        <b className=" text-dark h5">{ card.name } Warehouse</b>
                        <div className="d-flex flex-column justify-content-between mb-3">
                            <h6 className="m-1">
                                <i><FcGlobe /> </i>
                                { card.location }
                            </h6>
                            <h6 className="m-1">
                                <i><FcCamcorderPro /> </i>
                                { card.facility }
                            </h6>
                            <h6 className="m-1">
                                <i><FcOrgUnit /> </i>
                                { card.size }
                            </h6>
                            <h6 className="m-1">
                                <i><AiFillStar className="text-warning" /> </i>
                                { card.rating }
                                <p className="m-0 float-right">from { card.price } ₹</p>
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
