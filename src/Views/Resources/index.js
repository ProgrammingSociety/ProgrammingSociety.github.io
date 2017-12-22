import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Resources extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="resources-page-body">
          <div className="resources-heading">
            Society Resources
          </div>
          <div className="resources-body">
            Coming Soon
          </div>
        </div>
      </div>
    );
  }
}
