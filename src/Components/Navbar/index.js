import React, { Component } from 'react';
import './styles.css';

export default class Navbar extends Component {

  clickAbout = () => {
    window.location.href = "/about";
  }
  clickEvents = () => {
    window.location.href = "/events";
  }
  clickMembers = () => {
    window.location.href = "/members";
  }
  clickResources = () => {
    window.location.href = "/resources";
  }
  clickContact = () => {
    window.location.href = "/contact";
  }

  render() {
    return (
      <div>
          <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-item">
                  <a className="navbar-link" href="/about">About</a>
                </div>
                <div className="navbar-item">
                <a className="navbar-link" href="/events">Events</a>
                </div>
                <div className="navbar-item">
                <a className="navbar-link" href="/members">Members</a>
                </div>
                <div className="navbar-item">
                <a className="navbar-link" href="/resources">Resources</a>
                </div>
                <div className="navbar-item">
                <a className="navbar-link" href="/contact">Contact</a>
                </div>
            </div>
          </div>
      </div>
    );
  }
}
