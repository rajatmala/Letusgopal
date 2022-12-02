import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./tabX.css";
import { Link } from "react-router-dom";
const StorageTab = () =>
{
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Location</Form.Label>
        <Form.Control
          type="location"
          placeholder="Zip or City,State or Landmark"
        />
      </Form.Group>
      <Form.Group className="mb-3 d-grid gap-2 text-center text-dark" controlId="formBasicCheckbox">
        <Form.Label className="col-md-12">Show Locations That Have :</Form.Label>
        <Form.Check
          id="c1"
          className="checkX"
          inline
          label="CCTV surveillance"
          name="locations"
          type="checkbox"
        />
        <Form.Check
          id="c2"
          className="checkX"
          inline
          label="Indoor Storage"
          name="locations"
          type="checkbox"
        />
        <Form.Check
          id="c3"
          className="checkX"
          inline
          label="Outdoor/Drive Up"
          name="locations"
          type="checkbox"
        />
        <Form.Check
          id="c4"
          className="checkX"
          inline
          label="Climate Control"
          name="locations"
          type="checkbox"
        />
      </Form.Group>
      <Form.Group className="mb-3 text-center">
        <Link to="/storage">
          <Button className="center" variant="primary" size="lg">
            Find Units
          </Button>
        </Link>
      </Form.Group>
    </Form>
  );
};

export default StorageTab;
