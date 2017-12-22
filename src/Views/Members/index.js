import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Members extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="body">
          <div className="heading">
            Society Member Info
          </div>
        </div>
      </div>
    );
  }
}
