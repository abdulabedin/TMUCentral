import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

export default function Login({onFormSubmit}) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Updated here

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      const data = {
        email: emailRef.current.value,
        password: passwordRef.current.value
      };
      const msg = "You have sucessfully logged in!";
      await onFormSubmit('/searchUser', data, msg);
      navigate("/");
    } catch {
      setError("Failed to log in");
    }
  }

  return (
    <>
      <Card style={{ width: '50%', margin: '0 auto', marginTop: '20px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="mb-3"> 
              <Form.Label style={{ fontWeight: 'bold' }}>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="mb-3"> 
              <Form.Label style={{ fontWeight: 'bold' }}>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button className="w-100" type="submit">Log In</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/register">Register</Link>
      </div>
    </>
  );
}
