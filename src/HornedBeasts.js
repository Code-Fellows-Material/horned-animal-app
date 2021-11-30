import React, { Component } from 'react'


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
            <div>
                <h2>{this.props.title}</h2>
                <img onClick={this.handleClick} src={this.props.src} alt={'photo of ' + this.props.title} title={this.props.title + 'photo'}/>
                <p> <span id='heart'>{'\u2764'}</span> {this.state.likes} </p>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeast;
