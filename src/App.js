import React, { Component } from 'react';
import './App.css';
import { Home, About, Events } from './Views/';


class App extends Component {
  render() {
    var url = window.location.href;
    switch (url) {
      case "http://localhost:3000/":
        return (<Home />);
      case "http://localhost:3000/about":
        return (<About />);
      case "http://localhost:3000/events":
        return (<Events />);
      default:
        return (<div> Error 404: "{url}" not found </div>);
    }
  }
}

export default App;
