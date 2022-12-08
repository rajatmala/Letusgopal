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
    const warehouseInfo = [
        { image: "/images/s1.jpg", name: "Shree", location: "surat", facility: "CCTV monitoring", size: "10' x 20' x 6'", rating: "3.5", price: "150", percentage: "33", area: "50", totalArea: "200" },
        { image: "/images/s5.jpg", name: "Surya", location: "delhi", facility: "Climate Control", size: "30' x 20' x 6'", rating: "4.7", price: "200", percentage: "20", area: "200", totalArea: "600" },
        { image: "/images/s6.jpg", name: "Shreelakshmi", location: "Nagpur", facility: "Indoor Storage", size: "15' x 20' x 5'", rating: "4.5", price: "170", percentage: "33", area: "50", totalArea: "300" },
    ];

    return (
        <>
            <Container fluid>
                <Row>
                    { warehouseInfo.map(StorageCard) }
                    <StorageCard />
                </Row>
            </Container>
        </>
    );
}
export default CardSection;
