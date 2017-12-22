import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Events extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="events-page-body">
          <div className="events-heading">
            Society Events
          </div>
          <div className="events-body">
          </div>
        </div>
      </div>
    );
  }
}
