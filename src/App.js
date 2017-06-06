import React, { Component } from 'react';
import './App.css';

class BaseConverter extends Component {
  render() {
    return (
      <div className="base">
        <label> Base converter </label>
          <input/>
        <div>
        <label> Base 2 </label>
          <input/>
        </div>
        <div>
        <label> Base 8 </label>
          <input/>
        </div>
        <div>
        <label> Base 16 </label>
          <input/>
        </div>
      </div>
    );
  }
}

export default BaseConverter;
