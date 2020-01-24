import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import {Form, Button } from 'react-bootstrap'

export default class Register extends Component {
  render() {
    return (
      <div className="my-container">
        <Form>
          <Form.Group controlId="formBasicName">
          <Form.Text className="text-muted">
              We'll never share your Username with anyone else.
            </Form.Text>
            <Form.Label>Full Name </Form.Label>
            <Form.Control type="name" placeholder="Enter Full Name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username </Form.Label>
            <Form.Control type="username" placeholder="Enter username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="new-password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="phone" placeholder="Enter Phone No" />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control type="address" placeholder="Enter Address" />
          </Form.Group>

          <p>
            Already have an account? <Link to="/login">Register</Link>
          </p>
          <Button
            as={Link}
            to="/"
            variant="primary"
            type="submit"
            className="my-btn"
          >
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
