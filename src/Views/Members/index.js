import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Members extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="members-page-body">
          <div className="members-heading">
            Society Member Info
          </div>
          <div className="members-body">
            Coming Soon
          </div>
        </div>
      </div>
    );
  }
}
