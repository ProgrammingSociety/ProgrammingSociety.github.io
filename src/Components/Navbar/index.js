import React, { Component } from 'react';
import './styles.css';

export default class Navbar extends Component {

  clickAbout = () => {
    alert("Opening About");
  }

  render() {
    return (
      <div>
          <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-item">
                  <a onClick={this.clickAbout}>About</a>
                </div>
                <div className="navbar-item">
                  Events
                </div>
                <div className="navbar-item">
                  Members
                </div>
                <div className="navbar-item">
                  Resources
                </div>
                {<div className="navbar-item">
                  Contact
                </div>}
            </div>
          </div>
      </div>
    );
  }
}
