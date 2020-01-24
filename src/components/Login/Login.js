import React, { Component } from 'react'
import {Link } from 'react-router-dom'

import {Form, Button } from 'react-bootstrap'

export default class Login extends Component {
  render() {
    return (
      <div className="my-container">
        <Form>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username address</Form.Label>
            <Form.Control type="Username" placeholder="Enter Username" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="new-password" placeholder="Password" />
          </Form.Group>
          <p>Dont have an account? <Link to="/register">Register</Link></p>
          <Button as={Link} to="/" variant="primary" type="submit" className="my-btn">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
