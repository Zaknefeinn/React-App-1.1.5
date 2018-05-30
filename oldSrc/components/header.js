import React, { Component } from 'react';
import WalmartLogo from '../img/WalmartLogo.png';


class header extends Component {
  render() {
    return (
      <div className="header">
          <img src={WalmartLogo} className="logo" alt="logo" />
      </div>
    );
  }
}
export default header;
