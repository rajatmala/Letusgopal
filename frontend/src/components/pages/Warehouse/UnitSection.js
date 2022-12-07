import React, { useState } from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UnitSection = () =>
{
    const [ selectUnit, setSelectUnit ] = useState(0);
    return (
        <>
            <Card className='my-5 shadow mb-5 bg-white rounded '>
                <Card.Body className="">
                    <Row className="h-50 text-dark  rounded-3 text-center">
                        <Col md={ 3 } className="">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src="/images/s6.jpg" alt="" />
                            </div>
                        </Col>
                        <Col md={ 6} className="">
                            <div className="pt-2">
                                <div className="d-grid gap-1 my-2">
                                    <h3 className="mt-5 text-dark">
                                        10' x 10' x 6'
                                    </h3>
                                </div>
                            </div>
                        </Col>
                        
                        <Col md={ 3 }>
                            <div className="pt-2">
                                <div className="d-grid gap-1 my-3">
                                    <h5 className="mt-4">
                                        ₹150/<span>day</span>
                                    </h5>
                                    <Button
                                        className="btn btn-block text-light float-right" variant={ selectUnit === 0 ? "success" : "warning"
                                        } size="md" block
                                        onClick={ () =>
                                        {
                                            if (selectUnit === 0){
                                                setSelectUnit(1);
                                            }
                                            else {
                                                setSelectUnit(0);
                                            }
                                        } }
                                    >{ selectUnit === 1 ? "Selected" : "Select Unit" }</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default UnitSection;
