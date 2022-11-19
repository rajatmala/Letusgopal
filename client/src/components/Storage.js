import React, { useState } from "react";
import
{
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import FilterForm from "./FilterForm";
import MapX from "./Map";
import CardSection from "./CardSection";
  
const FilterX = () =>
{
  const [ toggle, setToggle ] = useState(0);

  return (
    <Container className="my-5" fluid>
      <Row>
        <Col md={ 3 } className="">
          <Row className="mx-3">
            <Button
              className="px-5 mx-2 my-3"
              variant="info"
              onClick={ () =>
              {
                setToggle(0);
              } }
            >
              List
            </Button>
            <Button
              className="px-5 mx-2 my-3"
              variant="info"
              onClick={ () =>
              {
                setToggle(1);
              } }
            >
              Map
            </Button>
          </Row>
          <Row>
            <Col md={ 12 }>
              <FilterForm></FilterForm>
            </Col>
          </Row>
        </Col>
        <Col md={ 9 } className="">
          <Col md={ 12 } className="my-5">
            { toggle ? <MapX></MapX> : <CardSection /> }
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default FilterX;
