import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0
        }
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        });
    }

    render() {
        return (
            <Card bg='dark'>
                    <Card.Header>{this.props.title}</Card.Header>
                <Card.Img variant="top" onClick={this.handleClick} src={this.props.src} alt={'photo of ' + this.props.title} title={this.props.title + 'photo'} />
                <Card.Body>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                </Card.Body> 
                <Card.Footer id='card-footer'>
                    <span id='heart'>{'\u2764'}</span> {this.state.likes}
                </Card.Footer>
            </Card>
        )
    }
}

export default HornedBeast;


