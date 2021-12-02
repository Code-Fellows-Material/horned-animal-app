import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import HornedBeast from './HornedBeasts'

class Main extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid id='main-container'>
        <Row sm={1} md={2} lg={3} xl={4}>
          {this.props.data.map((beast, index) => <HornedBeast openSelected={this.props.openSelected} setSelectedBeast={this.props.setSelectedBeast} beast={beast} key={index}/>)}
        </Row>
      </Container>
    )
  }
}

export default Main;
