import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import RatingBar from "./RattingBar";

const ReviewSection = () =>
{
    const reviewDate = new Date();
    const reviewerName = "Smit Sharma";
    const ratingTotal = "3.5";
    const reviewDescription = "Great storage facility, with drive up, off-street parking for load/unload. Clean, safe, with lots of security checks & balances in place. Most of the check-in and check-out processes are done online/smart phone by the customer, so if you're tech-challenged you might need some help.";
    return (
        <>
            <Container>
                <Row>
                    <Col lg={ 12 } md={ 12 } sm={ 12 } xs={ 12 }>
                        <div className="jumbotron bg-dark text-white-50">
                            <h5 className="text-white"><RatingBar /> &nbsp; { ratingTotal }</h5>
                            <p>
                                { reviewDescription }
                            </p>
                            <hr className="" />
                            <h5 className="float-right text-white">{ reviewDate.toUTCString() }</h5>
                            <h5 className="text-warning">{ reviewerName }</h5>
                        </div>
                        <div className="jumbotron">
                            <h5><RatingBar /> &nbsp; { ratingTotal }</h5>
                            <p>
                                { reviewDescription }
                            </p>
                            <hr className="" />
                            <h5 className="float-right">{ reviewDate.toUTCString() }</h5>
                            <h5 className="text-warning">{ reviewerName }</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default ReviewSection;
