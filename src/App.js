import "./App.css";
import React, { Component } from "react";
import data from "./Data.json";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import SelectedBeast from "./SelectedBeast";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: {},
      show: false,
    };
  }

  setSelectedBeast = (beast) => {
    this.setState({ selectedBeast: beast });
  };

  open = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Container fluid>
        <Header />
        <SelectedBeast
          beast={this.state.selectedBeast}
          close={this.close}
          show={this.state.show}
        />
        <Main
          openSelected={this.open}
          setSelectedBeast={this.setSelectedBeast}
          data={data}
        />
        <Footer id="footer" />
      </Container>
    );
  }
}

export default App;
