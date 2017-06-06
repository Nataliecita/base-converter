import React, { Component } from 'react';
import './App.css';

class BaseConverter extends Component {

  render() {
    return (
      <div className="base">
        <label> Base converter </label>
          <input/>
      </div>
    );
  }
}

export default BaseConverter;
