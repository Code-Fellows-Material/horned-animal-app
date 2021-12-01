import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

class HornedBeast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likes: 0, 
            selected: false
        }
    }

    handleClick = () => {
        this.setState({
            likes: this.state.likes + 1
        });
        if(!this.selected){
            this.setState({
                selected: true
            });
        }
    }

    render() {
        return (
            <Card bg='dark'>
                    <Card.Header>{!this.state.selected ? this.props.title : 'Good Choice!'}</Card.Header>
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


