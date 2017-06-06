import React, { Component } from 'react';
import './App.css';

class BaseConverter extends Component {
  constructor(){
    super()
    this.state = {
      number: 0,
      binary: 0,
      octo: 0,
      hexa: 0
    }
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log("Enter was pressed")
      this.setState( {
         number: event.target.value
      }),
      this.setState((prevState, props) => {

        return {binary: this.baseConvert(prevState.number, 2),
          octo: this.baseConvert(prevState.number, 8),
          hexa: this.baseConvert(prevState.number, 16),
        };
      })
    }
  }
  baseConvert(input, base) {
    return (input >>> 0).toString(base);
  }

  render() {
    return (
      <div className="base">
        <label> Base converter </label>
          <input id="originalNumber" onKeyPress={this.handleKeyPress}/>
          <input value={this.state.binary}/>
          <input value={this.state.octo}/>
          <input value={this.state.hexa}/>
      </div>
    );
  }
}

export default BaseConverter;
