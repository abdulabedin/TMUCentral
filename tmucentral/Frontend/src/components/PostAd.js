import React from 'react';
import { Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown, Col, Row } from 'react-bootstrap';

const PostAd = () => {
  return (
    <Card className="my-4 mx-auto" style={{ maxWidth: '800px' }}>
      <Card.Body>
        <Form>
          <Form.Group as={Row} controlId="formGridTitle" className="mb-3">
            <Form.Label column sm="2" className="fw-bold">Title</Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Enter title" />
            </Col>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} sm="6" controlId="formGridPrice">
              <Form.Label className="fw-bold">Price</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl aria-label="Amount (to the nearest dollar)" />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} sm="6" controlId="formGridLocation">
              <Form.Label className="fw-bold">Location</Form.Label>
              <Form.Control type="text" placeholder="City, State" />
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridDescription" className="mb-3">
            <Form.Label className="fw-bold">Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="formGridImages" className="mb-3">
            <Form.Label className="fw-bold">Upload Images</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>

          <Row className="mb-3">
            <Col sm="6">
              <DropdownButton 
                id="dropdown-item-button" 
                title="Select a category"
                variant="light"
                className="text-secondary w-100"
              >
                <Dropdown.Item as="button">Academic Services</Dropdown.Item>
                <Dropdown.Item as="button">Items for Sale</Dropdown.Item>
                <Dropdown.Item as="button">Items Wanted</Dropdown.Item>
              </DropdownButton>
            </Col>
            <Col sm="6">
              <Button variant="primary" type="submit" className="w-100">
                Submit Ad
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default PostAd;
