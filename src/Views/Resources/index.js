import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Resources extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="body">
          <div className="heading">
            Society Resources
          </div>
        </div>
      </div>
    );
  }
}
