import React, { Component } from 'react'
import Data from './Data.json'
import HornedBeast from './HornedBeasts'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      beastData: [],
      layOutArray: []
    }

    Data.forEach( (element, index) => 
    this.state.beastData.push(
    
      <Col  xs={4} md={2}>
      <HornedBeast 
      title={element.title} 
      src={element.image_url} 
      description={element.description} 
      key={index}/>
    </Col>
      ));
  }

  render() {
    return (
      <Row id='main-row'>
        {this.state.beastData}
      </Row>
    )
  }

}

export default Main;
