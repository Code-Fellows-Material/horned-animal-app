import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Footer extends Component {

  constructor(props){
  super(props);
  this.state = {
      likes: 0, 
      selected: false
  }
}

handleClick = () => {
  this.setState({
      selected: !this.state.selected
  });
}

  render() {
    return (
      <Navbar bg="dark" variant="dark">
      <Container >
        <Navbar.Brand onClick={this.handleClick} id='footer'> {!this.state.selected ? "Kellen Linse" : 'Hi!'} </Navbar.Brand>
      </Container>
    </Navbar>
    )
  }
}

export default Footer;
