import React from "react";
import
{
    Container,
    Row,
    Col,
    Carousel,
} from "react-bootstrap";
import WarehouseDetailsX from "./WarehouseDetailsX";
import "./WarehouseDetails.css";

const WarehouseDetails = () =>
{
    return (
        <Container className="my-5">
            <Row>
                <Col md={ 12 }>
                    <Carousel>
                        <Carousel.Item className="warehouseCarousel">
                            <img
                                className="d-block w-100"
                                src="images/s3.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="warehouseCarousel">
                            <img
                                className="d-block w-100"
                                src="images/s4.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="warehouseCarousel">
                            <img
                                className="d-block w-100"
                                src="images/s6.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row>
                <Col md={ 12 } sm={ 12 } className="text-center my-5">
                    <WarehouseDetailsX />
                </Col>
            </Row>
        </Container>
    );
};

export default WarehouseDetails;
