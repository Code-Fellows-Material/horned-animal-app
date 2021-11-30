import React, { Component } from 'react'
import Data from './Data.json'
import HornedBeast from './HornedBeasts';

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      beastData: []
    }
    Data.forEach( (element, index) => 
    this.state.beastData.push(<HornedBeast 
      title={element.title} 
      src={element.image_url} 
      description={element.description} 
      key={index}/>
      ));
  }

  render() {
    return (
      <div>     
          {this.state.beastData}
      </div>
    )
  }

}

export default Main;
