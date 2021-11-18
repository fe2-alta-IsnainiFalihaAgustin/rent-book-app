import React, { Component } from 'react';
import {Navbar, Nav, Container, Form, FormControl, Button} from "react-bootstrap"

class Navbarr extends Component {
  render() {
    return (
      <div>
        <div className="header"></div>

        <div className="pt-4">
        <Navbar bg="light" expand="lg">
         <Container fluid>
          <Navbar.Brand href="#" className="px-5"><b>LOGO</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto"
            ></Nav>
            <Form className="paling-atas w-50 d-flex px-5">
              <FormControl
                type="search"
                placeholder="book title"
                className="me-2"
                aria-label="Search"
              />
                <Button variant="outline-dark">Search</Button>
            </Form>
            <div className="px-5">
             <img src="https://cdn.iconscout.com/icon/free/png-256/account-avatar-profile-human-man-user-30448.png" alt="" width="35px" height="35px"/>
            </div>
          </Navbar.Collapse>

        </Container>
       </Navbar>
      </div>
      </div>
      
    );
  }
}
export default Navbarr;