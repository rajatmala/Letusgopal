import React from 'react';
import
{
    Row,
    Col,
    Card,
    Button,
    Form,
} from "react-bootstrap";
import RatingBar from "./RattingBar";
import "./WarehouseDetails.css"
const WarehouseDetailsX = () =>
{
    return (
        <Card className="my-3">
            <Card.Header className="text-center bg-dark">
                <h5 className="text-white">Warehouse Details </h5>
            </Card.Header>
            <Card.Body className="cardStodeBody my-5">
                <Form>
                    <Row>
                        <Col
                            md={ 4 }
                            className="d-flex flex-column align-items-center justify-content-center text-center"
                        >
                            <h2>Greek Style Warehouse</h2>
                            <h5>1200$</h5>
                            <h6>Lonavla, Maharashtra, India</h6>
                            <h4>
                                <RatingBar />
                            </h4>
                        </Col>
                        <Col
                            md={ 4 }
                            className="text-center align-items-center justify-content-center"
                        >
                            <Form.Group className="mb-3 text-center">
                                <Form.Label>Start Booking Date</Form.Label>
                                <Form.Control type="date" />
                                <Form.Label>End Booking Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col md={ 4 }>
                            <Form.Group className="mb-3 text-center">
                                <Form.Label>Start Booking Time</Form.Label>
                                <Form.Control type="time" />
                                <Form.Label>End Booking Time</Form.Label>
                                <Form.Control type="time" />
                            </Form.Group>
                            <Form.Group>
                                <Button className="mr-3" variant="primary">
                                    Add to Cart
                                </Button>
                                <Button className="center" variant="success">
                                    Book Now
                                </Button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
}
export default WarehouseDetailsX;
