import React from "react";
import
{
    Row,
    Col,
    Button,
    Form,
    Card,
} from "react-bootstrap";

const FilterForm = () =>
{
    return (
        <Card>
            <Card.Header className="text-center text-white bg-dark">
                <b>Filter & Sort Locations </b>
            </Card.Header>
            <Card.Body className="cardStorageBody">
                <Row>
                    <Col md={ 12 } className="mx-3">
                        <Form>
                            <Form.Group
                                className="mb-3 d-grid gap-2"
                                controlId="formBasicRadioButton"
                            >
                                <Form.Label>
                                    <b>Sort Results By:</b>
                                </Form.Label>
                                <Form.Check
                                    id="r1"
                                    className="radioX"
                                    label="Distance"
                                    name="shortResult"
                                    type="radio"
                                />
                                <Form.Check
                                    id="r2"
                                    className="radioX"
                                    label="Price(Lowest to Highest)"
                                    name="shortResult"
                                    type="radio"
                                />
                            </Form.Group>
                            <hr />
                            <Form.Group
                                className="mb-3 d-grid gap-2"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Label>
                                    <b>Features</b>
                                </Form.Label>
                                <Form.Check
                                    id="c1"
                                    className="checkX"
                                    label="CCTV surveillance"
                                    name="locations"
                                    type="checkbox"
                                />
                                <Form.Check
                                    id="c2"
                                    className="checkX"
                                    label="Indoor Storage"
                                    name="locations"
                                    type="checkbox"
                                />
                                <Form.Check
                                    id="c3"
                                    className="checkX"
                                    label="Outdoor/Drive Up"
                                    name="locations"
                                    type="checkbox"
                                />
                                <Form.Check
                                    id="c4"
                                    className="checkX"
                                    label="Climate Control"
                                    name="locations"
                                    type="checkbox"
                                />
                            </Form.Group>
                            <hr />
                            <Form.Group
                                className="mb-3 d-grid gap-2"
                                controlId="formBasicRadioButton2  "
                            >
                                <Form.Label>
                                    <b>Book Type</b>
                                </Form.Label>
                                <Form.Check
                                    id="r3"
                                    className="radioX"
                                    label="Rent Now"
                                    name="CheckIN"
                                    type="radio"
                                />
                                <Form.Check
                                    id="r4"
                                    className="radioX"
                                    label="Reserve"
                                    name="CheckIN"
                                    type="radio"
                                />
                            </Form.Group>
                            <hr />
                            <Form.Group className="mb-3 text-center">
                                <Button className="mr-3" variant="light">
                                    Clear All Filters
                                </Button>
                                <Button className="center" variant="dark">
                                    Apply
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default FilterForm;
