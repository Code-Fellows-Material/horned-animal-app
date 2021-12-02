import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
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
            <Container>
                <Card bg='dark'  className='mt-5'>
                        <Card.Header>{!this.state.selected ? this.props.beast.title : 'Good Choice!'}</Card.Header>
                    <Card.Img variant="top" onClick={this.handleClick} src={this.props.beast.image_url} alt={'photo of ' + this.props.beast.title} title={this.props.beast.title + 'photo'} />
                    <Card.Body>
                        <Card.Text>
                            {this.props.beast.description}
                        </Card.Text>
                    </Card.Body> 
                    <Card.Footer id='card-footer'>
                        <span id='heart'>{'\u2764'}</span> {this.state.likes}
                    </Card.Footer>
                </Card>
            </Container>
        )
    }
}

export default HornedBeast;


