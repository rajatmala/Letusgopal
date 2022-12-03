import React, { useState } from "react";
import
{
  Container,
  Row,
  Col,
  Button,
  Form,
  Offcanvas
} from "react-bootstrap";

import MapX from "./pages/Map/Map";
import CardSection from "./pages/Cards/Card";
import FilterForm from "./pages/Filter/FilterForm.js";
import { FcSearch } from "react-icons/fc";
const Storage = (props) =>
{
  const [ toggle, setToggle ] = useState(0);

  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    <Offcanvas show={ show } onHide={ handleClose }>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <FilterForm />
      </Offcanvas.Body>
    </Offcanvas>
    <Container className="my-5" fluid>
      <Row>
        <Col md={ 12 } sm={ 12 }>
          <Row>
            <Col md={ 2 } sm={ 12 }>
              <Button variant="primary"
                className="my-3 text-light btn-block"
                onClick={ handleShow }>
                Filters
              </Button>
            </Col>
            <Col md={ 2 }>
              <Button
                className="my-3 text-light btn-block"
                variant="success"
                onClick={ () =>
                {
                  setToggle(1);
                } }
              >
                Map
              </Button>
            </Col>
            <Col md={ 2 }>
              <Button
                className="my-3 btn-block"
                variant="warning"
                onClick={ () =>
                {
                  setToggle(0);
                } }
              >
                List
              </Button>
            </Col>
            <Col md={ 6 }>
              <Form className="d-flex my-3">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={ props.sendText }
                />
                <Button variant="secondary" className="text-white"><FcSearch /></Button>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col lg={ 12 } md={ 12 } sm={ 12 } xs={ 12 }>
          <Col md={ 12 } className="my-5">
            { toggle ? <MapX></MapX> : <CardSection /> }
          </Col>
        </Col>
      </Row>
    </Container>
  </>
  );
};

export default Storage;
