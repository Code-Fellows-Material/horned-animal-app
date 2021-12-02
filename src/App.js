import './App.css';
import React, { Component } from 'react'
import data from './Data.json'
import Header from './Header';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import HornedBeast from './HornedBeasts'
import { Container } from 'react-bootstrap';


class App extends Component {

  render() {
    return (
      <Container fluid>
        <Header />
          <Container fluid id='main-container'>
            <Row sm={1} md={2} lg={3} xl={4}>
              {data.map(beast => <HornedBeast beast={beast}/>)}
            </Row>
          </Container>
        <Footer />
      </Container>
    )
  }
}

export default App;
