import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Events extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="body">
          <div className="heading">
            Society Events
          </div>
        </div>
      </div>
    );
  }
}
