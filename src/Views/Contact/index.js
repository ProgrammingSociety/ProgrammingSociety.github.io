import React, { Component } from 'react';
import { Navbar } from '../../Components';
import './styles.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="body">
          <div className="heading">
            Contact Programming Society
          </div>
        </div>
      </div>
    );
  }
}
