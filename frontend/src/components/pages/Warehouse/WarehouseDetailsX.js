import React, { useState, Fragment } from 'react';
import
{
    Container,
    Row,
    Col,
    Table,
    Button
} from "react-bootstrap";
// import { BsFillCartPlusFill, BsFillBookmarksFill } from "react-icons/bs";
import "./WarehouseDetails.css";
import { Link } from 'react-router-dom';
import { SeatingChart } from 'react-seat-charts';


const WarehouseDetailsX = () =>
{

    let seats = [ [ { seatType: "regular", status: "available", label: "Units" } ],
    [ { seatType: "spacer" } ] ];
    let naming = { rows: [ "A" ], columns: [ "1" ] };
    let seatingChart = <SeatingChart seats={ seats } naming={ naming } />;




    const units = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    const [ res, setReserved ] = useState(0);
    const listItems = units.map((number) =>
        <td
            className="{res?'bg-success':'bg-warning'}"
            onClick={ () =>
            {
                setReserved(1);
                console.log(res)
            } }>
            { number }
        </td>
    );


    return (
        <>
            <Container className='text-center'>
                <Row>
                    <Col md={ 12 }>
                        <h2>Select your Units</h2>
                        <Table bordered="2" responsive size="sm" className="grid">
                            <tr>
                                { listItems }
                            </tr>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default WarehouseDetailsX;

