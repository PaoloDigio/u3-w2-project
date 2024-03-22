import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useLocation, Link } from "react-router-dom";

const MyNavbar = function () {
  const location = useLocation();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">DeWeather</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
            <Nav.Link href="#features">Previsioni</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Accedi</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
