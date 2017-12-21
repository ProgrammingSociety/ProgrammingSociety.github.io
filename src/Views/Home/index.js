import React, { Component } from 'react';
// import { Navbar } from '../../Components';
import './styles.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="centered">
          <img src="/logo.png" alt="Programming Society Logo" height="500px" />
        </div>
        <div className="centered">
          <a href="/about" className="home-link">About</a>
          <a href="/events" className="home-link">Events</a>
          <a href="/members" className="home-link">Members</a>
          <a href="/resources" className="home-link">Resources</a>
          <a href="/contact" className="home-link">Contact</a>
        </div>
      </div>
    );
  }
}
