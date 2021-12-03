import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

class HornedBeast extends Component {

    constructor(props) {
    super(props);
        this.state = {
            likes: 0,
        };
    }

    handleClick = () => {
        this.setState({
        likes: this.state.likes + 1,
        });
    };

    handleOpen = () => {
        this.props.setSelectedBeast(this.props.beast);
        this.props.openSelected();
    };

    render() {
        return (
        <Container>
            <Card bg="dark" className="mt-5">
            <Card.Header>{this.props.beast.title}</Card.Header>
            <Card.Img
                variant="top"
                onClick={this.handleClick}
                src={this.props.beast.image_url}
                alt={"photo of " + this.props.beast.title}
                title={this.props.beast.title + "photo"}
            />
            <Card.Body>
                <Button onClick={this.handleOpen} variant="primary" size="lg">
                Learn More
                </Button>
            </Card.Body>
            <Card.Footer id="card-footer">
                <span id="heart">{"\u2764"}</span> {this.state.likes}
            </Card.Footer>
            </Card>
        </Container>
        );
    }
}

export default HornedBeast;
