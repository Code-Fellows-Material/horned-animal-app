import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import HornedBeast from "./HornedBeasts";
import HornSelector from "./HornSelector";

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numHorns: "ALL",
      beastArray: [],
    };
  }

  setNumHorns = (hornSelection) => {
    this.setState({
      numHorns: hornSelection,
      });
  };

  setBeastArray = (numHorns) => {

    if (numHorns === "ALL") {
      const beastArray = this.props.data.map((beast, index) => (
        <HornedBeast
          openSelected={this.props.openSelected}
          setSelectedBeast={this.props.setSelectedBeast}
          beast={beast}
          key={index}
        />
      ));
      return beastArray;
    }

    if (numHorns === "MANY") {
      const beastArray = this.props.data.map(
        (beast, index) =>
          beast.horns > 3 && (
            <HornedBeast
              openSelected={this.props.openSelected}
              setSelectedBeast={this.props.setSelectedBeast}
              beast={beast}
              key={index}
            />
          )
      );
      return beastArray;
    }

    const beastArray = this.props.data.map(
      (beast, index) =>
        beast.horns === parseInt(numHorns) && (
          <HornedBeast
            openSelected={this.props.openSelected}
            setSelectedBeast={this.props.setSelectedBeast}
            beast={beast}
            key={index}
          />
        )
    );
    return beastArray;
  };

  render() {
    return (
      <Container fluid id="main-container">
        <HornSelector setNumHorns={this.setNumHorns} />
        <Row sm={1} md={2} lg={3} xl={4}>
          {this.setBeastArray(this.state.numHorns)}
        </Row>
      </Container>
    );
  }
}

export default Main;
