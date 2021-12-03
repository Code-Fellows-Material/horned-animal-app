import React, { Component } from "react";
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container";

class HornSelector extends Component {

    render() {
        return (
        <div>
            <Container id="HornSelector">
            <Form.Select onChange={(e) => this.props.setNumHorns(e.target.value)} aria-label="Default select example">
                <option >Horn Selection</option>
                <option value="ALL">Show All</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="MANY">4+</option>
            </Form.Select>
            </Container>
        </div>
        );
    }

}

export default HornSelector;
