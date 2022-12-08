import React, { useEffect, useState } from "react";
import
{
	Container,
	Row,
	Col,
	Button,
	Form,
	Offcanvas,
	Card,
	ListGroup,
	Badge,
	CloseButton,
	Pagination
} from "react-bootstrap";

import MapX from "./pages/Map/Map";
import CardSection from "./pages/Cards/Card";
// import FilterForm from "./pages/Filter/FilterForm.js";
import { FcSearch } from "react-icons/fc";
const Storage = (props) =>
{
	// DefaultDAta For Life
	const defaultData = {
		sortBy: "size",
		cctv: false,
		indoor: false,
		outdoor: false,
		climate: false,
		bookType: "rentnow",
	};


	// States for filtering actions
	const [ data, setData ] = useState(defaultData);

	const [ filters, setFilters ] = useState(defaultData);

	// console.log(data);

	const onCheckChange = (event) =>
	{
		setData({ ...data, [ event.target.name ]: event.target.checked });
		console.log(data);
	}

	const onRadioSelect = (event) =>
	{
		setData({ ...data, [ event.target.name ]: event.target.value });
		console.log(data);
	}

	const [ toggle, setToggle ] = useState(0);
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [ closeButton, setCloseButton ] = useState(true);

	const onSave = () =>
	{
		setFilters(data);
		handleClose();
	}

	const onClear = () =>
	{
		setData(defaultData);
	}

	// filters it Contains all Current applied Filters.
	useEffect(() =>
	{
		console.log("Filters Updated");
	}, [ filters ]);

	// for pagination
	let active = 1;
	let items = [];
	for (let number = 1; number <= 5; number++) {
		items.push(number);
	}

	return (<>
		<Offcanvas show={ show } onHide={ handleClose }>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Filters</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
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
											label="Size"
											name="sortBy"
											type="radio"
											value="size"
											checked={ data.sortBy === "size" }
											onChange={ onRadioSelect }
										/>
										<Form.Check
											id="r2"
											className="radioX"
											label="Price(Lowest to Highest)"
											name="sortBy"
											type="radio"
											value="price"
											checked={ data.sortBy === "price" }
											onChange={ onRadioSelect }
										/>
										<Form.Check
											id="r3"
											className="radioX"
											label="Distance"
											name="sortBy"
											type="radio"
											value="distance"
											checked={ data.sortBy === "distance" }
											onChange={ onRadioSelect }
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
											name="cctv"
											type="checkbox"
											checked={ data.cctv }
											onChange={ onCheckChange }
										/>
										<Form.Check
											id="c2"
											className="checkX"
											label="Indoor Storage"
											name="indoor"
											type="checkbox"
											checked={ data.indoor }
											onChange={ onCheckChange }
										/>
										<Form.Check
											id="c3"
											className="checkX"
											label="Outdoor/Drive Up"
											name="outdoor"
											type="checkbox"
											checked={ data.outdoor }
											onChange={ onCheckChange }
										/>
										<Form.Check
											id="c4"
											className="checkX"
											label="Climate Control"
											name="climate"
											type="checkbox"
											checked={ data.climate }
											onChange={ onCheckChange }
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
											id="r4"
											className="radioX"
											label="Rent Now"
											name="bookType"
											type="radio"
											value="rentnow"
											checked={ data.bookType === "rentnow" }
											onChange={ onRadioSelect }
										/>
										<Form.Check
											id="r5"
											className="radioX"
											label="Reserve"
											name="bookType"
											type="radio"
											value="reserve"
											checked={ data.bookType === "reserve" }
											onChange={ onRadioSelect }
										/>
									</Form.Group>
									<hr />
									<Form.Group className="mb-3 text-center">
										<Button className="mr-3" variant="light" onClick={ onClear }>
											Clear All Filters
										</Button>
										<Button className="center text-white" variant="blue" onClick={ onSave }>
											Apply
										</Button>
									</Form.Group>
								</Form>
							</Col>
						</Row>
					</Card.Body>
				</Card>
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
								<Badge bg="dark" pill className="ml-1">{ 3 }</Badge>
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
									className="me-2 rounded-5"
									aria-label="Search"
									value={ props.sendText }
								/>
								<Button variant="secondary" className="text-white"><FcSearch /></Button>
							</Form>
						</Col>
						<Col md={ 6 }>
							<ListGroup horizontal>
								<ListGroup.Item
									style={ { display: "none" } }
									className="bg-secondary">CCTV surveillance<CloseButton className="mx-2" onClick={ setCloseButton(false) } /></ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
				</Col>
				<Col lg={ 12 } md={ 12 } sm={ 12 } xs={ 12 }>
					<Col md={ 12 } className="my-5">
						{ toggle ? <MapX></MapX> : <CardSection /> }
					</Col>
				</Col>
			</Row>
			<Row>
				<Col md={ 6 } className=""></Col>
				<Col md={ 6 } sm={ 12 } className="">
					<Pagination size="lg" variant="success">
						<Pagination.First className="" />
						{ items.map((number, key) =>
						{
							return <Pagination.Item className="" key={ number } active={ number === active } >
								{ number }
							</Pagination.Item>
						}) }
						<Pagination.Last />
					</Pagination>
				</Col>
			</Row>
		</Container>
	</>
	);
};

export default Storage;
