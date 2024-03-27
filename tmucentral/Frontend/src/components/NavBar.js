import React, { useRef, useState } from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Dropdown, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = ({onFormSubmit}) => {
  const titleRef = useRef();
  const [priceDropdown, setPriceDropdown] = useState(false);

  const togglePriceDropdown = () => setPriceDropdown(!priceDropdown);

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = {title: titleRef.current.value};
      const msg = "Results found!";
      await onFormSubmit('/searchAd', data, msg);
    } catch {
      alert("No Results");
    }
  }


  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: '#fff' }}>TMUCENTRAL</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form onSubmit={handleSubmit} className="d-flex flex-grow-1 justify-content-center">
            <FormControl
              type="search"
              placeholder="What are you looking for?"
              ref={titleRef}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success" className="ms-2">Search</Button>
            <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                Category
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/academic-services">Academic Services</Dropdown.Item>
                <Dropdown.Item href="#/items-for-sale">Items for Sale</Dropdown.Item>
                <Dropdown.Item href="#/items-wanted">Items Wanted</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="outline-light" className="ms-2" onClick={togglePriceDropdown}>
              Price
            </Button>
            {/* <Button variant="success" className="ms-2">Search</Button> */}
          </Form>
          {priceDropdown && (
            <div className="position-absolute bg-white p-3" style={{ zIndex: 1000 }}>
              <h6>Price</h6>
              <InputGroup>
                <FormControl placeholder="from" />
                <FormControl placeholder="to" />
              </InputGroup>
              <Button variant="outline-secondary" className="w-100 mt-2">
                Apply
              </Button>
            </div>
          )}
          <Nav className="ms-auto">
            <Nav.Link href="/register" style={{ color: '#fff' }}>Register</Nav.Link>
            <Nav.Link href="/login" style={{ color: '#fff' }}>Sign In</Nav.Link>
            <Link to="/postad" className="ms-2">
              <Button variant="primary" >Post ad</Button>
            </Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
