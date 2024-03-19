import React from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';

export default function AdminDashboard() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} className="mb-3">
          <h3>Admin Menu</h3>
          <ListGroup>
            <ListGroup.Item action href="#manage-ads">Manage Ads</ListGroup.Item>
            <ListGroup.Item action href="#manage-users">Manage Users</ListGroup.Item>
            <ListGroup.Item action href="#site-content">Site Content</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={9}>
          <Card>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              {/* Content will change based on what admin has selected from the menu */}
              <Card.Text>
                Select a category to manage from the left-hand menu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
