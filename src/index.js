import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import './style.css'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import About from './components/About/About'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Navbar, Nav } from 'react-bootstrap'

const Template = () => {
  return (
    <Router>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="container">
          <Nav className="mr-auto">
            <Nav.Link exact as={NavLink} activeClassName="active" to="/">
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} activeClassName="active" to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} activeClassName="active" to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <Switch>
          <Route path="/" component={Dashboard} exact />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<Template />, document.getElementById('app'))
