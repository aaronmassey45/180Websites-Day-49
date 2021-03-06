import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default class NewNavbar extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="http://aaronmassey.pro/">The Aaron Massey Project</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <Navbar.Text>
              <Navbar.Link href="https://medium.com/@aaronmassey45">Blog</Navbar.Link>
            </Navbar.Text>
            <Navbar.Text>
              <Navbar.Link href="https://github.com/aaronmassey45">Github</Navbar.Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
