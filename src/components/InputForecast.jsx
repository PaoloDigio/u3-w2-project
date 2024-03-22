import { Button, Col, Form, Row } from "react-bootstrap";

const InputMeteo = function ({ search, setSearch, handleSearchClick }) {
  return (
    <Row className="justify-content-center mt-5">
      <Col xs={8} md={3} className="text-center ">
        <Form.Group>
          <Form.Control
            type="search"
            placeholder="Cerca una località"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Form.Group>
      </Col>
      <Col xs={2} md={1}>
        <Button variant="primary" onClick={handleSearchClick}>
          Search
        </Button>
      </Col>
    </Row>
  );
};
export default InputMeteo;
