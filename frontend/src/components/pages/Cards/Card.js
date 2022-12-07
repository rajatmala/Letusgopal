import React from "react";
import StorageCard from "./StorageCard.js";
import
{
    Container,
    Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";


const CardSection = () =>
{
    return (
        <>
            <Container fluid>
                <Row>
                    <StorageCard />
                    <StorageCard />
                    <StorageCard />
                    <StorageCard />
                </Row>
            </Container>

        </>
    );
}
export default CardSection;
