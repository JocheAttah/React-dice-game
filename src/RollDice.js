import React, { Component} from 'react';
import Die from './Die'
import './RollDice.scss'


class RollDice extends Component{
  static defaultProps ={
    sides: ['one', 'two', 'three','four', 'five','six']
  };

  constructor(props){
    super(props);
    this.state = {
                  die1:'one', 
                  die2:'two',
                  isRolling: false
                };
    this.roll = this.roll.bind(this);
  }
  

  roll(){
    console.log(this.props.sides.length)

     const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
     const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

    this.setState({die1: "d6", die2: "d6", isRolling: true});
    // settimer
    setTimeout(()=>this.setState({die1: newDie1, die2: newDie2, isRolling: false}), 1000)
  }


  render(){
    return (
      <div className='RollDice'>
        <div className= 'RollDice__Dice'>        
          <Die face={this.state.die1} animation = {this.state.isRolling}/>
          <Die face={this.state.die2} animation = {this.state.isRolling}/>
        </div>
        <button className='RollDice__button' onClick= {this.roll} disabled={this.state.isRolling}> 
        { this.state.isRolling ? 'Rolling...' : 'Roll Dice !'}
        </button>
      </div>
    )
  }
}


export default RollDice;