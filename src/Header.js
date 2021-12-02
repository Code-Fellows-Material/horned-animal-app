import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Header extends Component {
  render() {
    return (
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Gallery Of Horns</Navbar.Brand>
          </Container>
        </Navbar>
    )
  }
}

export default Header;
