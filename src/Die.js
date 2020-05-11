import React, { Component } from 'react';
import './Die.scss';

class Die extends Component {
  render(){
    return (
      <div className= 'Die'>
        <i className={`Die__dice fas fa-dice-${this.props.face}`} /> 
      </div>
    )

  }
}

export default Die;