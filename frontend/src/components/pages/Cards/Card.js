import React from "react";
import StorageCard from "./StorageCard.js";
import
{
    Container,
    Row,
} from "react-bootstrap";


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
                    <StorageCard />
                </Row>
            </Container>

        </>
    );
}
export default CardSection;
