import React, { Component } from 'react';
import {Navbar, Nav,NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">
            <h3>Rotati</h3>
          </Navbar.Brand>
          <Nav style={{marginLeft: "auto"}}>
            <LinkContainer to="/signup" className="nav-link"> 
              <NavItem>Signup</NavItem>
            </LinkContainer> 
            <LinkContainer to="/login" className="nav-link">
              <NavItem>Login</NavItem> 
            </LinkContainer>
          </Nav>
        </Navbar>
        <Routes/>
      </div>
    );
  }
}

export default App;
