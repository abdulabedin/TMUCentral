import React, {useRef, useState} from 'react';
import { Card, Form, Button, InputGroup, FormControl, DropdownButton, Dropdown, Col, Row, Alert } from 'react-bootstrap';

const PostAd = ({onFormSubmit}) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const locationRef = useRef();
  const imageRef = useRef();
  // const [category, setCategory] = useState('');

  const [error, setError] = useState("");

  // Manage form submission
  async function handleAdSubmit(e) {
    try {
      e.preventDefault();
      const newAd = {
       //user: ObejectID, 
       postDate: Date.now(),
       title: titleRef.current.value,
       description: descriptionRef.current.value,
       price: priceRef.current.value,
       location: locationRef.current.value,
       sold: false,
       image: imageRef.current.value,
       category: "itemWanted"
     };
     // Send the post to the server API
     const msg = "Advertisement submitted sucessfully!";
     await onFormSubmit('/postAds', newAd, msg);
 
     // Reset form values
     // setCategory('');
    } catch {
      setError("Failed to post advertisement");
    }
  }

  return (
    <Card className="my-4 mx-auto" style={{ maxWidth: '800px' }}>
      <Card.Body>
      <h2 className="text-center mb-4">Post New Advertisement</h2>
      {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleAdSubmit}>
          <Form.Group as={Row} controlId="formGridTitle" className="mb-3">
            <Form.Label column sm="2" className="fw-bold">Title</Form.Label>
            <Col sm="10">
              <Form.Control 
                type="text" 
                ref={titleRef}
                placeholder="Enter title"
                required
              />
            </Col>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} sm="6" controlId="formGridPrice">
              <Form.Label className="fw-bold">Price</Form.Label>
              <InputGroup>
                <InputGroup.Text>$</InputGroup.Text>
                <FormControl 
                  aria-label="Amount (to the nearest dollar)" 
                  ref={priceRef} 
                  required
                />
                <InputGroup.Text>.00</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} sm="6" controlId="formGridLocation">
              <Form.Label className="fw-bold">Location</Form.Label>
              <Form.Control 
                type="text"
                ref={locationRef}
                placeholder="City, Province/Territory" 
                required
              />
            </Form.Group>
          </Row>

          <Form.Group controlId="formGridDescription" className="mb-3">
            <Form.Label className="fw-bold">Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              ref={descriptionRef}
            />
          </Form.Group>

          <Form.Group controlId="formGridImages" className="mb-3">
            <Form.Label className="fw-bold">Upload Images</Form.Label>
            <Form.Control 
              type="file" 
              ref={imageRef} 
            />
          </Form.Group>

          <Row className="mb-3">
            <Col sm="6">
              <DropdownButton 
                id="dropdown-item-button" 
                title="Select a category"
                variant="light"
                className="text-secondary w-100" 
                // onChange={(e) => setCategory(e.target.value)}
              >
                <Dropdown.Item 
                  as="button" 
                  value={"academicService"}
                >Academic Services</Dropdown.Item>
                <Dropdown.Item 
                  as="button" 
                  value={"itemForSale"}
                >Items for Sale</Dropdown.Item>
                <Dropdown.Item 
                  as="button" 
                  value={"itemWanted"}
                >Items Wanted</Dropdown.Item>
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
